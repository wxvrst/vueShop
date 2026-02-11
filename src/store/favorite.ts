import { defineStore } from "pinia";
import type { Product } from "../types/types";
import { ref } from "vue";

export const userFavoriteStore = defineStore("facorite", () => {
	const favorite = ref<Product[]>([]);

	const isInFavorite = (product: Product) => {
		return favorite.value.find((item) => item.id == product.id);
	};
	const toggleFavorite = (product: Product) => {
		const item = favorite.value.find((item) => item.id == product.id);
		if (item) {
			favorite.value = favorite.value.filter(
				(item) => item.id != product.id,
			);
		} else {
			favorite.value.push({ ...product });
		}
	};
	return {
		favorite,
		toggleFavorite,
		isInFavorite,
	};
});
