<script setup>
import { mockProducts } from '~/data/mock';
import { RouterLink } from 'vue-router';
</script>
<template>
    <NavBar />
    <div class="grid grid-cols-3">
        <ProductCard 
        v-for="product in mockProducts" 
        :key="product.id" 
        :image="product.image" 
        :title="product.title"
        :description="product.description" 
        :price="product.price" />
    </div>
    <router-link to="/home"> <span class="bg-purple-500 p-2 ml-10 text-white font-semibold
     border border-purple-600 rounded-lg hover:bg-purple-700">Ir a Home</span></router-link>
</template>