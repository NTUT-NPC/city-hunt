<template>
    <v-layout fill-height justify-center align-center column ref="image">
        <h2 class="px-5 mt-5 text-xs-center">前往城隍廟廣場</h2>
        <Locate class="mb-5" :target="location" @locate="inputJudge = $event"></Locate>
    </v-layout>
</template>

<script>
import Locate from '@/components/Locate'

export default {
  data () {
    return {
      location: {
        lat: 25.055613,
        lng: 121.510141
      },
      inputJudge: true
    }
  },
  components: {
    Locate
  },
  created () {
    this.$emit('inputJudge', true)
  },
  watch: {
    inputJudge () {
      if (this.inputJudge !== false) {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      }
    }
  }
}
</script>
