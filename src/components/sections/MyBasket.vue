<template>
    <Transition name="modal">
    <div class="modal-background" v-if="show">
        <section class="modal-box">
            <header class="modal-header">           
             <h2>Ваш заказ</h2>
             <button @click="$emit('close')">
                <img class="modal-close-btn" src="/public/close-btn.svg" alt="Закрыть" title="Закрыть">
             </button>
            </header>
            <div class="modal-main">
            <div class="empty" v-if="sumOfOrders == 0">Корзина пуста((</div>
              <OrderItems/>
            </div>
            <footer class="modal-footer">
               <div>Итого: {{ sumOfOrders }} руб</div>
               <button>Оплатить</button>
            </footer>
        </section>

    </div>
    </Transition>
</template>

<script setup>
import OrderItems from '../OrderItems.vue';
import { useBasketStore } from '@/basketStore';
import { computed } from 'vue';

const orders = useBasketStore().orders

const sumOfOrders = computed(() => {

   return orders.reduce((sum, item) => {

     return sum + parseInt(item.price.replace(" ", ""))

    }, 0)

})

  defineProps({

    show: {
        type: Boolean,
        required: true
    }
})

</script>

<style lang="scss" scoped>

@use "/src/styles/variables" as *;

.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 200;
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-box {
  width: 460px;
  max-height: 600px;
  overflow-y: auto;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.9s ease;
}


.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-header {

    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid $main-green;

}


.modal-close-btn {

    width: 20px;
    height: 20px;
}

.empty {

  padding-top: 40px;
  justify-self: center;
  color: $main-gray;

}

.modal-footer {
  display: flex;
  line-height: 1.5;
  justify-content: space-between;
  border-top: 2px solid $main-green;
  padding-top: 5px;

  button {

    color: $main-black;
    background-color: $light-green;
    padding: 10px 7px;
    border-radius: 10px;
  }

}


</style>