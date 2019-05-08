<template>
  <div>
    <component :is="componentId" @Mission="judgeId = $event"></component>
  </div>
</template>

<script>
import Mission1 from '@/components/Mission1'
import Mission2 from '@/components/Mission2'
import Mission3 from '@/components/Mission3'
import Mission4 from '@/components/Mission4'
import Mission5 from '@/components/Mission5'
import Mission6 from '@/components/Mission6'

export default {
  data () {
    return {
      componentId: 'Mission1',
      judgeId: 1
    }
  },
  created () {
    if (!localStorage.Mission) {
      this.judgeId = localStorage.Mission
    }
  },
  components: {
    Mission1,
    Mission2,
    Mission3,
    Mission4,
    Mission5,
    Mission6
  },
  watch: {
    judgeId () {
      this.componentId = `Mission${this.judgeId}`
      localStorage.Mission = this.judgeId
    }
  }
}
</script>
