<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <Stepper :current="3"/>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 leading-tight">
      3. Memasuki Perguruan Tinggi
    </h2>

    <InnovationForm 
      siklus="Memasuki Perguruan Tinggi"
      prev-url="/pendataan/sekolah"
      next-url="/pendataan/kendaraan"
    />
  </div>
</template>
