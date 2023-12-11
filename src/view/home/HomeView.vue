<script setup lang="ts">
import { Search } from "@element-plus/icons-vue"
import { onMounted, ref } from "vue"
import { GetHomeRecommendScenicSpot, GetHomeRecommendTravelNotes } from "@/services/api.ts"

import HomeRecommend = Application.HomeRecommend
import RecommendTravelNote from "@/components/home/RecommendTravelNote.vue"

const homeRecommendScenicSpot = ref<HomeRecommend.ScenicSpot[]>([])
const homeRecommendTravelNotes = ref<HomeRecommend.TravelNote[]>([])
onMounted(async () => {
  homeRecommendScenicSpot.value = await GetHomeRecommendScenicSpot()
  homeRecommendTravelNotes.value = await GetHomeRecommendTravelNotes()
})
</script>

<template>
  <div>
    <div class="h-[50px] flex items-center gap-5 font-normal text-lg app-top">
      <div class="grow" />
      <div>首页</div>
      <div>景点</div>
      <div>攻略</div>
      <div class="grow" />
    </div>
    <div class="px-3 app-post-top flex flex-col gap-3">
      <el-input size="large" placeholder="搜索景点" :suffix-icon="Search" />
      <el-carousel height="200px">
        <el-carousel-item v-for="(item, index) in homeRecommendScenicSpot" :key="index">
          <recommend-scenic-spot :scenic="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="button-card">
      <category-button title="景点景区" icon="ScenicSpot" />
      <category-button title="旅行记录" icon="TravelNote" />
      <category-button title="旅行攻略" icon="TravelGuide" />
      <category-button title="个人中心" icon="PersonalCenter" />
    </div>
    <div class="mt-4 mx-3 notes-area">
      <recommend-travel-note v-for="(d, i) in homeRecommendTravelNotes" :key="i" :note="d" type="note" />
    </div>
  </div>
</template>

<style scoped>
.app-top {
  /*background: linear-gradient(to bottom, #0066cc 0, #0066cc 70%, #0066cc00);*/
  background: #6abf69;
  color: white;
}
.app-post-top {
  background: linear-gradient(to bottom, #6abf69, #6abf6900);
}
.button-card {
  @apply mt-4 mx-3 grid grid-cols-4 bg-white rounded-lg;
}
.notes-area {
  @apply grid justify-center;
  column-gap: 10px;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
}
</style>
