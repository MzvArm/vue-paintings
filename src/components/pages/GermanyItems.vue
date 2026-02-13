<template>

<div class="products-items">
<MainProductItem :item="item" v-for="item in germany" :key="item.name"/>
</div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';

const germany = [

        {img: "/src/assets/ger-1.jpg", author: "Курт Вернер", 
    name: "Над городом", details: "Цветная литография (40х60)",
    price: "16 000"},
        {img: "/src/assets/ger-2.jpg", author: "Макс Рихтер", 
    name: "Птенцы", details: "Холст, масло (50х80)",
    price: "14 500"},
        {img: "/src/assets/ger-3.jpg", author: "Мартин Майер", 
    name: "Среди листьев", details: "Цветная литография (40х60)",
    price: "20 000"},
        {img: "/src/assets/ger-4.jpg", author: "Герман Беккер", 
    name: "Яркая птица", details: "Цветная литография (40х60)",
    price: "13 000"},
        {img: "/src/assets/ger-5.jpg", author: "Вульф Бауэр", 
    name: "Дятлы", details: "Бумага, акрил (50х80)",
    price: "20 000"},
        {img: "/src/assets/ger-6.jpg", author: "Вальтер Хартманн", 
    name: "Большие воды", details: "Бумага, акрил (50х80)",
    price: "23 000"},

]


</script>

<style lang="scss" scoped>

</style>