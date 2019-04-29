<template>
  <v-layout justify-space-around>
    <v-flex xs5 sm5 v-for="n in 2" :key="n">
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75">
          <v-container fill-height class="img">
            <v-layout justify-center align-center class="word-white">
              <h2 class="display-2">Test</h2>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
.img {
  background: black;
  opacity: 0.5;
}

.word-white {
  color: white;
  font-size: 16px;
}
</style>
