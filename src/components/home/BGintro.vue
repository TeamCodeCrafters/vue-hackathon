<script></script>

<template>
    <div class="container-fluid overflow-x-hidden overflow-y-hidden">
        <div class="carousel slide w-100">
            <div class="carousel-inner"></div>
            <div class="carousel-caption d-flex align-items-center justify-content-between text-center">
                <div class="col-12 col-md-6">
                    <div class="text">
                        <h1 class="fs-1"><strong>Hackathon</strong></h1>
                        <h5>Site administrativo para equipes do Hackathon</h5>
                        <button type="button" class="btn btn-outline-light fs-4" v-scroll-to="'#SobreNos'">
                            Introdução
                        </button>
                    </div>
                </div>
                <div class="col-md-6 d-none d-sm-block">
                    <img src="@/assets/img/BGintroPeople.png" alt="">
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

.carousel-caption {
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: -1.1%;
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
    height: 90vh;
    object-fit: cover;
}

.col-6 {
    height: 100%;
}

text {
    margin-bottom: 30%;
}

h1 {
    font-size: 100px;
}

img {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

@media screen and (max-width: 767px) {
    .text {
        margin-bottom: 100%;
    }
}

</style>