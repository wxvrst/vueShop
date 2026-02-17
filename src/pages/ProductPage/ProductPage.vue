<script setup lang="ts">
import { useProductStore } from "@/store/products";
import Button from "@/components/ui/Button.vue";
import { useCartStore } from "@/store/cart";

const productStore = useProductStore();
const cartStore = useCartStore();
const route = useRoute();

const currentProduct = computed(() => productStore.currentProduct);
const handleAddToCart = () => {
    if (currentProduct.value) {
        cartStore.addToCart(currentProduct.value);
    }
};
const handleOrderNow = () => {};
onMounted(() => {
    productStore.fetchProduct(Number(route.params.id));
});
</script>
<template>
    <section
        class="w-9/10 flex gap-4 border border-gray-400 rounded py-2 px-4 text-left place-self-center"
    >
        <img
            :src="currentProduct?.thumbnail"
            :alt="currentProduct?.title"
            class="bg-white rounded-lg"
        />
        <div class="flex flex-col gap-2">
            <span class="font-semibold">
                {{ currentProduct?.title }}
                ★ {{ currentProduct?.rating }}
            </span>
            <span> {{ currentProduct?.description }}</span>
        </div>
        <div
            class="flex flex-col gap-2 bg-gray-100 border border-gray-600 rounded-lg p-4 h-fit"
        >
            <span class="text-xl whitespace-nowrap">Want to order?</span>
            <Button @click="handleAddToCart">Add to cart</Button>
            <Button @click="handleOrderNow">Order now</Button>
        </div>
    </section>
</template>
