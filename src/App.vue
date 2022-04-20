<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
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