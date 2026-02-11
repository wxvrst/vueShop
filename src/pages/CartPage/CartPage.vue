<script setup lang="ts">
import CartCard from "../../components/ui/CartCard.vue";
import { useCartStore } from "../../store/cart";

const cartStore = useCartStore();
const clearCartHandler = () => {};
</script>
<template>
	<section class="border border-[#c5c5c5] rounded-xl flex gap-6 m-6">
		<div class="p-4 text-left">
			<div class="flex justify-between">
				<span>
					<span class="font-bold text-2xl">Cart: </span>
					<span class="text-gray-600"
						>{{ cartStore.cartCount }}
						{{
							cartStore.cartCount == 1 ? "product" : "products"
						}}</span
					>
				</span>
				<button @click="clearCartHandler"></button>
			</div>
			<div class="flex flex-col gap-2">
				<CartCard
					v-for="product in cartStore.cart"
					:key="product.id"
					:product="product"
				></CartCard>
			</div>
		</div>
	</section>
</template>
