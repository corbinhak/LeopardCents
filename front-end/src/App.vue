<template>
  <div id="container">
    <Header />
    <HomePage />
  </div>
  <div id="app">

  </div>
</template>

<script>
import Header from "./components/Header.vue"
import HomePage from "./components/HomePage.vue"
export default {
  name: 'App',
    components: {
      Header,
      HomePage
    }
}
</script>

<style>
    body,html {
        margin: 0px;
        padding: 0px;
    }
</style>
