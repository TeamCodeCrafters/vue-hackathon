import api from "../plugins/api";
export default class AvaliacoesApi {
  async buscarTodasAsAvaliacoes() {
    const response = await api.get("api/avaliacoes/");
    return response.data;
  }

  async buscarAvaliacao(id) {
    const response = await api.get(`api/avaliacoes/${id}`);
    return response.data;
  }

  async adicionarAvaliacao(avaliacao) {
    const response = await api.post("api/avaliacoes/", avaliacao);
    return response.data;
  }

  async excluirAvaliacao(id) {
    const response = await api.delete(`api/avaliacoes/${id}`);
    return response.data;
  }

  async atualizarAvaliacao(avaliacao) {
    const response = await api.put(
      `api/avaliacoes/${avaliacao.id}/`,
      avaliacao
    );
    return response.data;
  }
}