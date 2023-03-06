<template>
  <div class="content">
    <div class="row justify-center">
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
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
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
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
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
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
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://www.restauranteschaparritos.com/')"
            src="../assets/img/elchaparrito.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">El Chaparrito</div>
            <div class="text-subtitle2">Auténtico restaurante mejicano.</div>
            <q-card-section class="q-pt-none text-justify">
              Perfecto para probar la gran variedad de tacos, ya que puedes
              pedir los pequeños de solo 1€ cada uno.
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://restaurantetotoepeppino.com/home')"
            src="../assets/img/totopepino.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Totó e Peppino</div>
            <div class="text-subtitle2">Auténtica trattoria napoletana.</div>
            <q-card-section class="q-pt-none text-justify">
              Reconocida por el ministerio de cultura italiano como una
              trattoria auténtica. Ha sido visitada por numeros fútbolistas,
              entre los cuales se encuentra Maradona, Zamorano, Zidane...
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://goo.gl/maps/QL2HKrahqZ2unk2Q6')"
            src="../assets/img/matilda.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Matilda café, barrio de las letras.</div>
            <div class="text-subtitle2">Comida casera.</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://goo.gl/maps/Mgj92VX1xNcgAt2J6')"
            src="../assets/img/127tai.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">127 Taipei Bar Ramen & Baos</div>
            <div class="text-subtitle2">Auténtico ramen bar. ¡Picante!</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://hotpot.es/')"
            src="../assets/img/olla.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Hot Pot de Sichuan</div>
            <div class="text-subtitle2">
              Mejor Hot Pot de España. Cómida asiática.
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://hotpot.es/')"
            src="../assets/img/demarialogo.png"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Restaurante De María</div>
            <div class="text-subtitle2">
              Lujosa parrilla argentina repartida por todo Madrid.
            </div>
            <q-card-section class="q-pt-none text-justify">
              Aun que todos los locales son igual de buenos, solemos visitar el
              que esta ubicado en la calle Félix Boix.
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://gruporubaiyat.com/index.asp?lview=es')"
            src="../assets/img/rubaiyat.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Restaurante Rubaiyat</div>
            <div class="text-subtitle2">Lujosa parrilla brasileña.</div>
            <q-card-section class="q-pt-none text-justify">
              Restaurante favorito de Antonio. €€€
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://botin.es/')"
            src="../assets/img/botin.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Restaurante Botín</div>
            <div class="text-subtitle2">Restaurante más antiguo del mundo.</div>
            <q-card-section class="q-pt-none text-justify">
              Solo venden platos de horno. Su especialidad, el cochinillo.
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 card-container">
        <q-card class="my-card">
          <img
            @click="goTo('https://chocolateriasangines.com/')"
            src="../assets/img/san-gines-2.jpg"
          />

          <q-card-section class="text-center">
            <div class="text-h6">Chocolatería San Ginés</div>
            <div class="text-subtitle2">
              El mejor chocolate con churros del mundo, abierto 24h.
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
  if (url.includes("https://" || url.includes("http:"))) {
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
