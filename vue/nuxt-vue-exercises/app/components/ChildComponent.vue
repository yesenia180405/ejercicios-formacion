<script setup lang="ts">
const saludo = defineEmits(["saludar"]);
const saludoPadre = inject("mensajePadre");
// sintaxis correcta para un boolena en ref
const visible = ref<boolean>(false);
function saludar() {
  saludo("saludar", 'Hola desde el componente hijo');
}

const componentVisible = defineProps(
  {
    visibility: Boolean,
    customClass: String
  }
);
</script>
<template>
  <div v-if="!visibility">
    <button @click="saludar" :class="customClass">
      <slot />
    </button>
  </div>

  <div v-if="visibility">
    <button @click="visible = !visible" :class="customClass">
      <slot />
    </button>

    <p v-if="visible" class="m-5 pl-3">{{ saludoPadre }}</p>
  </div>

</template>