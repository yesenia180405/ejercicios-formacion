<script setup lang="ts">
const saludo = defineEmits(["saludar"]);

function saludar() {
  saludo("saludar", 'Hola desde el componente hijo');
}

</script>

<template>
  <button @click="saludar"> <slot/> </button>
</template>