import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBasketStore = defineStore('basket',() => {
    const orders = ref([])

    return {orders}
} )