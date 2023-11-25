<script setup>
import NavBarAlt from "@/components/nav/NavBarAlt.vue";
import Modal from "@/components/modal/Modal.vue";
import Footer from "@/components/nav/Footer.vue"

import { ref, onMounted } from "vue";

import equipeService from "@/services/equipes.js";

const equipes = ref([]);

onMounted(async () => {
  const data = await equipeService.getAllEquipes();
  equipes.value = data;
});
</script>
<template>
  <NavBarAlt />
  <div class="container-fluid justify-content-center align-items-center text-center">
    <div class="row text-center justify-content-between">
    <div class="card col-12 col-sm-3 m-3" v-for="equipe in equipes" :key="equipe.id">
      <div class="card-header bg-white py-3">
        <h5 class="mb-0">{{ equipe.nome }}</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Integrante 1: {{ equipe.integrante1 }}
          </li>
          <li class="list-group-item">
            Integrante 2: {{ equipe.integrante2 }}
          </li>
          <li class="list-group-item">
            Integrante 3: {{ equipe.integrante3 }}
          </li>
          <li class="list-group-item">
            Integrante 4: {{ equipe.integrante4 }}
          </li>
          <li class="list-group-item">
            Integrante 5: {{ equipe.integrante5 }}
          </li>
          <li class="list-group-item">
            Integrante 6: {{ equipe.integrante6 }}
          </li>
        </ul>
        <Modal />
        <div class="card-footer bg-white py-3">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Avaliar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</template>

<style scoped>

.row {
  width: 100%;
  padding: 100px;
}

@media screen and (max-width: 767px) {
    .row {
      margin-top: 100px;
      padding: 0px;
    }
}

</style>
