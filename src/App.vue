<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style>
#app{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body{
  margin: 0;
  height: 100vh;
}

li{
  list-style: none;
  padding: 0;
}

input{
  border: none;
  outline: none;
  padding: 7px;
  border: 1px solid #808080;
}
</style>
