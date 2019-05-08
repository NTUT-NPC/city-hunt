<template>
  <div :class="{full: full, navbar: !full}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar"></Navbar>
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

import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission41',
      story: 1,
      full: true,
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
    Navbar
  },
  created () {
    this.story = localStorage.story
    this.component = `Mission4${this.story}`
  },
  watch: {
    story () {
      let story = this.story
      let judge = [2, 4].includes(parseInt(this.story))

      if (judge === false) {
        this.full = true
      }

      if (story >= 15) {
        localStorage.story = 1
        this.$emit('Mission', '5')
      } else {
        localStorage.story = story
      }
    }
  },
  computed: {
    showNavbar () {
      return [2, 4].includes(parseInt(this.story))
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission4${this.story}`
      console.log('yes i do' + this.story)
    },
    getStory () {
      let component = this.component
      component = component.split('Mission4')[1]
      return parseInt(component)
    },
    goBack () {
      alert('不能返回上一頁喔！')
    }
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }

    window.addEventListener('beforeunload', e => this.cache())

    window.onbeforeunload = function (event) {
      return '可能有數據沒有保存，確定要離開嗎？'
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
  height: calc(100vh - 56px);
}
</style>
