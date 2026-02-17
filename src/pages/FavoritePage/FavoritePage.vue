<script setup lang="ts">
import ProductCard from "@/components/ui/ProductCard.vue";
import { useFavoriteStore } from "@/store/favorite";
import Button from "@/components/ui/Button.vue";

const favoriteStore = useFavoriteStore();
const handleClearFavorite = () => {
    favoriteStore.clearFavoriteList();
};
</script>
<template>
    <section class="flex flex-col gap-4 w-full">
        <div class="text-left flex justify-between">
            <div>
                <span class="font-bold text-2xl">Total: </span>
                <span class="text-gray-600">
                    {{ favoriteStore.favoriteTotalCount }} products
                </span>
            </div>
            <Button @click="handleClearFavorite"> Clear favorite </Button>
        </div>
        <div class="border-b border-gray-400"></div>
        <div class="grid grid-cols-4 gap-4">
            <ProductCard
                v-for="product in favoriteStore.favoriteList"
                :product="product"
            />
        </div>
    </section>
</template>
