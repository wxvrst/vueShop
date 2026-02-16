<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@/types/types";
import Button from '@/components/ui/Button.vue'

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
    <form
        class="flex flex-col gap-4 justify-center items-center w-fit p-2 border rounded-2xl"
    >
        <span class="text-2xl">Login</span>
        <input
            type="text"
            v-model="user.username"
            placeholder="Enter username"
            class="border rounded-xl px-4 py-2"
        />
        <input
            type="password"
            v-model="user.password"
            placeholder="Enter password"
            class="border rounded-xl px-4 py-2"
        />
        <Button @click="handleLogin(user)"> Login </Button>
        <router-link to="/auth/registration" class="hover:underline">
            Want to register?
        </router-link>
    </form>
</template>
