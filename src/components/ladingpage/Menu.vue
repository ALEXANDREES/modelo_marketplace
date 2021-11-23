<template>
  <q-page class="col-12 bg-dark">
    <div id="menu" class="row justify-center bg-dark q-mt-lg">
      <span class="text-h3 text-bold text-secondary">NOSSO <b class="text-white">MENU</b> </span>
    </div>
    <div :class="$q.screen.gt.md? 'row justify-between q-px-xl q-my-lg q-gutter-y-xl' : 'row justify-center q-gutter-y-lg q-gutter-x-lg q-mt-lg'">
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-1.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-2.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-3.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-4.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-5.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-6.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-6.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
      <div class="text-center col-xl-3 col-lg-3 col-md-4 col-sm-11 col-xs-11 bg-dark no-shadow cards" style="border: 1px solid #fff">
        <div class="q-mt-xl">
          <q-avatar class="size-avatar" >
            <img src="/images/menu-6.png">
          </q-avatar>
          <div class="row q-my-xl">
            <span class="text-secondary text-center col-12 text-h6 text-weight-regular">Saboroso e Saudável</span>
            <span class="text-white text-center col-12 text-h6 text-weight-regular">R$15,00 <b class="text-secondary" style="text-decoration: line-through">R$20,00</b></span>
          </div>
          <div class="row col-12 justify-center">
            <q-btn class="button" style="height:30px" color="secondary" no-caps label="Adicionar ao Carrinho" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Menu",
  setup() {
    return {};
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@media only screen and (min-width: 320px) and (max-width: 1023px) {
  .cards {
    width: 80vw;
    height: 400px;
  }
  .size-avatar {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .cards {
    width: 450px;
    height: 40vh;
  }
  .size-avatar {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .cards {
    width: 440px;
    height: 50vh;
  }
  .size-avatar {
    width: 100px;
    height: 100px;
  }
}

@media only screen and (min-width: 1920px) {
  .cards {
    width: 420px;
    height: 45vh;
  }
  .size-avatar {
    width: 130px;
    height: 130px;
  }
}


.button {
  transition: transform 0.3s;
}

.button:hover {
  transform: scale(1.3);
}
</style>
