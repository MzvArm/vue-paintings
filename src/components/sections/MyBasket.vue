<template>
    <Transition name="modal">
    <div class="modal-background" v-if="show">
        <div class="modal-box">
            <button @click="$emit('close')">close</button>
        </div>

    </div>
    </Transition>
</template>

<script setup>

  defineProps({

    show: {
        type: Boolean,
        required: true
    }
})

</script>

<style lang="scss" scoped>

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
  width: 300px;
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


</style>