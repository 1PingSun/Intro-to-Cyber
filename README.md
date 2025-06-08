# Intro to Cyber - 資安入門教材

這是一個使用 VitePress 建置的資安入門教材專案，內容涵蓋資安基礎知識並搭配實作練習題。主要供臺北市數位實驗高中 113 學年下學期公民行動專題使用，同時也開源歡迎有興趣的朋友一起貢獻內容。

## 🌟 專案特色

- 📚 **完整的學習路徑**：從基礎概念到實際應用
- 🛠️ **實作練習**：每章都包含 CTF 挑戰題目
- 🎯 **循序漸進**：適合資安初學者的學習架構
- 🌐 **開源協作**：歡迎社群貢獻與擴充內容

## 📖 課程內容

### 第〇章：資安倫理宣導

- 強調合法使用的重要性
- 資安倫理的基本原則

### 第一章：密碼學基礎

- **1.1 編碼篇**：二進位、ASCII Code、Base64
- **1.2 古典密碼學篇**：摩斯電碼、凱撒密碼

### 第二章：Misc

- **2.1 圖片隱寫術**：隱寫術三板斧技巧
- **2.2 Google Hacking**：搜尋引擎進階技巧

### 第三章：Web 基礎概念

- **3.1 Web 基礎**：網頁三兄弟、開發者工具、Cookie

## 📁 專案結構

```
Intro-to-Cyber/
├── package.json              # 專案配置文件
├── docs/                     # 文檔目錄
│   ├── index.md              # 首頁
│   ├── 0.md                  # 資安倫理宣導
│   ├── 1.1.md                # 編碼篇
│   ├── 1.2.md                # 古典密碼學篇
│   ├── 2.1.md                # 圖片隱寫術
│   ├── 2.2.md                # Google Hacking
│   ├── 3.1.md                # Web 基礎概念
│   ├── .vitepress/           # VitePress 配置
│   │   └── config.js         # 網站配置
│   └── src/                  # 圖片資源
├── .github/                  # GitHub Actions
│   └── workflows/
│       └── deploy.yml        # 自動部署配置
└── README.md                 # 專案說明文件
```

## 🛠️ 可用指令

根據 [package.json](package.json) 配置的指令：

```bash
# 開發模式 - 啟動本地開發伺服器
npm run dev

# 建置專案 - 生成靜態檔案
npm run build

# 預覽 - 本地預覽建置結果
npm run serve
```

## 🎯 實作練習

本專案整合了 CTF 練習平台，提供實際動手練習的機會：

- **CTF 平台**：[https://ctfd.1ping.org/challenges](https://ctfd.1ping.org/challenges)
- **前後測表單**：用於評估學習成效

每個章節都包含相對應的 Challenge 題目，讓學習者可以立即應用所學知識。

## 🤝 貢獻指南

我們歡迎任何形式的貢獻！無論是：

- 📝 內容更新與修正
- 🆕 新增章節或題目
- 🐛 回報錯誤或建議
- 📖 改善文章結構

### 如何貢獻

1. Fork 此專案
2. 創建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request
6. 也歡迎開 Issue 一起討論～

## 📋 技術規格

- **框架**：VitePress ^1.6.3
- **部署**：GitHub Pages (自動部署)

## 📜 版權聲明

本專案採用 MIT 授權條款。

## ⚠️ 重要提醒

> **所有內容之目的在於提升技術能力和資安意識，不得從事非法攻擊或違法行為，所有非法行為將受法律規範，切勿以身試法。詳閱刑法 358 至 363 條。**

## 📞 聯絡資訊

如有任何問題或建議，歡迎透過以下方式聯絡：

- 開啟 GitHub Issue
- 提交 Pull Request
- Email: sunyipingtw@icloud.com

---

**讓我們一起打造更好的資安學習環境！** 🔐