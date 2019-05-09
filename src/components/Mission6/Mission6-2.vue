<template>
    <v-layout fill-height align-center justify-center @click="NextView" style="height: 100%" ref='image'>
        <h1>
            待放 6-2 照片
        </h1>
    </v-layout>
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
