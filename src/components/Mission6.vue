<template>
  <div style="height: calc(100vh - 56px)">
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
  watch: {
    // 待更改
    story () {
      let story = this.story
      if (story === 4) {
        this.$emit('Mission', '7')
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
      this.story = this.getStory() - 1
      this.component = `Mission6${this.story}`

      if (this.story === 0) {
        this.story = 1
        this.component = `Mission61`
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
