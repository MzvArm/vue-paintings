import { createWebHistory, createRouter } from 'vue-router'

import FranceItems from './components/pages/FranceItems.vue'
import EnglandItems from './components/pages/EnglandItems.vue'
import GermanyItems from './components/pages/GermanyItems.vue'

// Создаём маршруты

const routes = [
    { path: '/', component: FranceItems },
    { path: '/England', component: EnglandItems },
    { path: '/Germany', component: GermanyItems },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    // Настраиваем переход по якорным ссылкам

    scrollBehavior(to) {

        if (to.hash) {  


            // Очищаем хэш при переходе

            // Первичный вариант, оставил на всякий случай
            // history.replaceState(null, null, window.location.pathname + window.location.search)

            // Рабочий более короткий вариант

            history.replaceState({}, "", location.pathname)

            return {
                
                el: to.hash,
                top: 100,
                behavior: 'smooth'
            }
        }

    }
})

export default router