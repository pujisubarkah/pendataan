<template>
  <div class="mb-10">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-xl font-bold text-gray-800">Daftar Inovasi</h3>
      <button
        @click="addInnovation"
        class="flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <IconPlus size="20" />
        Tambah Inovasi
      </button>
    </div>

    <!-- Animasi List -->
    <TransitionGroup 
      name="list" 
      tag="div" 
      class="space-y-6 relative"
    >
      <div
        v-for="(item, index) in innovations"
        :key="item.id"
        class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
      >
        <div class="flex justify-between items-center mb-5 border-b border-gray-100 pb-4">
          <h4 class="text-lg font-bold text-gray-700 flex items-center gap-2">
            <span class="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              {{ index + 1 }}
            </span>
            Inovasi Ke-{{ index + 1 }}
          </h4>
          <button
            @click="removeInnovation(index)"
            class="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
            title="Hapus Inovasi"
          >
            <IconTrash size="20" />
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormKit
            type="text"
            label="Judul Inovasi"
            v-model="item.judul"
            placeholder="Masukkan judul inovasi..."
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1"
            label-class="text-sm font-medium text-gray-700"
          />

          <FormKit
            type="text"
            label="Tahun Penerapan"
            v-model="item.tahun"
            placeholder="Contoh: 2024"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1"
            label-class="text-sm font-medium text-gray-700"
          />

          <FormKit
            type="textarea"
            label="Deskripsi"
            v-model="item.deskripsi"
            placeholder="Jelaskan secara singkat tentang inovasi ini..."
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1 min-h-[100px]"
            label-class="text-sm font-medium text-gray-700"
            outer-class="md:col-span-2"
          />

          <FormKit
            type="textarea"
            label="Keunggulan"
            v-model="item.keunggulan"
            placeholder="Apa saja keunggulan inovasi ini?"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1 min-h-[100px]"
            label-class="text-sm font-medium text-gray-700"
          />

          <FormKit
            type="textarea"
            label="Kekurangan"
            v-model="item.kekurangan"
            placeholder="Kekurangan atau kendala yang dihadapi"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1 min-h-[100px]"
            label-class="text-sm font-medium text-gray-700"
          />

          <FormKit
            type="textarea"
            label="Dampak Inovasi"
            v-model="item.dampak"
            placeholder="Dampak positif yang dirasakan masyarakat..."
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all mt-1 min-h-[100px]"
            label-class="text-sm font-medium text-gray-700"
            outer-class="md:col-span-2"
          />
        </div>
      </div>
    </TransitionGroup>

    <div v-if="innovations.length === 0" class="text-center py-12 bg-white border border-gray-200 rounded-2xl shadow-sm mt-4 relative overflow-hidden">
      <!-- Decorative background blur -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div class="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconBulb size="32" />
      </div>
      <h3 class="text-lg font-bold text-gray-800 mb-2">Belum Ada Inovasi</h3>
      <p class="text-gray-500 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
        Mulailah mendata inovasi layanan publik yang dimiliki oleh instansi Anda untuk kategori ini.
      </p>
      <button
        @click="addInnovation"
        class="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-300"
      >
        <IconPlus size="20" />
        Tambah Inovasi Sekarang
      </button>
    </div>
  </div>
</template>

<script setup>
import { IconPlus, IconTrash, IconBulb } from '@tabler/icons-vue'

const innovations = ref([])
// Menambahkan ID unik untuk mempermudah transisi list
let nextId = 1

function addInnovation() {
  innovations.value.push({
    id: nextId++,
    judul: '',
    deskripsi: '',
    tahun: '',
    keunggulan: '',
    kekurangan: '',
    dampak: ''
  })
}

function removeInnovation(index) {
  innovations.value.splice(index, 1)
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
