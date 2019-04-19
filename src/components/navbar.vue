<template>
    <v-card height="100%">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark>
        <span>任務</span>
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <v-btn dark>
        <span>回顧</span>
        <v-icon>access_time</v-icon>
      </v-btn>

      <v-btn dark>
        <span>背包</span>
        <v-icon>work_outline</v-icon>
      </v-btn>

      <v-btn dark>
        <span>角色</span>
        <v-icon>people</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            bottomNav: 3,
        }
    },
    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return '#43A047'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      }
    }
}
</script>