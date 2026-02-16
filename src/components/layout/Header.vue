<script setup lang="ts">
const links = [
    {
        title: "ALL PRODUCTS",
        href: "/shop",
    },
    // {
    //     title: "SOLUTIONS",
    //     href: "/solutions",
    // },
    // {
    //     title: "ABOUT",
    //     href: "/about",
    // },
    // {
    //     title: "SUPPORT",
    //     href: "/support",
    // },
];
</script>
<template>
    <header class="flex justify-between w-full my-4">
        <router-link to="/">
            <img src="../../public/logo.svg" alt="logo" />
        </router-link>
        <div class="flex gap-8">
            <router-link
                v-for="(link, index) in links"
                :to="link.href"
                :key="index"
                class="hover:underline"
            >
                {{ link.title }}
            </router-link>
        </div>
        <div class="flex gap-4 items-center justify-center">
            <router-link to="/favorite">
                <img
                    src="../../public/favorite_icon.svg"
                    alt="favorite icon"
                    class="w-7"
                />
            </router-link>
            <router-link to="/profile">
                <img
                    src="../../public/profile_icon.svg"
                    alt="profile icon"
                    class="w-7"
                />
            </router-link>
            <router-link to="/cart">
                <img src="../../public/cart_icon.svg" alt="cart icon" />
            </router-link>
        </div>
    </header>
</template>
