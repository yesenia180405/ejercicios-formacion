<script setup lang="ts">
import { RouterLink } from 'vue-router';


const title = 'Nuxt 4 - Vue Exercises'
</script>

<template>
  <nav class="bg-blue-500 color-white p-5 text-center text-white text-3xl font-bold">
    <h1>
      <TheTitle> Ejercicios de Nuxt</TheTitle>
    </h1>
  </nav>
  <TheCounter />
  <router-link to="/catalogo">Ir a contenido </router-link>
</template>