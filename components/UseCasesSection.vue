<template>
  <section id="cases" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
          应用场景
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          为专业创作者
          <span class="gradient-text">量身打造</span>
        </h2>
        <p class="text-lg text-gray-400">
          无论您是代运营团队、多账号运营者还是品牌内容团队，可为AI 都能满足您的需求
        </p>
      </div>

      <!-- Use Cases -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <!-- Case 1 -->
        <div class="glass-card overflow-hidden group hover:border-primary-500/30 transition-all duration-500">
          <div class="h-48 relative overflow-hidden">
            <img src="/images/usecases/agency-team.png" alt="代运营团队" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3">代运营团队</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              为多个客户账号批量生产内容。支持批量出稿、审核流转、批量成片，大幅提升交付效率。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                多账号并行管理
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                批量出稿审核
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                高效批量交付
              </li>
            </ul>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="glass-card overflow-hidden group hover:border-accent-500/30 transition-all duration-500">
          <div class="h-48 relative overflow-hidden">
            <img src="/images/usecases/multi-account.png" alt="多账号运营者" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3">多账号运营者</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              自有账号矩阵运营，需要保持风格统一。账号知识库自动继承，确保各账号内容调性一致。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                账号风格继承
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                统一内容调性
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                矩阵规模生产
              </li>
            </ul>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="glass-card overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
          <div class="h-48 relative overflow-hidden">
            <img src="/images/usecases/brand-team.png" alt="品牌内容团队" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3">品牌内容团队</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              为分销/经销商生产品牌素材。确保品牌调性一致，内容质量稳定可控。
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                品牌调性约束
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                素材统一管控
              </li>
              <li class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                质量稳定输出
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Before & After -->
      <div class="glass-card p-8 md:p-12">
        <h3 class="text-2xl font-bold text-white text-center mb-10">使用前 vs 使用后</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6 rounded-xl bg-red-500/5 border border-red-500/10">
            <div class="text-red-400 font-semibold mb-4">使用前</div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-red-400/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                一个剪辑师一天产出 2-3 条视频
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-red-400/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                视频风格不统一，质量波动大
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-red-400/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                多账号切换繁琐，素材管理混乱
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-red-400/50 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                人力成本高，扩展困难
              </li>
            </ul>
          </div>
          <div class="p-6 rounded-xl bg-green-500/5 border border-green-500/10">
            <div class="text-green-400 font-semibold mb-4">使用后</div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                一个运营人员日产 10-20 条视频
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                账号风格自动继承，品质稳定一致
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                素材库统一管理，自动匹配分镜
              </li>
              <li class="flex items-start gap-3 text-sm text-gray-400">
                <svg class="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                人力成本降低 60%，轻松扩展
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>