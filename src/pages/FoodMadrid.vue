<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://www.fratellifigurato.es/')"
            src="../assets/img/frateli.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Frateli Figurato</div>
            <div class="text-subtitle2">
              Auténtica pizza napoletana, la mejor de España y segunda mejor de
              Europa.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="
              goTo('https://www.bigmammagroup.com/es/trattorias/bel-mondo')
            "
            src="../assets/img/belmondo.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Bel Mondo</div>
            <div class="text-subtitle2">
              Exéntrico restaurante italiano donde celebramos nuestro matrimonio
              civíl.
            </div>
            <q-card-section class="q-pt-none text-justify">
              Concebido como la mezcla perfecta entre un palacio de verano a
              orillas del Lago de Garda y el piso de soltero de un chico guay de
              los 80, Bel Mondo son 900m2 de pura felicidad. 300 asientos en
              total, situados entre pequeños rincones, cerca de la chimenea para
              una cena romántica o frente a la gran cocina abierta para mesas
              más grandes. 235m2 de terraza en un jardín secreto lleno de
              flores, un puro concentrado de romanticismo.
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://restaurantesvegetarianosartemisa.com/')"
            src="../assets/img/artemisa.png"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Restaurante artemisa</div>
            <div class="text-subtitle2">
              Completamente vegano, gluten free y sin contaminacón cruzada. Es
              el sitio ideal para que los no veganos prueben esta dieta.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const $router = useRouter();
function goTo(url) {
  if (url.includes("https://")) {
    window.location.href = url;
  } else {
    $router.push(url);
  }
}
</script>

<style lang="sass" scoped>

a
  width: 100%
p
  font-size: 1em
  letter-spacing: 0rem

.my-card
  margin-top: 2em

img
  padding: 15px
  cursor: pointer



@media only screen and (max-width: $breakpoint-sm-max)
  .content
    width: 90%

  .card-container
    padding: 0

  p
    font-size: .8em
    letter-spacing: 0.1rem

@media only screen and (max-width: $breakpoint-xs-max)
  .title
    font-size: 3em
  .card-container
    padding: 0
</style>
