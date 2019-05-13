<template>
  <v-layout fill-height wrap justify-center align-center>
    <img @click="NextImage" :src="imageURL" style="width: 100%; max-width: 800px;" ref="image" />
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      imageURL: require('@/assets/Mission2/2-2-1.jpg'),
      image: 1
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.image >= 6) {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      } else {
        this.imageURL = require(`@/assets/Mission2/2-2-${this.image}.jpg`)
      }
    }
  }
}
</script>
