<template>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      fixed
      dark
    >
      <v-btn
        flat
        color="white"
      >
        <span>任務</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>
      <v-btn
        flat
        color="white"
      >
        <span>背包</span>
        <v-icon>work_outline</v-icon>
      </v-btn>
      <v-btn
        flat
        color="white"
      >
        <span>回顧</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-nav>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 0
    }
  },
  computed: {
    color () {
      switch (this.bottomNav) {
        case 0: return '#c48b59'
        case 1: return '#916547'
        case 2: return '#c48b59'
        default: return 'transparent'
      }
    }
  },
  watch: {
    bottomNav () {
      this.$emit('nav', this.bottomNav)
    }
  }
}
</script>
