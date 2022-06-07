<template>
  <div class="home">
    <v-row class="mt-2">
      <v-col cols="6" offset="6">
        <v-text-field
          outlined
          flat
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

          <v-card-title> {{ produto.modelo }} </v-card-title>

          <v-card-subtitle> {{ produto.marca }} </v-card-subtitle>

          <v-card-actions>
            <v-btn icon @click="mudarFavorito(produto.id)">
              <v-icon :color="produto.favorito ? 'red' : 'default'"
                >mdi-heart</v-icon
              >
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon @click="produto.show = !produto.show">
              <v-icon>{{
                produto.show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="produto.show">
              <v-divider></v-divider>

              <v-card-text> {{ produto.descricao }} </v-card-text>

              <div style="display: block; text-align: right">
                <v-card-title> R$ {{ produto.preco.toFixed(2) }} </v-card-title>
                <v-btn
                  color="primary"
                  text
                  class="ma-2"
                  @click="adicionarAoCarrinho(produto)"
                >
                  Adicionar ao carrinho
                  <v-icon right dark> mdi-cart </v-icon>
                </v-btn>
              </div>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
    data: () => ({
      produtos: [
        {
          id: 0,
          descricao: "Honda Civic EXS 2.0 Flex",
          preco: 100.0,
          categoria: "Sedan",
          ano: 2010,
          modelo: "Civic",
          marca: "Honda",
          cor: "Vermelho",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        },

        {
          id: 1,
          descricao: "Gol 1.0 TSI",
          preco: 100.0,
          categoria: "Hatch",
          ano: 2010,
          modelo: "Gol",
          marca: "Volkswagen",
          cor: "Preto",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        },
        {
          id: 2,
          descricao: "Gol 1.0 TSI",
          preco: 100.0,
          categoria: "Hatch",
          ano: 2010,
          modelo: "Gol",
          marca: "Volkswagen",
          cor: "Preto",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        },
        {
          id: 3,
          descricao: "Gol 1.0 TSI",
          preco: 100.0,
          categoria: "Hatch",
          ano: 2010,
          modelo: "Gol",
          marca: "Volkswagen",
          cor: "Preto",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        },
        {
          id: 4,
          descricao: "Gol 1.0 TSI",
          preco: 100.0,
          categoria: "Hatch",
          ano: 2010,
          modelo: "Gol",
          marca: "Volkswagen",
          cor: "Preto",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        },
        {
          id: 5,
          descricao: "Gol 1.0 TSI",
          preco: 100.0,
          categoria: "Hatch",
          ano: 2010,
          modelo: "Gol",
          marca: "Volkswagen",
          cor: "Preto",
          imagem:
            "https://garagem360.com.br/wp-content/uploads/2021/08/ALTA20-1.jpeg",
          quilometragem: 10000.0,
          show: false,
          favorito: true
        }
      ]
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

      adicionarAoCarrinho(produto) {
        console.log(produto)
      }
    }
  }
</script>
