<template>
  <div class="panel">
    <span id="timer">Play now Game closes in... </span>

    <div class="row">
      <div class="col col-md-6 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/18000.png" alt="">
        </div>
        <div class="stake-buttons grid grid-3">
          <a href="#" class="btn btn-stake">PLAY NOW</a>
          <a href="#" class="btn btn-stake">STAKE WITH N200</a>
          <a href="#" class="btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-6 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/45000.png" alt="">
        </div>
        <div class="stake-buttons grid grid-3">
          <a href="#" class="btn btn-stake">PLAY NOW</a>
          <a href="#" class="btn btn-stake">STAKE WITH N500</a>
          <a href="#" class="btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-6 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/90000.png" alt="">
        </div>
        <div class="stake-buttons grid grid-3">
          <a href="#" class="btn btn-stake">PLAY NOW</a>
          <a href="#" class="btn btn-stake">STAKE WITH N1000</a>
          <a href="#" class="btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-6 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/180000.png" alt="">
        </div>
        <div class="stake-buttons grid grid-3">
          <a href="#" class="btn btn-stake">PLAY NOW</a>
          <a href="#" class="btn btn-stake">STAKE WITH N2000</a>
          <a href="#" class="btn btn-stake">SHARE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stake'
  }
</script>

<style lang="scss" scoped>
  #timer {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  }
</style>
