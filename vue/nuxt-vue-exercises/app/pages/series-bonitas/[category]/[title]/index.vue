<script setup>
const route = useRoute();
const title = route.params.title;
const category = route.params.category;
</script>
<template>
  <div v-if="category === 'aventura'" class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-xl font-semibold my-5 uppercase">{{ title }}</span></TheTitle>
    <p class="uppercase text-gray-500 mb-5">{{ category }}</p>
    <iframe src="https://www.youtube.com/embed/2OPOGUUkauc" width="1000" height="600" />
  </div>

  <div v-if="category === 'drama'" class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-xl font-semibold my-5 uppercase">{{ title }}</span></TheTitle>
    <p class="uppercase text-gray-500 mb-5">{{ category }}</p>
    <iframe src="https://www.youtube.com/embed/gYp4cKumTwU" width="1000" height="600" />
  </div>

  <div v-if="category === 'terror'" class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-xl font-semibold my-5 uppercase">{{ title }}</span></TheTitle>
    <p class="uppercase text-gray-500 mb-5">{{ category }}</p>
    <iframe src="https://www.youtube.com/embed/b9uMWKPdnPA" width="1000" height="600" />
  </div>

  <div v-if="category === 'fantasia'" class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-xl font-semibold my-5 uppercase">{{ title }}</span></TheTitle>
    <p class="uppercase text-gray-500 mb-5">{{ category }}</p>
    <iframe src="https://www.youtube.com/embed/Yu9jHZrwtjI" width="1000" height="600" />
  </div>


</template>