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
const confirmPassword = ref<string>("");
const handleRegister = (user: User) => {
    emit("auth", user, confirmPassword.value);
};
</script>
<template>
    <form class="flex flex-col gap-2 justify-center items-center">
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
        <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm password"
        />
        <button @click="handleRegister(user)">Register</button>
        <router-link to="/auth">Want to login?</router-link>
    </form>
</template>
