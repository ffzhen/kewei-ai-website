export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      title: '可为AI - 多智能体一键成片系统',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '可为AI是新一代AI数字人视频生成系统，通过多智能体协作，实现"一句话生成视频"。支持代运营团队批量生产、多账号管理、智能剪辑。' },
        { name: 'keywords', content: 'AI视频,数字人,视频生成,智能剪辑,多智能体,内容创作,短视频制作,代运营' },
        { property: 'og:title', content: '可为AI - 多智能体一键成片系统' },
        { property: 'og:description', content: '一句话生成视频，从选题到成片，AI自动完成全流程' },
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