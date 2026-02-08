<template>
    <div class="nav-logo">
        <img src="/public/logo.svg" alt="лого в виде звезды" title="звезда">
        
        <div>Ink. House</div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.nav-logo {
    display: flex;
    column-gap: 8px;
    align-self: center;


    div {

        align-self: center;
        font-weight: 700;

    }

    img {

        height: 35px;
        width: 35px;
    }
}

</style>