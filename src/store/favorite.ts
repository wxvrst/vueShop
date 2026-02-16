import { defineStore } from "pinia";
import type { Product } from "@/types/types";
import { computed, ref } from "vue";

export const useFavoriteStore = defineStore(
  "favorite",
  () => {
    const favoriteList = ref<Product[]>([]);
    const favoriteTotalCount = computed(() => {
      console.log(favoriteTotalCount);
      return favoriteList.value.reduce((sum) => sum + 1, 0);
    });
    const isInFavorite = (product: Product) => {
      return favoriteList.value.find((item) => item.id == product.id);
    };
    const toggleFavorite = (product: Product) => {
      const item = favoriteList.value.find((item) => item.id == product.id);
      if (item) {
        favoriteList.value = favoriteList.value.filter(
          (item) => item.id != product.id,
        );
      } else {
        favoriteList.value.push({ ...product });
      }
    };
    const clearFavoriteList = () => {
      favoriteList.value = [];
    };
    return {
      favoriteList,
      favoriteTotalCount,
      toggleFavorite,
      isInFavorite,
      clearFavoriteList,
    };
  },
  {
    persist: {
      pick: ["favoriteList"],
      storage: sessionStorage,
      key: "favorite-list",
    },
  },
);
