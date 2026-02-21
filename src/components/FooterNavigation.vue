<template>
<div class="footer-navigation">

    <nav class="footer-paintings">

        <div class="footer-sections">Репродукции</div>
        <router-link to="/#products">Франция</router-link>
        <router-link to="/Germany#products">Германия</router-link>
        <router-link to="/England#products">Англия</router-link>

    </nav>

    <div class="footer-news">

        <div class="footer-sections">Новинки</div>
        <div class="">2025</div>
        <div class="">2026</div>

    </div>

    <div class="footer-about-us">

        <div class="footer-sections">О нас</div>
        <div class="">Художники</div>
        <div class="">Менеджеры</div>
    
    </div>

</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

    .footer {

        &-navigation {

            @include display(flex, $gap: 0 60px);
            // display: flex;
            // column-gap: 60px;
            color: $main-gray;
            line-height: 1.5;
            padding: 23px 248px 23px 0;
        }

        &-paintings {

            @include display(flex, column);
            // display: flex;
            // flex-direction: column;

            a {
                color: $main-gray;
            }

        }

        &-sections {

            @include fs-and-colors($big-text, $main-black);
            // font-size: $big-text;
            // color: $main-black;
        }
    }

</style>