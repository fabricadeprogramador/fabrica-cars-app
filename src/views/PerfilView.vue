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

      <!-- ENDEREÇO -->
      //TODO: FINALIZAR A PARTIR DAQUI

      <!-- E-MAIL -->
      <v-text-field
        v-model="perfil.usuario.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

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
      perfil: {
        dataNascimento: null,
        usuario: {
          email: "",
          senha: ""
        }
      },
      nomeRules: [
        (v) => !!v || "Nome é obrigatório",
        (v) => (v && v.length <= 20) || "Nome deve ter no máximo 20 caracteres"
      ],
      cpfRules: [
        (v) => !!v || "CPF é obrigatório",
        (v) => (v && v.length == 11) || "CPF deve ter 11 caracteres"
      ],
      emailRules: [
        (v) => !!v || "E-mail é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "E-mail deve ser válido"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    }),
    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = "YEAR"))
      }
    },

    methods: {
      reset() {
        this.$refs.form.reset()
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
