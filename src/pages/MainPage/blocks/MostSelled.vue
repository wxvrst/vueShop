<script setup lang="ts">
import { ref } from 'vue';
import image1 from "../../../assets/selled_product_1.svg"
import image2 from "../../../assets/selled_product_2.svg"
import image3 from "../../../assets/selled_product_3.svg"
import image4 from "../../../assets/selled_product_4.svg"
const items = ref([
    {
        image: image1,
        name: "MacBook Pro 13",
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        price: "1,200.00",
    },
    {
        image: image2,
        name: "Smart Galaxy Watch 3",
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "199.00",
    },
    {
        image: image3,
        name: "MacBook Air M1",
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "1,009.00",
    },
    {
        image: image4,
        name: "iPad",
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "610.00",
    },
])
</script>
<template>
    <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-4 items-center">
            <span class="text-6xl">
                Save on our most selled items
            </span>
            <span class="w-1/2">
                Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
            </span>
        </div>
        <div class="grid grid-cols-4 gap-12">
            <div v-for="(item, index) in items" :key="index"    
                class="flex flex-col gap-1 justify-between rounded-2xl text-left px-1 cursor-pointer hover:shadow-sm"
            >
                <img :src="item.image" :alt="item.name">
                <span class="font-bold">{{ item.name }}</span>
                <span>{{ item.title }}</span>
                <span>$ {{ item.price }} USD</span>
            </div>
        </div>
    </section>
</template>