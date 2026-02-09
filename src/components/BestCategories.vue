<script setup lang="ts">
import { ref } from 'vue';
import image1 from '../assets/best_categories_1.svg'
import image2 from '../assets/best_categories_2.svg'
import image3 from '../assets/best_categories_3.svg'
const items=ref([
    {
        name:"Smart light bulb pack",
        title:"Latest and gratest",
        url:"/",
        image:image1,
    },
    {
        name:"Smart light bulb pack",
        title:"Best selling",
        url:"/",
        image:image2,
    },
    {
        name:"Smart light bulb pack",
        title:"Every product",
        url:"/",
        image:image3,
    }
])
</script>
<template>
    <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-4 items-center">
            <span class="text-6xl">
                See the best around here
            </span>
            <span class="w-1/2">
                Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
            </span>
        </div>
        <div class="grid grid-cols-3 gap-12">
            <div v-for="(item,index) in items" :key="index"
                class="bg-[#F8F9FA] flex flex-col gap-4 justify-center rounded-2xl items-center px-1 pt-10 pb-2"
            >
                <div class="flex flex-col">
                    <span>{{ item.name }}</span>
                    <span class="text-4xl">{{ item.title }}</span>
                </div>
                <button @click="$router.push(item.url)"
                    class="border rounded-4xl py-2 px-16 cursor-pointer w-fit"
                >
                    Explore
                </button>
                <img :src="item.image" :alt="item.title" class="w-fit">
            </div>
        </div>
    </section>
</template>