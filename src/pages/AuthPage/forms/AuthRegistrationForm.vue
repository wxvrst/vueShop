<script setup lang="ts">
import { ref } from "vue";
import type { User } from "../../../types/types.ts";

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
    event?.preventDefault();
    emit("auth", user, confirmPassword.value);
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
        <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm password"
            class="border rounded-xl px-4 py-2"
        />
        <button
            @click="handleRegister(user)"
            class="border px-4 py-1 rounded-xl hover:text-white hover:bg-black transition-colors duration-200"
        >
            Register
        </button>
        <router-link to="/auth" class="hover:underline">
            Want to register?
        </router-link>
    </form>
</template>
