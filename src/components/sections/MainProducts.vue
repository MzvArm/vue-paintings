<template>
    <div class="products">
        <div class="products-header">
            <h2 class="products-title">Репродукции</h2>
            <div class="products-navigation">
                <button class="france">Франция</button>
                <button class="germany">Германия</button>
                <button class="england">Англия</button>
            </div>
        </div>
        <MainProductItem/>
    </div>
</template>

<script setup>
import MainProductItem from '../MainProductItem.vue';


</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;

.products {
    width: 1110px;
    margin: 0 auto;
    margin-bottom: 70px;
}

.products-header {

    display: flex;
    color: $main-black;
    margin-bottom: 30px;

}

.products-title {

    font-size: $large-text;
    line-height: 1.1;
    margin-right: 422px;

}

.products-navigation {

align-content: center;
display: flex;
column-gap: 32px;

    button {

        padding: 10px 20px;
        font-size: $big-text;
        border-radius: 55px;
        border: none;
        background-color: $middle-green;

}

}



</style>