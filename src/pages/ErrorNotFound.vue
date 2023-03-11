<template>
  <div
    class="fullscreen bg-default text-secondary text-center q-pa-md flex flex-center"
  >
    <div>
      <q-toolbar-title class="text-center my-font title">
        <router-link style="text-decoration: none; color: inherit" to="/">
          <p>
            <strong> Antonio y Paulina </strong>
          </p>
        </router-link>
      </q-toolbar-title>
      <div style="font-size: 30vh">404</div>

      <div class="text-h4" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="secondary"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

<style scoped lang="sass">
p
  font-size: 50px
</style>
