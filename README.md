# UnMedium - Chrome Extension

## 📌 Overview

This Chrome extension allows users to bypass Medium's paywall by automatically redirecting Medium article URLs to **Freedium**.

## 🚀 Features

- Detects when a Medium article is open.
- Modifies the URL to use **Freedium** for free access.
- Opens the modified URL in a **new tab** when the extension icon is clicked.

## 📂 Project Structure

```
chrome-extension/
│── manifest.json         # Chrome extension configuration file
│── background.js         # Handles URL modification and redirection
│── icon.png              # Extension icon (optional)
│── README.md             # Documentation (this file)
```

## 🛠 Installation Guide

1. **Download the project folder** or clone the repository.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top right).
4. Click **"Load unpacked"** and select the `chrome-extension` folder.
5. The extension will now appear in your Chrome toolbar. 🎉

## 🔧 How to Use

1. Open any **Medium article**.
2. Click on the **extension icon** in the toolbar.
3. The article will open in **Freedium** in a new tab.

## 📀 Example

### Original URL:
```
https://medium.com/gitconnected/maximizing-simple-rag-performance-using-rl-in-python-d4c14cbadf59
```

### Redirected URL:
```
https://freedium.cfd/medium.com/gitconnected/maximizing-simple-rag-performance-using-rl-in-python-d4c14cbadf59
```

## 🔍 Permissions Used

- `tabs`: To get the current tab URL.
- `host_permissions`: To access Medium articles.

## 🐟 License

This extension is for educational purposes only. Use responsibly.

---

## 💡 Enjoy reading Medium articles without restrictions! 🚀

