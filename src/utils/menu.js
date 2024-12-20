export const loadView = (view) => {
  // console.log(2, view)
  // 路由懒加载
  //return (resolve) => require([`@/views/${view}`], resolve) router3版本
  return () =>import(view).then(module => module.default)  //router4版本
}
//为权限路由异步添加组件
export const filterAsyncRouter = (routeList) => {
  return routeList.filter((route) => {
    // console.log(9, route)
    if (route.component) {
      // 如果不是布局组件就只能是页面的引用了
      // 利用懒加载函数将实际页面赋值给它
      route.component = loadView(route.component)
      // console.log(15, route.component)
      // 判断是否存在子路由，并递归调用自己
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    }
  })
}