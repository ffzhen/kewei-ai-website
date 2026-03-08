<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'glass py-3': isScrolled, 'py-5': !isScrolled }"
  >
    <div class="container-custom flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center group">
        <img 
          src="/images/kiwii-logo-final.png" 
          alt="可为AI - KIWII" 
          class="h-10 w-auto group-hover:scale-105 transition-transform"
        />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">功能特性</a>
        <a href="#workflow" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">工作流程</a>
        <a href="#cases" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">应用场景</a>
        <a href="#pricing" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">定价</a>
      </nav>

      <!-- CTA Buttons -->
      <div class="hidden md:flex items-center gap-4">
        <a href="#demo" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          观看演示
        </a>
        <a href="#contact" class="btn-primary text-sm">
          立即体验
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
      >
        <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
        <XMarkIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 right-0 glass mx-4 mt-2 rounded-2xl p-6">
        <nav class="flex flex-col gap-4">
          <a @click="mobileMenuOpen = false" href="#features" class="text-gray-300 hover:text-white transition-colors py-2">功能特性</a>
          <a @click="mobileMenuOpen = false" href="#workflow" class="text-gray-300 hover:text-white transition-colors py-2">工作流程</a>
          <a @click="mobileMenuOpen = false" href="#cases" class="text-gray-300 hover:text-white transition-colors py-2">应用场景</a>
          <a @click="mobileMenuOpen = false" href="#pricing" class="text-gray-300 hover:text-white transition-colors py-2">定价</a>
          <hr class="border-white/10 my-2">
          <a @click="mobileMenuOpen = false" href="#contact" class="btn-primary text-center">立即体验</a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>