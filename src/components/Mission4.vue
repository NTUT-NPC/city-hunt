<template>
  <div style="height: calc(100vh - 56px)">
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
import Mission415 from '@/components/Mission4/Mission4-15'
import Mission416 from '@/components/Mission4/Mission4-16'
import Mission417 from '@/components/Mission4/Mission4-17'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission41',
      story: 1,
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
    Mission415,
    Mission416,
    Mission417,
    Navbar
  },
  watch: {
    // 待更改
    story () {
      let story = this.story
      if (story === 18) {
        this.$emit('Mission', '5')
      }
    }
  },
  computed: {
    showNavbar () {
      return [2, 4, 15].includes(this.story)
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission4${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission4')[1]
      return parseInt(component)
    },
    goBack () {
      this.story = this.getStory() - 1
      this.component = `Mission4${this.story}`

      if (this.story === 0 || this.story === 13) {
        this.story = 1
        this.component = `Mission41`
        alert('不能再返回囉！')
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
