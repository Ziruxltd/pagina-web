<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12 agenda-container text-center">
        <div class="day-title">Sábado 16 de septiembre</div>
        <div class="event-description text-justify">
          Este día nos gustaría acompañarlos a recorrer la ciudad, que se puedan
          ir sumando cuando más les acomode. El plan es crear una ruta para
          conocer los principales atractivos del lugar y acabar en algún lugar a
          tomar tapas
        </div>
        <div class="event-title">Paseo por Toledo</div>
        <div class="event-description">13:00 hrs</div>
        <div class="event-title">Tapas</div>
        <div class="event-description">19:00 hrs</div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 agenda-container text-center">
        <div class="day-title">Domingo 17 de septiembre</div>
        <div class="event-title">Inicio celebración</div>
        <div class="event-description">13:00 hrs</div>
        <q-btn
          @click="goTo('https://goo.gl/maps/eiJKEYCFWBQoaBDY8')"
          color="secondary"
          class="button"
          label="Dirección"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.agenda-container
  margin-top: 30px
  padding: 20px
  border: solid #56473c

.day-title
  font-size: 2em
  color: #56473c
.event-title
  margin-top: 20px
  font-size: 1.6em
  color: #56473c
</style>
