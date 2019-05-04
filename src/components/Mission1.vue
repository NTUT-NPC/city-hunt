<template>
  <div style="height: calc(100vh - 56px)">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="inputJudge"></Navbar>
  </div>
</template>

<script>
import Mission11 from '@/components/Mission1/Mission1-1'
import Mission12 from '@/components/Mission1/Mission1-2'
import Mission13 from '@/components/Mission1/Mission1-3'
import Mission14 from '@/components/Mission1/Mission1-4'
import Mission15 from '@/components/Mission1/Mission1-5'
import Mission16 from '@/components/Mission1/Mission1-6'
import Mission17 from '@/components/Mission1/Mission1-7'
import Mission18 from '@/components/Mission1/Mission1-8'
import Navbar from '@/components/Navbar'

export default {
  data () {
    return {
      component: 'Mission11',
      story: 1,
      inputJudge: false
    }
  },
  components: {
    Mission11,
    Mission12,
    Mission13,
    Mission14,
    Mission15,
    Mission16,
    Mission17,
    Mission18,
    Navbar
  },
  watch: {
    // 待更改
    story () {
      let story = this.story
      if (story === 9) {
        this.$emit('Mission', '2')
      }
    }
  },
  computed: {
    showNavbar () {
      return [3, 5, 7].includes(this.story - 1)
    }
  },
  methods: {
    nextStory () {
      this.story = this.getStory() + 1
      this.component = `Mission1${this.story}`
    },
    getStory () {
      let component = this.component
      component = component.split('Mission1')[1]
      return parseInt(component)
    },
    goBack () {
      this.story = this.getStory() - 1
      this.component = `Mission1${this.story}`

      if (this.story === 0) {
        this.story = 1
        this.component = `Mission11`
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
