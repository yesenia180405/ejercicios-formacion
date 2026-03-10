<script setup>
import { mockProducts } from '~/data/mock';
</script>
<template>
    <ProductCard
    v-for="product in mockProducts"
    :key="product.id"
    :image="product.image"
    :title="product.title"
    :description="product.description"
    :price="product.price"
    />

</template>