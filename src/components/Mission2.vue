<template>
  <div :class="{full: !showNavbar, navbar: showNavbar}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar" @nav="nav = $event"></Navbar>
  </div>
</template>

<script>
import Mission21 from '@/components/Mission2/Mission2-1'
import Mission22 from '@/components/Mission2/Mission2-2'
import Mission23 from '@/components/Mission2/Mission2-3'
import Mission24 from '@/components/Mission2/Mission2-4'
import Mission25 from '@/components/Mission2/Mission2-5'
import Mission26 from '@/components/Mission2/Mission2-6'
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
    Mission21,
    Mission22,
    Mission23,
    Mission24,
    Mission25,
    Mission26,
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
      return [3, 5].includes(this.story)
    },
    component () {
      if (this.nav === 0) {
        return `Mission2${this.story}`
      } else {
        return 'BagCard'
      }
    }
  },
  methods: {
    nextStory () {
      if (+this.story === 6) {
        localStorage.story = +1
        this.$emit('Mission', '3')
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
