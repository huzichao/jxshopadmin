import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'



Vue.use(Router)



const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: () => import('./views/users/Login.vue')
        },
        {
            path: '/',
            component: () => import('./views/admin/Index.vue'),
            children: [

                // 后台首页
                { path: '/', component: () => import('./views/admin/WelcomeIndex.vue') },
                { path: 'visiter', component: () => import('./views/admin/VisiterIndex.vue') },

                //商品分类
                { path: 'catelist', component: () => import('./views/goods/GoodsrIndex.vue') },
                { path: 'listcreate', component: () => import('./views/goods/GoodsrCreate.vue') },

                //商品属性
                { path: 'goodtype', component: () => import('./views/goodattr/GoodsrType.vue') },
                { path: 'goodcreate', component: () => import('./views/goodattr/GoodsrCreate.vue') },
                { path: 'goodattr', component: () => import('./views/goodattr/GoodsrAttr.vue') },
                { path: 'attrcreate', component: () => import('./views/goodattr/AttrCreate.vue') },


                // 商品管理
                { path: 'create', component: () => import('./views/commo/Create.vue') },
                { path: 'goods', component: () => import('./views/commo/Goods.vue') },
                { path: 'recycle', component: () => import('./views/commo/Recycle.vue') },

                //订单管理
                { path: 'orders', component: () => import('./views/orders/Orders.vue') },
                { path: 'recycles', component: () => import('./views/orders/Recycle.vue') },


                // 用户管理
                { path: 'users', component: () => import('./views/manage/UsersIndex.vue') },
                { path: 'userscreate', component: () => import('./views/manage/UsersCreate.vue') },


                //角色管理
                { path: 'rolelist', component: () => import('./views/roles/RoleList.vue') },
                { path: 'rolecreate', component: () => import('./views/roles/RoleCreate.vue') },

                //权限管理
                { path: 'power', component: () => import('./views/power/PowerIndex.vue') },




            ]
        }

    ]
})



router.beforeEach((to, from, next) => {
    // console.log('路由变化了')
    // console.log(to.path)
    // console.log(from.path)
    // next()

    // 如果 你不是 登录页  判断token
    // 是 就不管


    if (to.path == '/login') {
        next();
    } else {
        let token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            alert("登陆失败")
            next('/login')
        }
    }

})

export default router