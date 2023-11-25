<template>
  <NavBarAlt />
  <div class="container-fluid overflow-x-hidden">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center mt-5 mb-5">
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">
            <div class="text-center">
              <img
                src="../assets/img/logo.png"
                class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px"
                alt="profile"
              />
            </div>

            <div class="mb-3">
              <h1>Hackathon</h1>
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="Username"
                aria-describedby="emailHelp"
                v-model="user.email"
                placeholder="usuario@gmail.com"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="senha"
                v-model="user.password"
              />
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBarAlt from "@/components/nav/NavBarAlt.vue";
import axios from "axios";
import api from "../plugins/api";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";

const router = useRouter();
const loginError = ref("");
const user = ref({
  email: "",
  password: "",
});

const login = async () => {
  try {
    const { data } = await axios.post(
      `http://0.0.0.0:19003/token/`,
      user.value
    );
    if (data) {
      localStorage.setItem("token", data.access);

      const decodedToken = jwtDecode(data.access);
      console.log(decodedToken);

      if (decodedToken.user_id === 1) {
        localStorage.setItem("userRole", "admin");
      } else {
        localStorage.setItem("userRole", "user");
      }

      const response = await api.get(`/api/users/${decodedToken.user_id}`);
      localStorage.setItem("is_avaliador", response.data.is_avaliador);
      localStorage.setItem("is_professor", response.data.is_professor);
      localStorage.setItem("is_aluno", response.data.is_aluno);

      router.push("/");
    }
  } catch (error) {
    console.error(error);
    loginError.value = "Usuário ou senha inválidos";
  }
};
</script>

<style scoped>
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
  margin-top: 5%;
}
.btn-color {
  background-color: #0e1c36;
  color: #fff;
}
.profile-image-pic {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.cardbody-color {
  background-color: #ebf2fa;
}

a {
  text-decoration: none;
}

body {
  background-image: url("../assets/img/BGintro.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

@media screen and (max-width: 767px) {
  .container-fluid {
    padding-top: 25%;
  }
  .card {
    margin: 10px;
  }
}
</style>
