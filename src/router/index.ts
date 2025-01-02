import { createRouter, createWebHashHistory } from "vue-router";
const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");
const nullPage = () => import("../views/404.vue");
// const webPage = () => import("../web-components/index.vue");
const webPage = () => import("../pdf/index.vue");

//模拟权限路由
export const authRouter = [
  {
    path: "/allSeePage",
    name: "所有人可见",
    component: "../views/allSeePage.vue",
    meta: {
      isSideBar: 1,
    },
    children: [
      {
        path: "/allSeePage/allSeePageChild",
        name: "allSeePageChild",
        component: "../views/allSeePageChild/allSeePageChild.vue",
        mata: {
          isSideBar: 1,
        },
      },
    ],
  },
  {
    path: "/adminPage",
    name: "管理员可见",
    component: "../views/adminPage.vue",
    meta: {
      isSideBar: 1,
    },
  },
  {
    path: "/test",
    name: "test",
    component: "../views/test.vue",
    meta: {
      isSideBar: 1,
    },
  },
];

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/404",
    name: "404",
    component: nullPage,
  },
  {
    path: "/web",
    name: "web",
    component: webPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
