<template>
  <Navbar />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer,
  },
});
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  font-family: "Roboto";
  padding-top: 105px;
}
.btn-simplecapp {
  color: #3f3d3d !important;
  background-color: #f7de50 !important;
  border-color: #f7de50 !important;
}
.btn-simplecapp:active {
  color: #b19600 !important;
}
</style>
