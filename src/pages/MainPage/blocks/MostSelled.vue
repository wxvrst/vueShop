<script setup lang="ts">
import image1 from "@/public/selled_product_1.svg";
import image2 from "@/public/selled_product_2.svg";
import image3 from "@/public/selled_product_3.svg";
import image4 from "@/public/selled_product_4.svg";
import ProductCard from "@/components/ui/ProductCard.vue";
import type { Product } from "@/types/types";

const items = ref<Product[]>([
    {
        id: 195,
        thumbnail: image1,
        title: "MacBook Pro 13",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        price: 1200.0,
        category: "smth",
    },
    {
        id: 196,
        thumbnail: image2,
        title: "Smart Galaxy Watch 3",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: 199.0,
        category: "smth",
    },
    {
        id: 197,
        thumbnail: image3,
        title: "MacBook Air M1",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: 1009.0,
        category: "smth",
    },
    {
        id: 198,
        thumbnail: image4,
        title: "iPad",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: 610.0,
        category: "smth",
    },
]);
</script>
<template>
    <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-4 items-center">
            <span class="text-6xl"> Save on our most selled items </span>
            <span class="w-1/2">
                Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
            </span>
        </div>
        <div class="grid grid-cols-4 gap-12">
            <ProductCard
                v-for="(item, index) in items"
                :product="item"
                :key="index"
            />
        </div>
    </section>
</template>
