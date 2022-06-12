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
            <h1>Nome</h1>
            <!-- EMAIL -->
        <h2>E-mail:</h2>
        <label>Email</label>
        <!-- Data de Nascimento -->
        <h2>Data de Nascimento:</h2>
        <label>Data</label>
        <!-- Gênero -->
        <h2>Gênero</h2>
        <label>Gênero</label>
        <!-- Carros Anunciados -->
        <h2>Carros Anunciados:</h2>
        <label>0</label>
        <!-- Carros Vendidos -->
        <h2>Carros Vendidos:</h2>
        <label class="d-block">0</label>
        
        <v-btn
        @click="submit"
        color="primary"
        id="botao"
        dark
        class="mr-4 mt-4"
        >
        Editar Conta
        </v-btn>
        <v-btn
        @click="submit"
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
export default {
    
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