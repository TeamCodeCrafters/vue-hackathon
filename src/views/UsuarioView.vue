<script>
import UsuariosApi from "@/api/user.js";
import NavBarAlt from "@/components/nav/NavBarAlt.vue";

const usuariosApi = new UsuariosApi();

export default {
  components: {
    NavBarAlt,
  },
  data() {
    return {
      users: [],
      user: {},
      results: [],
      cpfErrorMessage: "",
    };
  },
  async created() {
    const response = await usuariosApi.buscarTodosOsUsuarios();
    this.results = response.results; // Armazena os resultados originais (opcional)
    this.users = response.results.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  },
  methods: {
    async salvar() {
      if (this.user.id) {
        await usuariosApi.atualizarUsuario(this.user);
      } else {
        await usuariosApi.adicionarUsuario(this.user);
      }
      const response = await usuariosApi.buscarTodosOsUsuarios();
      this.results = response.results; // Atualiza os resultados originais (opcional)
      this.users = response.results.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
      this.user = {}; // Limpa o usuário após a operação
    },
    async excluir(user) {
      await usuariosApi.excluirUsuario(user.id);
      const response = await usuariosApi.buscarTodosOsUsuarios();
      this.results = response.results; // Atualiza os resultados originais (opcional)
      this.users = response.results.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
    },
    limparErroCPF() {
      this.cpfErrorMessage = "";
    },
  },
};
</script>

<template>
  <NavBarAlt />
  <div class="container-fluid overflow-x-hidden">
    <div class="row d-flex justify-content-center" id="main">
      <div class="col-md-4 col-12 d-none d-md-block"></div>
      <div class="col-md-4 col-12">
        <h2 class="text-center mb-4 text-light">Cadastro de Usuários</h2>
        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"
              ><i class="bi bi-person"></i
            ></span>
            <input
              type="text"
              class="form-control"
              @keyup.enter="salvar"
              v-model="user.name"
              placeholder="Nome"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"
              ><i class="bi bi-envelope"></i
            ></span>
            <input
              type="text"
              class="form-control"
              @keyup.enter="salvar"
              v-model="user.email"
              placeholder="seuemail@gmail.com"
            />
          </div>
        </div>
        <div class="mb-3">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"
              ><i class="bi bi-lock"></i
            ></span>
            <input
              type="password"
              class="form-control"
              @keyup.enter="salvar"
              v-model="user.password"
              placeholder="Senha"
            />
          </div>
        </div>
        <button class="btn btn-salvar col-12 w-100" @click="salvar">
          Salvar
        </button>
      </div>
      <div class="col-md-4 col-12"></div>
    </div>

  <div class="table-usuario col-12" id="usuarios">
    <div class="row g-0">
      <div class="col-md-12">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered rounded">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                  <th scope="col" id="action">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    <button
                      v-if="user"
                      @click="excluir(user)"
                      class="col-1 btn btn-danger"
                    >
                      Del
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 5%;
  background-image: url("../assets/img/BGintro.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn-salvar {
  color: white;
  background-color: #1453b1;
}
.row {
  height: 100%;
}
.table {
  margin-top: 20px; /* Adiciona margem superior */
}

.table.table-bordered {
  border-collapse: collapse;
}
.rounded {
  border-radius: 10px; /* Borda arredondada */
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  padding: 10px;
}

th {
  background-color: #212731;
  color: white;
}

td {
  text-align: center;
}

button {
  width: 20%;
  height: 7%;
}

#action {
  width: 5%;
}

.is-invalid {
  border-color: red;
  color: red;
}

.col-1 {
  width: 100%;
}

.col-md-4 {
  margin-top: 20vh;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  table {
    width: 800px;
  }
  button {
    width: 50%;
    height: 15%;
  }
}
</style>
