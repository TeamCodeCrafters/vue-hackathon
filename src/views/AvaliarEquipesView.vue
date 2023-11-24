<script setup>
import NavBarAlt from "@/components/nav/NavBarAlt.vue";
import Modal from "@/components/modal/Modal.vue"
</script>
<template>
    <NavBarAlt />
<!--Grid column-->
<div class="mt-5 team-container justify-content-center align-items-center">

<!-- Card -->
<div class="card col-3 m-2">

  <div class="card-header bg-white py-3">
    <p class="text-uppercase small mb-2"><strong>Time 1</strong></p>
    <h5 class="mb-0">CodeCrafters</h5>
  </div>

  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Ana Luiza Dias da Rocha</li>
      <li class="list-group-item">Ana Paula de Souza</li>
      <li class="list-group-item">Felipe Rotermel</li>
      <li class="list-group-item">Guilherme Tamanini</li>
      <li class="list-group-item">Luiza Torrens</li>
      <li class="list-group-item">Phelipi Moser</li>
    </ul>
    <Modal />
  <div class="card-footer bg-white py-3">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Avaliar</button>
  </div>

</div>
<!-- Card -->

</div>
</div>
<!--Grid column-->
</template>

<style>
.team-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>