<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body,
  html {
    margin:0;
    padding:0;
    height: 100%;
  }

  #app {
    height: 100%;
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
  }

</style>
