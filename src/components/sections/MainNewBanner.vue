<template>
    <section id="new-banner" class="new-banner">
        <div class="new-banner-wrapper">
            <div class="new-banner-header">
                <img class="new-banner-logo" src="/public/yellow-star.svg" alt="лого" title=" жёлтая звезда">
                <h2 class="new-banner-title">Новая коллекция французских авторов</h2>
            </div>
            <div class="new-banner-text">Откройте для себя обновленную коллекцию картин, вдохновленную золотым веком французской живописи. В этом сезоне мы добавили знаковые работы импрессионистов и модернистов, чьи полотна навсегда изменили мир искусства.
        
        <br><br> Наши мастера с особой точностью передают уникальную технику «впечатления»: живые, фактурные мазки и ту самую неуловимую атмосферу момента. Позвольте классике французского искусства стать центральным акцентом вашего дома, создавая пространство, где встречаются история и современный стиль.</div>

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
    // width: 1440px;
    height: 634px;

    background-image: url('/src/assets/new-banner.jpg');
    background-size: cover;
    margin: 0 auto 70px;

    &-wrapper {
        padding: 70px 0 70px 165px;
    }

    &-header {

        @include display (flex, $gap: 0 20px);
        // display: flex;
        // column-gap: 20px;
        @include fs-and-colors($large-text, $main-white);

        // color: $main-white;
        width: 521px;
        // font-size: $large-text;
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
        // color: $main-black;
        // font-size: $big-text;
        padding: 21px 60px;
        // background-color: #EEDB6D;

    }

}


</style>