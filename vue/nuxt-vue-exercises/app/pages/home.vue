<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <NavBar />
    <div class="m-5">
        <p class="p-5">
            Esta es una compilación de los apartados del 6to ejercicio
        </p>
        <div>
        <router-link to="/"> <span class="bg-yellow-500 p-2 ml-10 text-white font-semibold
     border border-yellow-600 rounded-lg hover:bg-yellow-700">Ir a Index</span></router-link>

       <router-link 
  to="/catalogo"
  class="bg-purple-500 p-2 ml-10 text-white font-semibold border border-purple-600 rounded-lg hover:bg-purple-700 inline-block"
>
  Ir a Contenido
</router-link>
        </div>
    </div>
</template>