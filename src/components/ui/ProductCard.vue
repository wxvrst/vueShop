<script setup lang="ts">
import type { Product } from '../../types/types';
import { useProductStore } from '../../store/products';
const props = defineProps<{
    product: Product
}>()
const productStore = useProductStore()
// const addToCartHandler = (product: Product) => {
//     productStore.addToCart(product)
// }
</script>
<template>
    <div class="flex flex-col gap-2 p-2">
        <div class="flex flex-col gap-1 justify-between rounded-2xl text-left px-1 cursor-pointer hover:shadow-sm">
            <img :src="product.thumbnail" :alt="product.title">
            <span class="font-bold">{{ product.title }}</span>
            <span>{{ product.description }}</span>
            <div>
                <span>$ {{ product.price }} USD</span>
                <!-- <button @click="addToCartHandler(product)">Add to Cart</button> -->
            </div>
        </div>
    </div>
</template>