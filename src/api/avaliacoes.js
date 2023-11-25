import api from "../plugins/api";
export default class AvaliacoesApi {
  async buscarTodasAsAvaliacoes() {
    const response = await api.get("avaliacoes/");
    return response.data;
  }

  async buscarAvaliacao(id) {
    const response = await api.get(`avaliacoes/${id}`);
    return response.data;
  }

  async adicionarAvaliacao(avaliacao) {
    const response = await api.post("avaliacoes/", avaliacao);
    return response.data;
  }

  async excluirAvaliacao(id) {
    const response = await api.delete(`avaliacoes/${id}`);
    return response.data;
  }

  async atualizarAvaliacao(avaliacao) {
    const response = await api.put(
      `avaliacoes/${avaliacao.id}/`,
      avaliacao
    );
    return response.data;
  }
}