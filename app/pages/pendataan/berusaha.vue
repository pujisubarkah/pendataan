<template>
  <div class="max-w-4xl mx-auto p-6">
    <Stepper :current="5"/>

    <h2 class="text-2xl font-bold mb-6">
      5. Memulai Berusaha
    </h2>

    <InnovationForm />

    <div class="flex justify-between mt-8">
      <NuxtLink
        to="/pendataan/kendaraan"
        class="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50"
      >
        Kembali
      </NuxtLink>
      <button
        class="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Selesai / Simpan Data
      </button>
    </div>
  </div>
</template>
