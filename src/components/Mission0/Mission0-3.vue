<template>
    <v-layout column>
      <v-layout
      column
      justify-center
      align-center
      ref="image"
      class="video-container"
      >
        <div v-show="loading">
          <v-progress-circular
          style="z-index: 2"
          indeterminate
          color="primary"
          ></v-progress-circular>
        </div>
        <iframe @load="loadingJudge" src="https://www.youtube.com/embed/a1GqoKNiAzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </v-layout>
      <v-btn
      style="max-width: 300px;"
      class="mx-auto mt-5"
      large
      @click="inputJudge"
      >
        進入第一章
      </v-btn>
    </v-layout>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    inputJudge () {
      if (confirm('確定要開始了嗎？')) {
        this.$emit('inputJudge', false)
        this.$refs.image.click()
      }
    },
    loadingJudge () {
      this.loading = false
      console.log('yes i do')
    }
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
