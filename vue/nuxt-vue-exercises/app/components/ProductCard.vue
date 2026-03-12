<script setup lang="ts">
// Mejor tiparlo con un interface
interface Products {
  image: string
  title: string
  description: string
  price: number
}

const props = defineProps<Products>()
</script>

<template>
  <div class="m-9 border border-gray-200 rounded-lg shadow-lg">
    <img :src="props.image" :alt="props.title" class="w-64 h-64 object-cover rounded-lg mx-auto mt-6 mb-5 px-5" />
    <h2 class="px-5"><b>Title: </b>{{ props.title }}</h2>
    <p class="px-5 pt-3"><b>Description: </b>{{ props.description }}</p>
    <p class="px-5 pt-3"><b>Price: </b>${{ props.price}}</p>
    <button class="m-5 p-2 bg-green-600 border border-green-700 font-semibold text-white hover:bg-green-800 rounded">Comprar</button>
  </div>
</template>