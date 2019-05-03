<template>
  <div class="text-xs-center">
    <div>
      <ul>
        <li v-for="(item,index) in items" :key = index>
          {{item.name}}
          <v-dialog
            v-model="dialog"
            width="500"
            >
            <template v-slot:activator="{ on }">
              <v-btn
                color="red lighten-2"
                dark
                v-on="on"
              >
                Click Me
              </v-btn>
            </template>
            <ItemDailog :value=item.show @childMethod="closeComponent">
              <div class = "item_beautify">
                <div slot="title">
                </div>
                <div slot = "img"></div>
                <div slot = "describe"></div>
              </div>
            </ItemDailog>
          </v-dialog>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ItemDailog from '@/components/ItemDailog.vue'
export default {
  components: {
    ItemDailog
  },
  methods: {
    closeComponent () {
      this.dialog = false
    }
  },
  data () {
    return {
      dialog: false,
      items: [
        { name: '123', describe: 'this is 123 describe', show: false },
        { name: '223', describe: 'this is 223 describe', show: false }
      ]
    }
  }
}
</script>
