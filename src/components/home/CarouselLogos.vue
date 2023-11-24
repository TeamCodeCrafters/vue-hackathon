<script></script>

<template>
    <div id="marcas" class="carousel slide overflow-x-hidden" data-bs-ride="carousel">
        <div class="carousel-inner">
            <h1 class="fs-1 text-center">Empresas Parceiras</h1>
            <div class="carousel-item active">
                <div class="cards-wrapper">
                    <div class="card">
                        <img src="https://www.ciser.com.br/application/modules/comum/assets/img/logo-ciser.svg?v=3" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://blog.asaas.com/wp-content/uploads/2020/08/logo-Asaas_Azul.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://obr.global/wp-content/uploads/2018/05/Logo-SoftExpert.gif" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Conta_azul_institucional-01.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/asus-logo-0.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="cards-wrapper">
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/2560px-Toshiba_logo.svg.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/09/Figura-Logo-HP-PNG.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-0.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://static.vecteezy.com/system/resources/previews/019/909/451/original/dell-transparent-dell-free-free-png.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card">
                        <img src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-0.png" class="card-img-top" alt="...">
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#marcas" data-bs-slide="prev">
            <i class="bi bi-arrow-left-circle"></i>
        </button>
        <button class="carousel-control-next btn-outline-secondary" type="button" data-bs-target="#marcas" data-bs-slide="next">
            <i class="bi bi-arrow-right-circle"></i>
        </button>
    </div>
</template>

<style scoped>

.carousel {
    background-color: rgb(216, 216, 216);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.cards-wrapper {
    display: flex;
    justify-content: center;
}

.card {
    justify-content: center;
    align-items: center;
    padding-right: 2%;
    padding-left: 2%;
}
.card img {
    max-width: 100px;
    max-height: 100px;
}

.card {
    margin: 0 0.5em;
    border: none;
    border-radius: 0;
    background-color: transparent;
}
.carousel-inner {
    padding: 1em;
}

i {
    font-size: 2rem;
    color: black;
}

@media screen and (max-width: 767px) {
    .triangleLeft {
        border-bottom: 40px solid white;
    }
    .triangleRight {
        border-top: 40px solid white;
    }
    img {
        width: 60px;
    }
}

</style>