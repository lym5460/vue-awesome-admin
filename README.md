# vue-awesome-admin

🚀 🚀 🚀 Vue3 + Vite2 + TypeScript + Element-Plus 编写的一套后台管理系统

## Start

```bash
  # git clone
  git clone https://github.com/Galaxy-Rigel/vue-awesome-admin.git

  # install dependencies
  pnpm install

  # dev
  pnpm dev

  # build
  pnpm build
```

## TODO

- [x] 配置代码检查和风格检查 (eslint+prettier+vue+typescript 相关配置)
- [x] Element-Plus
- [ ] Pina 全局状态库
- [ ] Vue-Router >> File based routing
- [x] 粒子化 CSS 框架 WindiCSS
- [x] Iconify 图标集
- [x] I18n 国际化
- [ ] Layout system
- [ ] Markdown Support
- [x] Components auto importing
- [x] APIs auto importing
- [ ] husky
- [ ] GithubActions
- [ ] E2E Testing with Cypress on GitHub Actions

## Git commit 规范

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

其中，Header 是必需的，Body 和 Footer 可以省略

例如：

```bash
git commit -m 'feat:add todoList'
```

```typescript
type 选项：
  feat: 新功能、新特性
  fix: 修改 bug
  perf: 更改代码，以提高性能
  refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
  docs: 文档修改
  style: 代码格式修改, 注意不是 css 修改（例如分号修改）
  test: 测试用例新增、修改
  build: 影响项目构建或依赖项修改
  revert: 恢复上一次提交
  ci: 持续集成相关文件修改
  chore: 其他修改（不在上述类型中的修改）
  release: 发布新版本
  workflow: 工作流相关文件修改*
```
