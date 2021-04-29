import Vue from 'vue'
import vueRouter from 'vue-router'

const originalPush = vueRouter.prototype.push;
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(vueRouter)


const router = new vueRouter({
    routes: [
        {
            path: "/home",
            component: () =>
                import("@/views/Home")
        },
        {
            path: "/buycar",
            redirect:"/buycar/static-list",
            component: () =>
                import("@/views/BuyCar"),
            children: [
                {
                    path: "/buycar/static-list",
                    component: () =>
                        import ("@/views/BuyCar/component/StatisticsList")
                }
            ]
        },
        {
            path: "*",
            redirect:"/home"
        }
    ]
})

export default router;