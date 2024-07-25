//模拟后端传过来的路由
export const authRouter = [
    {
      path: "/allSeePage",
      name: "所有人可见",
      component: "allSeePage",
      meta: {
        isSideBar: 1
      }
    },
    {
      path: "/adminPage",
      name: "管理员可见",
      component: "adminPage",
      meta: {
        isSideBar: 1
      }
    }
  ]
  