<script setup lang="ts">
import { Search } from "@element-plus/icons-vue"
</script>

<template>
  <div class="app-container">
    <div class="h-[40px] flex items-end gap-5 font-normal text-lg">
      <div class="grow" />
      <div>首页</div>
      <div>景点</div>
      <div>攻略</div>
      <div class="grow" />
    </div>
    <div class="px-3 mt-3">
      <el-input size="large" placeholder="Please Input" :suffix-icon="Search" />
    </div>
    <div class="p-5 app-footer">
      <el-button type="primary" size="large" class="w-full">测试按钮</el-button>
    </div>
  </div>
</template>

<style>
body {
  background-size: cover;
  background: #ddf3ff;
  background: url("/mesh.png") no-repeat center center fixed;

  font-weight: lighter;
}
.app-container {
  min-height: 200vh;
}
</style>
