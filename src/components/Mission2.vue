<template>
  <div :class="{full: full, navbar: !full}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar"></Navbar>
  </div>
</template>

<script>
import Mission21 from '@/components/Mission2/Mission2-1'
import Mission22 from '@/components/Mission2/Mission2-2'
import Mission23 from '@/components/Mission2/Mission2-3'
import Mission24 from '@/components/Mission2/Mission2-4'
import Mission25 from '@/components/Mission2/Mission2-5'
import Mission26 from '@/components/Mission2/Mission2-6'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission21',
      story: 1,
      full: true,
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
    Navbar
  },
  created () {
    this.story = localStorage.story
    this.component = `Mission2${this.story}`
  },
  watch: {
    story () {
      let story = this.story
      let judge = [3, 5].includes(this.story)

      if (judge === false) {
        this.full = true
      }

      if (story >= 7) {
        localStorage.story = 1
        this.$emit('Mission', '3')
      } else {
        localStorage.story = story
      }
    }
  },
  computed: {
    showNavbar () {
      return [3, 5].includes(this.story)
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission2${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission2')[1]
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
