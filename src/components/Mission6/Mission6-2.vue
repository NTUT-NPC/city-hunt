<template>
    <v-layout fill-height align-center justify-center style="height: 100%" ref='image'>
        <img @click="NextImage" :src="imageURL" style="width: 100%; max-width: 800px;" ref="image" />
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      imageURL: require('@/assets/Mission6/a1.jpg'),
      image: 1,
      ending: 'a'
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  mounted () {
    this.ending = localStorage.ending || 'a'
    this.imageURL = require(`@/assets/Mission6/${this.ending + this.image}.jpg`)
  },
  methods: {
    NextImage () {
      this.image += 1
      if (this.ending === 'a') {
        if (this.image >= 4) {
          this.$emit('inputJudge', false)
          this.$refs.image.click()
        } else {
          this.imageURL = require(`@/assets/Mission6/${this.ending + this.image}.jpg`)
        }
      } else {
        if (this.image >= 3) {
          this.$emit('inputJudge', false)
          this.$refs.image.click()
        } else {
          this.imageURL = require(`@/assets/Mission6/${this.ending + this.image}.jpg`)
        }
      }
    }
  }
}
</script>
