<template>
  <v-card>
    <div class="item">
      <v-card-actions class="item_top">
        <slot name = "title"></slot>
        <v-btn
          @click="set"
          flat icon color="indigo"
        >
        x
        </v-btn>
      </v-card-actions>
      <div>
        <slot name = "img"></slot>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.item_top {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;
}
.item {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.v-btn {
  position: absolute;
  right: -5px;
  top: -5px;
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
