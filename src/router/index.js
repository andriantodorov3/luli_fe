import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/feinfo',
        name: 'More about the  frontend',
        component:
            () =>
            import ('../views/Frontend.vue')
    },

    {
        path: '/beinfo',
        name: 'More about the backend',
        component: () =>
            import ('../views/Backend.vue')
    },

    {
        path: '/hdnpage',
        name: ';)',
        component: () =>
            import ('../views/Hdn.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router