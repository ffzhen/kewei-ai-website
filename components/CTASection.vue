<template>
  <section id="contact" class="py-20 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 opacity-90"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEw2MCAzMEwzMCA2MEwwIDMwTDMwIDBaIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          还在一条一条手动做视频？
        </h2>
        <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          预约 15 分钟演示，看看 AI 如何帮你的团队实现日产 10+ 条专业视频。我们还会为你免费制作 3 条样片。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="showModal = true"
            class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary-600 font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            立即预约演示
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
          <a href="#demo" class="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            先看效果样片
          </a>
        </div>

        <div class="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            免费制作 3 条样片
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            15 分钟了解全部功能
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            无任何费用和绑定
          </div>
        </div>
      </div>
    </div>

    <!-- QR Code Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center"
          @click.self="showModal = false"
        >
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="showModal = false"></div>

          <!-- Modal Card -->
          <div class="relative z-10 bg-[#1a1a25] border border-white/10 rounded-2xl p-8 flex flex-col items-center shadow-2xl mx-4">
            <!-- Close Button -->
            <button
              @click="showModal = false"
              class="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="关闭"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- QR Code Image -->
            <img
              src="/images/qrcode.jpg"
              alt="预约咨询二维码"
              class="w-52 h-52 rounded-xl object-cover"
            />

            <!-- Caption -->
            <p class="mt-4 text-white/80 text-base font-medium">扫码添加，预约咨询（备注：官网）</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
