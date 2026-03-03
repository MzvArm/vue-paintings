<template>
    <div>
        <div class="order-items" >
        <!-- Добавляем плавности для элементов в корзине -->
        <TransitionGroup name="item">
         <div class="order-item" v-for="(item, index) in orders" :key="item.name">
            <!-- Добавляем привязку к источнику картинки через директиву v-bind -->
            <img class="item-img" :src="item.img" alt="">
            <div class="wrapper">
                 <div class="item-name">{{ item.name}}</div>
                 <!-- Добавляем возможноть удаления товара из корзины (массива) -->
                 <button @click="orders.splice(index, 1)" class="item-btn" >
                    <img class="delete-btn-img" src="/public/close-btn.svg" alt="Удалить" title="Удалить">
                 </button>
                 <div class="item-author">{{  item.author  }}</div>
                 <div class="item-price">{{item.price}} руб</div>
            </div>
         </div> 
         </TransitionGroup>
    </div>
    </div>

</template>

<script setup>
import { useBasketStore } from '@/basketStore';

// Берём состояние из стора
const orders = useBasketStore().orders

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.wrapper {
    @include display(grid, $template: 1fr 1fr / 1fr 1fr);
    width: 100%;
    align-items: center;
}

.order-items {
    @include display(flex, column, $gap: 20px 0);
    padding: 20px 0;
}

.order-item {

    @include display(flex, $gap: 10px);

    .item-img {
        width: 50px;
        height: 68px;
    }

    .item-btn {
        justify-self: end;
    }

    .item-author {
        @include fs-and-colors($text, $main-gray);
    }

    .item-price {
        justify-self: end;
    }

    .delete-btn-img {
        width: 13px;
    }
}

.item-move,
.item-enter-active,
.item-leave-active {
  transition: all 0.3s ease;
}

.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.item-leave-active {
  position: absolute;
}

</style>