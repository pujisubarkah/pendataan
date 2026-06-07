<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">

    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-8 leading-tight">
      FORM PENDATAAN INOVASI PELAYANAN PUBLIK INSTANSI
    </h1>

    <div class="bg-blue-50 border-l-4 border-blue-600 text-blue-800 p-4 sm:p-5 rounded mb-8 text-sm md:text-base leading-relaxed">
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

    <h2 class="text-xl sm:text-2xl font-bold mb-6">
      Profil Instansi
    </h2>

    <FormKit type="form" :actions="false" form-class="space-y-4" @submit="submitProfil">

      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label class="sm:w-36 shrink-0 text-sm font-medium text-gray-700 flex items-center gap-1">
          Kategori <span class="text-red-500">*</span>
        </label>
        <div class="flex-1 min-w-0">
          <FormKit
            type="select"
            v-model="form.kategori"
            :options="kategoriOptions"
            placeholder="Pilih Kategori"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label class="sm:w-36 shrink-0 text-sm font-medium text-gray-700 flex items-center gap-1">
          Nama Instansi <span class="text-red-500">*</span>
          <span class="relative">
            <button type="button" @click.stop="toggleTooltip('instansi')" class="text-blue-400 hover:text-blue-600 transition-colors">
              <IconInfoCircle :size="15" />
            </button>
            <div v-if="activeTooltip === 'instansi'" class="absolute left-0 top-6 z-50 w-60 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl leading-relaxed">
              <div class="absolute -top-1.5 left-2 w-3 h-3 bg-gray-800 rotate-45 rounded-sm"></div>
              Diisi sesuai nama resmi instansi pemerintah daerah yang Anda wakili, contoh: <strong>Pemerintah Kota Bandung</strong>.
            </div>
          </span>
        </label>
        <div class="flex-1 min-w-0">
          <FormKit
            type="select"
            v-model="form.instansiId"
            :options="filteredInstansiOptions"
            placeholder="Pilih Instansi"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
        <label class="sm:w-36 shrink-0 text-sm font-medium text-gray-700 flex items-center gap-1 pt-1">
          Unit / Perangkat Daerah <span class="text-red-500">*</span>
          <span class="relative">
            <button type="button" @click.stop="toggleTooltip('unit')" class="text-blue-400 hover:text-blue-600 transition-colors">
              <IconInfoCircle :size="15" />
            </button>
            <div v-if="activeTooltip === 'unit'" class="absolute left-0 top-6 z-50 w-72 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl leading-relaxed">
              <div class="absolute -top-1.5 left-2 w-3 h-3 bg-gray-800 rotate-45 rounded-sm"></div>
              Isian untuk mengetahui unit kerja yang bertanggung jawab dalam pengelolaan dan pengembangan inovasi pelayanan publik lingkup instansi.
              <ol class="list-decimal list-inside mt-2 space-y-0.5">
                <li>Biro Organisasi / Bagian Organisasi</li>
                <li>BRIDA / Bapperida / Bapelitbangda / Balitbangda / Bappeda / Bappedalitbang</li>
              </ol>
            </div>
          </span>
        </label>
        <div class="flex-1 min-w-0">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label class="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-colors">
              <input v-model="form.unit" type="radio" value="Biro Organisasi" class="text-blue-600 focus:ring-blue-500" />
              <span>Biro Organisasi</span>
            </label>

            <label class="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-colors">
              <input v-model="form.unit" type="radio" value="BRIDA" class="text-blue-600 focus:ring-blue-500" />
              <span>BRIDA</span>
            </label>

            <label class="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-colors">
              <input v-model="form.unit" type="radio" value="Bappeda" class="text-blue-600 focus:ring-blue-500" />
              <span>Bappeda</span>
            </label>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label class="sm:w-36 shrink-0 text-sm font-medium text-gray-700 flex items-center gap-1">
          Nama PIC <span class="text-red-500">*</span>
          <span class="relative">
            <button type="button" @click.stop="toggleTooltip('pic')" class="text-blue-400 hover:text-blue-600 transition-colors">
              <IconInfoCircle :size="15" />
            </button>
            <div v-if="activeTooltip === 'pic'" class="absolute left-0 top-6 z-50 w-72 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl leading-relaxed">
              <div class="absolute -top-1.5 left-2 w-3 h-3 bg-gray-800 rotate-45 rounded-sm"></div>
              Isian untuk mengetahui nama pegawai yang mewakili instansi pemerintah sebagai narahubung utama (PIC) terkait pengisian, verifikasi, dan tindak lanjut pendataan ini.
            </div>
          </span>
        </label>
        <div class="flex-1 min-w-0">
          <FormKit
            type="text"
            v-model="form.pic"
            placeholder="Nama penanggung jawab pengisian formulir"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <label class="sm:w-36 shrink-0 text-sm font-medium text-gray-700 flex items-center gap-1">
          Kontak PIC <span class="text-red-500">*</span>
          <span class="relative">
            <button type="button" @click.stop="toggleTooltip('kontak')" class="text-blue-400 hover:text-blue-600 transition-colors">
              <IconInfoCircle :size="15" />
            </button>
            <div v-if="activeTooltip === 'kontak'" class="absolute left-0 top-6 z-50 w-60 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-xl leading-relaxed">
              <div class="absolute -top-1.5 left-2 w-3 h-3 bg-gray-800 rotate-45 rounded-sm"></div>
              Nomor HP aktif atau alamat email yang dapat dihubungi terkait pengisian formulir ini.
            </div>
          </span>
        </label>
        <div class="flex-1 min-w-0">
          <FormKit
            type="text"
            v-model="form.kontak"
            placeholder="Nomor HP / email yang bisa dihubungi"
            input-class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="inline-flex items-center justify-center w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Menyimpan...' : 'Lanjut' }}
      </button>

    </FormKit>

  </div>
</template>

<script setup>
import { IconInfoCircle } from '@tabler/icons-vue'

const activeTooltip = ref(null)

function toggleTooltip(name) {
  activeTooltip.value = activeTooltip.value === name ? null : name
}

onMounted(() => {
  document.addEventListener('click', () => { activeTooltip.value = null })
})

const form = reactive({
  kategori: null,
  instansiId: '',
  unit: '',
  pic: '',
  kontak: ''
})

const kategoriMap = {
  3: 'Pemerintah Provinsi',
  4: 'Pemerintah Kabupaten',
  5: 'Pemerintah Kota'
}

// Ambil data instansi dari API terlebih dahulu
const { data: instansiResponse } = await useFetch('/api/instansi')

// Ekstrak pilihan kategori secara dinamis dari API yang tersedia
const kategoriOptions = computed(() => {
  if (!instansiResponse.value?.data) return []
  
  // Ambil unique agencyCategoryId dari data
  const uniqueIds = [...new Set(instansiResponse.value.data.map(item => item.agencyCategoryId))]
  
  return uniqueIds
    .map(id => ({
      label: kategoriMap[id] || `Kategori ${id}`,
      value: id
    }))
    .sort((a, b) => a.value - b.value) // Urutkan 3, 4, 5
})

// Filter instansi berdasarkan kategori yang dipilih
const filteredInstansiOptions = computed(() => {
  if (!instansiResponse.value?.data) return []
  
  let list = instansiResponse.value.data
  
  // Jika kategori sudah dipilih, filter datanya
  if (form.kategori) {
    list = list.filter(item => item.agencyCategoryId === Number(form.kategori))
  }
  
  return list.map(item => ({
    label: item.agencyName,
    value: item.id
  }))
})

// Reset nama instansi jika kategori diubah
watch(() => form.kategori, () => {
  form.instansiId = ''
})

const router = useRouter()
const isSubmitting = ref(false)

async function submitProfil() {
  if (!form.instansiId || !form.unit || !form.pic || !form.kontak) {
    alert('Mohon lengkapi semua field yang wajib diisi (*)')
    return
  }

  try {
    isSubmitting.value = true
    
    // Siapkan payload sesuai schema
    const payload = {
      instansiId: Number(form.instansiId),
      unit: form.unit,
      namaPic: form.pic,
      kontakPic: form.kontak
    }

    const res = await $fetch('/api/profil', {
      method: 'POST',
      body: payload
    })

    if (res.success) {
      // Simpan profilId ke state agar bisa dipakai kuesioner inovasi
      const profilId = useState('profilId')
      profilId.value = res.data.id

      // Pindah ke halaman selanjutnya setelah berhasil simpan
      router.push('/pendataan/melahirkan')
    }
  } catch (error) {
    console.error('Gagal menyimpan profil:', error)
    alert('Terjadi kesalahan saat menyimpan data profil.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
