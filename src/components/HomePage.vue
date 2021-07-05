<template>
  <div></div>
  <Navbar />
  <section class="mt-6">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 col-lg-8 col-xl-5">
          <h1 class="display-1 lh-sm">Simplificando investimentos</h1>
          <i class="fas fa-chart-line fa-5x"></i>
        </div>
        <div class="col-md-9 col-xl-5">
          <p class="fs-4">
            Foque seus esforços no que realmente interessa no mercado
            financeiro, <u>lucro</u>, deixe a burocracia com a gente, conheça
            nossos produtos.
          </p>
          <button class="btn btn-simplecapp btn-primary mt-3">
            Conhecer agora
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-6">
    <div class="container">
      <h1 class="display-3 fw-semi-bold">Produtos</h1>
      <p class="fs-4">
        A SimpleCapp oferece soluções para automações de rotinas do mercado
        financeiro e contabilidade.
      </p>
      <div class="row mb-4 mt-4">
        <div class="col-md-6">
          <div class="border product">
            <div class="p-5">
              <i class="fas fa-coins fa-3x"></i>
              <h3 class="pt-3 lh-base">IRFácil</h3>
              <p class="mb-0">
                Automatize toda a rotina relacionada a declaração do imposto de
                renda variável, controle suas operações e/ou a de seus clientes
                através de uma interface simples e robusta, encontre pessoas
                precisando dos seus serviços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>

<style scoped lang="scss">
.mt-6 {
  margin-top: 350px !important;
}
.product:hover {
  background-color: #f8e054;
}
.fa-chart-line {
  color: #f8e054;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
}
</style>