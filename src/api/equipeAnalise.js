import api from "../plugins/api";
export default class Analisespi {
  async buscarTodasAsAnalises() {
    const response = await api.get("api/analise/");
    return response.data;
  }

  async buscarAnalise(id) {
    const response = await api.get(`api/analise/${id}`);
    return response.data;
  }

  async adicionarAnalise(analise) {
    const response = await api.post("api/analise/", analise);
    return response.data;
  }

  async excluirAnalise(id) {
    const response = await api.delete(`api/analise/${id}`);
    return response.data;
  }

  async atualizarAnalise(analise) {
    const response = await api.put(
      `api/analise/${analise.id}/`,
      analise
    );
    return response.data;
  }
}