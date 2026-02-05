<template>
  <div class="body">
<MyHeader class="header"/>
<MyMain/>
<MyFooter/>
</div>
</template>

<script setup>
import MyHeader from './components/blocks/MyHeader.vue';
import MyMain from './components/blocks/MyMain.vue';
import MyFooter from './components/blocks/MyFooter.vue';
</script>

<style lang="scss" scoped>
@use "./styles/main.scss" as *;

.container {
  font-size: 20px;
  color: black;
  width: 1440px;
}

</style>