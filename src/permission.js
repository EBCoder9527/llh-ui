/**
 * 权限配置文件
 */
import { router } from "./router"
import { ElMessage } from "element-plus"
// import {useCounterStore} from '@/store/menu'
//const whiteRouter = ["login", "404"] //路由白名单，不需要添加路由和登陆

router.beforeEach(async (to, from, next) => {
  next()
  //获取用户信息
  // const store = useCounterStore();
  // let userInfo = store.userInfo
  // console.log('-------=====------test',store.userInfo)
  // // if(!userInfo){
  // //   userInfo =store.getUserInfo
  // // }
  // console.log('--------2----------',userInfo)
  // const username = userInfo.username
  // console.log("用户角色", username ? username : "未登陆")
  // //有用户信息
  // if (username) {
  //   //触发添加路由方法，里面会判断是否需要添加
  //   await store.addRoute()
  //   let { routerList } = userInfo
  //   //根据to.name来判断是否为动态路由, 是否有人知道还有更好的判断方法？
  //   if (!to.name) {
  //     //当前路由是动态的，确定是有的, 有就跳自己，没有就跳404,, tip: 刷新后动态路由的to.name为空
  //     if (routerList.findIndex((i) => i.path === to.path) !== -1) {
  //       next({ ...to, replace: true })
  //     } else {
  //       next("/404")
  //     }
  //   } else {
  //     console.log(28, router.getRoutes())
  //     next()
  //   }
  // }
  // //无用户信息
  // else {
  //   //没有权限访问，跳入没有权限页面/或者登陆页面
  //   // 跳转之前要判断一下是否为需要跳转的界面，不然会进入死循环
  //   if (to.path === "/login") {
  //     next()
  //   } else {
  //     ElMessage.error("请先登陆！")
  //     next("/login")
  //   }
  // }
})

router.afterEach(() => {})