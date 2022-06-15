<template>
    <form elevation="4">
        <div id="profile">
        <v-avatar
                color="primary"
                size="128"
                
        ><img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      ></v-avatar>
            <h1>{{cliente.nome}}</h1>
            <!-- EMAIL -->
        <h2>E-mail:</h2>
        <label>{{ cliente.usuario.email }}</label>
        <!-- Data de Nascimento -->
        <h2>Data de Nascimento:</h2>
        <label>{{cliente.dataNascimento}}</label>
            <!-- CPF -->
        <h2>CPF</h2>
        <label  class="d-block">{{cliente.cpf}}</label>
        <v-btn
        color="primary"
        id="botao"
        dark
        class="mr-4 mt-4"
        >
        Editar Conta
        </v-btn>
        <v-btn
        color="red"
        id="botao"
        dark
        class="mr-4 mt-4"
        >
        Deletar Conta
        </v-btn>
    </div>
  </form>
</template>

<script>
const axios = require('axios').default
export default {
    data: () => ({
        cliente: []
    }),
    mounted() {
        this.clientesGet();
    },
    methods: {
        async clientesGet() {
            await axios.get(`http://localhost:3000/cliente/62a699c415ef2dcd5d3b463f`)
                .then(async (resposta) => {
                    this.cliente = await resposta.data
                })
                .catch(async (erro) => { await erro.message })
        }
    }
}
</script>

<style scoped>
form {
    width: 90%;
    margin: 20px auto;
    background-color: white;
    padding: 20px 30px;
    border-radius: 8px;
    border-top: 12px solid #fc9403;
}

#profile {
    width: 100%;
    margin: auto;
    text-align: center;
}

h1 {
    margin: 10px;
}

h2 {
    width: 100%;
}

</style>