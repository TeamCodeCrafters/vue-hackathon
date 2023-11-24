<script>
import UsuariosApi from '@/api/user.js'
import NavBar from '@/components/nav/NavBar.vue'

const usuariosApi = new UsuariosApi();

export default {
  components: {
    NavBar
  },
  data() {
    return {
      users: [],
      user: {},
      results: [],
      cpfErrorMessage: '',
    };
  },
  async created() {
    const response = await usuariosApi.buscarTodosOsUsuarios();
    this.results = response.results; // Armazena os resultados originais (opcional)
    this.users = response.results.map(user => ({
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
      this.users = response.results.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,

      }));
      this.user = {}; // Limpa o usuário após a operação
    },
    async excluir(user) {
      await usuarioApi.excluirUsuario(user.id);
      const response = await usuariosApi.buscarTodosOsUsuarios();
      this.results = response.results; // Atualiza os resultados originais (opcional)
      this.users = response.results.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,

      }));
    },
    editar(user) {
      Object.assign(this.user, user);
    },
    limparErroCPF() {
      this.cpfErrorMessage = '';
    } 
  },
};
</script>


<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center" id="main">
      <div class="col-md-5 col-12">
        <div class="mb-3">
          <label class="form-label">Nome:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="user.name"
              placeholder="Seu nome"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Email:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-envelope"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="user.email"
              placeholder="seuemail@gmail.com"
            >
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Senha:</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3"><i class="bi bi-envelope"></i></span>
            <input type="text" class="form-control"
              @keyup.enter="salvar" 
              v-model="user.password"
              placeholder="seuemail@gmail.com"
            >
          </div>
        </div>
      </div>
      <button class="btn btn-success" @click="salvar">Salvar</button>
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
                    <th scope="col">Sobrenome</th>
                    <th scope="col">Email</th>
                    <th scope="col" id="action">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <button v-if="user" @click="excluir(user)" class="col-1 btn btn-danger">Del</button>
                      <div class="w-100" id="separate"></div>
                      <button v-if="user" @click="editar(user)" class="col-1 btn btn-warning">Edit</button>
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
}

.row {
  height: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
}

th {
  background-color: #212731;
  color: white;
}

td {
  text-align: center;
  border: 1px solid #ddd;
}

.btn-success {
  margin-top: 100px;
  margin-bottom: 100px;
}

button {
  width: 20%;
  height: 7%;
}

#action {
  width: 5%;
}

#separate {
  height: 20px;
}

.is-invalid {
  border-color: red;
  color: red;
}

.col-1 {
  width: 100%;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  table {
    width: 800px;
  }
  #clientes {
    padding: 3%;
  }
  .btn-success {
    margin-top: 50px;
    margin-bottom: 50px;
  }
  button {
    width: 50%;
    height: 5%;}
}
</style>