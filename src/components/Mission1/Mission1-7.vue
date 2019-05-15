<template>
    <div class="pa-4" style="height: calc(100vh - 56px)">
        <v-layout column justify-center fill-height>
            <h2 class="text-xs-center">請拿出實體道具中的包裹解開承恩的謎題</h2>
            <div class="mt-3 text-xs-center">
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
            <div class="text-xs-center mt-4">
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
                              <h2 class="text-xs-center">北門遺落了各式各樣的訊息，可能會有些用處</h2>
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
                              <h2 class="text-xs-center">量量看，勺子的柄歪了幾度？</h2>
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
                              <h2 class="text-xs-center">台北城歪了13度</h2>
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
      if (this.input === '圓公園') {
        this.$emit('inputJudge', false)
      } else {
        this.inputJudge = '輸入錯誤！再重新試試看！'
        this.$emit('inputJudge', true)
      }
    },
    showPrompt () {
      let showPrompt = confirm('這已經是最高級的提示了，確定不再努力看看嗎？')
      this.dialog3 = showPrompt
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
