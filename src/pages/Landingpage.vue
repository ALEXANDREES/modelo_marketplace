<template>
  <q-page class="banner row">

    <Home />
    <About />
    <Menu />    

  </q-page>
</template>

<script>
import Home from "components/ladingpage/Home"
import Menu from "components/ladingpage/Menu"
import About from "components/ladingpage/About"

export default {
  name: "landingPage",
  components: {
    Home,
    Menu,
    About
  },
  setup() {
    return {
      
    }
  }
}

</script>

<style scoped>
.banner {
  background-image: url("/images/home-img.jpeg");
  min-height: inherit;
  background-size: cover;
  position: inherit;
  background-repeat: no-repeat;
  height: 650px;
}
</style>
