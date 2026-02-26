<template>
    <main>
        <MainBanner/>
        <MainProducts/>
        <MainNewBanner v-if="false"/>
        <MainAbout v-if="false"/>
    </main>
</template>

<script setup>
import MainAbout from '../sections/MainAbout.vue';
import MainBanner from '../sections/MainBanner.vue';
import MainNewBanner from '../sections/MainNewBanner.vue';
import MainProducts from '../sections/MainProducts.vue';


</script>

<style lang="scss" scoped>

</style>