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
  font-size: 1.3rem;
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
  max-height: 200px;
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
        { name: '信封', img: require('@/assets/item/ch2線索1_信封.png'), Mission: 1, Story: 1 },
        { name: '信', img: require('@/assets/item/ch2線索2_信.png'), Mission: 2, Story: 1 },
        { name: '地址號碼解說', img: require('@/assets/item/ch2線索3_地址號碼解說.jpg'), Mission: 2, Story: 1 },
        { name: '第一部分線索1', img: require('@/assets/item/ch3第一部分線索1.png'), Mission: 2, Story: 1 },
        { name: '第二部分地圖', img: require('@/assets/item/ch3第二部分地圖.png'), Mission: 2, Story: 3 },
        { name: '線索1', img: require('@/assets/item/ch4第一部份-線索1.jpg'), Mission: 3, Story: 2 },
        { name: '線索2', img: require('@/assets/item/ch4第一部份_線索2.jpg'), Mission: 3, Story: 2 },
        { name: '水門照', img: require('@/assets/item/ch4第二部分線索-水門照.jpg'), Mission: 3, Story: 2 },
        { name: '信壓', img: require('@/assets/item/信壓-01.png'), Mission: 3, Story: 2 },
        { name: '信封', img: require('@/assets/item/信封.png'), Mission: 3, Story: 2 }
      ]
    }
  },
  computed: {
    filterItems () {
      return this.items.filter(function (item) {
        return item.Mission <= localStorage.Mission
      })
    }
  }
}
</script>
