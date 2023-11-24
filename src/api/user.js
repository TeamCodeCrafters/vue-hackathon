import api from "../plugins/api";
export default class UsuariosApi {
  async buscarTodosOsUsuarios() {
    const response = await api.get("api/users/");
    return response.data;
  }

  async buscarUsuario(id) {
    const response = await api.get(`api/users/${id}`);
    return response.data;
  }

  async adicionarUsuario(user) {
    const response = await api.post("api/users/", user);
    return response.data;
  }

  async excluirUsuario(id) {
    const response = await api.delete(`api/users/${id}`);
    return response.data;
  }

  async atualizarUsuario(user) {
    const response = await api.put(
      `api/users/${user.id}/`,
      user
    );
    return response.data;
  }
}