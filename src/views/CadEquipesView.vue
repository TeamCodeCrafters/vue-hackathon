<script>
import NavBarAlt from "@/components/nav/NavBarAlt.vue";

import axios from "axios";

export default {
  components: {
    NavBarAlt
  },
  data() {
    return {
      novaEquipe: {
        nome: '',
        integrante1: '',
        integrante2: '',
        integrante3: '',
        integrante4: '',
        integrante5: '',
        integrante6: '',
      },
    };
  },
  methods: {
    adicionarEquipe() {
      axios
        .post(
          "https://bhttps://django-hackathon.4.us-1.fl0.io/api/equipes/",
          this.novaEquipe
        )
        .then((response) => {
          console.log("Equipe adicionada com sucesso!", response.data);
          this.novaEquipe = {
            nome: '',
            integrante1: '',
            integrante2: '',
            integrante3: '',
            integrante4: '',
            integrante5: '',
            integrante6: '',
          };
        })
        .catch((error) => {
          console.error("Erro ao adicionar equipe:", error);
        });
    },
  },
};
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
              <div class="col-12">"
                <input
                  type="text"
                  class="form-control"
                  id="teamName"
                  placeholder="Nome da equipe"
                  v-model="novaEquipe.nome"
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
                  v-model="novaEquipe.integrante1"
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
                  v-model="novaEquipe.integrante2"
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
                  v-model="novaEquipe.integrante3"
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
                  v-model="novaEquipe.integrante4"
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
                  v-model="novaEquipe.integrante5"
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
                  v-model="novaEquipe.integrante6"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit" @click="adicionarEquipe">
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
