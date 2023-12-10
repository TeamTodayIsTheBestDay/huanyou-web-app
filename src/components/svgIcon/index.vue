<script setup lang="ts">
import { computed } from "vue"
interface Props {
  prefix?: string
  name: string
  color?: string
  size?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: "#333",
  prefix: "icon",
  size: "1em",
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon" :width="props.size" :height="props.size">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>
