<template>

<div class="products-items">
<MainProductItem :item="item" v-for="item in england" :key="item.name"/>
</div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';
import eng1 from '/src/assets/eng-1.jpg';
import eng2 from '/src/assets/eng-2.jpg';
import eng3 from '/src/assets/eng-3.jpg';
import eng4 from '/src/assets/eng-4.jpg';
import eng5 from '/src/assets/eng-5.jpg';
import eng6 from '/src/assets/eng-6.jpg';

const england = [

        {img: eng1, author: "Пол Смит", 
    name: "Дикий зверь", details: "Акварель, бумага (50х80)",
    price: "19 500"},
        {img: eng2, author: "Джон Уайт", 
    name: "Скалистый берег", details: "Цветная литография (40х60)",
    price: "17 500"},
        {img: eng3, author: "Джим Уотсон", 
    name: "Река и горы", details: "Акварель, бумага (50х80)",
    price: "20 500"},
        {img: eng4, author: "Юджин Зиллион", 
    name: "Белый попугай", details: "Цветная литография (40х60)",
    price: "15 500"},
        {img: eng5, author: "Эрик Гиллман", 
    name: "Ночная рыба", details: "Бумага, акрил (50х80)",
    price: "12 500"},
        {img: eng6, author: "Альфред Барр", 
    name: "Рыжий кот", details: "Цветная литография (40х60)",
    price: "21 000"},

]


</script>

<style lang="scss" scoped>

</style>