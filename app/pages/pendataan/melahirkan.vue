<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <Stepper :current="1"/>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 leading-tight">
      1. Melahirkan Anak
    </h2>

    <InnovationForm 
      siklus="Melahirkan Anak"
      prev-url="/profil"
      next-url="/pendataan/sekolah"
    />
  </div>
</template>
