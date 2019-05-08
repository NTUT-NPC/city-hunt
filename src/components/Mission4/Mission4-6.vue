<template>
    <v-layout fill-height align-center justify-center @click="NextView" style="height: 100%" ref='image'>
        <h1>
            待放自白
        </h1>
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
