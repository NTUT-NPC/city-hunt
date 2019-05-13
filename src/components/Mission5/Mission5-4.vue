<template>
    <v-layout
      column
      align-center
      justify-center
      ref='image'
    >
        <img
          src="@/assets/Mission5/Gossip.png"
          style="width: 100%; max-width: 500px;"
          class="mx-auto"
        >
        <h1 class="my-5 text-xs-center px-5">輸入對應方位的正確代碼</h1>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex
              xs6
              v-for="(input, index) in inputs"
              :key="index"
            >
              <v-text-field
                outline
                v-model="input.input"
                :label="input.text"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <h2 v-show="hasError" class="textRed mb-2">輸入錯誤！</h2>
        <v-btn @click="inputJudge">確認</v-btn>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      hasError: undefined,
      nameRules: [
        v => !!v || '你還沒有輸入此欄喔！'
      ],
      inputs: [
        {
          text: '壹',
          answer: '000',
          input: ''
        },
        {
          text: '貳',
          answer: '000',
          input: ''
        },
        {
          text: '參',
          answer: '101',
          input: ''
        },
        {
          text: '肆',
          answer: '100',
          input: ''
        },
        {
          text: '伍',
          answer: '000',
          input: ''
        },
        {
          text: '陸',
          answer: '001',
          input: ''
        },
        {
          text: '柒',
          answer: '010',
          input: ''
        },
        {
          text: '捌',
          answer: '000',
          input: ''
        }
      ]
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    },
    inputJudge () {
      for (let i of this.inputs) {
        if (i.input !== i.answer) {
          this.hasError = true
          return
        }
      }
    }
  }
}
</script>

<style>
.input {
  border: black 1px solid;
  width: 80px;
}

.textRed {
  color: red;
}
</style>
