<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-dark" style="border-bottom: 1px solid #fff">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title class="row justify-between">
          <div class="q-pt-lg q-pl-xl">
            <img width="80" src="/images/logo.png">
          </div>
          <div class="row q-pr-xl items-center q-gutter-x-sm">
            <q-btn-dropdown v-if="typeUser === 'admin'" color="secondary" no-caps label="Marcos Piemontez" dropdown-icon="coffee">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Painel de Controle</q-item-label>
                  </q-item-section>
                </q-item>

                <q-separator /> 

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Sair</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn-dropdown v-else color="secondary" no-caps label="Marcos Piemontez" dropdown-icon="coffee">
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

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="400" bordered class="bg-grey-4">
        <q-scroll-area class="fit" style="height: calc(100%) border-right: 1px solid #ddd">
          <q-list padding>
            <q-item v-for="nav in navs" :to="nav.to" :key="nav.label" clickable v-ripple exact>
              <q-item-section avatar>
                <q-icon size="25px" :name="nav.icon" />
              </q-item-section>

              <q-item-section>
                {{ nav.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <modal-login ref="modalLogin" />
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import modalLogin from '../components/access/modalLogin'

export default ({
  name: 'MainLayout',

  components: {
    modalLogin
  },

  setup () {
    return {
      typeUser: ref('admin'),
      drawer: ref(false),
      navs: [
        {
          label: 'Perfil',
          icon: 'fas fa-user',
          to: 'perfil'
        },
        {
          label: 'Produtos',
          icon: 'description',
          to: 'produtos'
        },
        {
          label: 'Pedidos',
          icon: 'assignment',
          to: 'pedidos'
        },
        {
          label: 'Configurações',
          icon: 'settings',
          to: '/configuracao'
        }
      ]
    }
  },

  methods: {
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
