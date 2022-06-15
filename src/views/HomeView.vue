<template>
  <div class="home">
    <v-row class="mt-2">
      <v-col cols="12">
        <v-text-field
          dark
          outlined
          flat
          filled
          style="font-size: 20px;"
          label="Buscar..."
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="produto in produtos"
        :key="produto.id"
        md="3"
        sm="4"
        xs="12"
      >
        <v-card class="mx-auto">
          <v-img :src="produto.imagem" height="200px"></v-img>

          <v-card-title> {{ produto.marca }} {{ produto.modelo }} - {{ produto.ano }} </v-card-title>

          <v-card-subtitle> R${{ produto.preco.toFixed(2) }} </v-card-subtitle>

          <v-card-actions>
            <v-btn icon @click="mudarFavorito(produto._id)">
              <v-icon :color="produto.favorito ? 'red' : 'default'"
                >mdi-heart</v-icon
              >
            </v-btn>
            <v-btn icon
                  @click="adicionarAoCarrinho(produto._id)"
                >
                  <v-icon :color="produto.carrinho ? 'primary' : 'default'"> mdi-cart-plus </v-icon>
                </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="produto.expandir = !produto.expandir">
              <v-icon>{{
                produto.expandir ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="produto.expandir">
              <v-divider></v-divider>

              <v-card-text> {{ produto.descricao }} </v-card-text>
              <v-card-text style="margin-top: -30px; margin-bottom: 0;"> {{ produto.quilometragem }}km </v-card-text>
              <v-card-subtitle style="margin-top: -30px; margin-bottom: 0;"> Cor: {{ produto.cor }}/Categoria: {{produto.categoria}} </v-card-subtitle>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const axios = require('axios').default
  export default {
    name: "HomeView",
     created() {
        this.produtosGet()
    },
    data: () => ({
      produtos: [],
    }),
    methods: {
      mudarFavorito(id) {
        //Implementar PUT no Back-end quando disponível
        let produtoEncontrado = this.produtos.find((produto) => {
          return produto.id == id ? true : false
        })

        if (produtoEncontrado) {
          produtoEncontrado.favorito = !produtoEncontrado.favorito
        }
      },

      adicionarAoCarrinho(id) {
        let produtoEncontrado = this.produtos.find((produto) => {
          return produto.id == id ? true : false
        })

        if (produtoEncontrado) {
          produtoEncontrado.carrinho = !produtoEncontrado.carrinho
        }
      },
      async produtosGet() {
            await axios.get('http://localhost:3000/produto')
                .then(async (resposta) => {
                    this.produtos = await resposta.data
                })
                .catch(async (erro) => { await erro.message })
        }
    },
  }
</script>

<style scoped>
#add {
  font-size: 12px;
}
</style>
