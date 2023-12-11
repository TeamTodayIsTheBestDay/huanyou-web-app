<script setup lang="ts">
import ScenicSpot = Application.HomeRecommend.ScenicSpot

defineProps<{
  scenic: ScenicSpot
}>()
</script>

<template>
  <div class="card w-full h-full relative">
    <div class="card-top-info text-white px-3 py-1 flex flex-col">
      {{ scenic.description }}
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply rounded-xl;

  background: v-bind("`url('${scenic.imageUrl}')`") center;
  background-size: cover;
  overflow: clip;
}

.card-top-info {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  background: linear-gradient(to bottom, #00000055, transparent);
}
</style>
