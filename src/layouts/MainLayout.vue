<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark" style="border-bottom: 1px solid #fff">
        <q-toolbar-title class="row justify-between">
          <div class="q-pt-lg q-pl-xl">
            <img width="80" src="/images/logo.png">
          </div>
          <div class="row col-xl-4 col-lg-5 col-md-6 gt-md items-center justify-between">
            <a href="#home" class="cursor-pointer hovers text-secondary">Home</a>
            <a href="#sobre" class="cursor-pointer hovers text-secondary">Sobre</a>
            <a href="#menu" class="cursor-pointer hovers text-secondary">Menu</a>
            <a href="#produtos" class="cursor-pointer hovers text-secondary">Produtos</a>
            <a href="#contatos" class="cursor-pointer hovers text-secondary">Contatos</a>
          </div>
          <div class="row q-pr-xl items-center q-gutter-x-sm">
            <q-icon size="30px" name="search" />
            <q-icon size="30px" name="shopping_cart" />

            <q-btn 
              v-if="getUserData && !getUserData.id"
              label="Entrar" 
              color="secondary" 
              no-caps 
              @click="openDialogLogin()" 
            />

            <q-btn-dropdown 
              v-if="getUserData && getUserData.accessLevelData && getUserData.accessLevelData.type === 'empresa'" 
              color="primary" 
              no-caps 
              :label="getUserData.name" 
              dropdown-icon="coffee"
            >
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label @click="$router.push({ name: 'perfil' })" >Painel de Controle</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Sair</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown 
              v-else-if="getUserData && getUserData.accessLevelData && getUserData.accessLevelData.type === 'cliente'" 
              color="secondary" 
              no-caps 
              :label="getUserData.name" 
              dropdown-icon="coffee"
            >
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Perfil</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Pedidos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Sair</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <modal-login ref="modalLogin" />
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { mapActions, mapGetters, mapState } from 'vuex'
import modalLogin from '../components/access/modalLogin'

export default ({
  name: 'MainLayout',

  components: {
    modalLogin
  },

  setup () {
    return {
      idUser: ref('')
    }
  },
  async mounted () {
    this.idUser = this.user.id
    if (this.idUser !== '' && this.idUser !== null) {
      await this.getUser({ id: this.idUser }).then((res) => {}).catch((error) => {})
    } else {
      await this.getUser({ id: 0 }).then((res) => {}).catch((error) => {
        this.$q.notify({
          position: "bottom",
          color: "negative",
          textColor: "white",
          icon: "error",
          message: error.data.message
        })
      })
    }
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapGetters('user', ['getUserData'])
  },
  methods: {
    ...mapActions('user', ['getUser']),
    openDialogLogin() {
      this.$refs.modalLogin.openModalLogin()
    }
  },
})
</script>

<style>
  a:link 
  { 
  text-decoration:none; 
  }

  html { scroll-behavior: smooth; }

  .hovers {
  display:inline-block;
  padding: 5px;
  }

  .hovers:hover {
    border-bottom: 1px solid #a08f82;
  }
</style>
