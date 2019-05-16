<template>
  <v-layout class="py-4" column align-center justify-center fill-height ref="image">
    <h2 class="display-1 font-weight-bold">找到四家藥舖</h2>
    <v-dialog :value="locateDialog" @input="locateDialog = $event" width="300">
      <v-card :class="!currentTarget.completed ? 'pa-3' : ''">
        <v-layout column justify-center align-center>
          <template v-if="!currentTarget.completed">
            <h3 class="display-1 font-weight-bold" v-text="currentTarget.tag"></h3>
            <locate
              :key="`locate-${currentTarget.tag}`"
              :target="currentTarget.location"
              @locate="locate($event)"
            ></locate>
          </template>
          <template v-else>
            <img class="image" :src="currentTarget.img" @click="locateDialog = false">
          </template>
        </v-layout>
      </v-card>
    </v-dialog>
    <div class="ma-4">
      <v-layout row wrap>
        <v-flex
          v-for="(target, index) in targets"
          :key="index"
          xs6
          class="text-xs-center"
          style="height: fit-content;"
        >
          <v-btn
            round
            outline
            :color="target.completed ? 'green' : '#c49b58'"
            class="headline"
            @click="clickButton(target)"
          >{{ target.tag }}</v-btn>
          <v-card></v-card>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <v-dialog v-model="hintDialog1" width="300">
        <template v-slot:activator="{ on }">
          <v-btn color="#ffc18c" dark v-on="on" large round>初級提示</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline lighten-2" primary-title>初級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">地圖由北到南</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="hintDialog1 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="hintDialog2" width="300">
        <template v-slot:activator="{ on }">
          <v-btn color="#ffc18c" dark v-on="on" large round>中級提示</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline lighten-2" primary-title>中級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">注意羅馬數字後的數字</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="hintDialog2 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-btn color="#ffc18c" dark @click.stop="showPrompt" round large>高級提示</v-btn>

      <v-dialog v-model="hintDialog3" width="300">
        <v-card>
          <v-card-title class="headline lighten-2" primary-title>高級提示</v-card-title>

          <v-card-text>
            <h2 class="text-xs-center">數字就是格子的順序</h2>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="hintDialog3 = false">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-dialog :value="!locateDialog && completed" max-width="300" persistent>
      <v-card>
        <v-card-title primary-title class="headline">太好了！</v-card-title>
        <v-card-text>已找齊了四家藥舖！</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="NextView">下一步</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Locate from '@/components/Locate'
export default {
  created () {
    this.$emit('inputJudge', true)
  },
  computed: {
    completed () {
      for (let target of this.targets) {
        if (!target.completed) {
          return false
        }
      }
      return true
    }
  },
  components: {
    Locate
  },
  data () {
    return {
      currentTarget: {},
      targets: [
        {
          tag: 'ほ',
          location: {
            lat: 25.057297,
            lng: 121.509715
          },
          itemName: '沙參',
          img: require('@/assets/Mission3/herbs/沙參.jpg'),
          completed: false
        },
        {
          tag: 'む',
          location: {
            lat: 25.058729,
            lng: 121.509634
          },
          itemName: '薄荷',
          img: require('@/assets/Mission3/herbs/薄荷.jpg'),
          completed: false
        },
        {
          tag: 'し',
          location: {
            lat: 25.054674,
            lng: 121.510302
          },
          itemName: '生甘草',
          img: require('@/assets/Mission3/herbs/生甘草.jpg'),
          completed: false
        },
        {
          tag: 'ふ',
          location: {
            lat: 25.055746,
            lng: 121.509894
          },
          itemName: '炙百部',
          img: require('@/assets/Mission3/herbs/炙百部.jpg'),
          completed: false
        }
      ],
      hintDialog1: false,
      hintDialog2: false,
      hintDialog3: false,
      locateDialog: false
    }
  },
  methods: {
    NextView () {
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    },
    clickButton (target) {
      this.currentTarget = target
      this.locateDialog = true
    },
    showPrompt () {
      let showPrompt = confirm('這已經是最高級的提示了，確定不再努力看看嗎？')
      this.hintDialog3 = showPrompt
    },
    locate (isCorrect) {
      this.currentTarget.completed = isCorrect
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
