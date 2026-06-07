<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6">
    <Stepper :current="5"/>

    <h2 class="text-xl sm:text-2xl font-bold mb-6 leading-tight">
      5. Memulai Berusaha
    </h2>

    <InnovationForm 
      siklus="Memulai Berusaha"
      prev-url="/pendataan/kendaraan"
      next-url="/pendataan"
    />
  </div>
</template>
