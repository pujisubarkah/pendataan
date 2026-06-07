<template>
  <footer>
    <div class="bg-[#2894D9] text-white">
      <div class="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <img
              src="/logo-panrb.png"
              class="h-14 sm:h-16 mb-4"
              alt="Logo PANRB"
            >

            <h3 class="font-semibold text-lg mb-3">
              Pendataan Inovasi Pelayanan Publik
            </h3>

            <p class="text-sm text-blue-100">
              Sistem Pendataan Inovasi Berbasis Life Journey
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">
              Kontak
            </h4>

            <ul class="space-y-2 text-sm text-blue-100">
              <li>Jl. Jenderal Sudirman Kav. 69</li>
              <li>Jakarta Selatan</li>
              <li>info@menpan.go.id</li>
              <li>(021) 7398381</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">
              Menu
            </h4>

            <ul class="space-y-2 text-sm text-blue-100">
              <li>
                <NuxtLink to="/" class="hover:text-white transition-colors">
                  Beranda
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/pendataan" class="hover:text-white transition-colors">
                  Pendataan
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/laporan" class="hover:text-white transition-colors">
                  Laporan
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">
              Siklus Hidup
            </h4>

            <ul class="space-y-2 text-sm text-blue-100">
              <li>Melahirkan Anak</li>
              <li>Mendaftar Sekolah</li>
              <li>Perguruan Tinggi</li>
              <li>Memiliki Kendaraan</li>
              <li>Memulai Berusaha</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-black border-t border-white/20">
      <div class="container mx-auto px-4 sm:px-6 py-4">
        <div class="flex flex-wrap gap-6 justify-center text-sm text-blue-100">
          <a href="#" class="hover:text-white transition-colors">MAPANRB</a>
          <a href="#" class="hover:text-white transition-colors">PPID</a>
          <a href="#" class="hover:text-white transition-colors">JDIH</a>
          <a href="#" class="hover:text-white transition-colors">SP4N LAPOR</a>
        </div>
      </div>
    </div>

    <div class="bg-black border-t border-white/20">
      <div class="container mx-auto px-4 sm:px-6 py-4 text-center text-sm text-blue-200">
        &copy; {{ new Date().getFullYear() }} Kementerian PANRB - Pendataan Inovasi Pelayanan Publik
      </div>
    </div>
  </footer>
</template>
