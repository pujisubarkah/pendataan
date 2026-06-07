<template>
  <div class="max-w-4xl mx-auto p-6">
    <Stepper :current="1"/>

    <h2 class="text-2xl font-bold mb-6">
      1. Melahirkan Anak
    </h2>

    <InnovationForm />

    <div class="flex justify-between mt-8">
      <NuxtLink
        to="/pendataan"
        class="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50"
      >
        Kembali
      </NuxtLink>
      <NuxtLink
        to="/pendataan/sekolah"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Lanjut
      </NuxtLink>
    </div>
  </div>
</template>
