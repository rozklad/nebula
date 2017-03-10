<template>
  <header class="header cols strong">
    <router-link :to="{name: 'Dashboard'}" class="brand">
      {{ brand }}
      <strong class="brand-color">
        v6
      </strong>
    </router-link>
    <nav class="nav">
      <ul>
        <li v-for="(item, key) in menu">
          <router-link v-if="typeof item !== 'object'" :to="{name: item}">
            {{ item }}
          </router-link>
          <span v-else>
            {{ item.name }}
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'dashboard',
    mounted() {
      this.$http.get('/static/menu.json').then((response) => {
        this.menu = response.body;
      });
    },
    data() {
      return {
        brand: 'Nebula',
        menu: {},
      };
    },
  };
</script>

<style lang="scss" scoped>
@import '../variables';

.header {
  text-align: left;
  padding: $padding;
  line-height: $header-height - 2*$padding;
  height: $header-height;
  border-bottom: 1px solid $border-color;
  text-transform: uppercase;
  font-size: $font-size-interface;
  letter-spacing: .6px;
}

.brand {
  color: $text-color;
  text-decoration: none;
}

.nav {
  float: right;
  text-align: right;
}
</style>
