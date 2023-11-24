<script></script>

<template>
    <div class="container-fluid overflow-x-hidden">
        <div class="carousel slide w-100">
            <div class="carousel-inner"></div>
            <div class="carousel-caption d-flex align-items-center justify-content-center text-center">
                <div class="text">
                    <h1><strong>Hackathon</strong></h1>
                    <h5>Site administrativo para equipes do Hackathon</h5>
                    <button type="button" class="btn btn-outline-light fs-4" v-scroll-to="'#SobreNos'">
                        Introdução
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container-fluid {
    background-color: rgb(232, 232, 232);
    padding: 0;
    margin: 0;
    background-image: url("@/assets/img/BGintro.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.carousel {
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
}

.carousel-caption {
    margin-bottom: 20vh;
}

.text {
    margin-bottom: 7%;
}

h1, h5 {
    margin-bottom: 30px;
}

</style>