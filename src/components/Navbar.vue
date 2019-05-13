<template>
    <v-bottom-nav
      :active.sync="bottomNav"
      color="transparent"
      :value="true"
      fixed
    >
      <v-btn
        flat
        color="teal"
        value="1"
      >
        <span>任務</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <v-btn
        flat
        color="teal"
        value="2"
      >
        <span>背包</span>
        <v-icon>work_outline</v-icon>
      </v-btn>
      <v-btn
        flat
        color="teal"
        value="3"
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
  watch: {
    bottomNav () {
      this.$emit('nav', this.bottomNav)
    }
  }
}
</script>
