import { filterAsyncRouter } from "../utils/menu"
import {defineStore} from "pinia"
import { authRouter, router } from "../router"
const initUserInfo = {
  username: "",
  password: "",
  token: "",
  routerList: []
}
export const useCounterStore = defineStore("menu", {
  state: () => ({ count: 0,userInfo:JSON.parse(localStorage.getItem('userInfo'))||initUserInfo,hasAddRoute:false }),
  getters: {
    double: (state) => state.count * 2,
    getUserInfo:(state)=>{
      if(JSON.parse(localStorage.getItem('userInfo'))){
        return JSON.parse(localStorage.getItem('userInfo'))
      }
      return state.userInfo
    }
  },
  actions: {
    increment() {
      this.count++;
    },
    setUserInfo(val){
        this.userInfo = val;
        localStorage.setItem('userInfo',JSON.stringify(val));
    },
    addRoute() {
      console.log("路由添加前", router.getRoutes());
      //路由未添加之前是3个,我们判断是否添加过，没添加过就添加
      console.log('-----========------',this.userInfo.routerList.length,this.hasAddRoute)
      if (!this.hasAddRoute&&this.userInfo.routerList.length) {
        let addRouterList = filterAsyncRouter(
          JSON.parse(JSON.stringify(this.userInfo.routerList)) //这里深拷贝下，不然会出问题
        );
        console.log('add-------',addRouterList)
        addRouterList.forEach((i) => {
          console.log("添加路由", i);
          router.addRoute("home", i);
        });
        this.hasAddRoute = true;
      }
      console.log("路由添加后", router.getRoutes());
    },
    login(userInfo) {
        const { username, password } = userInfo
        return new Promise((resolve) => {
          //模拟登陆，获取用户信息， 权限路由列表
          //假设返回的有token, 路由列表(根据不同用户返回不同)
          /**********************模拟后端传过来的路由列表----START***********************/
          let routerList = []
          if (username === "admin") {
            routerList = authRouter
          } else if (username === "commonUser") {
            routerList = [authRouter[0]]
          }
          /**********************模拟后端传过来的路由列表----END***********************/
          let token = "testToken"
          console.log(56, routerList)
          //把用户信息存入pinain
          this.setUserInfo({
            username,
            password,
            token,
            routerList
          })
          console.log("login over")
          //添加路由
          //commit("ADD_ROUTE")
          this.addRoute();
          resolve()
        })
      },
       //注销
    logout() {
        return new Promise((resolve) => {
          console.log(this.userInfo.token, "注销了")
          //拷贝一下
          const delRouterList = JSON.parse(
            JSON.stringify(this.userInfo.routerList)
          )
          //删除添加的路由，如果路由是多层的 递归下。。
          delRoute(delRouterList)
          // delRouterList.forEach((route) => {
          //   console.log('remove-----',router.getRoutes())
          //   if(route.children.length>0){
          //     route.children
          //   }
          //   router.removeRoute(route.name)
          // })
          //删除路由
          this.setUserInfo({
            userName: "",
            password: "",
            token: "",
            routerList: []
          })
          localStorage.removeItem('userInfo');
          this.hasAddRoute = false;
          resolve("注销 success， 清空路由，用户信息")
        })
      }
    },
});
function delRoute(delRouterList){
  delRouterList.forEach((route) => {
    console.log('remove-----',route)
    if(route.children?.length>0){
      delRoute(route.children)
    }
    router.removeRoute(route.name)
  })
}