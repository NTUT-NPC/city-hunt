<template>
    <v-layout fill-height justify-center align-center column ref="image">
        <h2 class="px-5 mt-5 text-xs-center">前往北門尋找承恩先生<button @click="NextView">456</button></h2>
        <Locate class="mb-5" :target="location" @locate="inputJudge = $event"></Locate>

    </v-layout>
</template>

<script>
import Locate from '@/components/Locate'

export default {
  data () {
    return {
      location: {
        lat: 25.047824,
        lng: 121.511225
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
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
    }
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
