<template>
  <div :class="{full: !showNavbar, navbar: showNavbar}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar" @nav="nav = $event"></Navbar>
  </div>
</template>

<script>
import Mission11 from '@/components/Mission1/Mission1-1'
import Mission12 from '@/components/Mission1/Mission1-2'
import Mission13 from '@/components/Mission1/Mission1-3'
import Mission14 from '@/components/Mission1/Mission1-4'
import Mission15 from '@/components/Mission1/Mission1-5'
import Mission16 from '@/components/Mission1/Mission1-6'
import Mission17 from '@/components/Mission1/Mission1-7'
import Mission18 from '@/components/Mission1/Mission1-8'
import BagCard from '@/components/BagCard'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      story: 1,
      nav: 0,
      inputJudge: false
    }
  },
  components: {
    Mission11,
    Mission12,
    Mission13,
    Mission14,
    Mission15,
    Mission16,
    Mission17,
    Mission18,
    BagCard,
    Navbar
  },
  mounted () {
    this.story = localStorage.story || 1

    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }

    window.addEventListener('beforeunload', e => this.cache())

    window.onbeforeunload = function (event) {
      return '可能有數據沒有保存，確定要離開嗎？'
    }
  },
  computed: {
    showNavbar () {
      return [3, 5, 7].includes(this.story)
    },
    component () {
      if (this.nav === 0) {
        return `Mission1${this.story}`
      } else {
        return 'BagCard'
      }
    }
  },
  methods: {
    nextStory () {
      if (+this.story === 8) {
        localStorage.story = +1
        this.$emit('Mission', '2')
      } else {
        this.story = +this.story + 1
        localStorage.story = +this.story
      }
    },
    goBack () {
      alert('不能返回上一頁喔！')
    }
  },
  destroyed () {
    window.removeEventListener('popstate', this.goBack, false)
  }
}
</script>

<style>
.full {
  height: 100vh;
}

.navbar {
  margin-bottom: 60px;
}
</style>
