<template>
<v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            @click="set"
          >
            I accept
          </v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <slot name = "title"></slot>
        <slot name = "img"></slot>
        <slot name = "describe"></slot>
      </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      require: false
    },
    img: {
      type: String,
      require: false
    }
  },
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
