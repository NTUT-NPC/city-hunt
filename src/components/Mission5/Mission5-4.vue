<template>
    <v-layout align-center justify-center @click.once="NextView" style="height: 100%" ref='image'>
        <h1>
            待放八卦盤
        </h1>
    </v-layout>
</template>

<script>
export default {
  created () {
    this.$emit('inputJudge', true)
    console.log('yes i do2')
  },
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    }
  }
}
</script>
