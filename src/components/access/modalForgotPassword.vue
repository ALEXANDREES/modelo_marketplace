<template>
  <q-dialog class="row justify-center" v-model="modalForgotPassword" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card
      class="card q-py-lg row items-center justify-center"
      style="border-radius: 20px; max-height: 500px; max-width: 1000px; background: linear-gradient(40deg, #311a14, #21222c);">
        <div class="row col-12 justify-end">
          <q-btn flat color="secondary" icon="close" @click="closeForgotPassword()" /> 
        </div>
      <div class="gt-sm row justify-center col-4">
        <q-img width="130px" src="/images/logo.png" />
      </div>

      <div
        class="row col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 q-gutter-y-md justify-center"
      >
        <span class="text-secondary text-bold text-h5 col-12 text-center"
          >Recuperar Senha</span
        >
        <div class="row q-gutter-y-md q-mt-md justify-center col-12">
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
          <div class="row col-12 justify-center q-mt-xl">
            <q-btn
              @mouseover="activeHover = true"
              @mouseleave="activeHover = false"
              :color="activeHover ? 'grey-10' : 'primary'"
              size="20px"
              rounded
              standout
              outlined
              class="col-xl-7 col-lg-9 col-md-9 col-sm-11 col-xs-11"
              label="Enviar"
            />
          </div>
        </div>
        <div class="row col-12 justify-center q-mt-xl">
          <span
            :class="activeHoverCreateAccount ? 'cursor-pointer text-primary' : 'text-grey-8 cursor-pointer'"
            @mouseover="activeHoverCreateAccount = true"
            @mouseleave="activeHoverCreateAccount = false"
            @click="openDialogRegistration()"
            type="a"
            target="_blank"
          >
            Ainda não possuo conta
            <q-icon size="25px" name="arrow_right_alt" />
          </span>
        </div>
      </div>
    </q-card>
  </q-dialog>
  <modal-registration ref="modalRegistration" />
</template>

<script>
import { ref } from 'vue'
import modalRegistration from './modalRegistration'

export default {
  components: { modalRegistration },
  name: "modalForgotPassword",
  setup() {
    return {
      modalForgotPassword: ref(false),
      activeHover: ref(false),
      activeHoverCreateAccount: ref(false),
      isPwd: ref(true),

      dataLogin: ref({
          email: "",
      })
    }
  },
  methods: {
    closeModalLogin() {
      this.modalLogin = false
    },
    openForgotPassword() {
      this.modalForgotPassword = true
    },
    openDialogRegistration() {
      this.$refs.modalRegistration.openModalRegistration()
    },
    closeForgotPassword() {
      this.modalForgotPassword = false
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
