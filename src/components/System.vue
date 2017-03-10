<template>
  <div class="module padded">
    <transition name="slide-fade">
      <div v-show="loaded">
        <h1>Lorem ipsum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, culpa dolore ducimus fuga id odit quia
          quod ut vel?</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'system',
    mounted() {
      this.$http.get(`/static/sample.json?ver=${new Date().getMilliseconds()}`).then(() => {
        this.loaded = true;
      });
    },
    data() {
      return {
        loaded: false,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../variables';
</style>
