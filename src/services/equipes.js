import api from '../plugins/api'

class EquipeService {
  async getAllEquipes() {
    const response = await api.get('/equipes/')
    return response.data.results
  }
  async saveEquipe(equipe) {
    let response
    if (equipe.id) {
      response = await api.put(`/equipes/${equipe.id}/`, equipe)
    } else {
      response = await api.post('/equipes/', equipe)
    }
    return response.data
  }
}

export default new EquipeService()