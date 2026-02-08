<template>
    <div class="item">
        <div class="item-wrapper">
            <img class="item-img" src="" alt="">
            <div class="item-author">Автор</div>
            <div class="item-name">Название</div>
            <div class="item-details">Детали</div>
            <div class="item-price">Цена</div>
            <button class="item-button">В корзину</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;

.item {

    width: 350px;
    height: 730px;
    background-color: $light-green;


    &-wrapper {

    padding: 20px 20px 30px;
    }


    &-img {

        width: 310px;
        height: 422px;
        margin-bottom: 20px;
    }

    &-author {

        font-size: $text;
        color: $main-gray;
        margin-bottom: 10px;

    }

    &-name {

        color: $main-black;
        font-size: 30px;
        margin-bottom: 8px;

    }

    &-details {

        color: $main-black;
        margin-bottom: 30px;
    }

    &-price {
        color: $main-green;
        font-size: 24px;
        margin-bottom: 20px;
    }

    &-button {

        font-size: $big-text;
        color: $main-green;
        background-color: transparent;
        border: $main-green 1px solid;
        padding: 21px 106px;
        white-space: nowrap;
    }

}


</style>