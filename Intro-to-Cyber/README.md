# Intro to Cyber

這是一個針對資安初學者的文檔專案，旨在提供基礎知識和實作練習。專案使用 VitePress 作為靜態網站生成器，並部署到 GitHub Pages。

## 專案結構

- **docs/**: 包含所有文檔和 VitePress 配置。
  - **.vitepress/**: VitePress 的配置檔。
  - **index.md**: 首頁內容。
  - **0.md**: 第一章內容。
  - **1.1.md**: 第一章第一節內容。
  - **1.2.md**: 第一章第二節內容。
  - **2.1.md**: 第二章第一節內容。
  - **2.2.md**: 第二章第二節內容。
  - **3.1.md**: 第三章第一節內容。

- **.github/workflows/**: 包含 GitHub Actions 工作流程配置，用於自動構建和部署。

- **package.json**: npm 配置檔，列出專案依賴和腳本。

## 使用說明

1. **安裝依賴**: 在專案根目錄下運行以下命令以安裝所需的依賴：
   ```
   npm install
   ```

2. **本地開發**: 使用以下命令啟動本地開發伺服器：
   ```
   npm run docs:dev
   ```

3. **構建靜態檔案**: 使用以下命令構建靜態檔案：
   ```
   npm run docs:build
   ```

4. **部署到 GitHub Pages**: 每次推送到主分支時，GitHub Actions 會自動構建並部署到 GitHub Pages。

## 貢獻

歡迎任何形式的貢獻！請提出問題或提交拉取請求。