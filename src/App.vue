<script setup lang="ts"></script>

<template>
  <div class="app-container">
    <el-menu class="app-menu text-xl font-normal gap-3" mode="horizontal" :ellipsis="false">
      <div class="grow" />
      <div>首页</div>
      <div>景点</div>
      <div>攻略</div>
      <div class="grow" />
    </el-menu>
    <div class="p-5 app-footer">
      <el-button type="primary" size="large" class="w-full">测试按钮</el-button>
    </div>
  </div>
</template>

<style>
body {
  background-size: cover;
  background: #ddf3ff;
  background: url("/mesh.png") no-repeat fixed;

  font-weight: lighter;
}
.app-container {
  min-height: 200vh;
}
.app-menu {
  height: 60px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  align-items: end;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;

  top: 0;
  position: sticky;
}
</style>
