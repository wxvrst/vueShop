<script setup lang="ts">
import CartCard from "@/components/ui/CartCard.vue";
import { useCartStore } from "@/store/cart";
import Button from "@/components/ui/Button.vue";
const cartStore = useCartStore();
const handleClearCart = () => {
    cartStore.clearCart();
};
</script>
<template>
    <section class="flex gap-6 m-6">
        <div class="w-full border border-gray-400 rounded p-4 text-left">
            <div class="flex justify-between mb-2">
                <span>
                    <span class="font-bold text-2xl">Cart: </span>
                    <span class="text-gray-600">
                        {{ cartStore.cartTotalCount }}
                        {{
                            cartStore.cartTotalCount == 1
                                ? "product"
                                : "products"
                        }}
                    </span>
                </span>
                <Button @click="handleClearCart"> Clear Cart </Button>
            </div>
            <div class="flex flex-col gap-4">
                <CartCard
                    v-for="product in cartStore.cartList"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </div>
        <div
            class="w-1/4 flex flex-col gap-4 border border-gray-400 rounded p-4 text-center h-fit items-center"
        >
            <span class="text-2xl">Submit order</span>
            {{
                cartStore.cartTotalCount
                    ? `${cartStore.cartTotalPrice.toFixed(2)} $ in total`
                    : "No products in cart"
            }}
            <Button @click=""> Submit order </Button>
        </div>
    </section>
</template>
