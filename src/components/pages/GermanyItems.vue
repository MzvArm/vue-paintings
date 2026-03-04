<template>

<div class="products-items">
<MainProductItem :item="item" v-for="item in germany" :key="item.name"/>
</div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';
import ger1 from '/src/assets/ger-1.jpg';
import ger2 from '/src/assets/ger-2.jpg';
import ger3 from '/src/assets/ger-3.jpg';
import ger4 from '/src/assets/ger-4.jpg';
import ger5 from '/src/assets/ger-5.jpg';
import ger6 from '/src/assets/ger-6.jpg';

const germany = [

        {img: ger1, author: "Курт Вернер", 
    name: "Над городом", details: "Цветная литография (40х60)",
    price: "16 000"},
        {img: ger2, author: "Макс Рихтер", 
    name: "Птенцы", details: "Холст, масло (50х80)",
    price: "14 500"},
        {img: ger3, author: "Мартин Майер", 
    name: "Среди листьев", details: "Цветная литография (40х60)",
    price: "20 000"},
        {img: ger4, author: "Герман Беккер", 
    name: "Яркая птица", details: "Цветная литография (40х60)",
    price: "13 000"},
        {img: ger5, author: "Вульф Бауэр", 
    name: "Дятлы", details: "Бумага, акрил (50х80)",
    price: "20 000"},
        {img: ger6, author: "Вальтер Хартманн", 
    name: "Большие воды", details: "Бумага, акрил (50х80)",
    price: "23 000"},

]


</script>

<style lang="scss" scoped>

</style>