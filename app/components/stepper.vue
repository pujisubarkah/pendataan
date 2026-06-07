<template>
  <div class="mb-12">
    <!-- Progress Bar & Circles (Desktop View) -->
    <div class="hidden md:flex justify-between items-center mb-4 px-8 relative">
      <!-- Background Line -->
      <div class="absolute left-0 right-0 top-1/2 h-1 bg-gray-100 -z-10" style="margin: 0 3rem;"></div>
      
      <!-- Active Progress Line -->
      <div 
        class="absolute left-0 top-1/2 h-1 bg-linear-to-r from-blue-600 to-indigo-600 -z-10 transition-all duration-700 ease-in-out" 
        :style="`width: calc(${(current / (steps.length - 1)) * 100}% - 6rem); margin-left: 3rem;`"
      ></div>
      
      <div
        v-for="(item, index) in steps"
        :key="index"
        class="flex flex-col items-center gap-3 relative"
      >
        <div 
          class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base transition-all duration-500 ease-out z-10"
          :class="index <= current 
            ? 'bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200/50 ring-4 ring-white' 
            : 'bg-white text-gray-400 border-2 border-gray-200'"
        >
          <IconCheck v-if="index < current" size="24" stroke="3" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <span 
          class="text-sm font-semibold max-w-25 text-center transition-colors duration-300"
          :class="index === current ? 'text-blue-700' : (index < current ? 'text-gray-800' : 'text-gray-400')"
        >
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Scrollable Pills (Mobile View) -->
    <div class="md:hidden flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x px-1">
      <div
        v-for="(item, index) in steps"
        :key="'mobile-'+index"
        class="whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 snap-center shrink-0"
        :class="index === current 
          ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200/50' 
          : (index < current ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-white text-gray-500 border border-gray-200')"
      >
        <div class="flex items-center gap-2">
          <IconCheck v-if="index < current" size="18" stroke="3" />
          <span v-else class="bg-white/20 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">{{ index + 1 }}</span>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { IconCheck } from '@tabler/icons-vue'

defineProps({
  current: Number
})

const steps = [
  'Profil',
  'Melahirkan',
  'Sekolah',
  'Perguruan Tinggi',
  'Kendaraan',
  'Berusaha'
]
</script>

<style scoped>
/* Menghilangkan scrollbar pada mobile tapi tetap bisa di-scroll */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
