import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import Login from "../views/Login.vue"
import ClienteView from "../views/ClienteView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/cliente",
    name: "Cliente",
    component: ClienteView
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/cadastrar",
    name: "Cadastrar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cadastrar.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
