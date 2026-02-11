<script setup lang="ts">
import type { Product } from "../../types/types";
import { useCartStore } from "../../store/cart";
const props = defineProps<{
	product: Product;
}>();
const cartStore = useCartStore();
const addToCartHandler = (product: Product) => {
	cartStore.addToCart(product);
	console.log(cartStore.cart);
};
</script>
<template>
	<div class="flex flex-col gap-2 p-2">
		<div
			class="flex flex-col justify-between p-2 gap-1 rounded-2xl text-left hover:shadow-sm"
		>
			<img :src="product.thumbnail" :alt="product.title" class="w-full" />
			<div class="flex flex-col gap-2">
				<span class="font-bold cursor-pointer">{{
					product.title
				}}</span>
				<span class="line-clamp-3">{{ product.description }}</span>
			</div>
			<div class="flex justify-between items-center">
				<span>$ {{ product.price }} USD</span>
				<button
					@click="addToCartHandler(product)"
					class="border py-1 px-4 rounded cursor-pointer hover:text-white hover:bg-black transition-colors duration-200 ease-linear"
				>
					Add to Cart
				</button>
			</div>
		</div>
	</div>
</template>
