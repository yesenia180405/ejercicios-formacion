<script setup lang="ts">
const saludo = defineEmits(["saludar"]);
const saludoPadre = inject("mensajePadre");
// sintaxis correcta para un boolena en ref
const visible = ref<boolean>(false);
function saludar() {
  saludo("saludar", 'Hola desde el componente hijo');
}

const componentVisible= defineProps(
  {
    visibility:Boolean,
    customClass:String
  }
);
</script>

<template>
  <button @click="saludar" :class="customClass">
    <slot />
  </button>
  <div v-if="componentVisible.visibility">
  <button @click="visible = !visible" :class="customClass">
    <slot />
  </button>

  <p v-if="visible">{{ saludoPadre }}</p>
</div>
</template>