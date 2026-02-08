<template>
 <header class="header">
 <div class="nav-bar">

    <MyLogo class="nav-logo"/>

    <div class="nav-menu">
      <div class="">Репродукции</div>
      <div class="">Новинки</div>
      <div class="">О нас</div>
      <img class="img-basket" src="/public/shopping-cart.svg" alt="Корзина" title="Заказы">
    </div>
</div>
 </header>
</template>

<script setup>
import MyLogo from '../MyLogo.vue';
import MyBasket from './MyBasket.vue';
</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;
.nav-bar {
    width: 1440px;
    display: flex;
    font-size: 20px;
    margin: 0 auto;
}

.nav-logo {

padding: 33px 495px 32px 165px;

}

.nav-menu {
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 60px;
    padding: 38px 168px 38px 0;
    color: $main-black;
}

.img-basket {
    height: 24px;
    width: 24px;

}

</style>