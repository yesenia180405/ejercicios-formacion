<script setup lang="ts">
const props=defineProps({
  image:String,
  title:String,
  description:String,
  price:Number
});
</script>

<template>
  <img :src="image" :alt="title">
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
  <p>{{ price }}</p>
  <button>Comprar</button>
</template>