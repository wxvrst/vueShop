<script setup lang="ts">
import image1 from "@/public/favorite_icon.svg";
import image2 from "@/public/profile_icon.svg";
import image3 from "@/public/cart_icon.svg";
const links = [
    {
        title: "ALL PRODUCTS",
        href: "/shop",
    },
    {
        title: "SOLUTIONS",
        // href: "/solutions",
        href: "/",
    },
    {
        title: "ABOUT",
        // href: "/about",
        href: "/",
    },
    {
        title: "SUPPORT",
        // href: "/support",
        href: "/",
    },
];
const linkIcons = [
    {
        title: "Favorite",
        icon: image1,
        href: "/favorite",
    },
    {
        title: "Profile",
        icon: image2,
        href: "/profile",
    },
    {
        title: "Cart",
        icon: image3,
        href: "/cart",
    },
];
</script>
<template>
    <header class="flex justify-between w-full my-6 items-center">
        <router-link to="/" class="w-60">
            <img src="@/public/logo.svg" alt="logo" />
        </router-link>
        <div class="flex gap-8">
            <router-link
                v-for="(link, index) in links"
                :to="link.href"
                :key="index"
                class="border-b border-transparent hover:border-black transition-all duration-260 ease-in h-fit"
            >
                {{ link.title }}
            </router-link>
        </div>
        <div class="flex gap-6 items-center justify-center w-fit">
            <router-link
                v-for="(item, index) in linkIcons"
                :to="item.href"
                :key="index"
                class="flex flex-col items-center group w-16"
            >
                <img :src="item.icon" :alt="item.title" />
                <span class="group-hover:text-black/50">{{ item.title }}</span>
            </router-link>
        </div>
    </header>
</template>
