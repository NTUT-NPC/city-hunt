<template>
    <div class="text-xs-center" ref="image">
        <h1>選擇時刻</h1>
        <v-btn
            class="mt-4"
            round
            dark
            large
            color="teal"
            @click="select(1)"
        >
            證據給兒子揭發真相
        </v-btn>
        <v-btn
            class="mt-4"
            color="teal"
            large
            round
            dark
            @click="select(2)"
        >
            說服兒子放下過去
        </v-btn>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectEnding: 0
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    select (variable) {
      this.selectEnding = variable
      this.$store.dispatch('endingSelect', variable)
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    }
  }
}
</script>
