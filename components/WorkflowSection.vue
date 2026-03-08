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
          工作流程
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          三步完成视频创作
        </h2>
        <p class="text-lg text-gray-400">
          从需求输入到视频成片，极简三步，专业品质
        </p>
      </div>

      <!-- Workflow Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <!-- Step 1 -->
        <div class="relative group">
          <div class="glass-card p-8 h-full group-hover:border-primary-500/30 transition-all duration-500">
            <div class="absolute -top-4 left-8 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div class="pt-4">
              <div class="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">输入需求</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                粘贴文案、上传视频、输入链接，或只说一句话。AI 自动识别意图，理解你的创作需求。
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  支持 6 种输入类型
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  自动意图识别
                </div>
              </div>
            </div>
          </div>
          <!-- Arrow -->
          <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative group">
          <div class="glass-card p-8 h-full group-hover:border-accent-500/30 transition-all duration-500">
            <div class="absolute -top-4 left-8 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div class="pt-4">
              <div class="w-14 h-14 rounded-2xl bg-accent-500/10 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">AI 智能策划</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                多轮对话确认选题，AI 裂变生成多版本文案供你选择。确认后自动规划画面和素材。
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  多轮对话确认
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  多版本文案裂变
                </div>
              </div>
            </div>
          </div>
          <!-- Arrow -->
          <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative group">
          <div class="glass-card p-8 h-full group-hover:border-green-500/30 transition-all duration-500">
            <div class="absolute -top-4 left-8 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div class="pt-4">
              <div class="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-3">一键成片</h3>
              <p class="text-gray-400 text-sm leading-relaxed mb-4">
                AI 自动调度 TTS、数字人、素材生成，智能剪辑合成。5 分钟后即可获得专业级成片。
              </p>
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  自动素材生产
                </div>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  智能剪辑决策
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Architecture Visualization -->
      <div class="glass-card p-8 md:p-12">
        <h3 class="text-2xl font-bold text-white text-center mb-10">三层架构，智能协作</h3>
        
        <div class="space-y-6">
          <!-- Layer 1 -->
          <div class="relative">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                <span class="text-lg font-bold text-primary-400">01</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">理解与洞察层</h4>
                <p class="text-sm text-gray-500">4 个 Agent · 理解多类型输入 → 输出选题和参考文案</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">意图识别</div>
                <div class="text-xs text-gray-500 mt-1">入口调度</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">选题推荐</div>
                <div class="text-xs text-gray-500 mt-1">热点雷达</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">素材理解</div>
                <div class="text-xs text-gray-500 mt-1">状态分析</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">策略匹配</div>
                <div class="text-xs text-gray-500 mt-1">框架选择</div>
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
              <div class="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                <span class="text-lg font-bold text-accent-400">02</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">创意与结构层</h4>
                <p class="text-sm text-gray-500">4 个 Agent · 把"选题"变成"完整视频方案"</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">文案生成</div>
                <div class="text-xs text-gray-500 mt-1">多版本裂变</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">画面方案</div>
                <div class="text-xs text-gray-500 mt-1">A-roll/B-roll</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">素材规划</div>
                <div class="text-xs text-gray-500 mt-1">来源组合</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">分镜匹配</div>
                <div class="text-xs text-gray-500 mt-1">素材映射</div>
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
              <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span class="text-lg font-bold text-green-400">03</span>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white">执行与成片层</h4>
                <p class="text-sm text-gray-500">2 个 Agent + 4 个 Service · 把"方案"变成"视频"</p>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 ml-16">
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">素材生产</div>
                <div class="text-xs text-gray-500 mt-1">调度生成任务</div>
              </div>
              <div class="p-3 rounded-lg bg-white/5 text-center">
                <div class="text-sm text-white">智能剪辑</div>
                <div class="text-xs text-gray-500 mt-1">效果组合决策</div>
              </div>
              <div class="p-3 rounded-lg bg-primary-500/10 border border-primary-500/20 text-center">
                <div class="text-sm text-primary-400">视频输出</div>
                <div class="text-xs text-gray-500 mt-1">成片 + 封面</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>