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
