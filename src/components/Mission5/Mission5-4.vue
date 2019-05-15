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
        <v-btn
          @click="inputJudge"
          class="mb-3"
          large
          round
          color="brown"
          dark
        >
          確認
        </v-btn>
        <div class="text-xs-center my-4">
                <div>
                    <div class="text-xs-center">
                        <v-dialog
                        v-model="dialog1"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="#ffc18c"
                            v-on="on"
                            large
                            round
                            >
                            初級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            初級提示
                            </v-card-title>

                            <v-card-text>
                              <h2 class="text-xs-center">請仔細觀察地上</h2>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog1 = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>
                </div>
                <div>
                    <v-dialog
                        v-model="dialog2"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="#ffc18c"
                            v-on="on"
                            large
                            round
                            >
                            中級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            中級提示
                            </v-card-title>

                            <v-card-text>
                              <h2 class="text-xs-center">二進位</h2>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog2 = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                </div>
                <div>
                    <v-btn
                      color="#ffc18c"
                      @click.stop="showPrompt"
                      round
                      large
                    >
                      高級提示
                    </v-btn>

                    <v-dialog
                      v-model="dialog3"
                      width="300"
                    >
                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            高級提示
                            </v-card-title>

                            <v-card-text>
                              <h2 class="text-xs-center">坤：0, 震：1, 坎：2, 兌：3, 艮：4, 離：5, 巽：6, 乾：7</h2>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog3 = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                </div>
            </div>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      hasError: false,
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

      if (this.hasError === false) {
        this.NextView()
      }
    },
    showPrompt () {
      let showPrompt = confirm('這已經是最高級的提示了，確定不再努力看看嗎？')
      this.dialog3 = showPrompt
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
