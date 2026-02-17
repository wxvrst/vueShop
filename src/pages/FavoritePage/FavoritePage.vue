<script setup lang="ts">
import ProductCard from "@/components/ui/ProductCard.vue";
import { useCartStore } from "@/store/cart";
import { useFavoriteStore } from "@/store/favorite";
import Button from "@/components/ui/Button.vue";

const favoriteStore = useFavoriteStore();
const cartStore = useCartStore();

const handleAddEverything = () => {
    cartStore.addAllFavorite(favoriteStore.favoriteList);
};
const handleClearFavorite = () => {
    favoriteStore.clearFavoriteList();
};
</script>
<template>
    <section class="flex gap-4">
        <div
            class="flex flex-col gap-4 p-4 border border-gray-400 rounded-lg w-full"
        >
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
            <div class="grid grid-cols-3 wrap gap-4">
                <ProductCard
                    v-for="product in favoriteStore.favoriteList"
                    :product="product"
                />
            </div>
        </div>
        <div
            class="border border-gray-400 rounded-lg p-4 h-fit flex flex-col gap-2 items-center"
        >
            <span> Order everything from favorite </span>
            <Button @click="handleAddEverything"> Magic click </Button>
        </div>
    </section>
</template>
