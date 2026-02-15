<script setup lang="ts">
import { useCartStore } from "../../store/cart";
import { useFavoriteStore } from "../../store/favorite";
import type { CartItem } from "../../types/types";
import favoriteTrue from "../../public/favorite_icon_1.svg";
import favoriteFalse from "../../public/favorite_icon_0.svg";
const props = defineProps<{
    product: CartItem;
}>();
const cartStore = useCartStore();
const favoriteStore = useFavoriteStore();
const handleDecreaseQuantity = (product: CartItem) => {
    cartStore.decreaseQuantity(product);
};
const handleIncreaseQuantity = (product: CartItem) => {
    cartStore.addToCart(product);
};
const handleDeleteProduct = (product: CartItem) => {
    cartStore.removeFromCart(product);
};
const addToFavoriteHandler = (product: CartItem) => {
    favoriteStore.toggleFavorite(product);
};
</script>
<template>
    <div
        class="flex gap-4 border rounded justify-between bg-gray-100 border-[#c5c5c5] p-2"
    >
        <div class="flex">
            <img :src="product.thumbnail" :alt="product.title" class="w-48" />
            <div class="flex flex-col justify-between">
                <span>
                    <router-link to="/" class="hover:underline">
                        {{ product.title }}</router-link
                    ><br />
                    <span>★{{ product.rating }}</span>
                </span>
                <div>
                    <button @click="addToFavoriteHandler(product)" class="mr-6">
                        <img
                            :src="
                                favoriteStore.isInFavorite(product)
                                    ? favoriteTrue
                                    : favoriteFalse
                            "
                            alt="favorite icon"
                        />
                    </button>
                    <button @click="handleDeleteProduct(product)">
                        <img
                            src="../../public/delete_icon.svg"
                            alt="delete icon"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div class="flex gap-12 items-baseline text-xl px-2 box-border">
            <div class="flex gap-4 justify-center">
                <button
                    @click="handleDecreaseQuantity(product)"
                    class="rounded-full hover:bg-blue-200 h-8 w-8 transition-color duration-200 active:animate-ping active:scale-80"
                >
                    <img
                        src="../../public/minus_icon.svg"
                        alt="minus icon"
                        class="w-8 h-8 scale-80"
                    />
                </button>
                <span class="w-8 text-center">{{ product.quantity }}</span>
                <button
                    @click="handleIncreaseQuantity(product)"
                    class="rounded-full hover:bg-blue-200 h-8 w-8 transition-color duration-200 active:animate-ping active:scale-80"
                >
                    <img
                        src="../../public/plus_icon.svg"
                        alt="plus icon"
                        class="w-8 h-8 scale-80"
                    />
                </button>
            </div>
            <span class="self-start w-32"
                >{{ (product.price * product.quantity).toFixed(2) }} $</span
            >
        </div>
    </div>
</template>
