import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '@/components/AddTask.vue'
import DeleteTask from '@/components/DeleteTask.vue'
import DoneTask from '@/components/DoneTask.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: { name: 'addtask' }
      },
      {
        path: '/addtask',
        name: 'addtask',
        component: AddTask
      },
      {
        path: '/deltask',
        name: 'deltask',
        component: DeleteTask
      },
      {
        path: '/donetask',
        name: 'donetask',
        component: DoneTask
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
