<template>
  <div class="content">
    <div>
      <h2 class="text-center my-font">Save the date!</h2>
      <p class="text-center text-justify my-second-font">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <div>
      <q-card class="my-card">
        <img src="../assets/img/photo_2023-02-27_21-37-31.jpg" />
        <q-card-section>
          <div class="text-h6">Invierno en Madrid</div>
          <div class="text-subtitle2">Parque del retiro</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="../assets/img/photo_2023-02-27_21-37-31.jpg" />
        <q-card-section>
          <div class="text-h6">Invierno en Madrid</div>
          <div class="text-subtitle2">Parque del retiro</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
.content
  width: 80%
  margin: auto
  height: 100vh

.my-card
  box-sizing: border-box
  float: left
  width: 50%
  padding: 15px

img
  padding: 0px

p
  font-size: 1.2em
  letter-spacing: 0.1rem
</style>
