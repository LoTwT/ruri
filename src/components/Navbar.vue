<template>
  <div class="navbar-wrapper">
    <n-icon :size="48" @click="backHome" color="skyblue">
      <home-outline />
    </n-icon>
    <n-gradient-text type="info" :size="24" class="navbar-text">这竟然是一个导航...</n-gradient-text>
    <n-avatar :size="48" src="/avatar.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { NAvatar, NIcon, NGradientText } from "naive-ui"
import { HomeOutline } from "@vicons/ionicons5"

export default defineComponent({
  name: "Navbar",
  components: {
    NAvatar,
    NIcon,
    HomeOutline,
    NGradientText
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
.navbar-text {
  line-height: 48px;
}
</style>