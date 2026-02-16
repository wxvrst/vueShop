<script setup lang="ts">
import ProductCard from "@/components/ui/ProductCard.vue";
import { useCartStore } from "@/store/cart";
import { useFavoriteStore } from "@/store/favorite";

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
            class="flex flex-col gap-4 p-4 border border-[#bcbcbc] rounded-lg bg-[#f4f4f4] w-full"
        >
            <div class="text-left flex justify-between">
                <div>
                    <span class="font-bold text-2xl">Total: </span>
                    <span class="text-gray-600">
                        {{ favoriteStore.favoriteTotalCount }} products
                    </span>
                </div>
                <button
                    @click="handleClearFavorite"
                    class="border rounded-lg py-2 px-4 hover:bg-black hover:text-white transition-colors duration-400"
                >
                    Clear favorite
                </button>
            </div>
            <div class="border-b border-[#bcbcbc]"></div>
            <div class="grid grid-cols-3 wrap gap-4">
                <ProductCard
                    v-for="product in favoriteStore.favoriteList"
                    :product="product"
                ></ProductCard>
            </div>
        </div>
        <div
            class="border border-[#bcbcbc] bg-[#f4f4f4] rounded-lg p-4 h-fit flex flex-col gap-2 items-center"
        >
            <span> Order everything from favorite </span>
            <button
                @click="handleAddEverything"
                class="border rounded-lg w-fit py-2 px-6 hover:text-white hover:bg-black transition-colors duration-200 active:animate-ping active:scale-80"
            >
                Magic click
            </button>
        </div>
    </section>
</template>
