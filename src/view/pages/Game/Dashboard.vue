<template>
  <div class="panel">
    dashboard
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="purple"/>
      <circle cx="50" cy="50" r="30" fill="balck"/>
      <circle cx="55" cy="55" r="18" fill="white"/>
      <text x="45" y="60" fill="red">20</text>
      <circle cx="35" cy="35" r="25" style="fill:white;fill-opacity:0.1;"/>
    </svg>
    <svg width="50" height="50">
      <circle cx="25" cy="25" r="20" fill="purple"/>
      <circle cx="25" cy="25" r="15" fill="balck"/>
      <circle cx="27" cy="27" r="9" fill="white"/>
      <text x="22" y="35" fill="red">20</text>
      <circle cx="17" cy="17" r="12" style="fill:white;fill-opacity:0.1;"/>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data: function () {
      return {
        message: 'Our king is dead! Send help!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
