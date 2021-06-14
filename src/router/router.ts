import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"

export default createRouter({
  history: createWebHistory("/"),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/editor", name: "Editor", component: () => import("@/views/Editor.vue") }
  ]
})