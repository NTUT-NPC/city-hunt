<template>
  <v-card
    class="title mx-auto my-4"
    max-width="400"
    min-width="300"
    height="200"
    style="background-color: white; padding: auto;"
  >
    <v-card-title>
      <v-layout justify-end>
        <div class="triangle"></div>
        <p class="absText">1</p>
      </v-layout>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <v-layout justify-center>
        <h2>調查蔡家兄弟</h2>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-layout align-center justify-center>
          <v-btn round color="orange" dark>詳細資訊</v-btn>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
  overflow: hidden;
}

.triangle {
  background-color: orange;
  height: 200px;
  width: 200px;
  transform: rotate(45deg);
  position: absolute;
  top: -140px;
  right: -140px;
}

.absText {
  z-index: 2;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
