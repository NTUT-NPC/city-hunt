<template>
  <v-card>
    <div class="item">
      <div class="item_top">
        <slot name = "title" class="item_title"></slot>
        <v-card-actions class="item_close">
          <v-btn
            @click="set"
          >
            X
          </v-btn>
        </v-card-actions>
      </div>
      <div class="img_size">
        <slot name = "img"></slot>
      </div>
      <v-divider></v-divider>
      <div class = "bottom">
        <slot name = "describe" class="item_describe"></slot>
        </div>
    </div>
  </v-card>
</template>

<style>
.img_size {
  width: 100%;
}
.item_top{
  width: 100%;
  display: flex;
}
.bottom{
  border: 1px solid rgba(53, 73, 94,0.3);
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item_title{
  flex: 2;
}
.item_close {
  flex : 1;
  justify-content: flex-end;
}
.item {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  methods: {
    set () {
      this.$emit('childMethod')
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
