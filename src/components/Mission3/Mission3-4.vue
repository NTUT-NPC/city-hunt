<template>
    <v-layout align-center justify-center fill-height ref="image" @click="NextView">
            <h2>待威任做出來</h2>
    </v-layout>
</template>

<script>
export default {
  data () {
  },
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
