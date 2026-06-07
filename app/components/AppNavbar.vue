<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-[#2894D9]"
  >
    <div class="container mx-auto px-4 sm:px-6">

      <div class="h-20 sm:h-24 flex items-center justify-between gap-3">

        <!-- Logo -->
        <div class="flex items-center gap-2 sm:gap-3 min-w-0">

          <img
            src="/logo-panrb.png"
            alt="Logo PANRB"
            class="h-10 sm:h-14 shrink-0"
          >

          <div class="min-w-0">
            <h1 class="font-bold text-blue-900 text-sm sm:text-base leading-tight truncate">
              Pendataan Inovasi
            </h1>

            <p class="text-xs sm:text-sm text-gray-500 truncate">
              Life Journey
            </p>
          </div>

        </div>

        <!-- Menu -->
        <nav class="hidden lg:flex items-center gap-10">

          <NuxtLink
            to="/"
            class="font-medium hover:text-blue-700 transition"
          >
            Beranda
          </NuxtLink>

          <NuxtLink
            to="/pendataan"
            class="font-medium hover:text-blue-700 transition"
          >
            Pendataan
          </NuxtLink>

          <NuxtLink
            to="/laporan"
            class="font-medium hover:text-blue-700 transition"
          >
            Laporan
          </NuxtLink>

        </nav>

        <!-- Right Side -->
        <div class="flex items-center gap-4 shrink-0">

          <button
            type="button"
            class="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 transition"
            :aria-label="themeActionLabel"
            :title="themeActionLabel"
            @click="switchTheme"
          >
            <IconSun v-if="currentThemeMode === 'dark'" :size="18" />
            <IconMoon v-else :size="18" />
          </button>

          <img
            src="/berakhlak.png"
            alt="BerAKHLAK"
            class="h-8 sm:h-10 w-auto object-contain"
          >

        </div>

      </div>

      <nav class="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 text-sm font-medium scrollbar-hide">
        <button
          type="button"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full border border-blue-100 hover:border-blue-300 hover:text-blue-700 transition"
          :aria-label="themeActionLabel"
          :title="themeActionLabel"
          @click="switchTheme"
        >
          <IconSun v-if="currentThemeMode === 'dark'" :size="16" />
          <IconMoon v-else :size="16" />
        </button>

        <NuxtLink
          to="/"
          class="whitespace-nowrap px-3 py-1.5 rounded-full border border-blue-100 hover:border-blue-300 hover:text-blue-700 transition"
        >
          Beranda
        </NuxtLink>

        <NuxtLink
          to="/pendataan"
          class="whitespace-nowrap px-3 py-1.5 rounded-full border border-blue-100 hover:border-blue-300 hover:text-blue-700 transition"
        >
          Pendataan
        </NuxtLink>

        <NuxtLink
          to="/laporan"
          class="whitespace-nowrap px-3 py-1.5 rounded-full border border-blue-100 hover:border-blue-300 hover:text-blue-700 transition"
        >
          Laporan
        </NuxtLink>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { getThemeMode, toggleThemeMode } from '@idds/vue'
import { IconMoon, IconSun } from '@tabler/icons-vue'

const currentThemeMode = ref('dark')

const themeActionLabel = computed(() =>
  currentThemeMode.value === 'dark' ? 'Ganti ke Light Mode' : 'Ganti ke Dark Mode'
)

function syncThemeMode() {
  currentThemeMode.value = getThemeMode() || 'dark'
}

function switchTheme() {
  toggleThemeMode()
  syncThemeMode()
}

onMounted(() => {
  syncThemeMode()
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
