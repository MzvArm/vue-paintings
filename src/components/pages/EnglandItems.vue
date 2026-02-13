<template>

<div class="products-items">
<MainProductItem :item="item" v-for="item in england" :key="item.name" />
</div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';

const england = [

        {img: "/src/assets/eng-1.jpg", author: "Пол Смит", 
    name: "Дикий зверь", details: "Акварель, бумага (50х80)",
    price: "19 500"},
        {img: "/src/assets/eng-2.jpg", author: "Джон Уайт", 
    name: "Скалистый берег", details: "Цветная литография (40х60)",
    price: "17 500"},
        {img: "/src/assets/eng-3.jpg", author: "Джим Уотсон", 
    name: "Река и горы", details: "Акварель, бумага (50х80)",
    price: "20 500"},
        {img: "/src/assets/eng-4.jpg", author: "Юджин Зиллион", 
    name: "Белый попугай", details: "Цветная литография (40х60)",
    price: "15 500"},
        {img: "/src/assets/eng-5.jpg", author: "Эрик Гиллман", 
    name: "Ночная рыба", details: "Бумага, акрил (50х80)",
    price: "12 500"},
        {img: "/src/assets/eng-6.jpg", author: "Альфред Барр", 
    name: "Рыжий кот", details: "Цветная литография (40х60)",
    price: "21 000"},

]


</script>

<style lang="scss" scoped>

</style>