<script setup lang="ts">
import { RouterLink } from 'vue-router';


const title = 'Nuxt 4 - Vue Exercises'
</script>

<template>
  <NavBar/>
  <div class="m-5">  
  <TheCounter />
  <router-link to="/catalogo"><span class="bg-fuchsia-600 border border-fuchsia-700 rounded mr-3 p-1 text-white mt-3">Ir a contenido</span> </router-link>
</div>
</template>