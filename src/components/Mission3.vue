<template>
  <div :class="{full: !showNavbar, navbar: showNavbar}">
    <TimeLine v-if="showNavbar"></TimeLine>
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar" @nav="nav = $event"></Navbar>
  </div>
</template>

<script>
import Mission31 from '@/components/Mission3/Mission3-1'
import Mission32 from '@/components/Mission3/Mission3-2'
import Mission33 from '@/components/Mission3/Mission3-3'
import Mission34 from '@/components/Mission3/Mission3-4'
import Mission35 from '@/components/Mission3/Mission3-5'
import Mission36 from '@/components/Mission3/Mission3-6'
import BagCard from '@/components/BagCard'
import Navbar from '@/components/Navbar'
import TimeLine from '@/components/TimeLine'

export default {
  data () {
    return {
      story: 1,
      nav: 0,
      inputJudge: false
    }
  },
  components: {
    Mission31,
    Mission32,
    Mission33,
    Mission34,
    Mission35,
    Mission36,
    BagCard,
    Navbar,
    TimeLine
  },
  mounted () {
    this.story = +localStorage.story || 1

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
      return [2, 4, 5].includes(+this.story)
    },
    component () {
      if (this.nav === 0) {
        return `Mission3${this.story}`
      } else {
        return 'BagCard'
      }
    }
  },
  methods: {
    nextStory () {
      if (+this.story === 5) {
        localStorage.story = +1
        this.$emit('Mission', '4')
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
