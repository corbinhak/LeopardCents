<template>
  <div id="container">
    <Header />
    <HomePage />
    <Header />
    <Contact />
    <Header />
    <Socials />
    <Header />
    <Blog />
    <Header />
    <Resources />
    <Header />
    <Tools />
  </div>
  <div id="app">

  </div>
</template>

<script>
import Header from "./components/Header.vue"
import HomePage from "./components/HomePage.vue"
import Contact from "./components/Contact-Us.vue"
import Socials from "./components/Socials.vue"
import Blog from "./components/Blog.vue"
import Resources from "./components/Resources.vue"
import Tools from "./components/Tools.vue"

export default {
  name: 'App',
    components: {
      Header,
      HomePage,
      Contact,
      Socials,
      Blog,
      Resources,
      Tools,
    }
}
</script>

<style>
    body,html {
        margin: 0px;
        padding: 0px;
    }
</style>
