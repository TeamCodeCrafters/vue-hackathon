import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CadEquipesView from '../views/CadEquipesView.vue'
import UsuarioView from '../views/UsuarioView.vue'
import AvaliarEquipesView from '../views/AvaliarEquipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadequipe',
      name: 'cadequipe',
      component: CadEquipesView
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UsuarioView
    },
    {
      path: '/avaliarequipes',
      name: 'avaliarequipes',
      component: AvaliarEquipesView
    }
  ]
})

export default router