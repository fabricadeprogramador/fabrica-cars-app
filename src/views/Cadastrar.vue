<template>
  <v-container>
    <v-form ref="form" v-model="valido">
      <h1>Faça o seu cadastro</h1>
      <!-- NOME -->
      <v-text-field
        v-model="perfil.nome"
        :counter="20"
        :rules="nomeRules"
        label="Nome"
        required
      ></v-text-field>

      <!-- CPF -->
      <v-text-field
        v-model="perfil.cpf"
        :counter="11"
        :rules="cpfRules"
        type="number"
        label="CPF"
        required
      ></v-text-field>

      <!-- DATA DE NASCIMENTO -->
      <div>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="perfil.dataNascimento"
              type="date"
              label="Data de nascimento"
              v-bind="attrs"
              v-on="on"
              required
              :rules="dataRules"
            ></v-text-field>
          </template>
        </v-menu>
      </div>

      <!-- TODO: Implementar endereço com busca por viaCEP -->
      <!-- CEP -->
      <v-text-field
        v-model="perfil.cep"
        :rules="cepRules"
        :counter="8"
        label="CEP"
        required
        @click="mostrarEndereco"
      ></v-text-field>
      <div v-show="perfil.enderecoCompleto">
        <!-- Logradouro -->
        <v-text-field
          v-model="perfil.endereco.logradouro"
          :rules="logradouroRules"
          label="Rua"
          required
        ></v-text-field>
        <!-- Bairro -->
        <v-text-field
          v-model="perfil.endereco.bairro"
          :rules="bairroRules"
          label="Bairro"
          required
        ></v-text-field>
        <!-- Número -->
        <v-text-field
          v-model="perfil.endereco.numero"
          :rules="numeroRules"
          type="number"
          label="Número"
          required
        ></v-text-field>
        <!-- Complemento -->
        <v-text-field
          v-model="perfil.endereco.complemento"
          label="Complemento"
        ></v-text-field>
        <!-- Localidade -->
        <v-text-field
          v-model="perfil.endereco.localidade"
          :rules="localidadeRules"
          label="Cidade"
          required
        ></v-text-field>
        <!-- UF -->
        <v-text-field
          v-model="perfil.endereco.uf"
          :rules="ufRules"
          label="Estado"
          required
        ></v-text-field>
      </div>

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
        Salvar
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Cancelar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "PerfilView",
  data: () => ({
    valido: true,
    menu: false,
    show: false,
    perfil: {
      dataNascimento: "",
      cep: "",
      enderecoCompleto: false,
      endereco: {
        logradouro: "",
        bairro: "",
        numero: null,
        complemento: "",
        localidade: "",
        uf: ""
      },
      cpf: "",
      nome: "",
      usuario: {
        email: "",
        senha: ""
      },
      compras: [],
      favoritos: []
    },
    nomeRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => (v && v.length <= 20) || "Nome deve ter no máximo 20 caracteres"
    ],
    dataRules: [
      (v) => !!v || "Data de Nascimento é obrigatório",
    ],
    cepRules: [
      (v) => !!v || "CEP é obrigatório",
      (v) => (v && v.length == 8) || "CPF deve ter 8 caracteres"
    ],
    logradouroRules: [
      (v) => !!v || "Rua é obrigatório",
    ],
    bairroRules: [
      (v) => !!v || "Bairro é obrigatório",
    ],
    numeroRules: [
      (v) => !!v || "Número é obrigatório",
    ],
    localidadeRules: [
      (v) => !!v || "Cidade é obrigatório",
    ],
    ufRules: [
      (v) => !!v || "Estado é obrigatório",
    ],
    cpfRules: [
      (v) => !!v || "CPF é obrigatório",
      (v) => (v && v.length == 11) || "CPF deve ter 11 caracteres"
    ],
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
        dataNascimento: "",
        cep: "",
        enderecoCompleto: false,
        endereco: {
          logradouro: "",
          bairro: "",
          numero: null,
          complemento: "",
          localidade: "",
          uf: ""
        },
        cpf: "",
        nome: "",
        usuario: {
          email: "",
          senha: ""
        },
        compras: [],
        favoritos: []
      }
    },
    async salvar() {

      const data = {
            nome: this.perfil.nome,
            cpf: this.perfil.cpf,
            dataNascimento: this.perfil.dataNascimento,
            endereco: {
              bairro: this.perfil.endereco.bairro,
              cep: this.perfil.cep,
              complemento: this.perfil.endereco.complemento,
              localidade: this.perfil.endereco.localidade,
              logradouro: this.perfil.endereco.logradouro,
              numero: this.perfil.endereco.numero,
              uf: this.perfil.endereco.uf
            },
            usuario: {
                email: this.perfil.usuario.email,
                senha: this.perfil.usuario.senha,
                },
          }
          const dataJson = JSON.stringify(data)

          const req = await fetch("http://localhost:3000/cliente", {
            headers: {"Content-Type": "application/json"},
            method: 'POST',
            body: dataJson
          });

          const res = await req.json();

          console.log(res);

            // setTimeout(() => this.$router.push('/login'), 2000)
    },
     mostrarEndereco() {
        addEventListener("focusout", async() => {
            this.perfil.enderecoCompleto = true
             const req = await fetch(`https://viacep.com.br/ws/${this.perfil.cep}/json/`)
              const data = await req.json();

              this.perfil.endereco.bairro = data.bairro
              this.perfil.endereco.localidade = data.localidade
              this.perfil.endereco.logradouro = data.logradouro
              this.perfil.endereco.uf = data.uf

              this.data = ""
        })

    },
    async viacep() {


      }
    },
      mounted() {
        this.viacep();
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
