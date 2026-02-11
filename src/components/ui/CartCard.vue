<script setup lang="ts">
import { useCartStore } from "../../store/cart";
import type { CartItem } from "../../types/types";

const props = defineProps<{
	product: CartItem;
}>();
const cartStore = useCartStore();

const addToFavoriteHandler = () => {};
</script>
<template>
	<div class="flex gap-2">
		<img :src="product.thumbnail" :alt="product.title" class="w-48" />
		<div class="flex flex-col justify-between">
			<span>
				<router-link to="/" class="hover:underline">
					{{ product.title }}</router-link
				><br />
				<span>★{{ product.rating }}</span>
			</span>
			<div>
				<button @click="addToFavoriteHandler" class="mr-6">
					<img
						src="../../assets/favorite_icon_0.svg"
						alt="favorite icon"
					/>
					<!-- TODO:add another icon if already in favourite to toggle -->
				</button>
				<button @click="cartStore.decreaseQuantity(product)">
					<img src="../../assets/delete_icon.svg" alt="delete icon" />
				</button>
			</div>
		</div>
	</div>
</template>
