<template>
    <div>
      <v-img v-if="showImg" :src="require('@/assets/Mission6/6_2_1.png')" width="100%" max-width="600px"></v-img>
      <v-img v-if="!showImg" :src="require('@/assets/Mission6/6_2_2.png')" width="100%" max-width="600px"></v-img>
    </div>

</template>

<script>
export default {
  data () {
    return {
      showImg: true
    }
  },
  created () {
    let ending = this.$store.state.ending
    this.showImg = ending === 1
  }
}
</script>
