<template>
  <div class="home">
    <el-button @click="layout">注销</el-button>
    登陆用户名：{{ store.userInfo.username }}
    <div class="main">
      <div class="p-side-bar">
        <el-menu :default-active="$route.path" :router="true">
          <el-menu-item
            :index="menu.path"
            v-for="menu in menuList"
            :key="menu.name"
          >
            <span>{{ menu.name }}标题</span>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import {useCounterStore} from '@/store/menu'
const router = useRouter()
const store = useCounterStore()

const menuList = ref([])

//初始化路由
const initMenu = () => {
  const routerList = router.getRoutes() //这里获取到的route对象与router3.x的版本不一样，需要注意下
  console.log(32, routerList)
  menuList.value = routerList.filter((route) => {
    const isSidebar = route.meta.isSideBar ? route.meta.isSideBar : 0
    if (isSidebar) {
      return route
    }
  })
  console.log(42, menuList.value)
}
initMenu()
//注销
const layout = async () => {
  const res = await store.logout()
  console.log(49, res)
  await router.push({ path: "/login" })
}
</script>

<style lang="less" scoped>
.home {
  .main {
    display: flex;
    align-items: center;

    .p-side-bar {
      border: solid 1px red;
      width: 200px;
    }
  }
}
</style>