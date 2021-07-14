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
body {
  padding-top: 105px;
}

.mt-6 {
  margin-top: 10% !important;
}

.btn-simplecapp {
  color: #3f3d3d !important;
  background-color: #f7de50 !important;
  border-color: #f7de50 !important;
}
.btn-simplecapp:active {
  color: #b19600 !important;
}

.under-decor {
  color: #f7de50;
}
</style>
