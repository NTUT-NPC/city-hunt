<template>
  <v-layout fill-height wrap justify-center align-center>
    <img @click="NextImage" :src="imageURL" style="width: 100%; max-width: 800px;" ref="image">
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageURL: require('@/assets/Mission4/4-3-1.jpg'),
      image: 1
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.image >= 12) {
        this.$emit('inputJudge', false)
        // this.$refs.image.click()
        this.$store.dispatch('increaseReviewCount')
      } else {
        this.imageURL = require(`@/assets/Mission4/4-3-${this.image}.jpg`)
      }
    }
  }
}
</script>
