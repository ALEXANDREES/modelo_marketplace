<template>
    <div class="row justify-center">
      <div class="col-11 text-h5 q-mt-lg text-primary text-bold">Perfil</div>
      <div class="col-11 text-h6 text-grey-8 text-bold q-mb-lg">
        Dados pessoais
      </div>
      <q-card class="col-11" style="border-radius: 20px; background: #21222c">
        <div class="row col-12 justify-end">
          <q-btn
            class="q-mr-lg q-mt-sm"
            flat
            color="secondary"
            icon="far fa-edit"
            label="Editar"
            no-caps
          />
        </div>
        <div class="row col-12 q-gutter-lg q-mt-lg justify-center">
          <q-input
            required
            v-model="dataUser.name"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Nome"
            outlined
            dense
            standout="bg-accent"
          >
          </q-input>
          <q-input
            required
            v-model="dataUser.surname"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Sobrenome"
            outlined
            dense
            standout="bg-accent"
          >
          </q-input>
          <q-input
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
          >
          </q-input>
          <q-input
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
          >
          </q-input>
          <q-input
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
            :rules="[(val) => !!val || 'Campo obrigatório', checkCpf(dataUser.cpf)]"
            lazy-rules
          >
          </q-input>
          <q-input
            required
            type="date"
            v-model="dataUser.birthday"
            class="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-xs-11"
            input-class="text-grey-7 text-subtitle1"
            label-color="primary"
            placeholder="Data Nascimento"
            outlined
            dense
            color="white"
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
            outlined
            dense
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
            outlined
            dense
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
            class=" row col-12 items-end justify-center q-mt-xl q-mb-md q-gutter-x-xl"
          >
            <q-btn
              @mouseover="activeHover2 = true"
              @mouseleave="activeHover2 = false"
              :color="activeHover2 ? 'grey-10' : 'primary'"
              size="20px"
              rounded
              standout
              outlined
              class="col-3"
              label="Salvar"
              type="submit"
            />
          </div>
        </div>
      </q-card>
    </div>
</template>

<script>
import { ref } from "vue";

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
        surname: ref(""),
        email: ref(""),
        phone: ref(""),
        cpf: ref(""),
        birthday: ref(""),
        password: ref(""),
        confirmPassword: ref(""),
      }),
    };
  },
  methods: {
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
    },
  },
};
</script>
