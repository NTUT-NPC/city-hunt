<template>
  <v-layout fill-height wrap justify-center align-center>
    <img @click="NextImage" :src="imageURL" style="width: 100%; max-width: 800px;" ref="image" />
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageURL: require('@/assets/Mission4/4-3-12a.jpg'),
      image: 12,
      ending: 'a'
    }
  },
  created () {
    this.$emit('inputJudge', true)
    // 待做判斷
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.image >= 14) {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      } else {
        this.imageURL = require(`@/assets/Mission4/4-3-${this.image + this.ending}.jpg`)
      }
    }
  }
}
</script>
