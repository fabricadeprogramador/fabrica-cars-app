<template>
  <v-container>
    <v-form ref="form" v-model="valido">
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
              label="Data de nascimento"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="perfil.dataNascimento"
            locale="pt-BR"
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="salvarData"
          ></v-date-picker>
        </v-menu>
      </div>

      <!-- TODO: Implementar endereço com busca por viaCEP -->
      <!-- ENDEREÇO -->
      <v-text-field
        v-model="perfil.endereco"
        :rules="enderecoRules"
        :counter="30"
        label="Endereço"
        required
      ></v-text-field>

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
      activePicker: null,
      show: false,
      perfil: {
        dataNascimento: null,
        endereco: "",
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
      enderecoRules: [
        (v) => !!v || "Endereço é obrigatório",
        (v) =>
          (v && v.length <= 30) || "Endereço deve ter no máximo 30 caracteres"
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
    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = "YEAR"))
      }
    },

    methods: {
      reset() {
        this.perfil = {
          dataNascimento: null,
          endereco: "",
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
      salvarData() {
        this.$refs.menu.save(this.formatar(this.perfil.dataNascimento))
      },
      salvar() {},
      formatar() {
        if (!this.perfil.dataNascimento) return null

        const [ano, mes, dia] = this.perfil.dataNascimento.split("-")
        return `${dia}/${mes}/${ano}`
      }
    }
  }
</script>
