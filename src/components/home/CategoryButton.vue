<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div class="p-3 flex flex-col justify-center items-center">
    <svg-icon :name="icon" size="3em" />
    <div class="text-sm font-normal">{{ title }}</div>
  </div>
</template>

<style scoped></style>
