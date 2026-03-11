<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <NavBar />
  <div class="m-5">
    <p class="pb-5">
  Esta es una compilación de los ejercicios del módulo de Vue 3 + Nuxt 4.
</p>

<p class="pb-5">
  En estos ejercicios hemos aprendido a crear componentes reutilizables con props y slots,
  gestionar el estado reactivo con ref y reactive, y aplicar estilos con Tailwind CSS.
</p>

<p class="pb-7">
  También hemos explorado el uso de condicionales con v-if, la auto-importación de componentes
  en Nuxt 4 y la gestión del estado global con Pinia.
</p>
    <div>
      <router-link to="/"> <span class="bg-yellow-500 p-2 ml-10 text-white font-semibold
     border border-yellow-600 rounded-lg hover:bg-yellow-700">Ir a Index</span></router-link>

      <router-link to="/catalogo"
        class="bg-purple-500 p-2 ml-10 text-white font-semibold border border-purple-600 rounded-lg hover:bg-purple-700 inline-block">
        Ir a Contenido
      </router-link>
    </div>
  </div>
  <ParentComponent/>

</template>