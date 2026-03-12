<script setup>
import { mockProducts } from '~/data/mock';
definePageMeta({
    layout: 'product'
});
</script>
<template>
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