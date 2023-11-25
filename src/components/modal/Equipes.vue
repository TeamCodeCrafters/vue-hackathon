<script>
import AvaliacoesApi from '@/api/avaliacoes.js';

const avaliacoesApi = new AvaliacoesApi();

export default {
  data() {
    return {
      avaliacoes: [],
      anoSelecionado: 2023,
      avaliacoesFiltradas: [],
    };
  },
  async created() {
    try {
      await this.atualizarAvaliacoes();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  computed: {
    topAvaliacoes() {
      const sortedAvaliacoes = this.avaliacoesFiltradas
        .slice()
        .sort((a, b) => b.mediaNota - a.mediaNota);

      return sortedAvaliacoes.slice(0, 3);
    },
  },
  methods: {
    async filtrarPorAno(ano) {
      this.anoSelecionado = ano;
      await this.atualizarAvaliacoes();
    },
    async atualizarAvaliacoes() {
      try {
        this.avaliacoes = await avaliacoesApi.buscarTodasAsAvaliacoes();
        if (this.avaliacoes && this.avaliacoes.results) {
          console.log("Data fetched:", this.avaliacoes);
          this.avaliacoes.results.forEach((avaliacao) => {
            avaliacao.mediaNota = this.calcularMediaNota(avaliacao);
          });
          this.atualizarAvaliacoesFiltradas();
        } else {
          console.error("Results property not found in avaliacoes:", this.avaliacoes);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    atualizarAvaliacoesFiltradas() {
      // Adicione lógica para filtrar avaliações com base no ano selecionado
      this.avaliacoesFiltradas = this.avaliacoes.results.filter((avaliacao) => {
        return this.anoSelecionado ? avaliacao.equipe.edicao == this.anoSelecionado : true;
      });
    },
    calcularMediaNota(avaliacao) {
      return (avaliacao.notaLayout + avaliacao.notaFuncionalidade + avaliacao.notaApresentacao) / 3;
    },
  },
};
</script>

<template>
    <div class="col-12 col-md-12 text-center">
        <button @click="filtrarPorAno(2023)" class="custom-btn btn-1">2023</button>
        <button @click="filtrarPorAno(2022)" class="custom-btn btn-1">2022</button>
        <button @click="filtrarPorAno(2021)" class="custom-btn btn-1">2021</button>
        <button @click="filtrarPorAno(2020)" class="custom-btn btn-1">2020</button>
        <button @click="filtrarPorAno(2019)" class="custom-btn btn-1">2019</button>
        <button @click="filtrarPorAno(2018)" class="custom-btn btn-1">2018</button>
        <button @click="filtrarPorAno(2017)" class="custom-btn btn-1">2017</button>
        <button @click="filtrarPorAno(2016)" class="custom-btn btn-1">2016</button>
    </div>
    <div class="col-14 col-md-12">
      <div class="container justify-content-center text-center">
        <div v-for="(avaliacao, index) in topAvaliacoes" :key="index" class="barcontainer">
          <div class="bar" :style="{ height: Math.min(avaliacao.mediaNota * 1.3, 200) + '%' }">
            <p class="titulo" style="word-wrap: break-word">{{ avaliacao.equipe.nome }}</p>
            <p class="nota">{{ avaliacao.mediaNota.toFixed(2) }} (Média)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="width: 18rem;" v-for="avaliacao in avaliacoesFiltradas" :key="avaliacao.id">
      <div class="card-body">
        <h5 class="card-title">{{ avaliacao.equipe.nome }}</h5>
        <hr>
        <p class="card-text">{{ avaliacao.comentario }}</p>
        <hr>
        <p class="card-text">{{ avaliacao.equipe.integrante1}}</p>
        <p class="card-text">{{ avaliacao.equipe.integrante2}}</p>
        <p class="card-text">{{ avaliacao.equipe.integrante3}}</p>
        <p class="card-text">{{ avaliacao.equipe.integrante4}}</p>
        <p class="card-text">{{ avaliacao.equipe.integrante5}}</p>
        <p class="card-text">{{ avaliacao.equipe.integrante6}}</p>
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