<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid ms-7">
      <img src="/img/logo.png" alt="" class="brand" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-5 list-group">
          <li class="nav-item">
            <a class="nav-link nav-bar-links" href="#"
              ><i class="fas fa-phone-square-alt space-ico"></i>Contato
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-users space-ico"></i>Redes Socials
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#"><i class="fab fa-linkedin space-ico"></i>Linkedin</a></li>
              <li><a class="dropdown-item" href="#"><i class="fab fa-facebook-square space-ico"></i>Facebook</a></li>
              <li><a class="dropdown-item" href="#"><i class="fab fa-instagram space-ico"></i>Instagram</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.brand {
  max-height: 75px;
}
.navbar {
  background-color: #f7de50;
  border-bottom: 1px solid rgb(202, 200, 200);
}
.ms-7 {
  margin-left: 3% !important;
}
.nav-link {
  color: #4b4949 !important;
  font-size: 20px;
}
.space-ico {
  margin-right: 5px;
}
.nav-item {
  margin-right: 15px;
}
.dropdown-menu {
  background-color: #f7de50;
}
</style>
