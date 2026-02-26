<template>
    <section class="products">
        <div class="products-header">
            <h2 class="products-title">Репродукции</h2>
            <div class="products-navigation">

                <!-- Добавляем кнопки для пагинации, подсвечиваем актуальную страницу -->

                <router-link to="/" class="button" :class="{ 'current-button': route.path == '/'}">Франция</router-link>
                <router-link to="/Germany" class="button" :class="{ 'current-button': route.path == '/Germany'}">Германия</router-link>
                <router-link to="/England" class="button" :class="{ 'current-button': route.path == '/England'}">Англия</router-link>
            </div>
        </div>

        <!--Используем специальную конструкцию для плавного перехода между страницами -->

            <router-view id="products" v-slot="{ Component }">
              <transition name="slide-fade" mode="out-in">
               <component :is="Component" class="component" />
              </transition>
            </router-view>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()

// Получаем текущий путь

const currentPath = computed(() => route.path)
 

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.products {

    // box-sizing: border-box;
    max-width: 1110px;
    margin: 0 auto;
    margin-bottom: 70px;

    &-header {

    display: flex;
    color: $main-black;
    margin-bottom: 30px;

    }

    &-title {

    font-size: $large-text;
    line-height: 1.1;
    margin-right: 422px;
    }

}

.products-navigation {


// align-content: center;
@include display(flex, $gap: 0 32px);
// display: flex;
// column-gap: 32px;

    .button {

        @include fs-and-colors ($big-text, $main-black, $middle-green);
        // color: $main-black;
        font-family: $font;
        text-decoration: none;
        padding: 10px 20px;
        // font-size: $big-text;
        border-radius: 55px;
        border: none;
        // background-color: $middle-green;

    }

    .button:hover {
        transition: 0.5s;
        transform: scale(1.1);
    }

    .current-button {

        @include fs-and-colors($font-color: $main-white, $bg-color: $button-green);
        // color: $main-white;
        // background-color: $button-green;
    }

    .current-button:hover {

        transform: none;

    }

}

.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media(max-width: 1200px) {

    .products-header {
        justify-content: center;
    }

    .products-title {
        margin-right: 25vw;
        margin-left: 20px;
    }

    .products-items {
        justify-content: center;
    }

    .component:deep(.item) {

        width: 270px;
        height: 580px;

        .item-img {
            width: 230px;
            height: 316px;
        }

        .item-author {
            font-size: 16px;
        }

        .item-name {
            font-size: 26px;
        }

        .item-details {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .item-price {
            font-size: 22px;
        }

        .item-button {
            font-size: 18px;
            padding: 18px 70px;
        }

    }
}

@media (max-width: 1000px ) {

    .products-items {
        grid-template: repeat(3, auto) / repeat(2, auto);
        gap: 60px;
    }


    .products-title {
        font-size: 4vw;
        margin-right: 13vw;
        margin-left: 20px;
    }

     .component:deep(.item) {

        width: auto;
        height: auto;
        
        .item-img {
            width: 270px;
            height: 369px;
        }

        .item-button {
            padding: 18px 91px;
        }
    }

}

@media (max-width: 800px) {

    .products-title {
    margin-right: 7vw;
    align-self: center;
    }

    .products-navigation  {

        column-gap: 3vw;

        .button {
        font-size: max(16px, 2.25vw);
        }
    }   

    .products-items {
        gap: 30px;
    }

    .component:deep(.item) {

        .item-wrapper {
            padding: 15px;
        }

        .item-img {
        width: 230px;
        height: 316px;
        }

        .item-button {
        font-size: 18px;
        padding: 18px 70px;
        }


    }
}

@media (max-width: 600px) {

    .products-header {
        flex-direction: column;
        gap: 15px;
    }

    .products-title {
        font-size: 22px;
        align-self: start;
    }

    .products-navigation {
        
        margin-left: 20px;

        .button {
            font-size: max(14px, 2.67vw);
        }

    }

    .products-items {
        gap: 20px;
    }

    .component:deep(.item) {

        .item-wrapper {
            padding: 10px;
        }

        .item-img {
            width: 190px;
            height: 262px;
        }

        .item-author {
            font-size: 14px;
        }

        .item-name {
            font-size: 22px;
        }

        .item-details {
            font-size: 13px;
            margin-bottom: 10px;
        }

        .item-price {
            font-size: 20px;
        }

        .item-button {
            font-size: 16px;
            padding: 15px 55px;
        }

    }

}

@media (max-width: 470px) {

    .products-items {
        grid-template: auto / auto;
    }

    .component:deep(.item) {

        .item-img {
            width: 230px;
            height: 316px;
        }

        .item-author {
            font-size: 16px;
        }

        .item-name {
            font-size: 26px;
        }

        .item-details {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .item-price {
            font-size: 22px;
        }

        .item-button {
            font-size: 18px;
            padding: 18px 70px;
        }

    }

}

</style>