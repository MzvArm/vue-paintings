<template>
    <footer class="footer">
        <div class="footer-container">
        
            <div class="footer-contacts-wrapper">
                <MyLogo class="footer-logo"/>
                <FooterContacts class="footer-contacts"/>

            </div>

            <FooterNavigation class="footer-navigation"/>

            <div class="footer-links">

                <FooterMessengers class="footer-messengers"/>
                <FooterTrademark class="footer-trademark"/>
            
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
@use '/src/styles/mixins' as *;

.footer {
    background-color: $light-green;

    &-container {
        display: flex;
        margin: 0 auto;
        max-width: 1440px;
        justify-content: center;
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

@media (max-width: 1439px) {

    .footer {

        &-contacts-wrapper {
            padding-left: 10px;
        }

        &-links {
            padding-right: 5vw;
        }

        &-navigation:deep() {
            padding-right: 8vw;
        }
    }
}

@media (max-width: 1100px) {

    .footer{
        
        &-contacts-wrapper {
            padding-right: 50px;
        }

        &-contacts {
            font-size: 18px;
        }

        &-navigation:deep() {

            font-size: 16px;
            gap: 50px;
            padding-right: 6vw;

                .footer-sections {
                    font-size: $text;
                }
        }

        &-messengers {
            column-gap: 20px;
        }
    }
}

@media (max-width: 900px) {

    .footer {

        &-container {
            @include display(grid, $template: repeat(2, auto) / 59% 24%, $gap: 3.89vw 90px);
        }

        &-contacts-wrapper {
            display: flex;
            justify-content: space-between;
            grid-column: 1 / 3;
            padding: 23px 4.71vw 0 40px;
        }

        &-contacts {
            font-size: 16px;
        }

        &-navigation {
            padding: 0 0 23px 40px;
            gap: 40px;
        }

        &-links {
            padding: 0;
        }
    }
}

@media (max-width: 600px) {

    .footer {

        &-container {
            display: block;
            padding: 30px 30px 20px;
        }

        &-contacts-wrapper {
            padding: 0;
            margin-bottom: 30px;
        }

        &-navigation {
            justify-content: space-between;
            padding: 0 0 16px 0;
            margin-bottom: 16px;
            border-bottom: 2px solid $main-green;
        }

        &-links:deep() {
            justify-items: center;
            text-align: center;

            .footer-messengers {
                column-gap: 35px;
            }

            br {
                display: none;
            }
        }
    }
}

@media (max-width: 470px) {

    .footer {

        &-container {
            padding: 20px max(20px, 6.38vw);
        }

        &-logo:deep() {

            font-size: 4.26vw;

            img {
            width: 7.45vw;
            height: 7.45vw;
            }
        }

        &-contacts {
            font-size: max(15px, 3.4vw);

            &-wrapper {
                margin-bottom: 20px;
            }
        }

        &-navigation:deep() {
            font-size: 3.61vw;
            justify-content: center;

            .footer-sections {
                font-size: 4.17vw;
            }
        }    
    }
}
</style>