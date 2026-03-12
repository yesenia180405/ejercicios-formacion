<script setup>
import { icons } from '~/data/mock';
</script>
<template>
  <nav class="bg-blue-500 color-white
 text-white font-bold flex justify-between items-center  items-stretch">
    <NuxtLink to="/home" class=" text-3xl p-5">
      <TheTitle> Ejercicios de Nuxt</TheTitle>
    </NuxtLink>

    <img v-for="icon in icons"
    :key="icon.id"
    :src="icon.image"
    class="h-10 m-5"/>

    <div class="flex gap-3 text-lg">
      <NuxtLink to="/" class="text-white font-semibold hover:bg-blue-700 p-5">
      Contador
      </NuxtLink>

      <NuxtLink to="/catalogo"
        class=" text-white font-semibold hover:bg-blue-700 p-5">
        Contenido
      </NuxtLink>
      
    </div>
  </nav>
</template>