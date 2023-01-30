import {createRouter, createWebHistory} from 'vue-router'
import home from '../views/Home.vue'
import task from '../views/Task.vue'
import count from '../views/Count.vue'
import set from '../views/Setting.vue'

import login from '../views/Login.vue'
const router:any = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/task',
            component:task
        },
        {
            path:'/count',
            component:count
        },
        {
            path:'/set',
            component:set
        },
        {
            path:'/login',
            component:login
        }
    ]
})
export default router