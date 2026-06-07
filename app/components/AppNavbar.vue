<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-[#2894D9]"
  >
    <div class="container mx-auto">

      <div class="h-24 flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center gap-3">

          <img
            src="/logo-panrb.png"
            class="h-14"
          >

          <div>
            <h1 class="font-bold text-blue-900">
              Pendataan Inovasi
            </h1>

            <p class="text-sm text-gray-500">
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
        <div class="flex items-center gap-4">

          <img
            src="/berakhlak.png"
            alt="BerAKHLAK"
            class="h-10 w-auto object-contain"
          >

        </div>

      </div>

    </div>
  </header>
</template>
