<script setup lang="ts">
const mensaje = ref("")

function saludoHijo(payload: string) {
  if (!mensaje.value) return mensaje.value = payload;

  mensaje.value="Adiós, desde el hijo";

  return  setTimeout(()=>{mensaje.value = ""},1500);
}
</script>

<template>
  <ChildComponent @saludar="saludoHijo" v-if="mensaje==''" class="bg-green-500 p-2 border border-green-600 ml-16 rounded-lg 
  font-semibold text-white hover:bg-green-700"> Saludar </ChildComponent>
  <ChildComponent @saludar="saludoHijo" v-else class="bg-red-500 p-2 border border-red-600 ml-16 rounded-lg 
  font-semibold text-white hover:bg-red-700"> Despedirse </ChildComponent>
  <p class="m-5">{{ mensaje }}</p>


</template>