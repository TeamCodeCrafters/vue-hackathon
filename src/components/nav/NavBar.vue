<script setup>

import { is_avaliador, is_professor, is_aluno, is_logged, logout, setupSharedModule } from '../../services/logout';

setupSharedModule();
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#" aria-current="page">
        <router-link to="/" v-scroll-to="'#navbar'"
          ><img
            src="@/assets/img/logo.png"
            class="logo"
          />Hackathon</router-link
        >
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="@/assets/img/bars-solid.png" class="bars" alt="" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarTogglerDemo02"
      >
        <ul class="li-nav navbar-nav mb-3 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#navbar'">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#SobreNos'">Sobre o Hackathon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#empresas'"
              >Empresas</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" v-scroll-to="'#edicoes'">Edições</a>
          </li>
          <li v-if="is_aluno == 'true'" class="nav-item">
            <router-link class="nav-link" to="/cadequipe"
              >Cadastrar Equipes</router-link
            >
          </li>
          <li v-if="is_avaliador == 'true'" class="nav-item">
            <router-link class="nav-link" to="/avaliarequipes"
              >Avaliar</router-link
            >
          </li>
          <li v-if="is_professor == 'true'" class="nav-item">
            <router-link class="nav-link" to="/usuario"
              >Cadastrar usuários</router-link
            >
          </li>
          <li v-if="!is_logged" class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li v-if="is_logged" class="nav-item">
            <router-link @click.native="logout" class="nav-link text-white" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-image: linear-gradient(#000c69, #000636, transparent);
  transition: background-color 0.1s linear;
  transition: 0.4s;
  padding: 0;
}

.navbar.solid {
  background-color: #000421;
  transition: background-color 0.7s ease 0s;
  transition: 0.4s;
  padding: 0;
}

.logo {
  height: 70px;
  width: 70px;
  transition: 0.4s;
}

.logo.solid {
  height: 30px;
  width: 30px;
  transition: 0.4s;
}

a {
  color: white;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.25s;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  color: rgb(174, 174, 174);
}

.bars {
  width: 35px;
  height: 35px;
}

.dropdown-menu {
  background-color: #212731;
}

@media screen and (max-width: 767px) {
  .drop {
    margin-left: 20px;
  }
  .dropdown-menu {
    background-color: transparent;
  }
}
</style>
