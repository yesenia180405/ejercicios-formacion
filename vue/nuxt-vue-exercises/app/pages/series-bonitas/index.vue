<script setup></script>
<template>
  <div class="flex flex-col items-center mt-9">
    <TheTitle> <span class="text-2xl font-semibold">Series Bonitas</span></TheTitle>
    <div class="m-5 text-lg text-center">
      <p> Bienvenido/a a la página de series bonitas</p>
      <p>En este espacio encontraras mucha variedad de contenido y categorias, selecciona una para empezar</p>
    </div>
  </div>
  <div class="flex justify-center">
    <NuxtLink to="/series-bonitas/aventura">
      <CardSerie :image="'https://www.movistarplus.es/recorte/e/original/155e86951df54fa90f750f93c55f04d9.webp'"
        title="Aventura">Género: </CardSerie>
    </NuxtLink>
    <NuxtLink to="/series-bonitas/drama">
      <CardSerie
        :image="'https://media.biobiochile.cl/wp-content/uploads/2023/12/social-k-dramas-series-coreanas-peliculas-netflix-chile.jpg'"
        title="Drama">Género: </CardSerie>
    </NuxtLink>

    <NuxtLink to="/series-bonitas/terror">
      <CardSerie
        :image="'https://alba-gt-chapinradio.cdn.mediatiquepress.com/wp-content/uploads/2019/07/Banner-TerrorSeries.png'"
        title="Terror">Género: </CardSerie>
    </NuxtLink>
    
    <NuxtLink to="/series-bonitas/fantasia">
      <CardSerie
        :image="'https://preview.redd.it/reviews-for-favorite-fantasy-and-sci-fi-novels-i-read-in-v0-g693wthem79c1.jpg?width=1134&format=pjpg&auto=webp&s=aed70ffab4459aa36e42bfab1d861651b13b9f9b'"
        title="Fantasia">Género: </CardSerie>
    </NuxtLink>
  </div>
</template>