<template>
  <div class="content">
    <div class="row justify-center">
      <div
        v-for="(res, index) in restaurants"
        class="col-md-4 col-sm-12 col-xs-12 card-container"
        :key="index"
      >
        <q-card class="my-card">
          <img :src="res.image" />

          <q-card-section class="text-center">
            <q-btn
              color="secondary"
              class="button"
              :label="res.name"
              :href="res.url"
            />
            <div class="text-subtitle2">{{ res.description }}</div>
            <q-card-section class="q-pt-none text-justify">
              {{ res.explication }}
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
onMounted(() => {
  setRestaurants();
});
const $route = useRoute();
const restaurants = ref([]);
const madrid = ref([
  {
    name: "Frateli Figurato",
    description: "Auténtica pizza napoletana",
    explication:
      "La mejor pizza napoletana de España, segunda mejor de Europa y décimasegunda del mundo.",
    url: "https://www.fratellifigurato.es/",
    image: require("../assets/img/frateli.jpg"),
  },
  {
    name: "Bel Mondo",
    description:
      "Exéntrico restaurante italiano donde celebramos nuestro matrimonio civíl.",
    explication:
      "Concebido como la mezcla perfecta entre un palacio de verano a orillas del Lago de Garda y el piso de soltero de un chico guay de los 80, Bel Mondo son 900m2 de pura felicidad. 300 asientos en total, situados entre pequeños rincones, cerca de la chimenea para una cena romántica o frente a la gran cocina abierta para mesas más grandes. 235m2 de terraza en un jardín secreto lleno de flores, un puro concentrado de romanticismo.",
    url: "https://www.bigmammagroup.com/es/trattorias/bel-mondo",
    image: require("../assets/img/belmondo.jpg"),
  },
  {
    name: "Restaurante Artemisa",
    description:
      "Vegano, vegetariano, gluten free y sin contaminación cruzada.",
    explication:
      "Restaurante ideal para que los no veganos prueben esta dieta.",
    url: "https://restaurantesvegetarianosartemisa.com/",
    image: require("../assets/img/artemisa.png"),
  },
  {
    name: "El Chaparrito",
    description: "Auténtico restaurante mexicano.",
    explication:
      "Perfecto para probar la gran variedad de tacos, ya que puedes pedir los pequeños de solo 1€ cada uno.",
    url: "https://www.restauranteschaparritos.com/",
    image: require("../assets/img/elchaparrito.jpg"),
  },
  {
    name: "Tootó e Peppino",
    description: "Auténtica trattoria napoletana.",
    explication:
      "Reconocida por el ministerio de cultura italiano como una trattoria auténtica. Ha sido visitada por numeros fútbolistas entre los cuales se encuentra Maradona, Zamorano, Zidane...",
    url: "https://restaurantetotoepeppino.com/home",
    image: require("../assets/img/totopepino.jpg"),
  },
  {
    name: "Matilda café, barrio de las letras.",
    description: "Comida casera.",
    explication: "",
    url: "https://goo.gl/maps/QL2HKrahqZ2unk2Q6",
    image: require("../assets/img/matilda.jpg"),
  },
  {
    name: "127 Taipei Bar Ramen & Baos",
    description: "Auténtico ramen bar.",
    explication: "",
    url: "https://goo.gl/maps/Mgj92VX1xNcgAt2J6",
    image: require("../assets/img/127tai.jpg"),
  },
  {
    name: "Hot Pot de Sichuan",
    description: "Mejor Hot Pot de España. Comida asiática.",
    explication: "",
    url: "https://hotpot.es/",
    image: require("../assets/img/olla.jpg"),
  },
  {
    name: "Restaurante De María",
    description: "Lujosa parrilla argentina.",
    explication:
      "Tiene muchos locales. Solemos visitar el que está ubicado en la calle Félix Boix",
    url: "https://www.demariarestaurante.es/",
    image: require("../assets/img/demarialogo.png"),
  },
  {
    name: "Restaurante Rubaiyat",
    description: "Lujosa parrilla brasileña.",
    explication: "Restaurante favorito de antonio. Precio: €€€",
    url: "https://gruporubaiyat.com/restaurantes.asp?abt=48&lview=es",
    image: require("../assets/img/rubaiyat.jpg"),
  },
  {
    name: "Restaurante Botín",
    description: "Restaurante mas antiguo del mundo.",
    explication:
      "Especializado en platos de horno. Especialidad, el cochinillo",
    url: "https://botin.es/",
    image: require("../assets/img/botin.jpg"),
  },
  {
    name: "Chocolatería San Ginés",
    description: "El mejor chocolate con churros del mundo, abierto 24h.",
    explication: "",
    url: "https://chocolateriasangines.com/",
    image: require("../assets/img/san-gines-2.jpg"),
  },
]);

const segovia = ref([
  {
    name: "Mesón Cándido",
    description: "Asador segoviano.",
    explication:
      "Este restaurante es una parada obligatoria para cualquiera que visite Segovia. La especialidad es el cohinillo al horno el cual cortan con un plato mientras recitan sus titulos otorgados por la realeza. El restaurante lleva 150 años en activo y la casa es probablemnte del siglo XVII.",
    url: "https://mesondecandido.es/",
    image: require("../assets/img/mesoncandido.jpg"),
  },
]);

const nothing = ref([
  {
    name: "Nada por aqui, de momento...",
    description: "Disponible más adelante",
    explication: "",
    url: "",
    image: require("../assets/img/notnow.jpg"),
  },
]);

function setRestaurants() {
  restaurants.value = [];
  if ($route.path.includes("madrid")) {
    restaurants.value = madrid.value;
  } else if ($route.path.includes("segovia")) {
    restaurants.value = segovia.value;
  } else {
    restaurants.value = nothing.value;
  }
}
</script>

<style lang="sass" scoped>
.button
  width: 100%
  margin-bottom: 10px
a
  width: 100%
p
  font-size: 1em
  letter-spacing: 0rem

.my-card
  margin-top: 2em

img
  padding: 15px



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
