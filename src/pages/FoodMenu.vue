<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card @click="goTo('foodmadrid')" class="my-card">
          <img src="../assets/img/madrid.jpg" />

          <q-card-section class="text-center">
            <div class="text-h6">Madrid</div>
            <div class="text-subtitle2"></div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card @click="goTo('')" class="my-card">
          <img src="../assets/img/toledo.jpg" />

          <q-card-section class="text-center">
            <div class="text-h6">Toledo</div>
            <div class="text-subtitle2"></div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card @click="goTo('')" class="my-card">
          <img src="../assets/img/segovia.jpg" />

          <q-card-section class="text-center">
            <div class="text-h6">Segovia</div>
            <div class="text-subtitle2"></div>
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
  cursor: pointer

img
  max-height: 22em
  padding: 15px
  object-fit: cover
  object-position: 0 23%
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
