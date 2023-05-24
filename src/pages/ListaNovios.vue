<template>
  <div class="content">
    <div>
      <h2 class="text-center my-font my-text">Lista de Novios</h2>
      <p class="text-center my-second-font my-text">
        Su asistencia y buenos deseos son suficientes para nosotros. Sin
        embargo, si desean darnos un obsequio puede ser por medio de las
        siguientes opciones.
      </p>
      <p class="text-center my-second-font my-text">
        Recordad que los regalos son opcionales, la asistencia obligatoria.
      </p>
    </div>
    <div class="row justify-center">
      <!-- <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img @click="goTo('')" src="../assets/img/notnow.jpg" />

          <q-card-section class="text-center">
            <div class="text-h6">Nada por aquí. De momento...</div>
            <div class="text-subtitle2"></div>
          </q-card-section>
        </q-card>
      </div> -->
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card q-pa-lg">
          <img src="../assets/img/amazon.png" />

          <q-card-section class="text-center">
            <div class="text-subtitle2"></div>
            <q-btn
              color="secondary"
              class="button"
              :label="'Lista de Novios Amazon'"
              href="https://www.amazon.es/wedding/share/antonio_paulina"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card q-pa-lg row justify-center">
          <img
            src="../assets/img/sobre.webp"
            height="225"
            style="width: 75%; object-fit: cover"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Efectivo</div>
            <div class="text-subtitle2">
              Un sobre con efectivo es una excelente opción
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card q-pa-lg row justify-center">
          <img
            src="../assets/img/Revolut-Symbol.png"
            height="225"
            style="width: 75%; object-fit: cover"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Cuenta bancaria banco Revolut</div>
            <div class="text-subtitle2">Antonio Leonardo Jaramillo Fanta</div>
            <div class="text-subtitle2">IBAN: LT08 3250 0199 3921 4680</div>
            <div class="text-subtitle2">BIC: REVOLT21</div>
            <div class="text/subtitle2">User: @antonihn2v</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card q-pa-lg">
          <img src="../assets/img/logo-bodamas-el-corte-inglés3.png" />

          <q-card-section class="text-center">
            <div class="text-subtitle2">Disponible más adelante...</div>
            <q-btn
              color="secondary"
              class="button"
              disabled
              :label="'Lista de Novios El Corte Inglés'"
              @click="
                goTo('https://www.amazon.es/wedding/share/antonio_paulina')
              "
            />
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
  if (url.includes("https://www.")) {
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


@media only screen and (max-width: $breakpoint-sm-max)
  .content
    width: 90%

  .card-container
    padding: 0

  p
    font-size: 1em
    letter-spacing: 0.1rem

@media only screen and (max-width: $breakpoint-xs-max)
  .title
    font-size: 3em
  .card-container
    padding: 0
</style>
