<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
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

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-spacer></v-spacer>

      <v-icon>mdi-account-circle</v-icon>
      <span class="mx-2">Jão Admin</span>
      <v-icon @click="deslogar()">mdi-logout</v-icon>
    </v-app-bar>

    <v-content class="ma-3">
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>Fábrica Cars &copy; - Fábrica de Programador 2022 - T37</span>
    </v-footer>
  </v-app>
</template>

<script>
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
          titulo: "Perfil",
          icone: "mdi-account-edit",
          rota: "/perfil"
        }
      ]
    }),
    methods: {
      deslogar() {}
    }
  }
</script>
