<template>
    <v-layout fill-height justify-center align-center column ref="image">
        <h2 class="px-5 mt-5 text-xs-center">前往北門尋找承恩先生</h2>
        <Locate class="mb-5" :target="location" @locate="$event && $emit('inputJudge', false)"></Locate>
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
      }
    }
  },
  components: {
    Locate
  },
  created () {
    this.$emit('inputJudge', true)
  }
}
</script>
