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
    <div>
        <TheCounter/>
    </div>

</template>