<template>
  <div class="max-w-4xl mx-auto p-6">
    <Stepper :current="0" />

    <h2 class="text-2xl font-bold mb-6">
      Profil Instansi
    </h2>

    <p class="mb-6 text-gray-700 leading-relaxed text-justify">
      Form Profil Instansi Pemerintah ini disusun untuk mengumpulkan informasi dasar mengenai identitas, tugas dan fungsi, serta karakteristik instansi dalam penyelenggaraan pelayanan publik.
      Data yang dihimpun akan digunakan sebagai dasar analisis dan perumusan kebijakan serta mendukung pembinaan inovasi pelayanan publik.
    </p>

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

      <button
        type="button"
        @click="goToNextStep"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Lanjut
      </button>
    </FormKit>
  </div>
</template>

<script setup>
import { toast } from 'vue-sonner'

const router = useRouter()

const form = reactive({
  instansi: '',
  unit: '',
  pic: '',
  kontak: ''
})

const successToastOptions = {
  style: {
    background: '#2894D9',
    color: '#FFFFFF',
    border: '1px solid #1D78B3'
  }
}

const errorToastOptions = {
  style: {
    background: '#111111',
    color: '#FFFFFF',
    border: '1px solid #2F2F2F'
  }
}

function isFormComplete() {
  return [form.instansi, form.unit, form.pic, form.kontak].every((value) => value?.toString().trim())
}

function goToNextStep() {
  if (!isFormComplete()) {
    toast.error('Lengkapi semua isian profil instansi terlebih dahulu.', errorToastOptions)
    return
  }

  toast.success('Data profil tersimpan. Lanjut ke tahap berikutnya...', successToastOptions)
  setTimeout(() => {
    router.push('/pendataan/melahirkan')
  }, 500)
}
</script>
