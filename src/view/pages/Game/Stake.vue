<template>
  <div class="container">
    <span id="timer">Play now Game closes in... </span>
    <div class="row">
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/18000.png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N200</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/45000.png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N500</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/90000.png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N1000</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/180000.png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N2000</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/450000.png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N3000</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
        </div>
      </div>
      <div class="col col-md-5 stake">
        <div class="stake-logo">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="stake-point">
          <img src="/static/images/900000..png" alt="">
        </div>
        <div class="stake-buttons row">
          <a href="#" class="col btn btn-stake">PLAY NOW</a>
          <a href="#" class="col btn btn-stake">STAKE WITH N5000</a>
          <a href="#" class="col btn btn-stake">SHARE</a>
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
  .stake {
    display: flex;
    flex-direction: column;
    margin: 5px;
    background-size: contain;
    background: url(/static/images/Game-background.png) no-repeat center;
    &-logo {
      padding-top: 15px;
      margin: 0 auto;
      img {
        width: 200px;
        height: 150px;
      }

    }
    &-point {
      img {
        width: 100%;
        height: 200px;
      }
      margin: 0 auto;
    }

    &-buttons {
      /*width: 100%;*/
      a{
        margin: 2px;
        float: left;
        width: 120px;
        padding: 10px;
      }
    }
  }
</style>
