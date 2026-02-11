<script setup lang="ts">
import type { Product } from "../../types/types";
import { useCartStore } from "../../store/cart";
import { userFavoriteStore } from "../../store/favorite";
import favoriteTrue from "../../assets/favorite_icon_1.svg";
import favoriteFalse from "../../assets/favorite_icon_0.svg";

const props = defineProps<{
	product: Product;
}>();
const cartStore = useCartStore();
const favoriteStore = userFavoriteStore();
const addToFavoriteHandler = (product: Product) => {
	favoriteStore.toggleFavorite(product);
};
const addToCartHandler = (product: Product) => {
	cartStore.addToCart(product);

};
</script>
<template>
	<div class="flex flex-col gap-2 p-2 relative">
		<button @click="addToFavoriteHandler(product)" class="mr-6 absolute right-2 top-4 active:animate-ping active:scale-80 duration-200">
			<img
				:src="
					favoriteStore.isInFavorite(product)
						? favoriteTrue
						: favoriteFalse
				"
				alt="favorite icon"
			/>
		</button>
		<div
			class="flex flex-col justify-between min-h-120 p-2 gap-1 rounded-2xl text-left hover:shadow-sm"
		>
			<img :src="product.thumbnail" :alt="product.title" class="w-full" />
			<div class="flex flex-col gap-2">
				<span class="font-bold cursor-pointer">{{
					product.title
				}}</span>
				<span class="line-clamp-3">{{ product.description }}</span>
			</div>
			<div class="flex justify-between items-center">
				<span class="text-green-600">$ {{ product.price }} USD</span>
				<button
					@click="addToCartHandler(product)"
					class="border py-1 px-4 rounded cursor-pointer hover:text-white hover:bg-black transition-colors 
					duration-200 ease-linear active:animate-ping active:scale-60"
				>
					Add to Cart
				</button>
			</div>
		</div>
	</div>
</template>
