<template>
    <div class="footer-messengers">

        <a href="https://t.me/youraccountname" target="_blank">
            <img src="/public/tg-logo.svg" alt="Telegram" class="footer-messenger telegram">
        </a>

        <a href="https://wa.me/70000000000" target="_blank">
            <img src="/public/wa-logo.svg" alt="WhatsApp" class="footer-messenger">
        </a>

        <a href="https://vk.me/youraccountname" target="_blank">
            <img src="/public/vk-logo.svg" alt="Вконтакте" class="footer-messenger">
        </a>
                    
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

    .footer {

    &-messengers {

        display: flex;
        column-gap: 30px;
        align-items: center;
        margin-bottom: 10px;
    }

    &-messenger {

        width: 24px;
        height: 24px;

    }
    }

    .telegram {

        width: 30px;
        height: 30px;

    }

</style>