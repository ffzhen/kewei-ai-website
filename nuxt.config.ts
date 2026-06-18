export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      title: 'Kiwii 甄菲｜AI 内容系统实验室',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Kiwii 甄菲的个人 IP / 主理人官网：记录可为 AI、垂直行业内容系统、旅游与律师样板案例，以及 Agent 工具链实践。' },
        { name: 'keywords', content: 'Kiwii,甄菲,可为AI,AI内容系统,AI营销,垂直行业,Agent工作流' },
        { property: 'og:title', content: 'Kiwii 甄菲｜AI 内容系统实验室' },
        { property: 'og:description', content: '个人 IP / 主理人官网：用真实案例跑通垂直行业 AI 内容系统。' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap', rel: 'stylesheet' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    configPath: './tailwind.config.ts',
    exposeConfig: true,
    viewer: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  compatibilityDate: '2026-03-03',
})