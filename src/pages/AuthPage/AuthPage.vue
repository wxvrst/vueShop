<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { User } from "@/types/types";
import { useUsersStore } from "@/store/users";

const userStore = useUsersStore();

const notificationMessage = ref<string>("");

const handleAuth = (user: User, confirmPassword?: string) => {
    if (confirmPassword) {
        //userStore.register(user,confirmPassword)
        notificationMessage.value = "Register success";
    } else {
        userStore.login(user);
        notificationMessage.value = "Login success";
    }
    console.log(userStore.currentUser);
};

onMounted(() => {
    userStore.fetchUsers();
});
</script>
<template>
    <section class="flex flex-col items-center gap-2">
        <span v-if="notificationMessage" class="text-green-500">
            {{ notificationMessage }}
        </span>
        <router-view @auth="handleAuth" />
    </section>
</template>
