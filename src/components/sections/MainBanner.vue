<template>
    <section class="banner">

        <img class="banner-img" src="/src/assets/main-banner.webp" alt="Картина" title="Картина с птицей">  

        <div class="banner-subscription">
            <h1 class="banner-title">Реплики картин от <span>Ink. House</span></h1>
            <div class="banner-text">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</div>
            <button type="button" class="banner-button">Продукция</button>
        </div>

      </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;

.banner {
    display: flex;
    margin: 0 auto 70px; 
    width: 1440px;

    &-img {
        padding-left: 165px;
        height: 621px;
        width: 540px;
    }

    &-subscription {
        padding: 145px 165px 144px 0;
        height: 132px;
        width: 540px;
    }

    &-text { 
        color: $main-gray;
        margin-bottom: 60px;
    }

    &-button {
        background-color: transparent;
        border: $main-green 1px solid;
        color: $main-green;
        font-size: $big-text;
        font-family: $font;
        padding: 21px 60px;
    }

}

.banner-title {
    line-height: 1.1;
    font-size: 60px;
    color: $main-black;
    margin-bottom: 20px;

        span {  
            color: $main-green;
        }   
}

</style>