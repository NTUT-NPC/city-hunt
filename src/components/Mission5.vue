<template>
  <div :class="{full: full, navbar: !full}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar"></Navbar>
  </div>
</template>

<script>
import Mission51 from '@/components/Mission5/Mission5-1'
import Mission52 from '@/components/Mission5/Mission5-2'
import Mission53 from '@/components/Mission5/Mission5-3'
import Mission54 from '@/components/Mission5/Mission5-4'
import Mission55 from '@/components/Mission5/Mission5-5'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission51',
      story: 1,
      full: true,
      inputJudge: false
    }
  },
  components: {
    Mission51,
    Mission52,
    Mission53,
    Mission54,
    Mission55,
    Navbar
  },
  created () {
    this.story = localStorage.story
    this.component = `Mission5${this.story}`
  },
  watch: {
    story () {
      let story = this.story
      let judge = [2, 4].includes(this.story)

      if (judge === false) {
        this.full = true
      }

      if (story >= 6) {
        localStorage.story = 1
        this.$emit('Mission', '6')
      } else {
        localStorage.story = story
      }
    }
  },
  computed: {
    showNavbar () {
      return [2, 4].includes(this.story)
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission5${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission5')[1]
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
