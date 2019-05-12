<template>
    <div class="pa-4" style="height: calc(100vh - 56px);" ref="image">
        <v-layout column justify-center fill-height>
            <h1 class="text-xs-center mb-5">解開盒子密碼</h1>
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
            <div class="text-xs-center mt-3">
                <div>
                    <div class="text-xs-center">
                        <v-dialog
                        v-model="dialog1"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
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
                              <h2 class="text-xs-center">看看附近的文字牌</h2>
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
                        v-model="dialog"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
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
                              <h2 class="text-xs-center">線索上的日文對應到文字牌中的什麼呢？</h2>
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
                    <v-dialog
                        v-model="dialog3"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                            round
                            large
                            >
                            高級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            高級提示
                            </v-card-title>

                            <v-card-text>
                              <h2 class="text-xs-center">每個日文字的排列是什麼呢？</h2>
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
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
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
