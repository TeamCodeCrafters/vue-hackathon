<script>
import NavBarAlt from "@/components/nav/NavBarAlt.vue";
import AnalisesApi from '@/api/equipeAnalise.js'
import NavBar from '@/components/nav/NavBar.vue'

const analisesApi = new AnalisesApi();

export default {
  components: {
    NavBarAlt
  },
  data() {
    return {
      analises: [],
      analise: {},
      results: [],
      cpfErrorMessage: '',
    };
  },
  async created() {
    const response = await analisesApi.buscarTodasAsAnalises();
    this.results = response.results; // Armazena os resultados originais (opcional)
    this.analises = response.results.map(analise => ({
      id: analise.id,
      nome: analise.name,
      integrante1: analise.integrante1,
      integrante2: analise.integrante2,
      integrante3: analise.integrante3,
      integrante4: analise.integrante4,
      integrante5: analise.integrante5,
      integrante6: analise.integrante6,
      // outras propriedades do usuário que você precisa
    }));
  },
  methods: {
    async salvar() {
      if (this.analise.id) {
        await analisesApi.atualizarAnalise(this.analise);
      } else {
        await analisesApi.adicionarAnalise(this.analise);
      }
      const response = await analisesApi.buscarTodasAsAnalises();
      this.results = response.results; // Atualiza os resultados originais (opcional)
      this.analises = response.results.map(analise => ({
        id: analise.id,
        nome: analise.name,
        integrante1: analise.integrante1,
        integrante2: analise.integrante2,
        integrante3: analise.integrante3,
        integrante4: analise.integrante4,
        integrante5: analise.integrante5,
        integrante6: analise.integrante6,
        // outras propriedades do usuário que você precisa
      }));
      this.analise = {}; // Limpa o usuário após a operação
    },
    async excluir(analise) {
      await analisesApi.excluirAnalise(analise.id);
      const response = await analisesApi.buscarTodasAsAnalises();
      this.results = response.results; // Atualiza os resultados originais (opcional)
      this.analises = response.results.map(analise => ({
        id: analise.id,
        nome: analise.nome,
        integrante1: analise.integrante1,
        integrante2: analise.integrante2,
        integrante3: analise.integrante3,
        integrante4: analise.integrante4,
        integrante5: analise.integrante5,
        integrante6: analise.integrante6,
        // outras propriedades do usuário que você precisa
      }));
    },
    editar(analise) {
      Object.assign(this.analise, analise);
    },
    limparErroCPF() {
      this.cpfErrorMessage = '';
    } 
  },
};
</script>


<template>
  <NavBarAlt />
  <div
    class="container-fluid px-4 py-5  text-lg-start justify-content-center align-items-center"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.nome"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante1"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante2"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante3"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante4"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante5"
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
                  required
                  @keyup.enter="salvar" 
                  v-model="analise.integrante6"
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit" @click="salvar">
                Confirmar Cadastro
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12" id="clientes">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Integrante 1</th>
                    <th scope="col">Integrante 2</th>
                    <th scope="col">Integrante 3</th>
                    <th scope="col">Integrante 4</th>
                    <th scope="col">Integrante 5</th>
                    <th scope="col">Integrante 6</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="analise in analises" :key="analise.id">
                    <td>{{ analise.nome }}</td>
                    <td>{{ analise.integrante1 }}</td>
                    <td>{{ analise.integrante2 }}</td>
                    <td>{{ analise.integrante3 }}</td>
                    <td>{{ analise.integrante4 }}</td>
                    <td>{{ analise.integrante5 }}</td>
                    <td>{{ analise.integrante6 }}</td>

                    <td>
                      <button v-if="analise" @click="excluir(analise)" class="col-1 btn btn-danger">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button v-if="analise" @click="editar(analise)" class="col-1 btn btn-warning">Edit</button>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
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
.row{
  padding-top: 90px;
  width: 100%;
}
</style>
