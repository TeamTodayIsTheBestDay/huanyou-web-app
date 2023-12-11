<script setup lang="ts">
import TravelNotes = Application.HomeRecommend.TravelNote

interface Props {
  type?: "note" | "end"
  note?: TravelNotes
}

withDefaults(defineProps<Props>(), { type: "note" })
</script>

<template>
  <div class="note-card">
    <div v-if="type == 'note'">
      <div>
        <img :src="note?.coverUrl" alt="" style="width: 100%" />
      </div>
      <div class="bg-white pt-1.5 pb-2 px-3 flex flex-col">
        <div class="font-bold text-sm">{{ note?.title }}</div>
        <div class="text-xs line-clamp-2">{{ note?.description }}</div>
        <div class="text-xs flex gap-1 items-center mt-1 text-gray-600">
          <i class="fa-regular fa-thumbs-up" />
          {{ note?.likes }}
          <i class="fa-regular fa-star ml-3"></i>
          {{ note?.favorites }}
        </div>
      </div>
    </div>
    <div v-else-if="type == 'end'"></div>
  </div>
</template>

<style scoped>
.note-card {
  @apply rounded-lg flex flex-col w-full overflow-clip;
  grid-row-start: auto;
  grid-row-end: span 180;
  margin-bottom: 10px;
}
</style>
