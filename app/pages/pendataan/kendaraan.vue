<template>
  <div class="max-w-4xl mx-auto p-6">
    <Stepper :current="4"/>

    <h2 class="text-2xl font-bold mb-6">
      4. Mengendarai atau Memiliki Kendaraan
    </h2>

    <InnovationForm />

    <div class="flex justify-between mt-8">
      <NuxtLink
        to="/pendataan/perguruan-tinggi"
        class="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50"
      >
        Kembali
      </NuxtLink>
      <NuxtLink
        to="/pendataan/berusaha"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Lanjut
      </NuxtLink>
    </div>
  </div>
</template>
