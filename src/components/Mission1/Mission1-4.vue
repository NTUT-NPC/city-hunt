<template>
  <v-layout fill-height wrap justify-center align-center>
    <img @click="NextImage" :src="imageURL" style="height: 100%" ref="image" />
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageURL: require('@/assets/Mission1/1-2-1.jpg'),
      image: 1
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.image === 33) {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      } else {
        this.imageURL = require(`@/assets/Mission1/1-2-${this.image}.jpg`)
      }
    }
  }
}
</script>
