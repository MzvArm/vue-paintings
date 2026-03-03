<template>
    <div class="footer-contacts">
        <a href="tel:+70000000000">+7 (000) 000-00-00</a>
        <address> г. Краснодар, <br>ул. Инкхаусовская 15 </address>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@use '/src/styles/variables' as *;
@use '/src/styles/mixins' as *;

.footer-contacts {

    @include display (flex, column, $gap: 8px 0);
    color: $main-black;

    a {
        white-space: nowrap;
        color: $main-black;
    }

    address {
        white-space: nowrap;
        line-height: 1.4;
    }
}

</style>