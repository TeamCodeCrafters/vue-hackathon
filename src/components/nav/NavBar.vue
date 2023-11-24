<script></script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/" v-scroll-to="'#navbar'"><img src="@/assets/img/logo.png" class="logo">Hackathon</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="@/assets/img/bars-solid.png" class="bars" alt="">
            </button>
            <div class="collapse navbar-collapse justify-content-start" id="navbarTogglerDemo02">
                <ul class="navbar-nav mb-3 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#navbar'">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#SobreNos'">Sobre o Hackathon</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#marcas'">Empresas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" v-scroll-to="'#FAQ'">Edições</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">{{ isLoggedIn ? 'Logado' : 'Login' }}</a>
                    </li>
                    <!-- <li class="nav-item dropdown" v-if="userRole === 'admin'">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                        </a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-ordem-servico">Cadastro O.S.</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-computador">Cadastro PC</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-notebook">Cadastro Note</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link drop" to="/cadastro-usuario">Cadastro Cliente</router-link>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.navbar {
    background-image: linear-gradient(#000c69,#000636,transparent);
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
    transition: 0.25s;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: rgb(174, 174, 174);
}

.bars{
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