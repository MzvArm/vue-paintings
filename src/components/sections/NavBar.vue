<template>
 <header class="header">
 <div class="nav-bar">

    <MyLogo class="nav-logo"/>

    <div class="nav-menu">
      <div class="">Репродукции</div>
      <div class="">Новинки</div>
      <div class="">О нас</div>
      <div class="basket-wrapper">
      <button class="basket-button" @click="show=!show">
         <img class="basket-img" src="/public/shopping-cart.svg" alt="Корзина" title="Заказы">
      </button>
      </div>
    </div>
    <MyBasket :show @close="show=false"/>
</div>
 </header>
</template>

<script setup>
import MyLogo from '../MyLogo.vue';
import MyBasket from './MyBasket.vue';
import { ref } from 'vue';

const show = ref(false)


</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;

.header {
    background-color: $light-green;
}

.nav-bar {
    width: 1440px;
    display: flex;
    font-size: 20px;
    margin: 0 auto;
}

.nav-logo {

padding: 33px 485px 32px 165px;

}

.nav-menu {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 75px;
    padding: 38px 167px 38px 0;
    color: $main-black;

}

.basket-wrapper {
    position: absolute;
    right: 45px;
    top: 28px;
    height: 230vw;    

}

.basket-button {
    position: sticky;
    z-index: 100;
    top: 20px;
    background-color: $light-green;
    padding: 10px 10px 6px 8px;
    border-radius: 50%;
}

.basket-img {
    height: 24px;
    width: 24px;

}


</style>