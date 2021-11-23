<template>
  <q-dialog class="row justify-center" v-model="modalRegistration" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card
      class="row items-center justify-center"
      style="border-radius: 20px; max-width: 1000px; background: linear-gradient(40deg, #311a14, #21222c);"
    >
      <q-form @submit="onSubmit" class="row col-12 justify-center">
        <span class="text-secondary text-bold text-h5 col-12 text-center q-my-lg"
          >Cadastro de Membros</span
        >
        <div class="row col-12 q-gutter-lg justify-center">
          <q-input
            required
            v-model="dataUser.name"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Nome"
            rounded
            standout="bg-accent"
          >
          </q-input>
          <q-input
            required
            type="email"
            v-model="dataUser.email"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Email"
            rounded
            standout="bg-accent"
            lazy-rules
          >
          </q-input>
          <q-input
            required
            type="text"
            v-model="dataUser.phone"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Telefone"
            rounded
            standout="bg-accent"
            mask="(##) #####-####"
            unmasked-value
          >
          </q-input>
          <q-input
            required
            v-model="dataUser.cpf"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="CPF"
            rounded
            standout="bg-accent"
            mask="###.###.###-##"
            :rules="[(val) => !!val || 'Campo obrigatório', checkCpf]"
            lazy-rules
            unmasked-value
          >
          </q-input>
          <q-input
            required
            type="date"
            v-model="dataUser.birthDate"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Data Nascimento"
            rounded
            standout="bg-accent"
          >
          </q-input>
          <q-input
            required
            :type="!isPwd ? 'text' : 'password'"
            v-model="dataUser.password"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Senha"
            rounded
            standout="bg-accent"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                size="25px"
                color="grey-8"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer q-mt-xs"
                @click="isPwd = !isPwd"
              ></q-icon>
            </template>
          </q-input>
          <q-input
            required
            :type="!isPwd2 ? 'text' : 'password'"
            v-model="dataUser.confirmPassword"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Confirmar Senha"
            rounded
            standout="bg-accent"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                size="25px"
                color="grey-8"
                :name="isPwd2 ? 'visibility_off' : 'visibility'"
                class="cursor-pointer q-mt-xs"
                @click="isPwd2 = !isPwd2"
              ></q-icon>
            </template>
          </q-input>
          <div
            class="row col-12 items-end justify-center q-mt-xl q-mb-md q-gutter-x-xl"
          >
            <q-btn
              @mouseover="activeHover = true"
              @mouseleave="activeHover = false"
              :color="activeHover ? 'grey-10' : 'primary'"
              size="20px"
              rounded
              standout
              outlined
              class="col-3"
              label="Fechar"
              type="submit"
              @click="closeModalRegistration()"
            />
            <q-btn
              @mouseover="activeHover2 = true"
              @mouseleave="activeHover2 = false"
              :color="activeHover2 ? 'grey-10' : 'primary'"
              size="20px"
              rounded
              standout
              outlined
              class="col-3"
              label="Cadastrar"
              type="submit"
              @click="onSubmit()"
            />
          </div>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { mapActions } from 'vuex'

export default {
  components: {},
  name: "modalRegistration",
  setup() {
    return {
      modalRegistration: ref(false),
      activeHover: ref(false),
      activeHover2: ref(false),
      isPwd: ref(true),
      isPwd2: ref(true),
      dataUser: ref({
        name: ref(''),
        cpf: ref(''),
        birthDate: ref(''),
        password: ref(''),
        email: ref(''),
        phone: ref(''),
        accessLevelId: ref(3),
        confirmPassword: ref(''),
      }),
    }
  },
  methods: {
    ...mapActions('user', ['createUser']),
    openModalRegistration() {
      this.modalRegistration = true
    },
    closeModalRegistration() {
      this.modalRegistration = false
    },
    onSubmit () {
      if (this.dataUser.name !== '' && this.dataUser.cpf !== '' && this.dataUser.birthDate !== '' && this.dataUser.email !== '' && this.dataUser.phone !== '' && this.dataUser.password !== '') {
        if (this.dataUser.password === this.dataUser.confirmPassword) {
          delete this.dataUser.confirmPassword
          this.createUser({
            data: this.dataUser
          }).then((res) => {
            this.$q.notify({
              position: "bottom",
              color: "positive",
              textColor: "white",
              icon: "check",
              message: "Usuário criado com sucesso!",
            })

            this.closeModalRegistration()
          }).catch((error) => {
            this.$q.notify({
              position: "bottom",
              color: "negative",
              textColor: "white",
              icon: "error",
              message: error.data.message,
            })
          })
        } else {
          this.$q.notify({
            position: "bottom",
            color: "negative",
            textColor: "white",
            icon: "error",
            message: "As senhas inseridas não conferem!",
          })
        }
      } else {
        this.$q.notify({
          position: "bottom",
          color: "negative",
          textColor: "white",
          icon: "error",
          message: "Preencha todos os campos para realizar o cadastro!",
        })
      }
    },
    checkCpf (cpf) {
      let add
      let rev
      cpf = cpf.replace(/\.|-/g, '')
      if (cpf === '') 
        return 'CPF inválido!'
      // Elimina CPFs invalidos conhecidos
      if (
        cpf.length !== 11 ||
        cpf === '00000000000' ||
        cpf === '11111111111' ||
        cpf === '22222222222' ||
        cpf === '33333333333' ||
        cpf === '44444444444' ||
        cpf === '55555555555' ||
        cpf === '66666666666' ||
        cpf === '77777777777' ||
        cpf === '88888888888' ||
        cpf === '99999999999'
      ) {
        return 'CPF inválido!'
      }
      // Check 1o digito
      add = 0
      for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
        rev = 11 - (add % 11)
      if (rev === 10 || rev === 11) 
        rev = 0
      if (rev !== parseInt(cpf.charAt(9))) 
        return 'CPF inválido!'
      // Check 2o digito
      add = 0
      for (let i = 0; i < 10; i++) 
        add += parseInt(cpf.charAt(i)) * (11 - i)
        rev = 11 - (add % 11)
      if (rev === 10 || rev === 11) 
        rev = 0
      if (rev !== parseInt(cpf.charAt(10))) 
      return 'CPF inválido!'
      return true
    }
  }
}
</script>

<style>
</style>
