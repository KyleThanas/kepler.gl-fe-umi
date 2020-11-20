# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 编辑器配置

### VS Code

所需插件：Eslint, EditorConfig for VS Code

可选：prettier

命令行一键安装

```bash
# 必选

code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig

# 可选

code --install-extension esbenp.prettier-vscode
```

配置

```js
// ...
"editor.formatOnSave": true,
//...

// 可单独配置语言和 formatter

"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```
