<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img @click="goTo('')" src="../assets/img/notnow.jpg" />

          <q-card-section class="text-center">
            <div class="text-h6">Nada por aquí. De momento...</div>
            <div class="text-subtitle2"></div>
          </q-card-section>
        </q-card>
      </div>
      <!-- <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://www.amazon.es/wedding/share/antonio_paulina')"
            src="../assets/img/amazon.png"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Lista de novios Amazon</div>
            <div class="text-subtitle2"></div>
          </q-card-section>
        </q-card>
      </div> -->
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

img
  padding: 0px
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
