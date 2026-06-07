<template>
  <div class="max-w-4xl mx-auto p-6">

    <h1 class="text-3xl font-bold text-center mb-8">
      FORM PENDATAAN INOVASI PELAYANAN PUBLIK INSTANSI
    </h1>

    <div class="bg-blue-50 border-l-4 border-blue-600 text-blue-800 p-4 rounded mb-8 text-sm md:text-base leading-relaxed">
      <p class="mb-3">
        Hasil pendataan akan digunakan sebagai dasar penyusunan peta layanan publik berbasis life journey, penguatan koordinasi antarperangkat daerah, serta peningkatan kualitas pelayanan publik. Oleh karena itu, kami mengharapkan partisipasi aktif Bapak/Ibu untuk mengisi data secara akurat dan lengkap.
      </p>
      <p class="mb-3">
        Mohon setiap instansi Pemerintah Daerah mengisi formulir ini satu kali. Bapak/Ibu dianjurkan untuk melakukan pencadangan seluruh isian terlebih dahulu dalam format Word atau Excel sebagai antisipasi apabila terjadi kendala teknis/error pada sistem yang mengharuskan pengisian formulir dilakukan dari awal. 
      </p>
      <p>
        Mohon mengisi pendataan inovasi untuk 5 siklus terlebih dahulu sesuai tab yaitu:
      </p>
      <ol class="list-decimal list-inside mt-2 ml-2 space-y-1">
        <li>Melahirkan anak</li>
        <li>Mendaftar sekolah</li>
        <li>Memasuki perguruan tinggi</li>
        <li>Mengendarai atau memiliki kendaraan</li>
        <li>Memulai berusaha</li>
      </ol>
    </div>

    <Stepper :current="0"/>

    <h2 class="text-2xl font-bold mb-6">
      Profil Instansi
    </h2>

    <FormKit type="form" :actions="false" form-class="space-y-4">

      <FormKit
        type="text"
        v-model="form.instansi"
        placeholder="Nama Instansi"
        input-class="w-full border p-3 rounded"
      />

      <FormKit
        type="select"
        v-model="form.unit"
        :options="['Biro Organisasi', 'BRIDA', 'Bappeda']"
        input-class="w-full border p-3 rounded"
      />

      <FormKit
        type="text"
        v-model="form.pic"
        placeholder="Nama PIC"
        input-class="w-full border p-3 rounded"
      />

      <FormKit
        type="text"
        v-model="form.kontak"
        placeholder="Kontak PIC"
        input-class="w-full border p-3 rounded"
      />

      <NuxtLink
        to="/pendataan/melahirkan"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded"
      >
        Lanjut
      </NuxtLink>

    </FormKit>

  </div>
</template>

<script setup>
const form = reactive({
  instansi: '',
  unit: '',
  pic: '',
  kontak: ''
})
</script>
