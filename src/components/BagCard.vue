<template>
  <div class="bag_container">
    <ul>
      <li v-for="(item,index) in filterItems" :key="index">
        <v-dialog v-model="item.show" width="500">
          <template v-slot:activator="{ on }">
            <div class="center">
              <img :src="item.img" v-on="on">
              <div class="bag_item_name">{{item.name}}</div>
            </div>
          </template>
          <ItemDailog :value="item.show" @childMethod="closeComponent(item)">
            <div slot="title" class="item_title">
              <p>{{item.name}}</p>
            </div>
            <div slot="img">
              <img :src="item.img">
            </div>
          </ItemDailog>
        </v-dialog>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  font-family: "微軟正黑體";
}

.bag_item_name {
  font-size: 1rem;
}
.item_title {
  font-size: 1.5rem;
}
.item_describe {
  font-size: 1.3rem;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100%;
}
ul {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  margin-bottom: 45px;
  max-width: 120px;
  min-width: 80px;
  max-height: 240px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
}
p {
  margin: 5px;
  padding: 0 !important;
}
</style>

<script>
import ItemDailog from '@/components/ItemDailog.vue'
export default {
  components: {
    ItemDailog
  },
  methods: {
    closeComponent (item) {
      item.show = false
    },
    imagePath (img) {
      return require(img)
    }
  },
  data () {
    return {
      items: [
        { name: '信封', img: require('@/assets/item/ch2_信封_線索1.png'), Mission: 5 },
        { name: '信', img: require('@/assets/item/ch2_信_線索2.jpg'), Mission: 5 },
        { name: '地址號碼解說', img: require('@/assets/item/ch2_地址號碼解說_線索3.jpg'), Mission: 5 },
        { name: '線索 - 1', img: require('@/assets/item/ch3-1_線索(一)_線索1.jpg'), Mission: 6 },
        { name: '線索 - 2', img: require('@/assets/item/ch3-1_線索(二)_線索2.png'), Mission: 6 },
        { name: '地圖', img: require('@/assets/item/ch3-2_地圖_線索1.jpg'), Mission: 6 },
        { name: '陳先生給的照片', img: require('@/assets/item/ch4_陳先生給的照片_線索1.jpg'), Mission: 11 },
        { name: '文達給永佳的信', img: require('@/assets/item/ch4 文達給永嘉的信.jpg'), Mission: 9 },
        { name: '永嘉自白信', img: require('@/assets/item/ch4 永嘉自白信.jpg'), Mission: 9 },
        { name: '商人陳文達與張永嘉合照', img: require('@/assets/item/ch4 商人ab合照.jpg'), Mission: 9 }
      ]
    }
  },
  computed: {
    filterItems () {
      const vm = this
      return this.items.filter(function (item) {
        return item.Mission <= vm.$store.state.reviewCount
      })
    }
  }
}
</script>
