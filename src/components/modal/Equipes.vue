<script>
 import AvaliacoesApi from '@/api/avaliacoes.js';

const avaliacoesApi = new AvaliacoesApi();

export default {
  data() {
    return {
      avaliacoes: [],
    };
  },
  async created() {
    try {
      this.avaliacoes = await avaliacoesApi.buscarTodasAsAvaliacoes();
      console.log("Data fetched:", this.avaliacoes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  computed: {
    topAvaliacoes() {
      // Garante que this.avaliacoes.results é uma array antes de chamar slice
      const avaliacoesArray = this.avaliacoes.results || [];
      
      // Ordenar as avaliações por nota de forma descendente
      const sortedAvaliacoes = avaliacoesArray.slice().sort((a, b) => b.nota - a.nota);
      
      // Pegar as três melhores avaliações
      return sortedAvaliacoes.slice(0, 3);
    },
  },
  methods: {
    getNomeDaEquipe(equipeId) {
      // Aqui você pode implementar lógica para obter o nome da equipe
      // Por padrão, estou usando "Equipe" seguido pelo ID da equipe como exemplo
      return `Equipe ${equipeId}`;
    },
  },
};
</script>

<template>
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
    <div class="col-14 col-md-12">
    <div class="container justify-content-center text-center">
        <div v-for="(avaliacao, index) in topAvaliacoes" :key="avaliacao.id" class="barcontainer">
            <div class="bar" :style="{ height: Math.min(avaliacao.nota, 100) + '%' }">
                <p class="titulo" style="word-wrap: break-word">{{ avaliacao.equipe.nome }}</p>
                <p class="nota">{{ avaliacao.nota }}%</p>
            </div>
        </div>
    </div>
</div>

    <div class="card" style="width: 18rem;" v-for="avaliacao in avaliacoes.results" :key="avaliacao.id">
        <div class="card-body">
            <h5 class="card-title">{{ avaliacao.equipe.nome }}</h5>
            <p class="card-text">{{ avaliacao.comentario }}</p>
            <p class="card-text nota">{{ avaliacao.nota }}</p>
        </div>
    </div>
</template>

<style scoped>

.col-12 {
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
  box-shadow: inset 2px 2px 2px 0px rgba(35, 54, 222),
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

.row {
  margin-top: 50px;
  margin-bottom: 50px;
}

button {
  margin: 10px;
}

.container {
  display: flex;
  align-items: flex-end;
  width: 100vh;
}

.barcontainer{
  background-color: transparent;
  transform: translateY(-50%);
  width: 15vh;
  height: 30vh;
  margin: 15px;
  margin-top: 250px;
}
  
.bar{
  background-color: #5869fc;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  box-sizing: border-box;
  animation: grow 1.5s ease-out forwards;
  transform-origin: bottom;
  max-width: 15vh;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
@keyframes grow{
  from{
    transform: scaleY(0);
  }
}

.card {
    margin: 10px;
}

.titulo {
    font-size: 20px;
    font-weight: bold;
    color: white;
}

.nota {
    font-size: 20px;
    font-weight: bold;
    color: #ffd700;
}

@media screen and (max-width: 767px) {
    .col {
        margin: 10px;
    }
    .container {
        width: 45vh;
    }
    .barcontainer{
        width: 50vh;
        height: 30vh;
        margin-top: 150px;
    }
}

</style>