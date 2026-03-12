<script setup>
import { icons } from '~/data/mock';
</script>
<template>
  <nav class="bg-purple-400 color-white sticky top-0 w-full
 text-white font-bold flex justify-between items-center items-stretch">
    <NuxtLink to="/home" class=" text-3xl p-5">
      <TheTitle> <h2>Menú</h2></TheTitle>
    </NuxtLink>


    <img v-for="icon in icons" :key="icon.id" :src="icon.image" class="h-10 m-5" />

    <div class="flex gap-3 text-lg">
      <NuxtLink to="/home"  class="text-white font-semibold hover:bg-purple-700 p-5">
        Home
      </NuxtLink>

      <NuxtLink to="/" class="text-white font-semibold hover:bg-purple-700 p-5">
        Contador
      </NuxtLink>

      <NuxtLink to="/catalogo" class=" text-white font-semibold hover:bg-purple-700 p-5">
        Contenido
      </NuxtLink>

    </div>
  </nav>
</template>