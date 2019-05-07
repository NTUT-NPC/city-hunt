<template>
    <v-layout fill-height justify-center align-center column>
        <h2 class="px-5 mt-5">前往國立臺灣博物館鐵道部尋找阿祖</h2>
        <Locate class="mb-5" :target="location" @locate="inputJudge = $event"></Locate>
    </v-layout>
</template>

<script>
import Locate from '@/components/Locate'

export default {
  data () {
    return {
      location: {
        lat: 25.048874,
        lng: 121.510952
      },
      inputJudage: true
    }
  },
  components: {
    Locate
  },
  created () {
    this.$emit('inputJudge', true)
  },
  watch: {

  }
}
</script>
