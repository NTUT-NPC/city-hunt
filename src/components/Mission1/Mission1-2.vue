<template>
  <div>
    <v-img :src="require('@/assets/Mission1/1_2.png')" width="100%" max-width="600px"></v-img>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
