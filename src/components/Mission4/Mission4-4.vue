<template>
    <div class="pa-4" style="height: calc(100vh - 56px);" ref="image">
        <v-layout column justify-center fill-height>
            <h1 class="text-xs-center">解開盒子密碼</h1>
            <div class="text-xs-center">
              <img src="@/assets/Mission4/close.png" style="width: 85%; max-width: 500px;">
            </div>
            <div class="text-xs-center">
              <v-text-field
                    v-model="input"
                    :rules="inputRules"
                    label="輸入欄"
                    outline
                    required
                    @keyup.enter="inputCheck"
                ></v-text-field>
              <h2 :class="textColor">{{ inputJudge }}</h2>
                <v-btn
                    color="brown lighten-2"
                    dark
                    large
                    round
                    @click="inputCheck"
                >
                確認
                </v-btn>
            </div>
        </v-layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      input: '',
      inputJudge: '',
      inputRules: [
        v => !!v || '還沒有輸入任何東西喔！'
      ]
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  computed: {
    textColor () {
      if (this.inputJudge === '輸入錯誤！再重新試試看！') {
        return 'textRed'
      } else {
        return 'textRed'
      }
    }
  },
  watch: {
    input () {
      this.inputJudge = ''
    }
  },
  methods: {
    inputCheck () {
      // 等待更改
      if (this.input === '1938') {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      } else {
        this.inputJudge = '輸入錯誤！再重新試試看！'
        this.$emit('inputJudge', true)
      }
    }
  }
}
</script>

<style scoped>
.textRed {
  color: red;
}

.textBlack {
  color: black;
}
</style>
