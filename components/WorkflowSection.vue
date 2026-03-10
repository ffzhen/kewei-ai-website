<template>
  <section id="workflow" class="section-padding relative overflow-hidden bg-dark-800">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
          内容生产流水线
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          从对话到交付，
          <span class="gradient-text">全程自动化</span>
        </h2>
        <p class="text-lg text-gray-400">
          四个阶段，环环相扣，让每一条视频都达到可发布标准
        </p>
      </div>

      <!-- Pipeline Flow -->
      <div class="relative mb-20">
        <!-- Connecting Line (desktop) -->
        <div class="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/50 via-accent-500/50 to-green-500/50 z-0" style="top: 3.5rem;"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">

          <!-- Stage 1: 输入 -->
          <div class="relative group">
            <div class="glass-card p-8 h-full group-hover:border-primary-500/40 transition-all duration-500">
              <!-- Step Number -->
              <div class="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-xs text-primary-400 font-medium mb-1 uppercase tracking-wider">阶段一</div>
                <h3 class="text-xl font-bold text-white mb-3">输入</h3>
                <p class="text-primary-300 text-sm font-medium mb-3">深度对话</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                  与 AI 深度对话，挖掘 IP 定位、内容方向、受众画像，建立专属知识库。
                </p>
              </div>
            </div>
            <!-- Mobile Arrow -->
            <div class="lg:hidden flex justify-center my-4">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>

          <!-- Stage 2: 策略 -->
          <div class="relative group">
            <div class="glass-card p-8 h-full group-hover:border-accent-500/40 transition-all duration-500">
              <div class="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-xs text-accent-400 font-medium mb-1 uppercase tracking-wider">阶段二</div>
                <h3 class="text-xl font-bold text-white mb-3">策略</h3>
                <p class="text-accent-300 text-sm font-medium mb-3">智能决策</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                  AI 自动选题、生成多版本文案、规划画面方案，策略层全自动。
                </p>
              </div>
            </div>
            <!-- Mobile Arrow -->
            <div class="lg:hidden flex justify-center my-4">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>

          <!-- Stage 3: 生产 -->
          <div class="relative group">
            <div class="glass-card p-8 h-full group-hover:border-blue-500/40 transition-all duration-500">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-xs text-blue-400 font-medium mb-1 uppercase tracking-wider">阶段三</div>
                <h3 class="text-xl font-bold text-white mb-3">生产</h3>
                <p class="text-blue-300 text-sm font-medium mb-3">批量交付</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                  素材生成、智能剪辑、字幕合成并行运行，批量产出不等待。
                </p>
              </div>
            </div>
            <!-- Mobile Arrow -->
            <div class="lg:hidden flex justify-center my-4">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>

          <!-- Stage 4: 输出 -->
          <div class="relative group">
            <div class="glass-card p-8 h-full group-hover:border-green-500/40 transition-all duration-500 border-green-500/20">
              <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-xs text-green-400 font-medium mb-1 uppercase tracking-wider">阶段四</div>
                <h3 class="text-xl font-bold text-white mb-3">输出</h3>
                <p class="text-green-300 text-sm font-medium mb-3">可交付视频</p>
                <p class="text-gray-400 text-sm leading-relaxed">
                  每一条都是可直接发布的成品，不是草稿，不需要二次精剪。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Architecture Detail -->
      <div class="glass-card p-8 md:p-12">
        <h3 class="text-2xl font-bold text-white text-center mb-10">系统架构全景</h3>

        <div class="space-y-6">
          <!-- Layer 1 -->
          <div class="relative">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                <span class="text-lg font-bold text-primary-400">01</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">理解与洞察层</h4>
                <p class="text-sm text-gray-500">深度对话 → 知识库 → IP 定位 → 选题策略</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">深度对话</div>
                <div class="text-xs text-gray-500 mt-1">IP 挖掘</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">知识库</div>
                <div class="text-xs text-gray-500 mt-1">专业沉淀</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">热点雷达</div>
                <div class="text-xs text-gray-500 mt-1">市场洞察</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">选题推荐</div>
                <div class="text-xs text-gray-500 mt-1">策略匹配</div>
              </div>
            </div>
          </div>

          <!-- Connector -->
          <div class="flex justify-center">
            <div class="w-px h-8 bg-gradient-to-b from-primary-500/50 to-accent-500/50"></div>
          </div>

          <!-- Layer 2 -->
          <div class="relative">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0">
                <span class="text-lg font-bold text-accent-400">02</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">智能决策层</h4>
                <p class="text-sm text-gray-500">文案引擎 → 画面方案 → 素材规划 → 分镜匹配</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">文案引擎</div>
                <div class="text-xs text-gray-500 mt-1">多版本裂变</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">画面方案</div>
                <div class="text-xs text-gray-500 mt-1">A-roll/B-roll</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">素材中台</div>
                <div class="text-xs text-gray-500 mt-1">双轨管理</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">分镜匹配</div>
                <div class="text-xs text-gray-500 mt-1">精准映射</div>
              </div>
            </div>
          </div>

          <!-- Connector -->
          <div class="flex justify-center">
            <div class="w-px h-8 bg-gradient-to-b from-accent-500/50 to-green-500/50"></div>
          </div>

          <!-- Layer 3 -->
          <div class="relative">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <span class="text-lg font-bold text-green-400">03</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">批量交付层</h4>
                <p class="text-sm text-gray-500">素材生成 → 智能剪辑 → 视觉系统 → 可交付成品</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">三类素材</div>
                <div class="text-xs text-gray-500 mt-1">网络+AI+动画</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">智能剪辑</div>
                <div class="text-xs text-gray-500 mt-1">100+ 预设</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">视觉系统</div>
                <div class="text-xs text-gray-500 mt-1">运镜+画中画</div>
              </div>
              <div class="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20 text-center">
                <div class="text-sm text-primary-400">可交付视频</div>
                <div class="text-xs text-gray-500 mt-1">直接发布</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
