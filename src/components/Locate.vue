<template>
  <v-layout column fill-height align-center justify-center>
    <div
      v-if="!isProcessing"
      :style="`border-radius: 50%; --icon-color: ${iconColor}`"
      class="ma-5 pulse"
      @click="locate"
    >
      <v-icon :color="iconColor" size="200">location_on</v-icon>
    </div>
    <v-progress-circular v-else class="ma-5" size="70" indeterminate color="primary"></v-progress-circular>
    <p class="message" v-text="message"></p>
    <p class="mx-5 text-xs-center" v-text="errMsg"></p>
  </v-layout>
</template>

<script>
import { getSelfLocation, getDistance } from '@/utils/location'
import colors from 'vuetify/es5/util/colors'

const STATUS = {
  'NEVER': 0,
  'PROCESSING': 1,
  'CHECKED_WRONG': 2,
  'CHECKED_CORRECT': 3,
  'ERROR': 4
}

export default {
  props: {
    target: Object,
    default: () => ({})
  },
  data () {
    return {
      status: STATUS.NEVER,
      errMsg: ''
    }
  },
  computed: {
    isProcessing () {
      return this.status === STATUS.PROCESSING
    },
    iconColor () {
      if ([STATUS.NEVER, STATUS.PROCESSING].includes(this.status)) {
        return colors.blue.base
      } else if (this.status === STATUS.CHECKED_CORRECT) {
        return colors.green.base
      } else {
        return colors.red.base
      }
    },
    message () {
      switch (this.status) {
        case STATUS.NEVER:
          return '按下大大的定位圖示來定位'
        case STATUS.PROCESSING:
          return '定位中...'
        case STATUS.CHECKED_WRONG:
          return '確定是這裡嗎？請再想想喔'
        case STATUS.CHECKED_CORRECT:
          return `你到了正確的地方，請點擊頁面！`
        default:
          return '請檢查 GPS 相關設定！'
      }
    }
  },
  methods: {
    async locate () {
      try {
        this.errMsg = ''
        this.status = STATUS.PROCESSING
        const locationA = await getSelfLocation()
        const locationB = this.target
        const distance = getDistance({ locationA, locationB })
        this.status = distance <= 50 ? STATUS.CHECKED_CORRECT : STATUS.CHECKED_WRONG
        this.$emit('locate', distance <= 50)
      } catch (err) {
        this.errMsg = err.message
        this.status = STATUS.ERROR
        this.$emit('locate', false)
      }
    }
  }
}
</script>

<style lang="scss">
.message {
  font-size: 6vmin;
  font-weight: 600;
  color: gray;
}

.pulse {
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: var(--icon-color);
    opacity: 0;
  }

  &:before {
    transform: scale(1);
    animation: pulse 3s infinite linear;
  }

  &:after {
    animation: pulse 3s 2s infinite linear;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 0.1;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>
