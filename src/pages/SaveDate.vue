<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <a href="https://forms.gle/WNRFc8UV9AAjQwUs7">
            <img src="../assets/img/rsvp.jpg" />
          </a>
        </q-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-md-6 col-sm-12 col-xs-12 button-container">
        <q-btn
          color="secondary"
          class="button"
          label="¡Confirma tu asistencia!"
          href="https://forms.gle/WNRFc8UV9AAjQwUs7"
        />
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
  cursor: pointer
.button
  width: 100%
.button-container
  padding: 1em 1em

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
