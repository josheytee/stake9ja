<template>
  <div class="slider-item staker">
    <img src="/static/images/logo.png" class="stake-logo" alt="">
    <img :src="'/static/images/'+image+'.png'" class="stake-point" alt="">
    <div class="stake-buttons row">
      <a href="#" class="col btn btn-stake">PLAY NOW</a>
      <a href="#" class="col btn btn-stake">STAKE WITH N{{amount}}</a>
      <a href="#" class="col btn btn-stake">SHARE</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SliderCard',
    props: ['image', 'amount']
  }
</script>
<style lang="scss" scoped>
  .staker {
    background: url(/static/images/Game-background.png) no-repeat center;
    width: 260px;
    margin: 2px;
    .stake-logo {
      width: 125px;
      margin-left: 65px;
    }
    .stake-point {
      width: 250px;
    }
    .stake-buttons {
      width: 240px;
      margin-left: 4px;
    }
  }
</style>
