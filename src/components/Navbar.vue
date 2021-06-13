<template>
  <div class="navbar-wrapper">
    <n-icon :size="48" @click="backHome">
      <home-outline />
    </n-icon>
    <div class="text">一个一点也不好看的导航...</div>
    <n-avatar :size="48" src="/avatar.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { NAvatar, NIcon } from "naive-ui"
import { HomeOutline } from "@vicons/ionicons5"

export default defineComponent({
  name: "Navbar",
  components: {
    NAvatar,
    NIcon,
    HomeOutline
  },
  setup: () => {
    const router = useRouter()
    const backHome = () => {
      router.push({ name: "Home" })
    }

    return {
      backHome
    }
  }
})

</script>

<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  width: 100%;
  height: 48px;
}
.text {
  font-size: 24px;
  line-height: 48px;
}
</style>