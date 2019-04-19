<template>
  <v-app>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">詳細資訊</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline lighten-2">
          <v-layout justify-center>
            <h2 class="my-3">調查蔡家兄弟</h2>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <v-container text-xs-center>
            <p>蔡氏兄弟時常出現在碼頭，詢問他們是否有更多線索吧！</p>
            <img src="https://i.imgur.com/aNFzbsL.png">
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">額外提示</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
