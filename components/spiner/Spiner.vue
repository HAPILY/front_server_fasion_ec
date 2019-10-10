<template>
  <a-spin
    class="spiner"
    tip="Loading..."
  />
</template>

<script>
export default {
  name: 'Spiner'
}
</script>

<style lang="scss" scoped>
.spiner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  margin: auto;
}
</style>