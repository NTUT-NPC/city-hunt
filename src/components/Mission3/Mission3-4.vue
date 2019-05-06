<template>
    <div class="pa-4" style="height: calc(100vh - 56px)">
        <v-layout column justify-center fill-height>
            <h1 class="text-xs-center">找到五家藥鋪</h1>
            <div class="mt-5 text-xs-center">
                <h2 class="mb-2">
                    已找到店家 {{ store }} / 5
                </h2>
                <v-btn
                    color="brown lighten-2"
                    dark
                    v-on="on"
                    large
                    round
                >
                定位
                </v-btn>
            </div>
            <div class="mt-5 text-xs-center">
                <div class="mb-3">
                    <div class="text-xs-center">
                        <v-dialog
                        v-model="dialog"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                            large
                            round
                            >
                            初級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            初級提示
                            </v-card-title>

                            <v-card-text>
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>
                </div>
                <div class="mb-3">
                    <v-dialog
                        v-model="dialog"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                            large
                            round
                            >
                            中級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            中級提示
                            </v-card-title>

                            <v-card-text>
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                </div>
                <div>
                    <v-dialog
                        v-model="dialog"
                        width="300"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn
                            color="red lighten-2"
                            dark
                            v-on="on"
                            round
                            large
                            >
                            高級提示
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title
                            class="headline lighten-2"
                            primary-title
                            >
                            高級提示
                            </v-card-title>

                            <v-card-text>
                            待新增 img
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="primary"
                                flat
                                @click="dialog = false"
                            >
                                back
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                </div>
            </div>
            <!-- 等待更改 -->
            <div v-show="false" v-for="position in positions" :key="position.index">
                <div>傳入值</div>
            </div>
        </v-layout>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      input: '',
      store: 0,
      positions: []
    }
  },
  created () {
    this.$emit('inputJudge', true)
  }
}
</script>

<style scoped>
.textRed {
  color: red;
}

.textBlack {
  color: black;
}
</style>
