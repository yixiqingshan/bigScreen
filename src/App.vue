<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  /* background-color: #02346e; */
  background: url(../static/img/bg.png);
   width: 100%;
  height: 100%;
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#fff;
  /* margin-top: 60px; */
}
p {
  margin: 0;
}
</style>
