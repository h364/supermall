<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="$route.name != 'detail'"></main-tab-bar>
  </div>
</template>

<script>
  import maintabbar from '@components/content/maintabbar/Maintabbar.vue'

  export default {
    name: 'App',
    components: {
      'main-tab-bar': maintabbar
    }
  }
</script>

<style>
  @import "@assets/css/base.css"
</style>