<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {

    }
  }

</script>

<style>

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100%;
    background: #fafafa;
  }

</style>
