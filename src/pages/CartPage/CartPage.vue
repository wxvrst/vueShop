<script setup lang="ts">
import CartCard from "../../components/ui/CartCard.vue";
import { useCartStore } from "../../store/cart";

const cartStore = useCartStore();
const handleClearCart = () => {
	cartStore.clearCart();
};
</script>
<template>
	<section class="flex gap-6 m-6">
		<div class="w-full border border-[#c5c5c5] rounded p-4 text-left">
			<div class="flex justify-between mb-2">
				<span>
					<span class="font-bold text-2xl">Cart: </span>
					<span class="text-gray-600"
						>{{ cartStore.cartCount }}
						{{
							cartStore.cartCount == 1 ? "product" : "products"
						}}</span
					>
				</span>
				<button
					@click="handleClearCart"
					class="border rounded-lg py-1 px-4 hover:text-white hover:bg-black transition-colors duration-400"
				>
					Clear Cart
				</button>
			</div>
			<div class="flex flex-col gap-4">
				<CartCard
					v-for="product in cartStore.cartList"
					:key="product.id"
					:product="product"
				></CartCard>
			</div>
		</div>
		<div
			class="w-1/4 flex flex-col gap-4 border border-[#c5c5c5] rounded p-4 text-center h-fit items-center"
		>
			<span class="text-2xl">Submit order</span>
			{{
				cartStore.cartCount
					? `${cartStore.cartTotal.toFixed(2)} $ in total`
					: "No products in cart"
			}}
			<button
				@click=""
				class="border rounded-lg py-1 px-4 hover:text-white hover:bg-black transition-colors duration-400"
			>
				Submit order
			</button>
		</div>
	</section>
</template>
