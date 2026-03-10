<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <!-- Gradient Mesh -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-dark-900 to-accent-500/20"></div>
      <!-- Animated Orbs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style="animation-delay: -2s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-3xl"></div>
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10">
      <div class="text-center max-w-5xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span class="text-sm text-gray-300">首批合作伙伴招募中</span>
          <span class="text-primary-400 text-sm">名额有限 →</span>
        </div>

        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
          <span class="block text-white">AI 帮你批量生产</span>
          <span class="block gradient-text">专业级短视频</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-3 leading-relaxed">
          <span class="text-white">先调研、再选题、后创作——你的 AI 内容合伙人</span>
        </p>
        <p class="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          不是批量生成，是深度对话后的精准表达
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button @click="showModal = true" class="btn-primary text-lg px-8 py-4 cursor-pointer">
            预约免费演示
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <a href="#demo" class="btn-secondary text-lg px-8 py-4">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            观看效果样片
          </a>
        </div>

        <!-- Value Props -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold gradient-text">对话</div>
            <div class="text-sm text-gray-500 mt-1">挖掘你的内容基因</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold gradient-text">调研</div>
            <div class="text-sm text-gray-500 mt-1">市场热点一手掌握</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold gradient-text">选题</div>
            <div class="text-sm text-gray-500 mt-1">策略驱动的角度切入</div>
          </div>
          <div class="text-center">
            <div class="text-2xl md:text-3xl font-bold gradient-text">成片</div>
            <div class="text-sm text-gray-500 mt-1">专业 IP 视频一键交付</div>
          </div>
        </div>
      </div>

      <!-- Promo Video -->
      <div id="demo" class="mt-20 relative max-w-5xl mx-auto">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-30"></div>
        <div class="relative glass-card overflow-hidden rounded-2xl">
          <video
            class="w-full aspect-video"
            controls
            preload="metadata"
            poster="/videos/promo-poster.jpg"
          >
            <source src="https://tigenix.oss-cn-hangzhou.aliyuncs.com/videos/%E5%AE%A3%E4%BC%A0%E7%89%87V4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>

    <QRCodeModal v-model="showModal" />
  </section>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>