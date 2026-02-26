<template>

    <div class="products-items">
        <MainProductItem :item="item" v-for="item in france" :key="item.name"/>
    </div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';

const france = [

        {img: "/src/assets/fr-1.jpg", author: "Марсель Руссо", 
    name: "Охота Амура", details: "Холст, масло (50х80)",
    price: "14 500"},
        {img: "/src/assets/fr-2.jpg", author: "Анри Селин", 
    name: "Дама с собачкой", details: "Акрил, бумага (50х80)",
    price: "16 500"},
        {img: "/src/assets/fr-3.jpg", author: "Франсуа Дюпон", 
    name: "Процедура", details: "Цветная литография (40х60)",
    price: "20 000"},
        {img: "/src/assets/fr-4.jpg", author: "Луи Детуш", 
    name: "Роза", details: "Бумага, акрил (50х80)",
    price: "12 000"},
        {img: "/src/assets/fr-5.jpg", author: "Франсуа Дюпон", 
    name: "Птичья трапеза", details: "Цветная литография (40х60)",
    price: "22 500"},
        {img: "/src/assets/fr-6.jpg", author: "Пьер Моранж", 
    name: "Пейзаж с рыбой", details: "Цветная литография (40х60)",
    price: "20 000"},

]


</script>

<style lang="scss">
@use '/src/styles/mixins' as *;

  .products-items {

    @include display(grid, $template: repeat(2, auto) / repeat(3, auto), $gap: 30px);

    }

</style>