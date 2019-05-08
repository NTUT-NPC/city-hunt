<template>
  <div :class="{full: full, navbar: !full}">
    <v-layout align-center fill-height justify-center @click="!inputJudge && nextStory()">
      <component :is="component" @inputJudge="inputJudge = $event"></component>
    </v-layout>
    <Navbar v-if="showNavbar"></Navbar>
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
      full: true,
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
  created () {
    if (!localStorage.story) {
      this.story = localStorage.story
      this.component = `Mission1${this.story}`
    }
  },
  watch: {
    story () {
      let story = this.story
      let judge = [3, 5, 7].includes(this.story)

      if (judge === false) {
        this.full = true
      }

      if (story >= 9) {
        localStorage.story = 1
        this.$emit('Mission', '2')
      } else {
        localStorage.story = story
      }
    }
  },
  computed: {
    showNavbar () {
      return [3, 5, 7].includes(this.story)
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
