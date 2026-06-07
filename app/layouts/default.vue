<template>
  <div class="min-h-screen flex flex-col bg-slate-50/50 font-sans text-gray-800 selection:bg-blue-200 selection:text-blue-900">
    <AppNavbar />
    
    <main class="grow py-8 relative">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div class="absolute top-40 left-0 -ml-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      
      <div class="relative z-10">
        <slot />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Nuxt 4 otomatis mengimpor komponen dari folder app/components, 
// namun mendeklarasikan import eksplisit juga aman.
</script>

<style>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 15s infinite alternate;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
