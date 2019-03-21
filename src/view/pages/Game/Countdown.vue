<template>
  <div>countdown
    <timer></timer>
  </div>
</template>

<script>
  import Timer from './Timer'

  export default {
    name: 'Countdown',
    components: {
      'timer': Timer
    }
  }
</script>

<style lang="scss" scoped>

</style>
