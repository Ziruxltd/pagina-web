<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-6 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://mesondecandido.es/')"
            src="../assets/img/mesoncandido.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Mesón Cándido</div>
            <div class="text-subtitle2">Asador segoviano.</div>
            <q-card-section class="q-pt-none text-justify">
              Este restaurante es una parada obligatoria para cualquiera que
              visite Segovia. La especialidad es el cohinillo al horno el cual
              cortan con un plato mientras recitan sus titulos otorgados por la
              realeza. El restaurante lleva 150 años en activo y la casa es
              probablemnte del siglo XVII.
            </q-card-section>
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
