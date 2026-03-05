<template>
 <header class="header">
 <div class="nav-bar">

    <MyLogo class="nav-logo"/>

    <nav class="nav-menu">
    <!-- Навигация по якорным ссылкам-->
      <router-link to="#products">Репродукции</router-link>
      <router-link to="#new-banner">Новинки</router-link>
       <router-link to="#about-us">О нас</router-link>
      <div class="basket-wrapper">
      <!-- Переключатель модального окна -->
      <button class="basket-button" @click="show=!show">
         <img class="basket-img" src="/public/shopping-cart.svg" alt="Корзина" title="Заказы">
         <!-- Уведомления о количестве товаров в корзине -->
        <div class="notifications" v-if="ordersLength > 0">{{ ordersLength }}</div>
      </button>
      </div>
    </nav>
    <!-- Принимаем emit на переключение модального окна -->
    <MyBasket :show @close="show=false" class="modal"/>
</div>
 </header>
</template>

<script setup>
import MyLogo from '../MyLogo.vue';
import MyBasket from './MyBasket.vue';
import { ref, computed } from 'vue';
import { useBasketStore } from '@/basketStore';

// Записываем длину массива (из корзины) для уведомлений
const ordersLength = computed(() => {
return useBasketStore().orders.length
})

// Объявляем реактивную переменную для переключения модального окна
const show = ref(false)

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.header {
    background-color: $light-green;
}

.nav-bar {

    max-width: 1440px;
    display: flex;
    font-size: 20px;
    margin: 0 auto;
    white-space: nowrap;
    justify-content: center;

}

.nav-logo {
    padding: 33px 485px 32px min(11.46vw, 165px);
}

.nav-menu {

    @include display(flex, $gap: 0 75px);
    position: relative;
    align-items: center;
    padding: 38px 223px 38px 0;
    color: $main-black;

}

.basket-wrapper {

    position: absolute;
    right: 110px;
    top: 28px;
    height: 3500px;    
    pointer-events: none;

}

.basket-button {

    position: sticky;
    z-index: 100;
    top: 20px;
    background-color: $light-green;
    padding: 10px 10px 6px 8px;
    border-radius: 50%;
    pointer-events: auto;

}

.basket-img {
    height: 24px;
    width: 24px;

}

.notifications {

    @include fs-and-colors(10px, $bg-color: $main-white);
    position: absolute;
    top: 0;
    right: 0;
    padding: 3px;
    border-radius: 7px;

}

@media (max-width: 1439px) {

    .nav-logo {
        padding: 33px 32vw 32px 10vw;
    }

    .nav-menu {
        padding-right: 180px;
    }

    .basket-wrapper {
        right: 70px;
    }
}

@media (max-width: 1300px) {

    .nav-logo{
        padding-left: 9vw;
    }

    .nav-menu {
        padding-right: 100px;
        column-gap: 60px;
    }

    .basket-wrapper{
        right: 16px;
    }
}

@media(max-width: 1100px) {

    .nav-logo {
        padding-right: 26vw;
    }

    .basket-wrapper {
        height: 3200px;
    }
}

@media (max-width: 1000px) {

    .nav-logo {
        padding-right:  11.5vw;
        padding-left: 11vw ;
    }

    .nav-menu {
        font-size: 18px;
    }

    .basket-wrapper {
        height: 3900px;
    }

    .modal:deep() {

        .modal-box {
            width: 420px;
            max-height: 540px;
        }

        .modal-main {
            max-height: 430px;
        }
    }
}

@media (max-width: 800px) {
        
    .nav-menu {
        font-size: 2.25vw;
        column-gap: 50px;
        padding-right: 90px;
    }

    .nav-logo {
        font-size: 2.5vw;
        padding-left: 40px;
        padding-right: 10vw;

        &:deep(img) {
            height: 4.38vw;
            width: 4.38vw;
        }
    }

    .basket-wrapper {
        height: 3600px;
    }

    .basket-img {
        height: 3vw;
        width: 3vw;
    }
}

@media(max-width: 600px) {

    .nav-bar {
        flex-direction: column;
    }

    .nav-logo {

        padding: 20px 0 10px 0;
        font-size: 18px;
          &:deep(img) {
            height: max(4.38vw, 20px);
            width: max(4.38vw, 20px);
            height: 30px;
            width: 30px;
        }

    }

    .nav-menu {

        column-gap: 30px;
        font-size: 15px;
        border-top: 2px solid $main-green;
        padding: 11px 50px 20px 0;
        margin: 0 auto;

    }

    .basket-wrapper {
        height: 100px;
        top: 0;
        right: -5px;
    }

    .basket-button {
        position: static;
    }

    .basket-img {
        height: 18px;
        width: 18px;
    }

    .modal:deep() {

        .modal-box {
        width: max(330px, 68.33vw);
        max-height: 480px;
        padding-inline: 20px;
        }

        .modal-main {
            max-height: 370px;
        }

        .modal-header h2 {
            font-size: $text;
        }

        .item-name, .item-price {
            font-size: max(16px, 3vw);
        }

        .item-author {
            font-size: max(14px, 2.67vw);
        }

        .modal-footer div {
            font-size: $text;
        }
    }
}

</style>