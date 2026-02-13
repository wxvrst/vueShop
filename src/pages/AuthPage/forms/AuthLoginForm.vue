<script setup lang="ts">
import { ref } from "vue";
import type { User } from "../../../types/types";

const emit = defineEmits<{
    (isRegister: "auth", user: User, confirmPassword?: string): void;
}>();

const user = ref<User>({
    id: 1,
    username: "",
    password: "",
});
const handleLogin = (user: User) => {
    emit("auth", user);
};
</script>
<template>
    <form class="flex flex-col gap-2 justify-center items-center">
        <span class="">Login</span>
        <input
            type="text"
            v-model="user.username"
            placeholder="Enter username"
        />
        <input
            type="password"
            v-model="user.password"
            placeholder="Enter password"
        />
        <button @click="handleLogin(user)">Login</button>
        <router-link to="/auth/registration">Want to register?</router-link>
    </form>
</template>
