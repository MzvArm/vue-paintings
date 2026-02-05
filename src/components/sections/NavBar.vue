<template>
 <header class="nav-bar">
    <div class="nav-logo">
        <img src="/public/logo.svg" alt="лого в виде звезды" title="звезда">
        
        <div>Ink. House</div>

    </div>


    <div class="nav-menu">
      <div class="">Репродукции</div>
      <div class="">Новинки</div>
      <div class="">О нас</div>
      <img class="img-basket" src="/public/shopping-cart.svg" alt="Корзина" title="Заказы">
    </div>

 </header>
</template>

<script setup>
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
    display: flex;
    column-gap: 8px;
    align-self: center;
    padding: 33px 495px 32px 165px;


    div {

        align-self: center;
        font-weight: 700;

    }

    img {

        height: 35px;
        width: 35px;
    }
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