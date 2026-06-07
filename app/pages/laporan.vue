<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <div class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold text-blue-900">
        Dashboard Laporan Inovasi
      </h1>
      <p class="text-gray-600 mt-2">
        Visualisasi hasil isian kuesioner life journey (data simulasi sementara).
      </p>
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 p-4 mb-6 shadow-sm">
      <p class="text-sm font-semibold text-gray-700 mb-3">Filter Siklus Life Journey</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="item in journeyFilters"
          :key="item.key"
          type="button"
          @click="selectedJourney = item.key"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          :class="selectedJourney === item.key ? 'bg-[#2894D9] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ item.label }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-white rounded-xl border border-blue-100 p-4 shadow-sm">
        <p class="text-sm text-gray-500">Total Instansi</p>
        <p class="text-2xl font-bold text-blue-800">{{ activeData.summary.instansi }}</p>
      </div>
      <div class="bg-white rounded-xl border border-blue-100 p-4 shadow-sm">
        <p class="text-sm text-gray-500">Total Inovasi Terdokumentasi</p>
        <p class="text-2xl font-bold text-blue-800">{{ activeData.summary.inovasi }}</p>
      </div>
      <div class="bg-white rounded-xl border border-blue-100 p-4 shadow-sm">
        <p class="text-sm text-gray-500">Rata-rata Inovasi per Instansi</p>
        <p class="text-2xl font-bold text-blue-800">{{ activeData.summary.rataRata }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
      <section class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 class="text-xl font-semibold text-gray-800 mb-1">Peta Sebaran Inovasi</h2>
        <p class="text-sm text-gray-500 mb-4">Peta bubble sebaran instansi berdasarkan jumlah inovasi.</p>

        <ClientOnly>
          <VueApexCharts
            type="bubble"
            height="320"
            :options="mapOptions"
            :series="mapSeries"
          />
        </ClientOnly>
      </section>

      <section class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 class="text-xl font-semibold text-gray-800 mb-1">Word Cloud Isian Kuesioner</h2>
        <p class="text-sm text-gray-500 mb-4">Visualisasi kata dominan menggunakan treemap.</p>

        <ClientOnly>
          <VueApexCharts
            type="treemap"
            height="320"
            :options="wordCloudOptions"
            :series="wordCloudSeries"
          />
        </ClientOnly>
      </section>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <section class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 class="text-xl font-semibold text-gray-800 mb-1">Histogram Bigrams</h2>
        <p class="text-sm text-gray-500 mb-4">Pasangan kata dominan dari jawaban responden.</p>

        <ClientOnly>
          <VueApexCharts
            type="bar"
            height="320"
            :options="bigramOptions"
            :series="bigramSeries"
          />
        </ClientOnly>
      </section>

      <section class="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
        <h2 class="text-xl font-semibold text-gray-800 mb-1">Histogram Trigrams</h2>
        <p class="text-sm text-gray-500 mb-4">Tiga kata dominan yang membentuk pola inovasi.</p>

        <ClientOnly>
          <VueApexCharts
            type="bar"
            height="320"
            :options="trigramOptions"
            :series="trigramSeries"
          />
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'

const journeyFilters = [
  { key: 'all', label: 'Semua Siklus' },
  { key: 'melahirkan', label: 'Melahirkan Anak' },
  { key: 'sekolah', label: 'Mendaftar Sekolah' },
  { key: 'kampus', label: 'Perguruan Tinggi' },
  { key: 'kendaraan', label: 'Memiliki Kendaraan' },
  { key: 'berusaha', label: 'Memulai Berusaha' }
]

const selectedJourney = ref('all')

const lifecycleData = {
  all: {
    summary: { instansi: '128', inovasi: '1,246', rataRata: '9.7' },
    mapPoints: [
      { x: 19, y: 35, z: 18, label: 'Sumut' },
      { x: 33, y: 50, z: 22, label: 'DKI' },
      { x: 41, y: 51, z: 27, label: 'Jateng' },
      { x: 48, y: 52, z: 24, label: 'Jatim' },
      { x: 60, y: 40, z: 16, label: 'Kalsel' },
      { x: 74, y: 53, z: 14, label: 'Sulsel' },
      { x: 88, y: 69, z: 12, label: 'Papua' }
    ],
    words: [
      { x: 'digital', y: 36 }, { x: 'pelayanan', y: 30 }, { x: 'masyarakat', y: 28 },
      { x: 'terintegrasi', y: 26 }, { x: 'aplikasi', y: 24 }, { x: 'mudah', y: 22 },
      { x: 'cepat', y: 20 }, { x: 'transparan', y: 20 }, { x: 'efisien', y: 18 },
      { x: 'inklusif', y: 18 }, { x: 'akuntabel', y: 17 }, { x: 'otomatisasi', y: 16 },
      { x: 'monitoring', y: 16 }, { x: 'koordinasi', y: 15 }, { x: 'pendataan', y: 15 }
    ],
    bigrams: [
      { label: 'pelayanan digital', value: 182 }, { label: 'akses mudah', value: 161 },
      { label: 'data terpadu', value: 149 }, { label: 'proses cepat', value: 133 },
      { label: 'inovasi daerah', value: 124 }, { label: 'biaya rendah', value: 96 }
    ],
    trigrams: [
      { label: 'pelayanan publik digital', value: 143 }, { label: 'integrasi data layanan', value: 132 },
      { label: 'waktu layanan lebih', value: 118 }, { label: 'kemudahan akses masyarakat', value: 104 },
      { label: 'kolaborasi antar perangkat', value: 97 }, { label: 'peningkatan kualitas layanan', value: 91 }
    ]
  },
  melahirkan: {
    summary: { instansi: '96', inovasi: '402', rataRata: '4.2' },
    mapPoints: [
      { x: 20, y: 36, z: 14, label: 'Sumut' }, { x: 35, y: 50, z: 18, label: 'DKI' },
      { x: 42, y: 52, z: 20, label: 'Jateng' }, { x: 50, y: 53, z: 19, label: 'Jatim' },
      { x: 73, y: 54, z: 12, label: 'Sulsel' }
    ],
    words: [
      { x: 'stunting', y: 30 }, { x: 'ibu hamil', y: 27 }, { x: 'rujukan', y: 24 },
      { x: 'puskesmas', y: 22 }, { x: 'posyandu', y: 21 }, { x: 'digital', y: 18 },
      { x: 'gizi', y: 17 }, { x: 'monitoring', y: 15 }
    ],
    bigrams: [
      { label: 'ibu hamil', value: 118 }, { label: 'gizi anak', value: 103 },
      { label: 'rujukan cepat', value: 91 }, { label: 'layanan puskesmas', value: 84 },
      { label: 'jadwal imunisasi', value: 72 }, { label: 'pemantauan tumbuh', value: 66 }
    ],
    trigrams: [
      { label: 'pendampingan ibu hamil', value: 98 }, { label: 'rujukan ibu melahirkan', value: 87 },
      { label: 'pemantauan bayi berisiko', value: 79 }, { label: 'integrasi data posyandu', value: 71 },
      { label: 'pencegahan stunting dini', value: 66 }, { label: 'layanan nifas terpadu', value: 60 }
    ]
  },
  sekolah: {
    summary: { instansi: '101', inovasi: '316', rataRata: '3.1' },
    mapPoints: [
      { x: 18, y: 35, z: 12, label: 'Sumut' }, { x: 34, y: 51, z: 16, label: 'DKI' },
      { x: 44, y: 51, z: 18, label: 'Jateng' }, { x: 51, y: 52, z: 17, label: 'Jatim' },
      { x: 61, y: 41, z: 11, label: 'Kalsel' }
    ],
    words: [
      { x: 'PPDB', y: 31 }, { x: 'zonasi', y: 28 }, { x: 'sekolah', y: 26 },
      { x: 'orang tua', y: 21 }, { x: 'verifikasi', y: 20 }, { x: 'digitalisasi', y: 18 },
      { x: 'antrian', y: 16 }, { x: 'transparan', y: 15 }
    ],
    bigrams: [
      { label: 'seleksi PPDB', value: 112 }, { label: 'zonasi sekolah', value: 98 },
      { label: 'verifikasi berkas', value: 88 }, { label: 'orang tua', value: 76 },
      { label: 'jadwal daftar', value: 69 }, { label: 'kuota siswa', value: 62 }
    ],
    trigrams: [
      { label: 'proses PPDB online', value: 95 }, { label: 'transparansi penerimaan siswa', value: 83 },
      { label: 'verifikasi dokumen otomatis', value: 74 }, { label: 'pendampingan orang tua', value: 65 },
      { label: 'informasi sekolah realtime', value: 60 }, { label: 'layanan aduan PPDB', value: 56 }
    ]
  },
  kampus: {
    summary: { instansi: '82', inovasi: '205', rataRata: '2.5' },
    mapPoints: [
      { x: 33, y: 49, z: 13, label: 'DKI' }, { x: 42, y: 50, z: 15, label: 'Jateng' },
      { x: 49, y: 51, z: 14, label: 'Jatim' }, { x: 61, y: 40, z: 10, label: 'Kalsel' }
    ],
    words: [
      { x: 'beasiswa', y: 28 }, { x: 'SNBT', y: 25 }, { x: 'kampus', y: 24 },
      { x: 'konseling', y: 19 }, { x: 'pendaftaran', y: 18 }, { x: 'akses', y: 17 }
    ],
    bigrams: [
      { label: 'akses beasiswa', value: 86 }, { label: 'pendaftaran SNBT', value: 79 },
      { label: 'konseling karier', value: 68 }, { label: 'informasi kampus', value: 64 },
      { label: 'pendampingan siswa', value: 58 }, { label: 'biaya kuliah', value: 51 }
    ],
    trigrams: [
      { label: 'akses beasiswa daerah', value: 73 }, { label: 'pendaftaran kampus online', value: 66 },
      { label: 'konseling pilihan jurusan', value: 62 }, { label: 'informasi biaya kuliah', value: 56 },
      { label: 'layanan calon mahasiswa', value: 51 }, { label: 'pendampingan tes masuk', value: 47 }
    ]
  },
  kendaraan: {
    summary: { instansi: '112', inovasi: '268', rataRata: '2.4' },
    mapPoints: [
      { x: 19, y: 35, z: 13, label: 'Sumut' }, { x: 34, y: 50, z: 16, label: 'DKI' },
      { x: 49, y: 52, z: 17, label: 'Jatim' }, { x: 74, y: 53, z: 11, label: 'Sulsel' },
      { x: 88, y: 68, z: 9, label: 'Papua' }
    ],
    words: [
      { x: 'SIM', y: 27 }, { x: 'STNK', y: 26 }, { x: 'samsat', y: 24 },
      { x: 'antrian', y: 20 }, { x: 'pajak', y: 19 }, { x: 'digital', y: 17 }
    ],
    bigrams: [
      { label: 'layanan samsat', value: 92 }, { label: 'perpanjangan STNK', value: 85 },
      { label: 'ujian SIM', value: 78 }, { label: 'antrian online', value: 70 },
      { label: 'pajak kendaraan', value: 66 }, { label: 'bayar non tunai', value: 54 }
    ],
    trigrams: [
      { label: 'perpanjangan STNK online', value: 81 }, { label: 'integrasi data kendaraan', value: 73 },
      { label: 'ujian SIM digital', value: 69 }, { label: 'layanan samsat keliling', value: 61 },
      { label: 'pembayaran pajak elektronik', value: 55 }, { label: 'pengaduan layanan SIM', value: 49 }
    ]
  },
  berusaha: {
    summary: { instansi: '90', inovasi: '232', rataRata: '2.6' },
    mapPoints: [
      { x: 18, y: 35, z: 11, label: 'Sumut' }, { x: 33, y: 49, z: 15, label: 'DKI' },
      { x: 41, y: 50, z: 16, label: 'Jateng' }, { x: 60, y: 41, z: 12, label: 'Kalsel' },
      { x: 74, y: 54, z: 10, label: 'Sulsel' }
    ],
    words: [
      { x: 'izin usaha', y: 29 }, { x: 'NIB', y: 27 }, { x: 'UMKM', y: 25 },
      { x: 'pendampingan', y: 21 }, { x: 'OSS', y: 19 }, { x: 'perizinan', y: 18 }
    ],
    bigrams: [
      { label: 'izin usaha', value: 96 }, { label: 'registrasi NIB', value: 88 },
      { label: 'pendampingan UMKM', value: 75 }, { label: 'akses modal', value: 67 },
      { label: 'nomor induk', value: 63 }, { label: 'pelatihan bisnis', value: 57 }
    ],
    trigrams: [
      { label: 'proses izin usaha', value: 82 }, { label: 'registrasi NIB cepat', value: 76 },
      { label: 'pendampingan pelaku UMKM', value: 69 }, { label: 'integrasi perizinan OSS', value: 61 },
      { label: 'akses pembiayaan usaha', value: 56 }, { label: 'pelatihan kewirausahaan daerah', value: 50 }
    ]
  }
}

const activeData = computed(() => lifecycleData[selectedJourney.value])

const mapSeries = computed(() => [
  {
    name: 'Sebaran Inovasi',
    data: activeData.value.mapPoints
  }
])

const mapOptions = {
  chart: {
    toolbar: { show: false },
    fontFamily: 'Poppins, sans-serif'
  },
  xaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: { show: false }
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4
  },
  fill: {
    opacity: 0.85,
    colors: ['#2894D9']
  },
  dataLabels: {
    enabled: true,
    formatter: (_, opts) => opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex].label,
    style: {
      colors: ['#1D4ED8'],
      fontSize: '11px'
    },
    offsetY: -8
  },
  tooltip: {
    y: {
      formatter: (val, opts) => `${opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex].label}: ${val} inovasi`
    }
  }
}

const wordCloudSeries = computed(() => [
  {
    data: activeData.value.words
  }
])

const wordCloudOptions = {
  chart: {
    toolbar: { show: false },
    fontFamily: 'Poppins, sans-serif'
  },
  legend: { show: false },
  dataLabels: {
    style: {
      fontSize: '14px',
      colors: ['#FFFFFF']
    }
  },
  colors: ['#145EA8', '#2894D9', '#1D78B3', '#2E5E8B', '#447DB6', '#1C4E80', '#0A66C2'],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: true,
      shadeIntensity: 0.45
    }
  },
  tooltip: {
    y: {
      formatter: (val) => `${val} kemunculan`
    }
  }
}

const bigrams = computed(() => activeData.value.bigrams)
const trigrams = computed(() => activeData.value.trigrams)

const bigramSeries = computed(() => [
  {
    name: 'Frekuensi',
    data: bigrams.value.map((item) => item.value)
  }
])

const trigramSeries = computed(() => [
  {
    name: 'Frekuensi',
    data: trigrams.value.map((item) => item.value)
  }
])

const baseBarOptions = {
  chart: {
    toolbar: { show: false },
    fontFamily: 'Poppins, sans-serif'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 6,
      barHeight: '65%'
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    labels: {
      style: {
        colors: '#6B7280'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#374151'
      }
    }
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 4
  },
  tooltip: {
    y: {
      formatter: (val) => `${val} kemunculan`
    }
  }
}

const bigramOptions = computed(() => ({
  ...baseBarOptions,
  colors: ['#2894D9'],
  xaxis: {
    ...baseBarOptions.xaxis,
    categories: bigrams.value.map((item) => item.label)
  }
}))

const trigramOptions = computed(() => ({
  ...baseBarOptions,
  colors: ['#111111'],
  xaxis: {
    ...baseBarOptions.xaxis,
    categories: trigrams.value.map((item) => item.label)
  }
}))
</script>
