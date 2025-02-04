import console from "console";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { App } from "octokit";
import { CleanOptions, simpleGit } from "simple-git";

const setGithubApp = async (env: {
  GH_APPID: string;
  GH_PRIVATE_KEY: string;
  GH_CLIENT_ID: string;
  GH_CLIENT_SECRET: string;
  GH_INSTALLATION_ID: string;
}) => {
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

const createText = async (key: string, prompt: string) => {
  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const result = await model.generateContent(prompt);
  return result.response.text();
};

(async () => {
  try {
    console.log("start");

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const octokit = await setGithubApp(process.env as any);

    const key = process.env.GEMINI_API_KEY;
    const prompt = `
		下記に幾つかの要求のポリシーを示します。これに従って回答してください。

		- 回答は下記JSON SCHEMAに合致するJSON形式で実施してください。
		- 他の受け答えや回答は不要です。
		- 返答はJSONのみで返してください。codebaseの表記に沿う必要はありません。

		{
		  "$schema": "http://json-schema.org/draft-07/schema#",
		  "type": "object",
		  "properties": {
		    "html": {
		      "type": "string"
		    },
		    "ts": {
		      "type": "string"
		    },
		    "css": {
		      "type": "string"
		    },
		    "description": {
		      "type": "string"
		    },
		    "title": {
		      "type": "string"
		    }
		  }
		}

		- 上記JSON SCHEMAのプロパティの意味は下記です
		  - html: HTMLコード ファイルパスは'/src/index.html'です
		  - css: CSSコード ファイルパスは'/src/style/style.css'です
		  - ts: TypeScriptコード ファイルパスは'/src/ts/index.ts'です
		  - description: PRの説明文
		  - title: PRのタイトル

		以下の<codebase/>はコード内容です。

		--------------------------------------------------------

		<codebase>
		\`\`\`html
		${fs.readFileSync("src/index.html", "utf-8")}
		\`\`\`

		\`\`\`ts
		${fs.readFileSync("src/ts/index.ts", "utf-8")}
		\`\`\`

		\`\`\`css
		${fs.readFileSync("src/style/style.css", "utf-8")}
		\`\`\`
		</codebase>

		これらをコード踏まえ、下記の要求に合致するコードを生成してください。
		- 絶対条件として、電卓が表示されるページを作成してください。
  		- webページで見たり触れたりできるようにしてください。
		- 既存コードから何か1つ機能を追加してください
		`;
    const text = (await createText(key ?? "", prompt))
      .replace("```json\n", "")
      .replace("```", "");

    const d = JSON.parse(text) as {
      html: string;
      ts: string;
      css: string;
      description: string;
      title: string;
    };

    const git = simpleGit().clean(CleanOptions.FORCE);

    const branchName = `feature/auto-${Date.now()}`;

    await git.fetch();
    await git.checkoutLocalBranch(branchName);

    fs.writeFileSync("src/index.html", d.html);
    fs.writeFileSync("src/ts/index.ts", d.ts);
    fs.writeFileSync("src/style/style.css", d.css);

    await git.add(".");
    await git.commit(d.description);
    await git.push("origin", branchName);

    await octokit.rest.pulls.create({
      owner: "Akatsuki1910",
      repo: "github-auto-project",
      head: branchName,
      base: "main",
      title: d.title,
      body: d.description,
    });
  } catch (e) {
    console.error(e);
  } finally {
    console.log("end");
  }
})();
