# 可为AI 官网 (CLAUDE.md)

本文件为 AI Agent 提供官网维护的完整上下文。

## 项目基本信息

| 属性 | 值 |
|------|-----|
| 项目名 | kewei-ai-website |
| GitHub | https://github.com/ffzhen/kewei-ai-website |
| 线上域名 | https://kw101.com |
| 预览地址 | https://kewei-ai-website.pages.dev |
| 框架 | Nuxt 3 (SSG 静态生成) + Tailwind CSS |
| 部署平台 | Cloudflare Pages（GitHub 自动部署） |

## 部署方式

**推送即部署**：push 到 `main` 分支后，Cloudflare Pages 自动构建和部署。

手动操作流程：修改代码 → `git add . && git commit -m "描述" && git push` → 等待自动部署（约 1-2 分钟）。

## 常用命令

```bash
# 安装依赖
npm install

# 本地开发（热更新）
npm run dev

# 构建静态站点（本地验证用）
npm run generate
```

## 项目结构

```
├── components/              # 页面组件
│   ├── AppHeader.vue        # 顶部导航栏
│   ├── AppFooter.vue        # 底部页脚
│   ├── HeroSection.vue      # 首屏 Hero 区域
│   ├── FeaturesSection.vue  # 功能特性展示
│   ├── WorkflowSection.vue  # 工作流程展示
│   ├── UseCasesSection.vue  # 使用场景 & 用户评价
│   ├── PricingSection.vue   # 定价方案
│   └── CTASection.vue       # 行动号召（底部 CTA）
├── pages/
│   └── index.vue            # 首页（组合以上组件）
├── layouts/
│   └── default.vue          # 默认布局（Header + slot + Footer）
├── assets/css/
│   └── main.css             # 全局自定义样式
├── public/
│   ├── favicon.svg          # 站点图标
│   ├── images/              # 静态图片资源
│   └── videos/              # 视频资源
├── nuxt.config.ts           # Nuxt 配置（SEO meta、模块等）
├── tailwind.config.ts       # Tailwind 配置（颜色、动画、字体）
├── wrangler.toml            # Cloudflare Pages 配置
└── package.json
```

## 页面组件说明

首页 (`pages/index.vue`) 按以下顺序渲染组件：

1. **HeroSection** - 首屏大图/视频，核心价值主张，主 CTA 按钮
2. **UseCasesSection** - 使用场景展示，用户真实评价/证言
3. **WorkflowSection** - 产品工作流程步骤展示
4. **FeaturesSection** - 核心功能特性网格
5. **PricingSection** - 套餐定价表
6. **CTASection** - 底部行动号召，注册/体验入口

布局 (`layouts/default.vue`) 包裹所有页面：AppHeader + 页面内容 + AppFooter

## 设计规范

### 色彩体系
- **主色 (Primary)**: `#0ea5e9` (蓝色) — 用于按钮、链接、强调
- **强调色 (Accent)**: `#d946ef` (紫色) — 用于渐变、装饰
- **暗色背景**: `#0a0a0f` (dark-900), `#12121a` (dark-800), `#1a1a25` (dark-700)

### 常用样式 Pattern
```
毛玻璃卡片: bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
渐变文字:   bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent
发光按钮:   bg-gradient-to-r from-primary-500 to-accent-500 hover:shadow-lg hover:shadow-primary-500/25
悬浮动画:   animate-float
脉冲发光:   animate-glow
```

### 字体
- 英文: Inter
- 中文: Noto Sans SC
- 通过 Google Fonts CDN 加载

### 设计原则
- 暗色主题，科技感风格
- 大量使用渐变和毛玻璃效果
- 移动端优先响应式设计
- 页面间过渡要流畅

## 常见维护任务

### 修改文案内容
直接编辑对应组件 `.vue` 文件中的文本内容。

### 修改定价
编辑 `components/PricingSection.vue`，找到定价数据部分修改价格、功能列表。

### 修改用户评价
编辑 `components/UseCasesSection.vue`，找到 testimonials 部分。

### 添加新页面
1. 在 `pages/` 下创建 `new-page.vue`
2. Nuxt 自动生成路由 `/new-page`
3. 如需导航链接，在 `AppHeader.vue` 中添加

### 添加新首页 Section
1. 创建 `components/NewSection.vue`
2. 在 `pages/index.vue` 中 import 并按顺序插入

### 更新 SEO 信息
- 全局 meta: `nuxt.config.ts` → `app.head.meta`
- 页面级 meta: 各页面的 `useHead()` 调用

### 添加静态资源
- 图片放 `public/images/`
- 视频放 `public/videos/`
- 在模板中用 `/images/xxx.png` 绝对路径引用

## Git 工作流

- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`
- 示例: `feat: 更新定价方案`, `fix: 修复移动端导航`
- push 到 main 后 Cloudflare 自动构建部署
- `.nuxt/` 和 `.output/` 已在 `.gitignore` 中，不要提交

## 技术栈版本要求

- Node.js >= 20.0.0
- Nuxt 3.15+

## 注意事项

- `public/admin/` 目录是后台管理界面的构建产物，不要手动修改
- 站点是纯静态生成 (SSG)，使用 `nuxt generate`，不是 SSR
- Cloudflare Pages 项目名为 `kewei-ai-website`
- 部署后 CDN 缓存通常几分钟内刷新
