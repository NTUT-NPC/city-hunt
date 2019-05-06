<template>
  <div style="height: calc(100vh - 56px)">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar"></Navbar>
  </div>
</template>

<script>
import Mission31 from '@/components/Mission3/Mission3-1'
import Mission32 from '@/components/Mission3/Mission3-2'
import Mission33 from '@/components/Mission3/Mission3-3'
import Mission34 from '@/components/Mission3/Mission3-4'
import Mission35 from '@/components/Mission3/Mission3-5'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission31',
      story: 1,
      inputJudge: false
    }
  },
  components: {
    Mission31,
    Mission32,
    Mission33,
    Mission34,
    Mission35,
    Navbar
  },
  watch: {
    // 待更改
    story () {
      let story = this.story
      if (story === 6) {
        this.$emit('Mission', '2')
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
      this.component = `Mission3${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission3')[1]
      return parseInt(component)
    },
    goBack () {
      this.story = this.getStory() - 1
      this.component = `Mission3${this.story}`

      if (this.story === 0) {
        this.story = 1
        this.component = `Mission31`
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
