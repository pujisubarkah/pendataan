<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <Stepper :current="4"/>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 leading-tight">
      4. Mengendarai atau Memiliki Kendaraan
    </h2>

    <InnovationForm 
      siklus="Mengendarai atau Memiliki Kendaraan"
      prev-url="/pendataan/perguruan-tinggi"
      next-url="/pendataan/berusaha"
    />
  </div>
</template>
