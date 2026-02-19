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
               <component :is="Component" />
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

.products {

    width: 1110px;
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

align-content: center;
display: flex;
column-gap: 32px;

    .button {

        color: $main-black;
        font-family: $font;
        text-decoration: none;
        padding: 10px 20px;
        font-size: $big-text;
        border-radius: 55px;
        border: none;
        background-color: $middle-green;

    }

    .button:hover {
        transition: 0.5s;
        transform: scale(1.1);
    }

    .current-button {

        color: $main-white;
        background-color: $button-green;
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

</style>