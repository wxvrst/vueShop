<script setup lang="ts">
const props = defineProps<{
    visible: boolean;
}>();
const emit = defineEmits<{
    click: [];
}>();
</script>
<template>
    <div v-if="visible" @click="">
        <slot> </slot>
    </div>
</template>
