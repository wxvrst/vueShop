<script setup lang="ts">
import type { Product } from "@/types/types";
import { useFavoriteStore } from "@/store/favorite";
import favoriteTrue from "@/public/favorite_icon_1.svg";
import favoriteFalse from "@/public/favorite_icon_0.svg";

const props = defineProps<{
    product: Product;
}>();
const favoriteStore = useFavoriteStore();
const addToFavoriteHandler = (product: Product) => {
    favoriteStore.toggleFavorite(product);
};
</script>
<template>
    <router-link
        class="relative flex flex-col rounded justify-between cursor-pointer gap-2 text-left group hover:animate-pulse"
        :to="{ name: 'product', params: { id: product.id } }"
    >
        <button
            @click.stop.prevent="addToFavoriteHandler(product)"
            class="mr-4 absolute right-2 top-4 active:animate-ping active:scale-80 duration-200"
        >
            <img
                :src="
                    favoriteStore.isInFavorite(product)
                        ? favoriteTrue
                        : favoriteFalse
                "
                alt="favorite icon"
            />
        </button>
        <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-fit bg-gray-100 rounded-lg"
            loading="lazy"
        />
        <span class="text-green-600 font-semibold">
            $ {{ product.price }} USD</span
        >
        <span
            class="line-clamp-3 group-hover:text-blue-800 transition-colors duration-200"
        >
            {{ product.description }}
        </span>
        <div class="flex gap-2">
            <span>
                <span class="text-yellow-400">★ </span>
                {{ product.rating }}
            </span>
            <span class="text-gray-600">
                {{ product.reviews?.length }} reviews</span
            >
        </div>
    </router-link>
</template>
