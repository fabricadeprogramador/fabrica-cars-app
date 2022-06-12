<template>
  <v-app class="fundo">
    <v-navigation-drawer v-model="drawer"  
      absolute
      bottom
      temporary
      color="grey darken-4"
      >
      <v-list nav dense dark>
        <v-list-item
          v-for="item in menu"
          :key="item.titulo"
          link
          router
          :to="item.rota"
        >
          <v-list-item-action>
            <v-icon>{{ item.icone }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="grey darken-4" app clipped-left>
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" />
      <NavbarLogo :logo="logo_src" :alt="app_name"/>
      <v-spacer></v-spacer>

      <v-icon dark>mdi-account-circle</v-icon>
      <span style="color: white;" class="mx-2">Jão Admin</span>
      <v-icon dark @click="deslogar()">mdi-logout</v-icon>
    </v-app-bar>

    <v-main class="ma-3">
      <router-view></router-view>
    </v-main>

    <v-footer app dark>
      <span>Fábrica Cars &copy; - Fábrica de Programador 2022 - T37</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavbarLogo from './components/NavbarLogo.vue';
  export default {
    data: () => ({
        drawer: null,
        rotaAtual: "",
        menu: [
            {
                titulo: "Home",
                icone: "mdi-home",
                rota: "/"
            },
            {
                titulo: "Cliente",
                icone: "mdi-account",
                rota: "/cliente"
            },
            {
                titulo: "Cadastrar",
                icone: "mdi-account-edit",
                rota: "/cadastrar"
            },
            {
                titulo: "Login",
                icone: "mdi-account-arrow-left",
                rota: "/login"
            }
        ],
        logo_src: "/img/logo.png",
        app_name: "Sport Cars"
    }),
    methods: {
        deslogar() { }
    },
    components: { NavbarLogo }
}
</script>

<style scoped>
.fundo {
  background-color: rgb(96, 96, 96)!important;
}
</style>
