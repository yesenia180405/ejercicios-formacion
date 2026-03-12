<script setup>
const route = useRoute();
const title = (route.params.category).toLocaleUpperCase();
</script>
<template>
  <div class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-xl font-semibold my-5">{{ title }}</span></TheTitle>
    <NuxtLink to="/series-bonitas/aventura/spiderman">
      <CardSerie v-if="title=='AVENTURA'"
        :image="'https://m.media-amazon.com/images/I/61Pjp3yQLXL._AC_UF1000,1000_QL80_.jpg'"
        title="Episodio 1 de Spiderman" />
    </NuxtLink>

    <NuxtLink to="/series-bonitas/drama/twenty-five twenty-one">
      <CardSerie v-if="title=='DRAMA'"
        :image="'https://m.media-amazon.com/images/M/MV5BYTdjZWExZmMtZTY0Yy00N2U3LTkyYmYtMGNjZjUyZTM0Njg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'"
        title="Episodio 1 de Twenty-one Twenty-five" />
    </NuxtLink>

    <NuxtLink to="/series-bonitas/terror/american horror story">
      <CardSerie v-if="title=='TERROR'"
        :image="'https://m.media-amazon.com/images/I/71G2VTP6tLL._AC_UF894,1000_QL80_.jpg'"
        title="Episodio 1 de American Horror Story" />
    </NuxtLink>

    <NuxtLink to="/series-bonitas/fantasia/harry potter">
      <CardSerie v-if="title=='FANTASIA'"
        :image="'https://static.posters.cz/image/1300/104639.jpg'"
        title="Episodio 1 de Harry Potter" />
    </NuxtLink>
  </div>
</template>