<script></script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/" v-scroll-to="'#navbar'"><img src="@/assets/img/logo.png" class="logo">Hackathon</router-link>
            </a>
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/" v-scroll-to="'#navbar'">Home</router-link>
            </a>
            <a class="navbar-brand text-light" href="#" aria-current="page">
                <router-link to="/avaliarequipes" v-scroll-to="'#navbar'">Avaliar</router-link>
            </a>
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