<template>
  <q-dialog class="row justify-center" v-model="modalLogin" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card
      class="card q-py-lg row items-center justify-center"
      style="border-radius: 20px; max-height: 500px; max-width: 1000px; background: linear-gradient(40deg, #311a14, #21222c);">
        <div class="row col-12 justify-end">
          <q-btn flat color="secondary" icon="close" @click="closeModalLogin()" /> 
        </div>
      <div class="gt-sm row justify-center col-4">
        <q-img width="130px" src="/images/logo.png" />
      </div>

      <div
        class=" row col-xl-7 col-lg-7 col-md-7 col-sm-11 col-xs-11 q-gutter-y-md justify-center"
      >
        <span class="text-secondary text-bold text-h5 col-12 text-center"
          >Login de Membros</span
        >
        <div class="row q-gutter-y-md q-mt-md justify-center">
          <q-input
            v-model="dataLogin.email"
            type="email"
            class="col-xl-7 col-lg-9 col-md-9 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Email"
            rounded
            standout="bg-accent"
          >
            <template v-slot:prepend>
              <q-icon size="20px" name="mail" color="yellow-2" />
            </template>
          </q-input>
          <q-input
            :type="!isPwd ? 'text' : 'password'"
            v-model="dataLogin.password"
            class="col-xl-7 col-lg-9 col-md-9 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Senha"
            rounded
            standout="bg-accent"
          >
            <template v-slot:prepend>
              <q-icon size="20px" name="lock" color="yellow-2" />
            </template>
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
          <div class="row col-12 justify-center q-mt-lg">
            <q-btn
              @mouseover="activeHover = true"
              @mouseleave="activeHover = false"
              :color="activeHover ? 'grey-10' : 'primary'"
              size="21px"
              rounded
              standout
              outlined
              class="col-xl-7 col-lg-9 col-md-9 col-sm-11 col-xs-11"
              label="Login"
            />
            <span
              :class="activeHoverForget  ? 'text-primary cursor-pointer q-mt-md col-12 text-center'  : 'cursor-pointer q-mt-md col-12 text-center text-grey-8'"
              @mouseover="activeHoverForget = true"
              @mouseleave="activeHoverForget = false"
              type="a"
              target="_blank"
              @click="openForgotPassword()"
            >
              Recuperar Senha / Email
            </span>
          </div>
        </div>
        <div class="row col-12 justify-center q-mt-xl">
          <span
            :class="activeHoverCreateAccount ? 'cursor-pointer text-primary' : 'text-grey-8 cursor-pointer'"
            @mouseover="activeHoverCreateAccount = true"
            @mouseleave="activeHoverCreateAccount = false"
            type="a"
            target="_blank"
            @click="openDialogRegistration()"
          >
            Crei sua conta
            <q-icon size="25px" name="arrow_right_alt" />
          </span>
        </div>
      </div>
    </q-card>
  </q-dialog>

  <modal-forgot-password ref="modalForgotPassword"/>`
  <modal-registration ref="modalRegistration" />
</template>

<script>
import { ref } from 'vue'
import modalForgotPassword from './modalForgotPassword'
import ModalRegistration from './modalRegistration.vue'

export default {
  components: {
    modalForgotPassword,
    ModalRegistration
  },
  name: "modalLogin",
  setup() {
    return {
      modalLogin: ref(false),
      activeHover: ref(false),
      activeHoverForget: ref(false),
      activeHoverCreateAccount: ref(false),
      isPwd: ref(true),

      dataLogin: ref({
          email: "",
          password: "",
      })
    }
  },
  methods: {
    openModalLogin() {
      this.modalLogin = true
    },
    closeModalLogin() {
      this.modalLogin = false
    },
    openForgotPassword() {
      this.closeModalLogin(),
      this.$refs.modalForgotPassword.openForgotPassword()
    },
    openDialogRegistration() {
      this.$refs.modalRegistration.openModalRegistration()
    }
  }
}
</script>

<style>
@media only screen and (max-width: 320px) {
  .card {
    height: 500px;
  }
}

@media only screen and (min-width: 321px) and (max-width: 429px) {
  .card {
    height: 500px;
  }
}

@media only screen and (min-width: 430px) and (max-width: 599px) {
  .card {
    height: 500px;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1023px) {
  .card {
    height: 500px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1142px) {
  .card {
    height: 500px;
  }
}

@media only screen and (min-width: 1143px) and (max-width: 1430px) {
  .card {
    height: 500px;
  }
}

/* @media only screen and (min-width: 1431px) {
  .card {
    height: 500px;
    max-height: 600px;
  }
} */
</style>
