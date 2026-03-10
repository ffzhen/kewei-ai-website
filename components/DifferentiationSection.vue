<template>
  <section id="differentiation" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
          差异化能力
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          六大核心模块，
          <span class="gradient-text">专为 IP 内容生产</span>
        </h2>
        <p class="text-lg text-gray-400">
          不是通用 AI 工具，是专为代运营团队和 IP 操盘手打造的内容中台
        </p>
      </div>

      <!-- 6 Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- 1. 文案引擎 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-primary-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full">文案引擎</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">懂你的 IP，才写得出好文案</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            基于知识库 + IP 定位生成内容，不是泛泛而谈的 AI 套话。你的专业背景、表达风格、受众画像，全部融入每一篇文案。
          </p>
        </div>

        <!-- 2. 素材中台 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-accent-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded-full">素材中台</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">声画精准匹配</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            物理文件存储 + 标签体系双轨管理，素材不乱、找得到、对得上。告别素材堆积如山却找不到的困境。
          </p>
        </div>

        <!-- 3. 智能剪辑 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-blue-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">智能剪辑</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">100+ 专业字幕预设</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            剪映级字幕动画、音效、转场预置，开箱即专业。不需要手动调参，AI 自动匹配最适合的风格。
          </p>
        </div>

        <!-- 4. 素材生成 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-green-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">素材生成</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">三类素材一键调用</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            网络素材 + AI 生成 + Remotion 动画，B-roll 不再只有数字人。画面丰富、不重复、有质感。
          </p>
        </div>

        <!-- 5. 视觉系统 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-orange-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">视觉系统</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">运镜 + 画中画 + 排版</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            自带推拉摇移运镜系统，多种画中画排版，视频有电影感。不是简单拼接，是有设计感的视觉叙事。
          </p>
        </div>

        <!-- 6. 交付标准 -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500 hover:border-primary-500/30">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <div class="mb-2">
            <span class="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full">交付标准</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">可交付，不是草稿</h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            让实习生也能产出可直接发布的成品视频。每一条输出都经过完整的剪辑流程，达到发布标准。
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
