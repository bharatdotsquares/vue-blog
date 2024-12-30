import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import Home from "@/views/HomePage.vue"
import Detail from "@/views/DetailsPage.vue"
import PostByTag from "@/views/PostByTag.vue"
const routes = [
    {
        path:"/",
        name:"Home",
        component: Home
    },
    {
        path:"/details/:postid",
        name:"Details",
        component: Detail
    },
    {
        path:"/posts/tag/:slug",
        name:"PostByTag",
        component: PostByTag
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