<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <Stepper :current="2"/>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 leading-tight">
      2. Mendaftar Sekolah
    </h2>

    <InnovationForm 
      siklus="Mendaftar Sekolah"
      prev-url="/pendataan/melahirkan"
      next-url="/pendataan/perguruan-tinggi"
    />
  </div>
</template>
