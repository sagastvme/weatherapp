//router.js

import { createRouter, createWebHistory } from 'vue-router';
import WeatherInfo from "@/components/WeatherInfo.vue";
import TheHome from "@/components/TheHome.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes:[
        { path: '/', component: TheHome, name:'home'},
        { path: '/:city', component: WeatherInfo, name:'weather'},
        { path: '/:notFound(.*)', redirect: '/'}
    ],
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        return {left:0, top:0}
    }
});

export default router;