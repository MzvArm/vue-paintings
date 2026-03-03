<template>
    <section id="about-us" class="about-us">
        
        <img class="about-us-img" src="/src/assets/about-us-pic.webp" alt="Изображение с рамкой" title="Рука дерижт кисточки на фоне рамки">
        <div class="about-us-description">
            <div class="about-us-title">Наша команда</div>
            <div class="about-us-text">Мы верим, что великое искусство должно быть доступно каждому, независимо от того, в какой точке мира вы находитесь.  Также мы тщательно подходим к подбору полотен, чтобы каждая реплика сохраняла характер и энергетику оригинала, превращая ваш дом в персональную галерею.</div>
            <div class="about-us-photos">
                <img class="about-us-photo" src="/public/about-us-photo.webp" alt="Фото художника" title="фото команды">
                <img class="about-us-photo" src="/public/about-us-photo-2.webp" alt="Фото основателя" title="фото команды">
                <img class="about-us-photo" src="/public/about-us-photo-3.webp" alt="Фото менеджера" title="фото команды">
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
        padding: 124px 0 0;
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

@media (max-width: 1200px) {

    .about-us {

        width: 91.67vw;

        &-description {
            padding-top: 10.33vw;
        }

        &-text {
            margin-bottom: max(15px, 1.5vw);
        }

        &-photo {
            width: 70px;
            height: 70px;
        }
    }
}

@media (max-width: 1000px) {

    .about-us {

        &-img {
            width: max(390px, 44.5vw);
            height: max(385px, 44vw);
        }

        &-description {
            padding-top: 9vw;
        }

        &-title {
            font-size: max(24px, 4vw);
            margin-bottom: 10px;
        }

        &-text {
            font-size: max(16px, 1.8vw) ;
        }

        &-photo {
            height: 60px;
            width: 60px;
        }
    }
}

@media (max-width: 800px) {

    .about-us {

        margin: 0 5vw 50px;
        flex-direction: column;

        &-img {
            width: max(250px, 51.63vw);
            height: max(245px, 51vw);
        }

        &-description {
            padding-top: max(27px, 6vw);
            padding-left: 2px;
        }
    }
}

@media (max-width: 600px) {

    .about-us {

        &-title {
            margin-bottom: 15px;
        }
    }
}

</style>