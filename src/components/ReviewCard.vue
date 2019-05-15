<template>
  <v-dialog v-model="dialog" width="300">
    <template v-slot:activator="{ on }">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex
            v-for="(obj, index) in availableList"
            xs4
            :key="index"
            v-on="on"
            @click="currentIndex = index"
          >
            <v-card dark color="#d59c6a" height="130">
              <v-layout fill-height justify-center align-center>
                <div class="display-1">{{ obj.tag }}</div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <v-card>
      <img class="image d-block" :src="availableList[currentIndex].img">
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    availableList () {
      return this.reviewList.filter((_, index) => {
        return this.currentProgress > index
      })
    },
    currentProgress () {
      return this.$store.state.reviewCount
    }
  },
  data () {
    return {
      currentIndex: 0,
      dialog: false,
      reviewList: [
        {
          tag: '1-1',
          img: require('@/assets/review/1-1.jpg')
        },
        {
          tag: '1-2',
          img: require('@/assets/review/1-2.jpg')
        },
        {
          tag: '1-3',
          img: require('@/assets/review/1-3.jpg')
        },
        {
          tag: '2-1',
          img: require('@/assets/review/2-1.jpg')
        },
        {
          tag: '2-2',
          img: require('@/assets/review/2-2.jpg')
        },
        {
          tag: '3-1-1',
          img: require('@/assets/review/3-1-1.jpg')
        },
        {
          tag: '3-1-2',
          img: require('@/assets/review/3-1-2.jpg')
        },
        {
          tag: '4-1',
          img: require('@/assets/review/4-1.jpg')
        },
        {
          tag: '4-2',
          img: require('@/assets/review/4-2.jpg')
        },
        {
          tag: '4-3-1',
          img: require('@/assets/review/4-3-1.jpg')
        },
        {
          tag: '4-3-2',
          img: require('@/assets/review/4-3-2.jpg')
        },
        {
          tag: '4-3-3',
          img: require('@/assets/review/4-3-3.jpg')
        },
        {
          tag: '5-1',
          img: require('@/assets/review/5-1.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: auto;
}
</style>
