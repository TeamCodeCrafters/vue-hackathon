<script></script>

<template>
  <div class="container-fluid overflow-x-hidden">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="main-title display-6 fw-bold">
            Histórico dos Hackathons:
          </h3>
          <hr class="opacity-100" />
        </div>
    </div>
    <div class="col-14 col-md-12 row">
        <div class="col-12 col-md-12 text-center">
          <button type="button" class="custom-btn btn-1">Vencedores</button>
          <button type="button" class="custom-btn btn-1">2023</button>
          <button type="button" class="custom-btn btn-1">2022</button>
          <button type="button" class="custom-btn btn-1">2021</button>
          <button type="button" class="custom-btn btn-1">2020</button>
          <button type="button" class="custom-btn btn-1">2019</button>
          <button type="button" class="custom-btn btn-1">2018</button>
          <button type="button" class="custom-btn btn-1">2017</button>
        </div>
      <!-- podio -->
      <div class="col-12 col-md-12">
        <div class="container podium justify-content-center text-center">
            <div class="podium__item">
            <p class="podium__city">Equipe 2</p>
            <div class="podium__rank second">2</div>
            </div>
            <div class="podium__item">
            <p class="podium__city">CodeCrafters</p>
            <div class="podium__rank first">1</div>
            </div>
            <div class="podium__item">
            <p class="podium__city">Equipe 3</p>
            <div class="podium__rank third">3</div>
            </div>
        </div>
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
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-1 {
  background: rgb(96, 9, 240);
  background: linear-gradient(0deg, rgb(38, 10, 116) 0%, rgb(7, 19, 131) 100%);
  border: none;
 background: rgb(57, 0, 150);
 background: linear-gradient(0deg, rgb(44, 0, 114) 0%, rgb(21, 5, 240) 100%);
 border: none;
}

.btn-1:before {
  height: 0%;
  width: 2px;
}

.btn-1:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.5),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
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

button {
  margin: 10px;
}

/* podio */

body {
  font-family: sans-serif;
}

.container {
  display: flex;
  align-items: flex-end;
}

.podium__item {
  width: 200px;
}

.podium__rank {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #fff;
}

.podium__city {
  text-align: center;
  padding: 0 0.5rem;
}

.podium__number {
  width: 27px;
  height: 75px;
}

.podium .first {
  min-height: 300px;
  background: rgb(41, 37, 255);
  background: linear-gradient(
    333deg,
    rgb(21, 33, 209) 0%,
    rgb(20, 23, 161) 13%,
    rgb(11, 22, 116) 53%,
    rgb(14, 12, 145) 100%
  );
}

.podium .second {
  min-height: 200px;
  background: rgb(40, 40, 194);
}

.podium .third {
  min-height: 100px;
  background: rgb(55, 40, 255);
}

</style>