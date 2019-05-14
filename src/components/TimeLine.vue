<template>
  <v-stepper :value="mission" style="background: rgba(0, 0, 0, 0); box-shadow: none;">
    <v-stepper-header>
      <v-stepper-step :complete="mission > 1" step="1"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 2" step="2"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 3" step="3"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="mission > 4" step="4"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="5"></v-stepper-step>
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
