<template>
    <div class="bag_container">
      <ul>
        <li v-for="(item,index) in items" :key = index>
          <v-dialog
            v-model="item.show"
            width="500"
            >
            <template v-slot:activator="{ on }">
              <div class="center">
              <img :src=item.img
                v-on="on" >
              <div class="bag_item_name">
                {{item.name}}
              </div>
              </div>
            </template>
            <ItemDailog :value=item.show @childMethod="closeComponent(item)">
                  <div slot="title" class="item_title">
                    <p>{{item.name}}</p>
                  </div>
                  <div slot="img">
                    <img :src= item.img>
                  </div>
            </ItemDailog>
          </v-dialog>
        </li>
      </ul>
    </div>
</template>

<style>
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
        { name: '線索1-信封', img: require('@/assets/item/ch2線索1_信封.png'), show: false },
        { name: '線索2-信', img: require('@/assets/item/ch2線索2_信.png'), show: false },
        { name: '地址號碼解說', img: require('@/assets/item/ch2線索3_地址號碼解說.jpg'), show: false },
        { name: '第一部分線索1', img: require('@/assets/item/ch3第一部分線索1.png'), show: false },
        { name: '第二部分地圖', img: require('@/assets/item/ch3第二部分地圖.png'), show: false },
        // { name: '文達給永嘉的信', img: require('@/assets/item/ch4 盒內的 文達給永嘉的信.jpg'), show: false },
        // { name: '盒內的商人ab合照', img: require('@/assets/item/ch4 盒內的商人ab合照.png'), show: false },
        // { name: '盒內的永嘉自白信', img: require('@/assets/item/ch4 盒內的永嘉自白信.jpg'), show: false },
        // { name: '盒子開', img: require('@/assets/item/ch4盒子開.PNG'), show: false },
        // { name: '盒子關', img: require('@/assets/item/ch4盒子關.PNG'), show: false },
        { name: 'ch4第一部份-線索1', img: require('@/assets/item/ch4第一部份-線索1.jpg'), show: false },
        { name: 'ch4第一部份_線索2', img: require('@/assets/item/ch4第一部份_線索2.jpg'), show: false },
        { name: 'ch4第二部分線索-水門照', img: require('@/assets/item/ch4第二部分線索-水門照.jpg'), show: false },
        // { name: 'ch5八卦謎題-法器', img: require('@/assets/item/ch5八卦謎題-法器.png'), show: false },
        // { name: 'ch5八卦謎題線索-旅人筆記', img: require('@/assets/item/ch5八卦謎題線索-旅人筆記.png'), show: false },
        { name: '信壓-01.png', img: require('@/assets/item/信壓-01.png'), show: false },
        { name: '信封.png', img: require('@/assets/item/信封.png'), show: false },
        { name: '實體道具MAP1', img: require('@/assets/item/實體道具MAP1.png'), show: false },
        { name: '實體道具七星山由來', img: require('@/assets/item/實體道具七星山由來.png'), show: false },
        { name: '實體道具勺勺', img: require('@/assets/item/實體道具勺勺.jpg'), show: false },
        { name: '實體道具吃的跟勺', img: require('@/assets/item/實體道具吃的跟勺.png'), show: false }

      ]
    }
  }
}
</script>
