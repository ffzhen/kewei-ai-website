<template>
  <section id="comparison" class="section-padding relative overflow-hidden bg-dark-800">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
          对比分析
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          我们 vs
          <span class="gradient-text">其他 AI 视频工具</span>
        </h2>
        <p class="text-lg text-gray-400">
          不是功能更多，是真正解决 IP 内容生产的核心痛点
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="max-w-4xl mx-auto">
        <!-- Table Header -->
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="glass p-4 rounded-2xl text-center">
            <div class="text-gray-400 font-semibold text-lg">其他 AI 视频工具</div>
          </div>
          <div class="bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 p-4 rounded-2xl text-center">
            <div class="gradient-text font-bold text-lg">可为 AI</div>
          </div>
        </div>

        <!-- Comparison Rows -->
        <div class="space-y-3">

          <div class="grid grid-cols-2 gap-4">
            <div class="glass p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-gray-400 text-sm">生成通用文案，千篇一律</span>
            </div>
            <div class="bg-white/5 border border-primary-500/20 p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white text-sm font-medium">基于你的知识库，写出专业内容</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="glass p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-gray-400 text-sm">素材堆在一起，找不到</span>
            </div>
            <div class="bg-white/5 border border-primary-500/20 p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white text-sm font-medium">物理+标签双轨管理，精准匹配</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="glass p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-gray-400 text-sm">字幕就几种样式，要手动调</span>
            </div>
            <div class="bg-white/5 border border-primary-500/20 p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white text-sm font-medium">100+ 专业预设，开箱即用</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="glass p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-gray-400 text-sm">只有数字人 A-roll，画面单调</span>
            </div>
            <div class="bg-white/5 border border-primary-500/20 p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white text-sm font-medium">三类 B-roll 素材，丰富不重复</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="glass p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
              <span class="text-gray-400 text-sm">导出粗剪草稿，还要人工精剪</span>
            </div>
            <div class="bg-white/5 border border-primary-500/20 p-5 rounded-xl flex items-start gap-3">
              <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="text-white text-sm font-medium">可交付成品，直接发布</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
