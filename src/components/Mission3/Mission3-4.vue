<template>
  <v-layout class="py-4" column align-center justify-center fill-height ref="image">
    <h2 class="display-1 font-weight-bold">解開九宮格謎題</h2>
    <p
      :class="['headline', 'pa-0', 'mt-3', textColorClass]"
    >A = {{ answers[0] || '?' }}, B = {{ answers[1] || '?' }}, C = {{ answers[2] || '?' }}</p>
    <div class="ma-4">
      <v-layout row wrap>
        <v-flex
          v-for="(button, index) in buttons"
          :key="index"
          xs4
          class="text-xs-center"
          style="height: fit-content;"
        >
          <v-btn
            fab
            outline
            color="#c49b58"
            class="headline"
            @click="clickButton(button.text)"
          >{{ button.text }}</v-btn>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <v-dialog v-model="dialog1" width="300">
        <template v-slot:activator="{ on }">
          <v-btn color="#ffc18c" dark v-on="on" large round>初級提示</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline lighten-2" primary-title>初級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">跟著箭頭走</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog1 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="dialog2" width="300">
        <template v-slot:activator="{ on }">
          <v-btn color="#ffc18c" dark v-on="on" large round>中級提示</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline lighten-2" primary-title>中級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">走進九宮格</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog2 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-btn color="#ffc18c" dark @click.stop="showPrompt" round large>高級提示</v-btn>

      <v-dialog v-model="dialog3" width="300">
        <v-card>
          <v-card-title class="headline lighten-2" primary-title>高級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">代號對照九宮格的數字</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog3 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-dialog :value="completed" max-width="300" persistent>
      <v-card>
        <v-card-title primary-title>哇！你真棒</v-card-title>
        <v-card-text>恭喜已解開了九宮格謎題！</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="NextView">下一步</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
const status = {
  WAITING: 0,
  CHECKED_CORRECT: 1,
  CHECKED_INCORRECT: 2
}

export default {
  created () {
    this.$emit('inputJudge', true)
  },
  computed: {
    status () {
      const answers = this.answers
      if (answers.length === 3 && answers[0] === 'ふ' && answers[1] === 'む' && answers[2] === 'か') {
        return status.CHECKED_CORRECT
      } else if (answers.length < 3) {
        return status.WAITING
      } else {
        return status.CHECKED_INCORRECT
      }
    },
    textColorClass () {
      switch (this.status) {
        case status.CHECKED_CORRECT:
          return 'green--text'
        case status.CHECKED_INCORRECT:
          return 'red--text'
        default:
          return 'grey--text'
      }
    },
    completed () {
      return this.status === status.CHECKED_CORRECT
    }
  },
  data () {
    return {
      answers: [],
      buttons: [
        {
          text: 'も'
        },
        {
          text: 'か'
        },
        {
          text: 'ほ'
        },
        {
          text: 'む'
        },
        {
          text: 'さ'
        },
        {
          text: 'は'
        },
        {
          text: 'た'
        },
        {
          text: 'し'
        },
        {
          text: 'ふ'
        }
      ],
      dialog1: false,
      dialog2: false,
      dialog3: false
    }
  },
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    },
    clickButton (ans) {
      if (this.status === status.CHECKED_CORRECT) {
        return
      }
      if (this.status === status.CHECKED_INCORRECT) {
        this.answers = []
      }
      this.answers.push(ans)
    },
    showPrompt () {
      let showPrompt = confirm('這已經是最高級的提示了，確定不再努力看看嗎？')
      this.dialog3 = showPrompt
    }
  }
}
</script>
