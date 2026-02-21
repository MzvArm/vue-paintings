<template>
    <div>
        <div class="order-items" >
         <div class="order-item" v-for="(item, index) in orders" :key="item.name">
            <img class="item-img" :src="item.img" alt="">
            <div class="wrapper">
                 <div class="item-name">{{ item.name}}</div>
                 <button @click="orders.splice(index, 1)" class="item-btn" >
                    <img class="delete-btn-img" src="/public/close-btn.svg" alt="Удалить" title="Удалить">
                 </button>
                 <div class="item-author">{{  item.author  }}</div>
                 <div class="item-price">{{item.price}} руб</div>
            </div>
         </div> 
    </div>
    </div>

</template>

<script setup>
import { useBasketStore } from '@/basketStore';

const orders = useBasketStore().orders

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.wrapper {

    @include display(grid, $template: 1fr 1fr / 1fr 1fr);
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    width: 100%;
    align-items: center;
}

.order-items {

    @include display(flex, column, $gap: 20px 0);
    // display: flex;
    // flex-direction: column;
    // row-gap: 20px;
    padding: 20px 0;

}

.order-item {

    @include display(flex, $gap: 10px);
    // display: flex;
    // gap: 10px;

    .item-img {

        width: 50px;
        height: 68px;
    }

    .item-btn {

        justify-self: end;

    }

    .item-author {

        @include fs-and-colors($text, $main-gray);
        // color: $main-gray;
        // font-size: $text;
    }

    .item-price {
        justify-self: end;
    }

    .delete-btn-img {
        width: 13px;
    }
}


</style>