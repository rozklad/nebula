<template>
  <div id="app">
    <theme-header></theme-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '@/components/Header';

  Vue.component('theme-header', Header);

  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import 'variables';
  @import 'general';
</style>
