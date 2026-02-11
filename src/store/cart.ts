import { defineStore } from "pinia";
import type { CartItem, Product } from "../types/types";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
	const cart = ref<CartItem[]>([]);
	//Колво товаров
	const cartCount = ref<number>(0);
	//Общая стоимость
	const cartTotal = ref<number>(0);

	const addToCart = (product: Product) => {
		const item = cart.value.find((item) => item.id == product.id);
		cartCount.value++;
		cartTotal.value += product.price;
		if (item) {
			item.quantity++;
		} else {
			cart.value.push({ ...product, quantity: 1 });
		}
	};
	const removeFromCart = (product: CartItem) => {
		cart.value = cart.value.filter((item) => item.id != product.id);
		cartCount.value -= product.quantity;
	};
	const decreaseQuantity = (product: Product) => {
		const item = cart.value.find((item) => item.id == product.id);
		if (item) {
			cartCount.value--;
			cartTotal.value -= product.price;
			if (item.quantity == 1) {
				cart.value = cart.value.filter(
					(item) => item.id !== product.id,
				);
			} else {
				item.quantity--;
			}
		}
	};
	const clearCart = () => {
		cart.value = [];
		cartCount.value = 0;
		cartTotal.value = 0;
	};
	return {
		cart,
		addToCart,
		removeFromCart,
		decreaseQuantity,
		clearCart,
		cartCount,
		cartTotal,
	};
});
