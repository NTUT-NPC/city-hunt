<template>
  <div :class="{full: !showNavbar, navbar: showNavbar}">
    <v-layout align-center justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar" @nav="nav = $event"></Navbar>
  </div>
</template>

<script>
import Mission51 from '@/components/Mission5/Mission5-1'
import Mission52 from '@/components/Mission5/Mission5-2'
import Mission53 from '@/components/Mission5/Mission5-3'
import Mission54 from '@/components/Mission5/Mission5-4'
import Mission55 from '@/components/Mission5/Mission5-5'
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
    Mission51,
    Mission52,
    Mission53,
    Mission54,
    Mission55,
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
      return [2, 4].includes(+this.story)
    },
    component () {
      if (this.nav === 0) {
        return `Mission5${this.story}`
      } else {
        return 'BagCard'
      }
    }
  },
  methods: {
    nextStory () {
      if (+this.story === 5) {
        localStorage.story = +1
        this.$emit('Mission', '6')
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
