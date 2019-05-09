<template>
  <div class="full">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
  </div>
</template>

<script>
import Mission61 from '@/components/Mission6/Mission6-1'
import Mission62 from '@/components/Mission6/Mission6-2'
import Mission63 from '@/components/Mission6/Mission6-3'

export default {
  data () {
    return {
      component: 'Mission61',
      story: 1,
      inputJudge: false
    }
  },
  components: {
    Mission61,
    Mission62,
    Mission63
  },
  created () {
    this.story = localStorage.story
    this.component = `Mission6${this.story}`
  },
  watch: {
    story () {
      let story = this.story

      if (story >= 3) {
        this.inputJudge = true
      } else {
        localStorage.story = story
      }
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission6${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission6')[1]
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
</style>
