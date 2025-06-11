# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an automated calculator project that uses AI (Google Gemini) to generate calculator variations. The system creates feature branches with new calculator implementations and automatically submits pull requests via GitHub API.

### Core Architecture

- **git.ts**: Main automation script that orchestrates the entire flow
  - Uses Google Gemini AI to generate HTML/CSS/TypeScript code based on prompts
  - Creates feature branches automatically with timestamp-based naming (`feature/auto-{timestamp}`)
  - Commits generated code and creates GitHub pull requests via Octokit
- **src/**: Frontend calculator implementation
  - `index.html`: Single-page calculator interface with comprehensive UI
  - `ts/index.ts`: Full calculator functionality with TypeScript class-based architecture
  - `style/style.css`: Comprehensive styling with light/dark theme support

### Calculator Features

The calculator includes:
- Basic arithmetic operations (+, -, ×, ÷)
- Scientific functions (sin, cos, tan, log, ln, exp, π, e)
- Memory functions (MC, MRC, M+, M-, MS)
- Advanced features (square, square root, percentage, parentheses)
- Theme switching (light/dark)
- History tracking with export capability
- Keyboard input support
- Math.js integration for safe expression evaluation

### AI Integration Flow

The `git.ts` script follows this pattern:
1. Reads existing calculator files (HTML, CSS, TS)
2. Sends them to Gemini with Japanese prompts requesting calculator improvements
3. Receives structured JSON response with updated code and PR metadata
4. Automatically commits changes and creates pull requests

## Development Commands

- **Build**: `bun build ./src/index.html --outdir=dist`
- **Lint**: `bunx biome check --write ./src` (uses Biome with specific rules configured)
- **Auto-generation**: `bun run auto-add` (runs the AI automation script)

## Environment Requirements

The automation script requires these environment variables:
- `GEMINI_API_KEY`: Google Generative AI API key
- `GH_APPID`, `GH_PRIVATE_KEY`, `GH_CLIENT_ID`, `GH_CLIENT_SECRET`, `GH_INSTALLATION_ID`: GitHub App credentials

## Code Style

- Uses Biome for formatting and linting
- Space indentation, double quotes for JavaScript
- Calculator UI uses Orbitron font for digital appearance
- Supports both light and dark themes
- TypeScript with proper type declarations
- All calculator buttons styled with 3D effects and proper touch targets