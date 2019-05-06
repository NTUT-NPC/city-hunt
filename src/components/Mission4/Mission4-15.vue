<template>
    <div class="pa-4" style="height: calc(100vh - 56px)" ref="image">
        <v-layout column justify-center fill-height>
            <h1 class="text-xs-center">依據照片內容輸入地址</h1>
            <div class="mt-5 text-xs-center">
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
                    v-on="on"
                    large
                    round
                    @click="inputCheck"
                >
                確認
                </v-btn>
            </div>
            <div class="mt-5 text-xs-center">
                <div>
                    <div class="text-xs-center">
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
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
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
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
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
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
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
      if (this.input === '台北霞海城隍廟') {
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
