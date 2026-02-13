import { createWebHistory, createRouter } from 'vue-router'

import FranceItems from './components/pages/FranceItems.vue'
import EnglandItems from './components/pages/EnglandItems.vue'
import GermanyItems from './components/pages/GermanyItems.vue'

const routes = [
    { path: '/', component: FranceItems },
    { path: '/England', component: EnglandItems },
    { path: '/Germany', component: GermanyItems },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router