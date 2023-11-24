<template>
  <div
    class="container px-4 py-5 px-md-text-center text-lg-start my-5 justify-content-between"
  >
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-5 mb-5 mb-lg-0" style="z-index: 10">
        <h1
          class="my-5 display-5 fw-bold ls-tight"
          style="color: hsl(218, 81%, 95%)"
        >
          Hackathon IFC<br />
          <span style="color: hsl(218, 81%, 75%)">2023</span>
        </h1>
        <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
          Preparem-se, alunos! O Hackathon IFC está chegando! Venham fazer parte
          dessa jornada de inovação e criatividade. Inscrevam suas equipes e
          participem desse desafio transformador. Mostrem suas habilidades e
          deixem sua marca na próxima revolução tecnológica!
        </p>
      </div>

      <div class="col-lg-5 justify-content-between">
        <div class="formulario container m-5">
          <main>
            <div class="text-center text-light p-3">
              <h2>Formulário de inscrição</h2>
            </div>
            <form class="row g-3">
              <div class="col-12">
                <input
                  type="text"
                  class="form-control"
                  id="teamName"
                  placeholder="Nome da equipe"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome da equipe.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member1"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="member2"
                  placeholder="Nome do integrante"
                  required
                />
                <div class="invalid-feedback">
                  Por favor, insira o nome do integrante.
                </div>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Confirmar Cadastro
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.formulario {
  padding: 20px;
}

hr {
  color: white;
  border: 3;
}

body {
  background-image: url("@/assets/img/BGintro.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
