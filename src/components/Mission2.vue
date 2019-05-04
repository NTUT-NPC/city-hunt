<template>
  <div style="height: calc(100vh - 56px)">
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
  watch: {
    // 待更改
    story () {
      let story = this.story
      if (story === 8) {
        this.$emit('Mission', '3')
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
      console.log(this.story)
      this.component = `Mission2${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission2')[1]
      return parseInt(component)
    },
    goBack () {
      this.story = this.getStory() - 1
      this.component = `Mission2${this.story}`

      if (this.story === 0) {
        this.story = 1
        this.component = `Mission21`
        alert('已經是第一頁囉！')
      }
      history.pushState(null, null, document.URL)
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
