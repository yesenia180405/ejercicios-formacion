<script setup lang="ts">
const mensaje = ref("")
const mensajePadre = ref("Hola desde el componente Padre");

function saludoHijo(payload: string) {
  if (!mensaje.value) return mensaje.value = payload;
  mensaje.value = "Adiós, desde el componente hijo";

  return setTimeout(() => { mensaje.value = "" }, 1500);
}
provide("mensajePadre", mensajePadre);

</script>

<template>
  <ChildComponent :visibility="false" custom-class="bg-green-500 p-2 border border-green-600 ml-7 rounded-lg 
  font-semibold text-white hover:bg-green-700" @saludar="saludoHijo" v-if="mensaje == ''"> Saludar desde el hijo
  </ChildComponent>

  <ChildComponent @saludar="saludoHijo" custom-class="bg-red-500 p-2 border border-red-600 ml-7 rounded-lg 
  font-semibold text-white hover:bg-red-700" v-else> Despedirse </ChildComponent>
  <p class="m-5">{{ mensaje }}</p>

  <ChildComponent :visibility="true" custom-class="bg-purple-500 p-2 border border-purple-600 ml-7 rounded-lg 
font-semibold text-white hover:bg-purple-700"> Saludar desde el Padre </ChildComponent>

</template>