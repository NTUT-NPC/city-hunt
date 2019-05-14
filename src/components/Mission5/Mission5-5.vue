<template>
    <v-layout fill-height align-center justify-center @click="NextView" style="height: 100%" ref='image'>
        <img src="@/assets/Mission5/5-1-7.jpg" style="width: 100%;">
    </v-layout>
</template>
<script>
export default {
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    }
  }
}
</script>
