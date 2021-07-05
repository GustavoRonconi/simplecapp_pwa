<template>
  <HomePage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "./components/HomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
});
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  font-family: "Roboto";
}
.btn-simplecapp {
  color: #3f3d3d !important;
  background-color: #f7de50 !important;
  border-color: #f7de50 !important;
}
</style>
