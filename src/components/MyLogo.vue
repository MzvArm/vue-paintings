<template>
    <router-link to="/" class="nav-logo">
        <img src="/public/logo.svg" alt="лого в виде звезды" title="звезда">
        
        <div>Ink. House</div>

    </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;

.nav-logo {
    display: flex;
    column-gap: 8px;
    align-self: center;



    div {

        align-self: center;
        font-weight: 700;
        color: $main-green;

    }

    img {

        height: 35px;
        width: 35px;
    }
}

</style>