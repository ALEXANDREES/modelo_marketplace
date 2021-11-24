<template>
    <div class="row justify-center">
      <div class="col-11 text-h5 q-mt-lg text-primary text-bold">Perfil</div>
      <div class="col-11 text-h6 text-grey-8 text-bold q-mb-lg">
        Dados pessoais
      </div>
      <q-card class="col-11" style="border-radius: 20px; background: #21222c">
        <div class="row col-12 justify-end">
          <q-btn
            v-if="!edit"
            class="q-mr-lg q-mt-sm"
            flat
            color="secondary"
            icon="far fa-edit"
            label="Editar"
            no-caps
            @click="editData()"
          />

          <q-btn
            v-else
            class="q-mr-lg q-mt-sm"
            flat
            color="red"
            icon="cancel"
            label="Cancelar"
            no-caps
            @click="editData()"
          />
        </div>
        <div class="row col-12 q-gutter-lg q-mt-lg justify-center">
          <q-input
            :disable="!edit"
            required
            v-model="dataUser.name"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Nome"
            outlined
            dense
            standout="bg-accent"
          />
          <q-input
            :disable="!edit"
            required
            outlined
            dense
            type="email"
            v-model="dataUser.email"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Email"
            standout="bg-accent"
            lazy-rules
          />
          <q-input
            :disable="!edit"
            required
            v-model="dataUser.phone"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="telefone"
            outlined
            dense
            standout="bg-accent"
            mask="(##) ##### - ####"
            fill-mask
            unmasked-value
          />
          <q-input
            :disable="!edit"
            required
            v-model="dataUser.cpf"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="CPF"
            outlined
            dense
            standout="bg-accent"
            mask="###.###.###-##"
            :rules="[(val) => !!val || 'Campo obrigatório', checkCpf]"
            lazy-rules
            unmasked-value
          />
          <q-input
            :disable="!edit"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11" 
            dense 
            outlined 
            v-model="dataUser.birthDate" 
            mask="##/##/####"
            required
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Data de Nascimento"
            standout="bg-accent"
          >
            <template v-slot:append>
              <q-icon color="secondary" name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                  <q-date mask="DD/MM/YYYY" v-model="dataUser.birthDate" :locale="formatacaoCalendario">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div
            class=" row col-12 items-end justify-center q-mt-xl q-mb-md q-gutter-x-xl"
          >
            <q-btn
              :disable="!edit"
              @mouseover="activeHover2 = true"
              @mouseleave="activeHover2 = false"
              :color="activeHover2 ? 'grey-10' : 'primary'"
              size="20px"
              rounded
              standout
              outlined
              class="col-3"
              label="Salvar"
              @click="saveDate()"
            />
          </div>
        </div>
      </q-card>
    </div>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters } from 'vuex';

export default {
  setup() {
    return {
      modalRegistration: ref(false),
      activeHover: ref(false),
      activeHover2: ref(false),
      isPwd: ref(true),
      isPwd2: ref(true),
      dataUser: ref({
        name: ref(""),
        email: ref(""),
        phone: ref(""),
        cpf: ref(""),
        birthDate: ref("")
      }),
      formatacaoCalendario: ref({
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        firstDayOfWeek: 1
      }),
      edit: ref(false)
    }
  },
  mounted () {
    this.fillData()
  },
  computed: {
    ...mapGetters('user', ['getUserData'])
  },
  methods: {
    ...mapActions('user', ['getUser', 'patchUser']),
    editData () {
      if (this.edit === false) {
        this.edit = true
      } else {
        this.edit = false
      }
    },
    saveDate () {
      const day = this.dataUser.birthDate.substr(0, 2)
      const week = this.dataUser.birthDate.substr(3, 2)
      const year = this.dataUser.birthDate.substr(6, 4)
      const dateCurrent = new Date()
      const hoursCurrent = dateCurrent.getHours() + ':' + dateCurrent.getMinutes() + ':' + dateCurrent.getSeconds()
      
      this.dataUser.birthDate = new Date(year + '-' + week + '-' + day + ' ' + hoursCurrent)

      this.patchUser({
        id: this.getUserData.id,
        data: this.dataUser
      }).then(async (res) => {
        this.edit = false

        await this.getUser({ id: this.getUserData.id })
        this.fillData()
        
        this.$q.notify({
          position: "bottom",
          color: "positive",
          textColor: "white",
          icon: "check",
          message: "Dados atualizados com sucesso!",
        })
      }).catch((error) => {
        this.edit = false
        if (error.status === 400) {
          this.$q.notify({
            position: "bottom",
            color: "negative",
            textColor: "white",
            icon: "error",
            message: JSON.stringify(error.data.errors),
            timeout: 5000
          })
        } else if (error.status === 404) {
          this.$q.notify({
            position: "bottom",
            color: "negative",
            textColor: "white",
            icon: "error",
            message: error.data.message,
          })
        } else {
          this.$q.notify({
            position: "bottom",
            color: "negative",
            textColor: "white",
            icon: "error",
            message: 'Não foi posssível atualizar os dados, tente novamente!',
          })
        }
      })
    },
    fillData(){
      this.dataUser.name = this.getUserData.name
      this.dataUser.email = this.getUserData.email
      this.dataUser.phone = this.getUserData.phone
      this.dataUser.cpf = this.getUserData.cpf
      this.dataUser.birthDate = this.getUserData.birthDate
    },
    checkCpf(cpf) {
      let add;
      let rev;
      cpf = cpf.replace(/\.|-/g, "");
      if (cpf === "") return "CPF inválido!";
      // Elimina CPFs invalidos conhecidos
      if (
        cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"
      ) {
        return "CPF inválido!";
      }
      // Check 1o digito
      add = 0;
      for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) rev = 0;
      if (rev !== parseInt(cpf.charAt(9))) return "CPF inválido!";
      // Check 2o digito
      add = 0;
      for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev === 10 || rev === 11) rev = 0;
      if (rev !== parseInt(cpf.charAt(10))) return "CPF inválido!";
      return true;
    }
  }
}
</script>
