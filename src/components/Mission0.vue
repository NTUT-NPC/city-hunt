<template>
  <div class="full">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
  </div>
</template>

<script>
import Mission01 from '@/components/Mission0/Mission0-1'
import Mission02 from '@/components/Mission0/Mission0-2'
import Mission03 from '@/components/Mission0/Mission0-3'

export default {
  data () {
    return {
      story: 1,
      inputJudge: false
    }
  },
  components: {
    Mission01,
    Mission02,
    Mission03
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
    component () {
      return `Mission0${this.story}`
    }
  },
  methods: {
    nextStory () {
      if (+this.story === 3) {
        localStorage.story = +1
        this.$emit('Mission', '1')
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

<style scoped>
.full {
  height: 100vh;
}
</style>
