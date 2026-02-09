<template>
    <section class="about-us">
        
        <img class="about-us-img" src="/src/assets/about-us-pic.webp" alt="Изображение с рамкой" title="Рука дерижт кисточки на фоне рамки">
        <div class="about-us-description">
            <div class="about-us-title">Наша команда</div>
            <div class="about-us-text">Мы верим, что великое искусство должно быть доступно каждому, независимо от того, в какой точке мира вы находитесь.  Также мы тщательно подходим к подбору полотен, чтобы каждая реплика сохраняла характер и энергетику оригинала, превращая ваш дом в персональную галерею.</div>
            <div class="about-us-photos">
                <img class="about-us-photo" src="/public/about-us-photo.png" alt="Фото художника" title="фото команды">
                <img class="about-us-photo" src="/public/about-us-photo-2.png" alt="Фото основателя" title="фото команды">
                <img class="about-us-photo" src="/public/about-us-photo-3.png" alt="Фото менеджера" title="фото команды">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;


.about-us {

display: flex;
width: 1110px;
margin: 0 auto 70px;

    &-img {

        width: 445px;
        height: 440px;
        padding-right: 30px;

    }

    &-description {

        color: $main-black;
        padding: 124px 0 44px;

    }


    &-title {

        font-size: $large-text;
        line-height: 1.1;
        margin-bottom: 20px;

    }

    &-text {

        margin-bottom: 20px;
        line-height: 1.5;

    }

    &-photos {
        display: flex;
        column-gap: 30px;

    }

}

</style>