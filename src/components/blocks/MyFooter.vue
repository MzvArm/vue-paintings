<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-contacts-wrapper">
                <MyLogo class="footer-logo"/>
                <div class="footer-contacts">
                    <a href="tel:+70000000000">+7 (000) 000-00-00</a>
                    <address> г. Краснодар, <br>ул. Инкхаусовская 15 </address>
                </div>
            </div>

            <div class="footer-navigation">

               <div class="footer-paintings">
            
                  <div class="footer-sections">Репродукции</div>
                  <div class="">Франция</div>
                  <div class="">Германия</div>
                  <div class="">Англия</div>
            
            
            </div>

            <div class="footer-news">

                 <div class="footer-sections">Новинки</div>
                 <div class="">2025</div>
                 <div class="">2026</div>
            
            </div>

            <div class="footer-about-us">
            
              <div class="footer-sections">О нас</div>
              <div class="">Художники</div>
              <div class="">Менеджеры</div>
              
            </div>
            
            </div>

            <div class="footer-links">

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

                <div class="trademark">
                Ink. House ®
                <br>All rights reserved
                </div>
            
            </div>


        </div>

    </footer>
</template>

<script setup>
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

    &-contacts {

        display: flex;
        flex-direction: column;
        row-gap: 8px ;
        color: $main-black;

        a {

        color: $main-black;

        }

        adress {

            line-height: 1.4;

        }

    }

    &-navigation {

        display: flex;
        column-gap: 60px;
        color: $main-gray;
        line-height: 1.5;
        padding: 23px 248px 23px 0;
    }

    &-sections {
        font-size: $big-text;
        color: $main-black;


    }

    &-links {

        padding: 23px 165px 77px 0;

    }

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



    .telegram {

        width: 30px;
        height: 30px;

    }

    .trademark {

        line-height: 1.7;
        font-size: 12px;
        color: $main-gray;

    }

}

</style>