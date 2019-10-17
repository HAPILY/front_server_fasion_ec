import CONST from '@/const'

export default {
  data() {
    return {
      mediaType: CONST.Media.type.none
    }
  },
  computed: {
    media() {
      return function(list) {
        if (this.mediaType === CONST.Media.type.none) return false
        return list.indexOf(this.mediaType) !== -1
      }
    }
  },
  mounted() {
    this.mediaType = this.getCurrentMediaType()
    window.addEventListener("resize", this.onResizeWindow)
    this.update()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResizeWindow)
  },
  methods: {
    getWindowWidth() {
      return window.innerWidth || 0
    },
    getCurrentMediaType() {
      let type
      if (this.getWindowWidth() >= CONST.Media.breakpoint.xl.min) {
        type = CONST.Media.type.xl
      } else if (this.getWindowWidth() >= CONST.Media.breakpoint.lg.min) {
        type = CONST.Media.type.lg
      } else if (this.getWindowWidth() >= CONST.Media.breakpoint.md.min) {
        type = CONST.Media.type.md
      } else {
        type = CONST.Media.type.sm
      }
      return type
    },
    onResizeWindow () {
      this.update()
    },
    update() {
      this.mediaType = this.getCurrentMediaType()
    }
  }
}
