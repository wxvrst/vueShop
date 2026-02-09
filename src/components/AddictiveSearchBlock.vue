<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    {
        title: "iPhone",
        url: "/"
    },
    {
        title: "Charger",
        url: "/"
    },
    {
        title: "Gift",
        url: "/"
    },
    {
        title: "Google Pixel 3",
        url: "/"
    },
    {
        title: "Keyboard",
        url: "/"
    },
    {
        title: "13 Pro Max",
        url: "/"
    },
    {
        title: "iPhone 12",
        url: "/"
    },
    {
        title: "Laptop",
        url: "/"
    },
    {
        title: "Mobile",
        url: "/"
    },
])
</script>
<template>
    <section class="flex flex-col gap-8">
        <div class="flex flex-col gap-4 items-center">
            <span class="text-6xl">
                Look for anything else?
            </span>
            <div class="relative w-full">
                <input type="search" placeholder="Search keyboard"
                    class="border py-3 px-12 w-1/2 rounded-4xl border-[#C5C5C5] outline-none hover:border-[#888888] focus:border-[#888888]">
                <img src="../assets/search_icon.svg" alt="seatch icon" class="absolute left-10/39 top-3">
                </input>
            </div>
            <div class="flex flex-wrap gap-2 w-1/2 justify-center">
                <router-link v-for="(item, index) in items" :key="index" :to=item.url
                    class="border border-[#C5C5C5] rounded-4xl py-2 px-6 hover:border-[#888888]">
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </section>
</template>