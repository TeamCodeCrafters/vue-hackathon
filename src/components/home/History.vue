<script></script>

<template>
    <div class="container-fluid overflow-x-hidden">
        <div class="container text-center">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="main-title display-6 fw-bold">Histórico dos Hackathons:</h3>
                    <hr class="opacity-100">
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2023</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2022</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2021</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2020</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2019</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2018</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2017</button>
                </div>
                <div class="col">
                  <button type="button" class="custom-btn btn-1">2016</button>
                </div>
            </div>
            <div class="accordion" id="accordionExample">
  </div>
</div>         
</div>

</template>

<style scoped>

.container-fluid {
    position: relative;
    padding-bottom: 50px;
    background-image: url("@/assets/img/Pattern1.png");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.col-12 {
    margin-top: 50px;
    margin-bottom: 50px;
}

.custom-btn {
 width: 130px;
 height: 40px;
 color: #fff;
 border-radius: 5px;
 padding: 10px 25px;
 font-family: 'Lato', sans-serif;
 font-weight: 500;
 background: transparent;
 cursor: pointer;
 transition: all 0.3s ease-in-out;
 position: relative;
 display: inline-block;
 box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 outline: none;
}

.btn-1 {
 background: rgb(57, 0, 150);
 background: linear-gradient(0deg, rgb(44, 0, 114) 0%, rgb(21, 5, 240) 100%);
 border: none;
}

.btn-1:before {
 height: 0%;
 width: 2px;
}

.btn-1:hover {
 box-shadow: 4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    transform: scale(1.05);
}

.row {
    margin-top: 50px;
    margin-bottom: 50px;
}

@media screen and (max-width: 767px) {
    .col {
        margin: 10px;
    }
}

</style>