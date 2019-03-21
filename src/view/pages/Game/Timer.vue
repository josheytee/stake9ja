<template>
  <div class="panel panel-info">
    <div>hr</div>
    <div>min</div>
    <div>sec</div>
  </div>
</template>

<script>
  export default {
    name: 'Timer',
    data: function () {
      return {
        hour: 6,
        minutes: 60,
        seconds: 60
      }
    },
    created: function () {
      setInterval(function () {
        console.log('hie')
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>

</style>
