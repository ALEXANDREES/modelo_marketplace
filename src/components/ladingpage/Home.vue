<template>
  <q-page id="home" class="row justify-center col-xl-5 col-lg-7 col-md-7 col-sm-11 col-xs-12 items-center">
    <div class="row q-pl-xl">
      <span :class="$q.screen.gt.xs ? 'text-secondary text-bold text-h1 col-12 font-main' : 'text-secondary text-bold text-h4 col-12 font-main'">
        Café quente pela manhã torna tudo melhor!
      </span>
      <p class="text-white text-body2 col-12 q-mt-md font-main">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
      </p>
      <div class="row col-12">
        <q-btn size="15px" class="button" color="secondary" no-caps label="Cadastre-se" @click="openDialogRegistration()"/>
      </div>
    </div>

    <modal-login ref="modalLogin"/>
    <modal-registration ref="modalRegistration" />
  </q-page>
</template>

<script>
import modalRegistration from "components/access/modalRegistration"

export default {
  name: "Home",
  components: {
    modalRegistration
  },

  setup() {
    return {

    }
  },

  methods: {
    openDialogRegistration() {
      this.$refs.modalRegistration.openModalRegistration()
    }
  },
}

</script>

<style>


.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scale(1.3);
}

</style>
