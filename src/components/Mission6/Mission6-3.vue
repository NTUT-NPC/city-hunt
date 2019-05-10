<template>
    <v-layout fill-height align-center justify-center style="height: 100%" ref='image'>
        <h1>
            END
        </h1>
    </v-layout>
</template>

<script>
export default {
  created () {
    this.$emit('inputJudge', true)
  }
}
</script>
