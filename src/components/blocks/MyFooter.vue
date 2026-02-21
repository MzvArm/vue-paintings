<template>
    <footer class="footer">
        <div class="footer-container">
        
            <div class="footer-contacts-wrapper">
                <MyLogo class="footer-logo"/>
                <FooterContacts/>

            </div>

            <FooterNavigation/>

            <div class="footer-links">

                <FooterMessengers/>
                <FooterTrademark/>
            
            </div>

        </div>

    </footer>
</template>

<script setup>
import FooterContacts from '../FooterContacts.vue';
import FooterMessengers from '../FooterMessengers.vue';
import FooterNavigation from '../FooterNavigation.vue';
import FooterTrademark from '../FooterTrademark.vue';
import MyLogo from '../MyLogo.vue';

</script>

<style lang="scss" scoped>
@use '/src/styles/variables' as *;

.footer {
    background-color: $light-green;

    &-container {

        display: flex;
        margin: 0 auto;
        width: 1440px;

    }

    &-contacts-wrapper {
        font-size: $big-text;
        padding: 23px 81px 23px 165px;

    }

    &-logo {
        margin-bottom: 30px;
    }

    &-links {
        padding: 23px 165px 77px 0;
    }
}

</style>