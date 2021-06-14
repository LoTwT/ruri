<template>
  <n-space vertical align="center">
    <n-gradient-text type="info" :size="256" class="title">Ruri</n-gradient-text>
    <n-gradient-text type="info" :size="24">风雪的缩影，如琉璃般飘落...</n-gradient-text>
    <br />
    <br />
    <n-space>
      <n-button
        attr-type="button"
        round
        type="info"
        ghost
        size="large"
        :loading="isLoading"
        @click="handleClick"
      >Get Started</n-button>
    </n-space>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { NGradientText, NSpace, NButton } from "naive-ui"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "Home",
  components: { NGradientText, NSpace, NButton },
  setup: () => {
    const router = useRouter()
    // 按钮是否有加载状态
    const isLoading = ref(false)
    // 处理按钮点击事件
    const handleClick = () => {
      isLoading.value = !isLoading.value
      if (isLoading.value === false) return
      router.push({ name: "Editor" })
    }
    return {
      isLoading,
      handleClick
    }
  }
})
</script>

<style scoped>
.title {
  height: 320px;
}
</style>