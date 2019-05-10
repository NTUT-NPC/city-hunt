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
      story: 1,
      inputJudge: false
    }
  },
  computed: {
    component () {
      return `Mission6${this.story}`
    }
  },
  components: {
    Mission61,
    Mission62,
    Mission63
  },
  methods: {
    nextStory () {
      if (+this.story === 5) {
        localStorage.story = +1
        this.$emit('Mission', '7')
      } else {
        this.story = +this.story + 1
        localStorage.story = +this.story
      }
    }
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
