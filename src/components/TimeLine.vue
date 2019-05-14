<template>
  <v-stepper :value="mission" style="box-shadow: none;">
    <v-stepper-header>
      <v-stepper-step :complete="mission > 1" step="1" color="#C48B59"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 2" step="2" color="#C48B59"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 3" step="3" color="#C48B59"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 4" step="4" color="#C48B59"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="5" color="#C48B59"></v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  computed: {
    mission () {
      return localStorage.Mission
    }
  }
}
</script>
