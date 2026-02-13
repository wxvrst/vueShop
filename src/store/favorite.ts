import { defineStore } from "pinia";
import type { Product } from "../types/types";
import { ref } from "vue";

export const useFavoriteStore = defineStore("facorite", () => {
  const favoriteList = ref<Product[]>([]);
  const favoriteCount = ref<number>(0);

  const isInFavorite = (product: Product) => {
    return favoriteList.value.find((item) => item.id == product.id);
  };
  const toggleFavorite = (product: Product) => {
    const item = favoriteList.value.find((item) => item.id == product.id);
    if (item) {
      favoriteList.value = favoriteList.value.filter(
        (item) => item.id != product.id,
      );
      favoriteCount.value--;
    } else {
      favoriteCount.value++;
      favoriteList.value.push({ ...product });
    }
  };
  return {
    favoriteList,
    favoriteCount,
    toggleFavorite,
    isInFavorite,
  };
});
