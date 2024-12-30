import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "@/views/HomePage.vue"
import Detail from "@/views/DetailsPage.vue"
const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/details",
        name:"Detail",
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve( {top: 0, left: 0, behavior: 'smooth'}), 300)
        })
    }
})
export default router