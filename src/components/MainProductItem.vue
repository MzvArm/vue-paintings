<template>
    <div class="item">
        <div class="item-wrapper">
            <img class="item-img" :src="item.img" alt="">
            <div class="item-author">{{  item.author  }}</div>
            <div class="item-name">{{ item.name}}</div>
            <div class="item-details">{{item.details}}</div>
            <div class="item-price">{{item.price}} руб</div>
            <button @click="addOrder(item)" class="item-button">В корзину</button>
        </div>
    </div>
</template>

<script setup>
import { useBasketStore } from '@/basketStore';

const stores = useBasketStore()

const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

function addOrder(item) {
    if(!stores.orders.includes(item)) {
        
       stores.orders.push(item)
    }

}

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.item {

    width: 350px;
    height: 730px;
    background-color: $light-green;


    &-wrapper {

    padding: 20px 20px 30px;
    }


    &-img {

        width: 310px;
        height: 422px;
        margin-bottom: 20px;
    }

    &-author {

        @include fs-and-colors($text, $main-gray);
        // font-size: $text;
        // color: $main-gray;
        margin-bottom: 10px;

    }

    &-name {

        @include fs-and-colors(30px, $main-black);
        // color: $main-black;
        // font-size: 30px;
        margin-bottom: 10px;

    }

    &-details {

        color: $main-black;
        margin-bottom: 30px;
    }

    &-price {

        @include fs-and-colors(24px, $main-green);
        // color: $main-green;
        // font-size: 24px;
        margin-bottom: 20px;
    }

    &-button {

        @include fs-and-colors($big-text, $main-green, transparent);
        // font-size: $big-text;
        // color: $main-green;
        // background-color: transparent;
        border: $main-green 1px solid;
        padding: 21px 106px;
        white-space: nowrap;
        transition: all 0.3s ease;

        &:active {

            @include fs-and-colors($font-color: $light-green, $bg-color: $main-green);
            // color: $light-green;
            // background-color: $main-green;
        }
    }

}


</style>