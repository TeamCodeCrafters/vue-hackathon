import api from "../plugins/api";
export default class Analisespi {
  async buscarTodasAsAnalises() {
    const response = await api.get("api/equipes/");
    return response.data;
  }

  async buscarAnalise(id) {
    const response = await api.get(`api/equipes/${id}`);
    return response.data;
  }

  async adicionarAnalise(analise) {
    const response = await api.post("api/equipes/", analise);
    return response.data;
  }

  async excluirAnalise(id) {
    const response = await api.delete(`api/equipes/${id}`);
    return response.data;
  }

  async atualizarAnalise(analise) {
    const response = await api.put(
      `api/equipes/${analise.id}/`,
      analise
    );
    return response.data;
  }
}