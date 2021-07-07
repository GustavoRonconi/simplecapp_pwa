<template>
  <section id="contact">
    <div class="container mt-4">
      <h3 class="text-center text-uppercase">Fale Conosco</h3>
      <p class="text-center w-75 m-auto">
        Estamos disponíveis para solucionar dúvidas técnicas e ouvir feedbacks
        sobre nossos produtos, afinal somos uma startup e precisamos da visão do
        cliente para nos desenvolver.
      </p>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card border-0">
            <div class="card-body text-center">
              <i class="fab fa-whatsapp fa-5x mb-3"></i>
              <h4 class="text-uppercase mb-4">Whatsapp</h4>
              <p>+55 (48)99805-0557</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card border-0">
            <div class="card-body text-center">
              <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
              <h4 class="text-uppercase mb-4">Localização</h4>
              <address>DEFINIR O ENDEREÇO</address>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
          <div class="card border-0">
            <div class="card-body text-center">
              <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
              <h4 class="text-uppercase mb-4">email</h4>
              <p>gustavo.ronconi@simplecapp.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped>
#contact .card:hover i,
#contact .card:hover h4 {
  color: #f8e054;
}
.mt-4 {
  margin-top: 100px !important;
}

</style>
