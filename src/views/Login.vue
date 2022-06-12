<template>
  <v-container>
    <v-form ref="form" v-model="valido">
    <img src="../../public/img/logo.png" alt="">
    <h1>Faça o seu login</h1>
      <!-- E-MAIL -->
      <v-text-field
        v-model="perfil.usuario.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <!-- SENHA -->
      <v-text-field
        v-model="perfil.usuario.senha"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[senhaRules.required, senhaRules.min]"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Senha"
        hint="Pelo menos 8 caracteres"
        counter
        @click:append="show = !show"
      ></v-text-field>

      <v-btn :disabled="!valido" color="success" class="mr-4" @click="salvar">
        Logar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Cadastrar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: "PerfilView",
    data: () => ({
      valido: true,
      show: false,
      perfil: {
        usuario: {
          email: "",
          senha: ""
        },
        compras: [],
        favoritos: []
      },
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
      ],
      senhaRules: {
        required: (value) => !!value || "Senha obrigatória.",
        min: (v) => v.length >= 8 || "Min 8 characters"
      }
    }),
    methods: {
      reset() {
        this.perfil = {
          usuario: {
            email: "",
            senha: ""
          },
          compras: [],
          favoritos: []
        }
      },
      salvar() {},
    }
  }
</script>

<style scoped>
form {
    width: 90%;
    margin: 20px auto;
    background-color: rgb(242, 242, 242);
    padding: 20px 30px;
    border-radius: 8px;
    border-top: 12px solid #fc9403;
    text-align: center;
}



h1 {
    margin: 10px;
    text-align: center;
}
</style>
