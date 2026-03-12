<script setup lang="ts">
// Mejor tiparlo con un interface
interface Serie {
  image: string
  title: string
}

const props = defineProps<Serie>()
</script>

<template>
  <div class="m-9 border border-gray-200 rounded-lg shadow-lg">
    <img :src="props.image" :alt="props.title" class="w-64 h-64 object-cover rounded-lg mx-auto mt-6 mb-5 px-5" />
    <h2 class="px-5 mb-5"><b><slot /> </b>{{ props.title }}</h2>
  </div>
</template>