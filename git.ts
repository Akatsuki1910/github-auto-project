import * as fs from "fs";
import * as path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { App } from "octokit";
import { CleanOptions, simpleGit } from "simple-git";

// Types for better structure
interface EnvironmentConfig {
  GH_APPID: string;
  GH_PRIVATE_KEY: string;
  GH_CLIENT_ID: string;
  GH_CLIENT_SECRET: string;
  GH_INSTALLATION_ID: string;
  GEMINI_API_KEY: string;
}

interface GeneratedContent {
  html: string;
  ts: string;
  css: string;
  description: string;
  title: string;
  featureType: string;
  testPlan?: string;
}

interface FeatureHistory {
  timestamp: number;
  featureType: string;
  title: string;
  description: string;
  branchName: string;
  success: boolean;
}

// Configuration and constants
const REPO_OWNER = "Akatsuki1910";
const REPO_NAME = "github-auto-project";
const FEATURE_HISTORY_FILE = ".feature-history.json";
const MAX_PROMPT_LENGTH = 30000; // Gemini limit consideration

// Enhanced feature categories for better diversity
const FEATURE_CATEGORIES = [
  "Mathematical Functions",
  "User Interface Enhancement", 
  "Accessibility Improvement",
  "Performance Optimization",
  "Visual Design Enhancement",
  "Mobile Experience",
  "Keyboard Shortcuts",
  "Data Export/Import",
  "Customization Options",
  "Advanced Calculations",
  "Animation & Effects",
  "Sound & Feedback"
];

const setGithubApp = async (env: EnvironmentConfig) => {
  const app = new App({
    appId: env.GH_APPID,
    privateKey: env.GH_PRIVATE_KEY,
    oauth: {
      clientId: env.GH_CLIENT_ID,
      clientSecret: env.GH_CLIENT_SECRET,
    },
  });

  const installationOctokit = await app.getInstallationOctokit(
    Number(env.GH_INSTALLATION_ID),
  );

  return installationOctokit;
};

const loadFeatureHistory = (): FeatureHistory[] => {
  try {
    if (fs.existsSync(FEATURE_HISTORY_FILE)) {
      const content = fs.readFileSync(FEATURE_HISTORY_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.warn("Could not load feature history:", error);
  }
  return [];
};

const saveFeatureHistory = (history: FeatureHistory[]) => {
  try {
    fs.writeFileSync(FEATURE_HISTORY_FILE, JSON.stringify(history, null, 2));
  } catch (error) {
    console.warn("Could not save feature history:", error);
  }
};

const getRecentFeatures = (history: FeatureHistory[]): string => {
  const recent = history
    .filter(h => h.success)
    .slice(-5)
    .map(h => `- ${h.featureType}: ${h.title}`)
    .join("\n");
  
  return recent ? `\n最近追加された機能:\n${recent}\n` : "";
};

const selectRandomFeatureCategory = (history: FeatureHistory[]): string => {
  const recentTypes = history
    .slice(-3)
    .map(h => h.featureType);
  
  // Avoid repeating recent feature types
  const availableCategories = FEATURE_CATEGORIES.filter(
    cat => !recentTypes.includes(cat)
  );
  
  const selectedCategory = availableCategories.length > 0 
    ? availableCategories[Math.floor(Math.random() * availableCategories.length)]
    : FEATURE_CATEGORIES[Math.floor(Math.random() * FEATURE_CATEGORIES.length)];
    
  return selectedCategory;
};

const truncateCodeForPrompt = (code: string, maxLength: number): string => {
  if (code.length <= maxLength) return code;
  
  // Try to truncate at reasonable points (end of functions, etc.)
  const truncated = code.substring(0, maxLength);
  const lastBrace = truncated.lastIndexOf('}');
  const lastFunction = truncated.lastIndexOf('function');
  
  if (lastBrace > maxLength * 0.8) {
    return truncated.substring(0, lastBrace + 1) + "\n// ... (truncated)";
  }
  
  return truncated + "\n// ... (truncated)";
};

const createEnhancedPrompt = (
  htmlContent: string, 
  tsContent: string, 
  cssContent: string,
  featureCategory: string,
  recentFeatures: string
): string => {
  // Truncate content if too long
  const truncatedHtml = truncateCodeForPrompt(htmlContent, 8000);
  const truncatedTs = truncateCodeForPrompt(tsContent, 8000);
  const truncatedCss = truncateCodeForPrompt(cssContent, 10000);

  return `あなたは優秀なフロントエンド開発者です。科学計算機アプリケーションに新しい機能を追加してください。

重要な制約:
- 回答は必ずJSON形式で、下記スキーマに従ってください
- 他の説明やコメントは一切不要です
- JSONのみを返してください

JSON Schema:
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "html": {"type": "string"},
    "ts": {"type": "string"}, 
    "css": {"type": "string"},
    "description": {"type": "string"},
    "title": {"type": "string"},
    "featureType": {"type": "string"},
    "testPlan": {"type": "string"}
  },
  "required": ["html", "ts", "css", "description", "title", "featureType"]
}

プロパティの説明:
- html: 完全なHTMLコード (src/index.html)
- ts: 完全なTypeScriptコード (src/ts/index.ts) 
- css: 完全なCSSコード (src/style/style.css)
- description: PR説明文 (日本語、機能の詳細説明)
- title: PR タイトル (日本語、簡潔に)
- featureType: 機能カテゴリ ("${featureCategory}")
- testPlan: テスト計画 (オプション)

今回追加する機能カテゴリ: "${featureCategory}"
${recentFeatures}

現在のコードベース:

<html>
${truncatedHtml}
</html>

<typescript>
${truncatedTs}
</typescript>

<css>
${truncatedCss}
</css>

機能追加の要件:
1. "${featureCategory}" カテゴリに関連する実用的な機能を1つ追加
2. 既存のコードと整合性を保つ
3. レスポンシブデザインとアクセシビリティを考慮
4. 現代的なUIデザインパターンを使用
5. バグを起こさないよう慎重に実装
6. コードは省略せず完全な形で出力
7. アニメーションやエフェクトがある場合は適切に実装
8. エラーハンドリングを適切に行う

特に以下の点に注意:
- 電卓の基本機能を壊さない
- 既存のイベントリスナーとの競合を避ける
- CSS クラス名の重複を避ける
- TypeScript の型安全性を保つ
- モバイルフレンドリーな実装`;
};

const createText = async (key: string, prompt: string): Promise<string> => {
  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-pro",
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192,
    }
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
};

const validateGeneratedContent = (content: GeneratedContent): string[] => {
  const errors: string[] = [];
  
  if (!content.html || content.html.length < 100) {
    errors.push("HTML content is too short or missing");
  }
  
  if (!content.css || content.css.length < 100) {
    errors.push("CSS content is too short or missing");
  }
  
  if (!content.ts || content.ts.length < 100) {
    errors.push("TypeScript content is too short or missing");
  }
  
  if (!content.title || content.title.length < 5) {
    errors.push("Title is too short or missing");
  }
  
  if (!content.description || content.description.length < 10) {
    errors.push("Description is too short or missing");
  }

  // Check for basic HTML structure
  if (!content.html.includes('<!DOCTYPE html>') || 
      !content.html.includes('<html') ||
      !content.html.includes('</html>')) {
    errors.push("HTML structure is invalid");
  }

  // Check for calculator class
  if (!content.ts.includes('class Calculator') && 
      !content.ts.includes('Calculator')) {
    errors.push("TypeScript content doesn't seem to contain calculator logic");
  }

  return errors;
};

const createMeaningfulBranchName = (featureType: string, title: string): string => {
  // Extract key words from title and feature type
  const cleanTitle = title
    .replace(/[^\w\s]/g, '') // Remove special characters
    .split(/\s+/)
    .filter(word => word.length > 2)
    .slice(0, 3)
    .join('-')
    .toLowerCase();
    
  const cleanFeatureType = featureType
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .join('-')
    .toLowerCase();
    
  const timestamp = Date.now().toString().slice(-6);
  
  return `feature/${cleanFeatureType}-${cleanTitle}-${timestamp}`;
};

const backupCurrentFiles = () => {
  const backupDir = `.backup-${Date.now()}`;
  fs.mkdirSync(backupDir, { recursive: true });
  
  const filesToBackup = [
    'src/index.html',
    'src/ts/index.ts', 
    'src/style/style.css'
  ];
  
  filesToBackup.forEach(file => {
    if (fs.existsSync(file)) {
      const backupPath = path.join(backupDir, file);
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      fs.copyFileSync(file, backupPath);
    }
  });
  
  console.log(`📦 Backup created: ${backupDir}`);
  return backupDir;
};

const restoreFromBackup = (backupDir: string) => {
  const filesToRestore = [
    'src/index.html',
    'src/ts/index.ts',
    'src/style/style.css'
  ];
  
  filesToRestore.forEach(file => {
    const backupPath = path.join(backupDir, file);
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, file);
    }
  });
  
  console.log(`🔄 Restored from backup: ${backupDir}`);
};

// Main execution
(async () => {
  const startTime = Date.now();
  let backupDir: string | null = null;
  
  try {
    console.log("🚀 Starting AI-powered feature generation...");

    // Validate environment
    const env = process.env as unknown as EnvironmentConfig;
    const requiredEnvVars = ['GEMINI_API_KEY', 'GH_APPID', 'GH_PRIVATE_KEY', 'GH_CLIENT_ID', 'GH_CLIENT_SECRET', 'GH_INSTALLATION_ID'];
    const missingVars = requiredEnvVars.filter(varName => !env[varName as keyof EnvironmentConfig]);
    
    if (missingVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }

    // Load feature history and select category
    const featureHistory = loadFeatureHistory();
    const selectedCategory = selectRandomFeatureCategory(featureHistory);
    const recentFeatures = getRecentFeatures(featureHistory);
    
    console.log(`🎯 Selected feature category: ${selectedCategory}`);

    // Create backup
    backupDir = backupCurrentFiles();

    // Setup Git and GitHub
    const octokit = await setGithubApp(env);
    const git = simpleGit().clean(CleanOptions.FORCE);

    // Ensure we're on main branch
    await git.checkout('main');
    await git.pull();

    // Read current files
    const htmlContent = fs.readFileSync("src/index.html", "utf-8");
    const tsContent = fs.readFileSync("src/ts/index.ts", "utf-8");
    const cssContent = fs.readFileSync("src/style/style.css", "utf-8");

    // Generate enhanced prompt
    const prompt = createEnhancedPrompt(
      htmlContent, 
      tsContent, 
      cssContent,
      selectedCategory,
      recentFeatures
    );

    console.log("🤖 Generating new feature with AI...");
    
    // Generate content with AI
    let aiResponse = await createText(env.GEMINI_API_KEY, prompt);
    
    // Clean up response
    aiResponse = aiResponse
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .replace(/^[^{]*/, "") // Remove text before first {
      .replace(/[^}]*$/, "}"); // Remove text after last }

    console.log("📝 Parsing AI response...");
    let generatedContent: GeneratedContent;
    
    try {
      generatedContent = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error("❌ Failed to parse AI response as JSON");
      console.error("Response preview:", aiResponse.substring(0, 500));
      throw new Error(`JSON parsing failed: ${parseError}`);
    }

    // Validate generated content
    const validationErrors = validateGeneratedContent(generatedContent);
    if (validationErrors.length > 0) {
      throw new Error(`Generated content validation failed:\n${validationErrors.join('\n')}`);
    }

    console.log("✅ Generated content validated successfully");

    // Create meaningful branch name
    const branchName = createMeaningfulBranchName(
      generatedContent.featureType, 
      generatedContent.title
    );

    console.log(`🌿 Creating branch: ${branchName}`);
    await git.checkoutLocalBranch(branchName);

    // Write generated files
    fs.writeFileSync("src/index.html", generatedContent.html);
    fs.writeFileSync("src/ts/index.ts", generatedContent.ts);
    fs.writeFileSync("src/style/style.css", generatedContent.css);

    // Verify files were written correctly
    const verifyFiles = [
      { path: "src/index.html", content: generatedContent.html },
      { path: "src/ts/index.ts", content: generatedContent.ts },
      { path: "src/style/style.css", content: generatedContent.css }
    ];

    for (const file of verifyFiles) {
      const writtenContent = fs.readFileSync(file.path, "utf-8");
      if (writtenContent !== file.content) {
        throw new Error(`File verification failed for ${file.path}`);
      }
    }

    console.log("💾 Files written and verified successfully");

    // Commit changes
    await git.add(".");
    
    const commitMessage = `${generatedContent.title}

${generatedContent.description}

Feature Type: ${generatedContent.featureType}
Auto-generated by AI system

🤖 Generated with Gemini AI
⚡ Automated feature deployment`;

    await git.commit(commitMessage);
    console.log("📝 Changes committed");

    // Push to remote
    await git.push("origin", branchName);
    console.log("📤 Branch pushed to remote");

    // Create pull request
    const prBody = `## 🎯 ${generatedContent.featureType}

${generatedContent.description}

${generatedContent.testPlan ? `## 🧪 Test Plan\n${generatedContent.testPlan}\n\n` : ''}
## 🤖 AI Generated Feature

This feature was automatically generated using Gemini AI and includes:
- Enhanced calculator functionality
- Responsive design considerations  
- Modern UI/UX improvements
- Proper error handling

## 📋 Checklist
- [x] Code generated and validated
- [x] Files written successfully
- [x] Branch created and pushed
- [ ] Manual testing required
- [ ] Code review needed

---
*Generated at: ${new Date().toISOString()}*
*Feature Category: ${generatedContent.featureType}*`;

    const pullRequest = await octokit.rest.pulls.create({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      head: branchName,
      base: "main",
      title: `✨ ${generatedContent.title}`,
      body: prBody,
    });

    console.log(`🎉 Pull request created: ${pullRequest.data.html_url}`);

    // Update feature history
    const newFeature: FeatureHistory = {
      timestamp: Date.now(),
      featureType: generatedContent.featureType,
      title: generatedContent.title,
      description: generatedContent.description,
      branchName,
      success: true
    };

    featureHistory.push(newFeature);
    saveFeatureHistory(featureHistory);

    const duration = Math.round((Date.now() - startTime) / 1000);
    console.log(`✨ Feature generation completed successfully in ${duration}s`);
    console.log(`📊 Total features generated: ${featureHistory.filter(f => f.success).length}`);

  } catch (error) {
    console.error("❌ Error during feature generation:", error);
    
    // Restore from backup if available
    if (backupDir) {
      try {
        restoreFromBackup(backupDir);
        console.log("✅ Files restored from backup");
      } catch (restoreError) {
        console.error("❌ Failed to restore from backup:", restoreError);
      }
    }

    // Log failure to history
    const featureHistory = loadFeatureHistory();
    const failedFeature: FeatureHistory = {
      timestamp: Date.now(),
      featureType: "Unknown",
      title: "Failed Generation",
      description: `Error: ${error}`,
      branchName: "none",
      success: false
    };
    featureHistory.push(failedFeature);
    saveFeatureHistory(featureHistory);

    process.exit(1);
  } finally {
    console.log("🏁 Feature generation process completed");
  }
})();