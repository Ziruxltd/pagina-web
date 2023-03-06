<template>
  <div class="content">
    <h2 class="text-center my-font my-text">Alojamientos en Toledo</h2>
    <p class="text-center text-center my-second-font my-text">
      Estos son los hoteles que tienen acuerdo con el centro de eventos.
    </p>
    <div class="row justify-center">
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card
          @click="
            goTo(
              'https://www.marriott.com/en-us/hotels/madft-eugenia-de-montijo-autograph-collection/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0'
            )
          "
          class="my-card"
        >
          <img
            src="../assets/img/Eugenia_de_Montijo_Autograph_collection.png"
          />

          <q-card-section>
            <div class="text-h6">Hotel Eugenia de Montijo</div>
            <div class="text-subtitle2">
              Condiciones especiales (segun tarifa web)
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>Viernes y Sábados: 15% descuento sobre Tarifa.</p>
            <p>Domingo a jueves: Tarifa más baja posible.</p>
            <p>
              Es importante que las reservas sean directamente gestionadas con
              Noemí Sánchez (nsanchez@fontecruztoledo.com) para garantizar este
              acuerdo y no por otros canales.
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card
          @click="
            goTo(
              'https://www.eurostarshotels.com/eurostars-palacio-buenavista.html?referer_code=lb0gg00yx&utm_source=google&utm_medium=business&utm_campaign=lb0gg00yx'
            )
          "
          class="my-card"
        >
          <img src="../assets/img/Hotel_eurostars.png" />

          <q-card-section>
            <div class="text-h6">Hotel Eugenia de Montijo</div>
            <div class="text-subtitle2">
              Condiciones especiales (segun tarifa web)
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>Domingo a Viernes: 10% descuento sobre Tarifa.</p>
            <p>Sábados: Mejor tarifa disponible.</p>
            <p>
              Todas las peticiones que surjan de parte del Cigarral del Ángel
              serán remitidas a la siguiente dirección de correo electrónico:
              eventos3@eurostarspalaciobuenavista.com
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card
          @click="goTo('https://www.hotelbeatriztoledo.com/es/')"
          class="my-card"
        >
          <img src="../assets/img/Hotel_Beatriz_toledo.png" />

          <q-card-section>
            <div class="text-h6">Hotel Eugenia de Montijo</div>
            <div class="text-subtitle2">
              Condiciones especiales (segun tarifa web)
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>10% de descuento sobre tarifa web.</p>
            <p>
              Es importante que las reservas sean directamente gestionadas con
              el hotel e indicando que la boda se realiza en el Cigarral del
              Ángel para obtener la tarifa especial.
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://www.hotellabastida.com/')"
            src="../assets/img/Hotel_la_bastida.png"
          />

          <q-card-section>
            <div class="text-h6">Hotel Eugenia de Montijo</div>
            <div class="text-subtitle2">
              Condiciones especiales (segun tarifa web)
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>Domingo a Jueves: 20% de descuento.</p>
            <p>Viernes y Sábado: 10% de descuento.</p>
            <p>Festivos y Vísperas: 5% de descuento.</p>
            <p>
              Todas las peticiones que surjan de parte del Cigarral del Ángel
              serán remitidas a la siguiente dirección de correo electrónico:
              reservas@hotellabastida.com
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h2 class="text-center my-font my-text">Alojamientos en Madrid</h2>
    <p class="text-center text-center my-second-font my-text">
      Estos son los hoteles que recomendamos en Madrid.
    </p>
    <div class="row justify-center">
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('http://www.hostaltriana.com/')"
            src="../assets/img/triana.jpg"
          />

          <q-card-section>
            <div class="text-h6">Hostal Triana</div>
            <div class="text-subtitle2">Hostal regentado por una amiga.</div>
          </q-card-section>

          <q-card-section class="q-pt-none text-justify">
            <p>
              Cómodo y cumple con todas las necesidades básicas. Ubicado en
              pleno centro de Madrid.
            </p>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="
              goTo(
                'https://www.cataloniahotels.com/es/hotel/catalonia-las-cortes'
              )
            "
            src="../assets/img/catalonia.jpg"
          />

          <q-card-section>
            <div class="text-h6">Hotel Catalonia las Cortes</div>
            <div class="text-subtitle2">
              Hotel céntrico en el que se han alojado los Quevedo Alarcón
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
  if (url.includes("https://") || url.includes("http://")) {
    window.location.href = url;
  } else {
    $router.push(url);
  }
}
</script>

<style lang="sass" scoped>
p
  font-size: 1em
  letter-spacing: 0rem

.my-card
  margin-top: 2em
  cursor: pointer

img
  padding: 15px
  cursor: pointer
.my-second-font
  font-size: 1.3em


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
