<template>
    <div style="width: 100%" ref="image">
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <template v-slot:activator="{ on }">
            <v-img
            class="mx-auto"
            :src="require('@/assets/Mission3/3_3.png')"
            width="100%"
            max-width="600px"
            color="red lighten-2"
            dark
            v-on="on"
            ></v-img>
        </template>

        <v-card>
            <v-card-title
            class="headline lighten-2"
            primary-title
            >
            <h2 class="mx-auto">獲得道具</h2>
            </v-card-title>

            <v-card-text>
                <h2 class="text-xs-center">
                    線索 * 3
                </h2>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                round
                @click="NextComponent"
            >
                我知道了
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  created () {
    this.$emit('inputJudge', true)
  },
  methods: {
    NextComponent () {
      this.dialog = false
      this.$emit('inputJudge', false)
      this.$refs.image.click()
    }
  }
}
</script>
