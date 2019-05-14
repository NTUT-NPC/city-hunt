<template>
  <v-layout fill-height wrap justify-center align-center>
    <img @click="NextImage" :src="imageURL" style="width: 100%; max-width: 800px;" ref="image" />
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageURL: require('@/assets/Mission4/4-3-13a.jpg'),
      image: 13,
      ending: 'a'
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  mounted () {
    this.ending = localStorage.ending || 'a'
    this.imageURL = require(`@/assets/Mission4/4-3-${this.image + this.ending}.jpg`)
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.ending === 'a') {
        if (this.image >= 15) {
          this.$emit('inputJudge', false)
          this.$refs.image.click()
        } else {
          this.imageURL = require(`@/assets/Mission4/4-3-${this.image + this.ending}.jpg`)
        }
      } else {
        if (this.image >= 16) {
          this.$emit('inputJudge', false)
          this.$refs.image.click()
        } else {
          this.imageURL = require(`@/assets/Mission4/4-3-${this.image + this.ending}.jpg`)
        }
      }
    }
  }
}
</script>
