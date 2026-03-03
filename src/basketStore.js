import { defineStore } from 'pinia'
import { ref } from 'vue'

// Определяем стор и состояние для коризны
export const useBasketStore = defineStore('basket',() => {
    const orders = ref([])

    return {orders}
} )