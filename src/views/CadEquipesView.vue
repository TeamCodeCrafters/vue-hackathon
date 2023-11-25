<script setup>
import { ref, reactive, onMounted } from "vue";
import NavBarAlt from "@/components/nav/NavBarAlt.vue";
import equipeService from "@/services/equipes.js";

const equipes = ref([]);
const nome = ref([]);
const integrante1 = ref([]);
const integrante2 = ref([]);
const integrante3 = ref([]);
const integrante4 = ref([]);
const integrante5 = ref([]);
const integrante6 = ref([]);

const currentEquipe = reactive({
  nome: "",
  integrante1: "",
  integrante2: "",
  integrante3: "",
  integrante4: "",
  integrante5: "",
  integrante6: "",
  data: "",
});

async function save() {
  await equipeService.saveEquipe(currentEquipe);
  Object.assign(currentAnimal, {
    id: "",
    nome: "",
    integrante1: "",
    integrante2: "",
    integrante3: "",
    integrante4: "",
    integrante5: "",
    integrante6: "",
    data: "",
  });
  showForm.value = false;
}

onMounted(async () => {
  const data = await equipeService.getAllEquipes();
  equipes.value = data;
});


const showForm = ref(false);
</script>
<template>
  <NavBarAlt />
  <div
    class="container-fluid px-4 py-5 text-lg-start justify-content-center align-items-center"
  >
    <div class="row gx-lg-5 justify-content-center align-items-center mb-5">
      <div class="col-lg-5 mb-5 mb-lg-0" style="z-index: 10">
        <h1
          class="my-5 display-5 fw-bold ls-tight"
          style="color: hsl(218, 81%, 95%)"
        >
          Hackathon IFC<br />
          <span style="color: hsl(218, 81%, 75%)">2023</span>
        </h1>
        <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
          Preparem-se, alunos! O Hackathon IFC está chegando! Venham fazer parte
          dessa jornada de inovação e criatividade. Inscrevam suas equipes e
          participem desse desafio transformador. Mostrem suas habilidades e
          deixem sua marca na próxima revolução tecnológica!
        </p>
      </div>

      <div class="col-lg-5 justify-content-between">
        <div class="formulario container m-5">
          <main>
            <div class="text-center text-light p-3">
              <h2>Formulário de inscrição</h2>
            </div>
            <form class="row g-3">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="teamName"
                  placeholder="Nome da equipe"
                  v-model="currentEquipe.nome"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome da equipe.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante1"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante2"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante3"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante4"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante5"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  v-model="currentEquipe.integrante6"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Confirmar Cadastro
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formulario {
  padding: 20px;
}

hr {
  color: white;
  border: 3;
}
.container-fluid {
  background-image: url("../assets/img/BGintro.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
.row {
  padding-top: 90px;
  width: 100%;
}
</style>