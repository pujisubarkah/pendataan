<script setup>
import '~/assets/css/main.css'
import { setBrandTheme } from '@idds/vue'
import { Toaster } from 'vue-sonner'

// Set tema branding ke Kementerian PAN RB
if (import.meta.client) {
  setBrandTheme('panrb')
}
</script>

<template>
  <ClientOnly>
    <Toaster
      position="top-right"
      rich-colors
      close-button
      :offset="96"
      :toast-options="{
        duration: 2800,
        style: {
          fontFamily: 'Poppins, sans-serif',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
        }
      }"
    />
  </ClientOnly>

  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
