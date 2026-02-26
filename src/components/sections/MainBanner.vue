<template>
    <section class="banner">

        <img class="banner-img" src="/src/assets/main-banner.webp" alt="Картина" title="Картина с птицей">  

        <div class="banner-subscription">
            <h1 class="banner-title">Реплики картин от <span>Ink. House</span></h1>
            <div class="banner-text">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</div>
            <router-link to="#products" class="banner-button">Продукция</router-link>
        </div>

      </section>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.banner {
    display: flex;
    margin: 0 auto 70px; 
    max-width: 1440px;

    &-img {
        padding-left: min(165px, 11.46vw);
        height: 621px;
        width: 540px;
    }

    &-subscription {
        padding: 145px min(165px, 11.46vw) 144px 0;
        height: 132px;
        width: 540px;
    }

    &-text { 
        color: $main-gray;
        margin-bottom: 60px;
    }

    &-button {

        @include fs-and-colors($big-text, $main-green, transparent);
        border: $main-green 1px solid;
        font-family: $font;
        padding: 21px 60px;
        transition: all 0.3s ease;

            &:active {
                @include fs-and-colors($font-color: $light-green, $bg-color: $main-green);
        }
    }

}

.banner-title {

    @include fs-and-colors (60px, $main-black);
    line-height: 1.1;
    margin-bottom: 20px;

        span {  
            color: $main-green;
            white-space: nowrap;
        }   
}

@media(max-width: 1100px) {

    .banner-img {
        height: 56.45vw;
        width: 49.09vw;
    }

    .banner-subscription {
        padding-top: 7.18vw;
    }

    .banner-title {
        font-size: 5.19vw;
    }

    .banner-text {
        margin-bottom: 45px;
    }
}

@media (max-width: 900px) {

    .banner {
        margin-bottom: 3.56vw;
    }

    .banner-img {
    height: 49.48vw;
    width: 42.97vw;
    padding-left: 7.46vw;
    }

    .banner-title {
        margin-bottom: 10px;
    }

    .banner-subscription {
        font-size: 2vw;
        padding-right: 7.46vw;
        // background-color: aqua;
    }

    .banner-button {
        padding: 2.33vw 6.67vw;
        font-size: 2.22vw;
    }

    .banner-text {
        margin-bottom: 35px;
    }
    
}

@media (max-width: 600px) {

    .banner {
        margin-bottom: 0;

        &-subscription {
            padding-bottom: 20vw;
        }
    }

    .banner-title {
        font-size: max(25px, 5.19vw);
    }

    .banner-text{ 
        font-size: 12px;
    }

    .banner-button {
        font-size: 12px;
    }
}

@media (max-width: 470px) {

    .banner-img {
        display: none;
    }

    .banner-subscription {
        // padding-inline: 4.69vw;
        max-width: 290px;
        margin: 0 auto;
        padding-right: 0;
        padding-bottom: 16vw;
    }

    .banner-text {
        margin-bottom: 25px;
    }
}
 
</style>