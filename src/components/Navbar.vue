<template>
    <v-bottom-nav
      :active.sync="bottomNav"
      color="white"
      :value="true"
      fixed
      dark
      shift
    >
      <v-btn
        flat
        color="teal"
      >
        <span>任務</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>
      <v-btn
        flat
        color="teal"
      >
        <span>背包</span>
        <v-icon>work_outline</v-icon>
      </v-btn>
      <v-btn
        flat
        color="teal"
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
        case 0: return 'blue-grey'
        case 1: return '#43A047'
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
