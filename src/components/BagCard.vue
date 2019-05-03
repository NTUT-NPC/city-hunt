<template>
    <div>
      <ul>
        <li v-for="(item,index) in items" :key = index>
          <v-dialog
            v-model="item.show"
            width="500"
            >
            <template v-slot:activator="{ on }">
              <div class="center">
              <img src="@/assets/logo.png"
                width="100px"
                class = "bag_items_img"
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
                  <div slot = "img">
                    <img src="@/assets/logo.png" alt="">
                  </div>
                  <div slot = "describe" class="item_describe">
                    <p>{{item.describe}}</p>
                  </div>
            </ItemDailog>
          </v-dialog>
        </li>
      </ul>
    </div>
</template>

<style>
*{
  font-family: "微軟正黑體"
}
.bag_items_img{
  border-bottom: 3px solid rgba(1,1,1,0.3);
}
.bag_item_name{
  font-size: 1.3rem;
}
.item_title{
  font-size: 2rem;
}
.item_describe{
  font-size: 1.3rem;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  padding: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
li {
  margin-bottom: 30px;
  flex: 1;
  max-width: 150px;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
    }
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      items: [
        { name: '劍', describe: 'this is 123 describe', img: '@/assets/logo.png', show: false },
        { name: '雙刃', describe: 'this is 雙刃 long long long long long long long long long long long long long long describe', img: '@/assets/logo.png', show: false },
        { name: '匕首', describe: 'this is 匕首 describe', img: '@/assets/logo.png', show: false },
        { name: '弓箭', describe: 'this is 弓箭 describe', img: '@/assets/logo.png', show: false },
        { name: '盾牌', describe: 'this is 盾牌 describe', img: '@/assets/logo.png', show: false },
        { name: '法杖', describe: 'this is 法杖 describe', img: '@/assets/logo.png', show: false }
      ]
    }
  }
}
</script>
