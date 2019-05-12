<template>
  <div :class="{full: !showNavbar, navbar: showNavbar}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar" @nav="nav = $event"></Navbar>
  </div>
</template>

<script>
import Mission41 from '@/components/Mission4/Mission4-1'
import Mission42 from '@/components/Mission4/Mission4-2'
import Mission43 from '@/components/Mission4/Mission4-3'
import Mission44 from '@/components/Mission4/Mission4-4'
import Mission45 from '@/components/Mission4/Mission4-5'
import Mission46 from '@/components/Mission4/Mission4-6'
import Mission47 from '@/components/Mission4/Mission4-7'
import Mission48 from '@/components/Mission4/Mission4-8'
import Mission49 from '@/components/Mission4/Mission4-9'
import Mission410 from '@/components/Mission4/Mission4-10'
import Mission411 from '@/components/Mission4/Mission4-11'
import Mission412 from '@/components/Mission4/Mission4-12'
import Mission413 from '@/components/Mission4/Mission4-13'
import Mission414 from '@/components/Mission4/Mission4-14'
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
    Mission41,
    Mission42,
    Mission43,
    Mission44,
    Mission45,
    Mission46,
    Mission47,
    Mission48,
    Mission49,
    Mission410,
    Mission411,
    Mission412,
    Mission413,
    Mission414,
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
      return [2, 4, 13].includes(parseInt(this.story))
    },
    component () {
      if (this.nav === 0) {
        return `Mission4${this.story}`
      } else {
        return 'BagCard'
      }
    }
  },
  methods: {
    nextStory () {
      if (this.story === 14) {
        localStorage.story = +1
        this.$emit('Mission', '5')
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
