<template>
  <section id="features" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-20">
        <span class="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
          核心功能
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          多智能体协作，
          <span class="gradient-text">全流程自动化</span>
        </h2>
        <p class="text-lg text-gray-400">
          10+ AI 智能体各司其职，从理解需求到成片输出，无需人工干预，让创作效率提升 10 倍
        </p>
      </div>

      <!-- Main Features Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <!-- Feature 1: Multi-Agent -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">多智能体架构</h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            10 个专业 Agent 分工协作：意图识别、选题推荐、文案生成、画面方案、素材规划、分镜匹配、素材生产、智能剪辑，各司其职，高效协作。
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs">意图识别</span>
            <span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs">选题推荐</span>
            <span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs">文案裂变</span>
            <span class="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs">智能剪辑</span>
          </div>
        </div>

        <!-- Feature 2: One-Click -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">一句话生成视频</h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            只需输入一句话需求，系统全自动完成选题推荐、文案创作、素材匹配、视频合成。无需学习复杂工具，创意即刻呈现。
          </p>
          <div class="glass p-4 rounded-xl">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-xs text-accent-400">AI</span>
              </div>
              <div class="space-y-2">
                <div class="h-2 w-48 bg-white/20 rounded"></div>
                <div class="h-2 w-32 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Multi-Input -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">多类型输入支持</h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            支持对标文案、视频链接、文档上传、平台链接、一句话需求等多种输入方式。系统自动识别意图，智能解析内容。
          </p>
          <div class="grid grid-cols-3 gap-2">
            <div class="text-center p-2 rounded-lg bg-white/5">
              <div class="text-lg mb-1">📄</div>
              <div class="text-xs text-gray-500">文档</div>
            </div>
            <div class="text-center p-2 rounded-lg bg-white/5">
              <div class="text-lg mb-1">🔗</div>
              <div class="text-xs text-gray-500">链接</div>
            </div>
            <div class="text-center p-2 rounded-lg bg-white/5">
              <div class="text-lg mb-1">🎬</div>
              <div class="text-xs text-gray-500">视频</div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Batch Processing -->
        <div class="glass-card p-8 group hover:bg-white/10 transition-all duration-500">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">批量出稿模式</h3>
          <p class="text-gray-400 leading-relaxed mb-4">
            专为代运营场景设计。一次生成 20+ 文案，支持审核流转，审核通过后再批量制作视频。大幅提升交付效率。
          </p>
          <div class="flex items-center gap-3">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-primary-500/30 border-2 border-dark-700 flex items-center justify-center">
                <span class="text-xs">20</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-green-500/30 border-2 border-dark-700 flex items-center justify-center">
                <span class="text-xs">15</span>
              </div>
              <div class="w-8 h-8 rounded-full bg-accent-500/30 border-2 border-dark-700 flex items-center justify-center">
                <span class="text-xs">18</span>
              </div>
            </div>
            <span class="text-sm text-gray-500">批量任务管理</span>
          </div>
        </div>
      </div>

      <!-- Secondary Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass p-6 rounded-2xl hover:bg-white/10 transition-all">
          <div class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-white mb-2">热点灵感雷达</h4>
          <p class="text-sm text-gray-400">实时监控全网热点，结合账号定位智能推荐选题</p>
        </div>

        <div class="glass p-6 rounded-2xl hover:bg-white/10 transition-all">
          <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-white mb-2">数字人 A-roll</h4>
          <p class="text-sm text-gray-400">支持多种数字人形象，自动生成口播视频</p>
        </div>

        <div class="glass p-6 rounded-2xl hover:bg-white/10 transition-all">
          <div class="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-white mb-2">智能剪辑</h4>
          <p class="text-sm text-gray-400">AI 自动决策转场效果、字幕样式、背景音乐</p>
        </div>
      </div>
    </div>
  </section>
</template>