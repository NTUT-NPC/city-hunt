<template>
    <v-layout fill-height align-center justify-center @click="NextView" style="height: 100%" ref='image'>
        <v-img :src="require('@/assets/Mission4/4-12.jpg')" width="100%" max-width="600px"></v-img>
        <div class="button text-xs-center">
            <h2 class="mb-5">你選擇...</h2>
            <v-btn
                outline
                color="teal"
                round
                large
                @click="EndingSelect(1)"
            >
                證據給兒子揭發真相
            </v-btn>
            <v-btn
                class="mt-2"
                outline
                color="teal"
                round
                large
                @click="EndingSelect(2)"
            >
                說服兒子放下過去
            </v-btn>
        </div>
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
    },
    EndingSelect (variable) {
      // 待新增
    }
  }
}
</script>

<style scoped>
.button {
  z-index: 1;
  position: absolute;
}
</style>
