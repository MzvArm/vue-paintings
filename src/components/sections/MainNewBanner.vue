<template>
    <section id="new-banner" class="new-banner">
        <div class="new-banner-wrapper">
            <div class="new-banner-header">
                <img class="new-banner-logo" src="/public/yellow-star.svg" alt="лого" title="жёлтая звезда">
                <h2 class="new-banner-title">Новая коллекция французских авторов</h2>
            </div>
            <div class="new-banner-text">Откройте для себя обновленную коллекцию картин, вдохновленную золотым веком французской живописи. В этом сезоне мы добавили знаковые работы импрессионистов и модернистов, чьи полотна навсегда изменили мир искусства.
        
             <br><br> Наши мастера с особой точностью передают уникальную технику «впечатления»: живые, фактурные мазки и ту самую неуловимую атмосферу момента. Позвольте классике французского искусства стать центральным акцентом вашего дома, создавая пространство, где встречаются история и современный стиль.
            </div>
            <button class="new-banner-button">Ознакомиться</button>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.new-banner {
    max-width: 1440px;
    width: 100%;
    height: auto;
    background-image: url('/src/assets/new-banner.jpg');
    background-size: cover;
    margin: 0 auto 70px;

    &-wrapper {
        padding: 70px 0 70px 165px;
    }

    &-header {
        @include display (flex, $gap: 0 20px);
        @include fs-and-colors($large-text, $main-white);
        width: 521px;
        margin-bottom: 20px;
    }

    &-logo {
        height: 80px;
        width: 80px;
    }

    &-text {
        margin-bottom: 60px;
        width: 620px;
        line-height: 1.5;
        color: #fff;
    }

    &-button {
        @include fs-and-colors($big-text, $main-black, #EEDB6D);
        padding: 21px 60px;
    }

}

@media (max-width: 1439px) {

    .new-banner {
        width: 80vw;
    }

}

@media (max-width: 1200px) {

    .new-banner-wrapper {
        padding-left: 70px;
    }
}

@media (max-width: 1000px) {

    .new-banner {

        &-wrapper {
            padding-bottom: 50px;
        }

        &-logo {
            width: 70px;
            height: 70px;
        }

        &-header {
            font-size: 36px;
        }

        &-text {
            font-size: 16px;
            width: 62vw;
            margin-bottom: 30px;
        }

        &-button {
            font-size: $text;
        }
    }

}

@media (max-width:800px) {

    .new-banner {

        width: 90vw;

        &-wrapper {
            padding-left: 50px;
            padding-top: 50px;
        }

        &-logo {
            width: 60px;
            height: 60px;
        }

        &-header {
            font-size: 32px;
            width: 420px;
        }

        &-text {
            width: 74vw;
        }

        &-button {
            font-size: max(16px, 2.25vw);
        }
    }
}

@media (max-width: 600px) {

    .new-banner {

        margin-bottom: 50px;

        &-wrapper {
            padding: max(30px, 6.67vw);
            padding-right: 0;
        }

        &-logo {
            width: max(50px, 10vw);
            height: max(50px, 10vw);
        }

        &-header {
            gap: 0 5px;
            width: 74vw;
            font-size: max(24px, 5.33vw);
        }

        &-text {
            margin-bottom: max(20px, 5vw);
        }

        &-button {
            padding: 17px 50px;
        }
    }
}

</style>