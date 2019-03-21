<template>
  <div>
    <div class="container">
      <div class="">
        <div class="row">
          <div class="col justify-content-md-center left">
            <img src="/static/images/logo.png" alt="">
          </div>
          <div class="col right">
            <div id="h2">WELCOME TO</div>
            <div id="h1">STAKE9<span style="color: white">J</span>A</div>
            <div class="row m-2">
              <a href="#/login" class="btn col mr-2">LOGIN</a>
              <a href="#/register" class="btn col">CREATE ACCOUNT</a>
            </div>
            <a href="#" class="btn btn-full btn-transparent">FORGET PASSWORD</a>
          </div>
        </div>
      </div>
      <div class="row slide-images">
        <div class="col stake">
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
        <div class="col stake">
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
        <div class="col stake">
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
        <div class="col stake">
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
        <div class="col stake">
          <div class="stake-logo">
            <img src="/static/images/logo.png" alt="">
          </div>
          <div class="stake-point">
            <img src="/static/images/450000.png" alt="">
          </div>
          <div class="stake-buttons grid grid-3">
            <a href="#" class="btn btn-stake">PLAY NOW</a>
            <a href="#" class="btn btn-stake">STAKE WITH N3000</a>
            <a href="#" class="btn btn-stake">SHARE</a>
          </div>
        </div>
        <div class="col stake">
          <div class="stake-logo">
            <img src="/static/images/logo.png" alt="">
          </div>
          <div class="stake-point">
            <img src="/static/images/900000..png" alt="">
          </div>
          <div class="stake-buttons grid grid-3">
            <a href="#" class="btn btn-stake">PLAY NOW</a>
            <a href="#" class="btn btn-stake">STAKE WITH N5000</a>
            <a href="#" class="btn btn-stake">SHARE</a>
          </div>
        </div>
      </div>
    </div>
    <div class="quick-information">
      <h3>
        Stake 9ja is a standard licenced lottery company, which is the first of its kind with guaranteed hourly
        win</h3>
      <p>Stake9ja is here to provide a standard online gaming platform for Bingo lovers, Stake9ja can be played with
        just N200 Minimum.</p>
      <p>Stake a bet by playing N200 and picking 8 random numbers between 0-36, Games start every 6 hours (12am, 6am,
        12pm, 6pm)</p>
      <p>Once the entries of each player is locked in; and game starts.</p>
      <p>The platform will run draw entries, each draw number carries 3 points,</p>
      <p>The first player with 24 points wins the game and is instantly created with the allocated winnings for the
        game.</p>
      <img src="/static/asset/fancy/balls.png" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  .Home {
    padding: 50px;
    color: $color-primary;
  }

  .slide-images {
    /*display: flex;*/
    margin-top: 20px;
  }

  .quick-information {
    text-align: center;
    padding: 60px 0px;
    color: white;
    background: #8d183f url("/static/images/WIN BIG.png") no-repeat center;
    margin-bottom: -20px;
    position: relative;
    img{
      position: absolute;
      width: 100px;
      bottom: 10px;
      right: 20px;
    }
  }

  .left {
    padding-top: 20px;
    margin: 0 auto;
    img {
      /*background-position: center;*/
      width: 400px;
    }
  }

  .right {
    text-align: center;
    color: white;
    padding: 40px 5px;
    line-height: .8;
    #h1 {
      color: $color-primary;
      font-weight: bold;
      font-size: 5em;
      padding: 20px 2px;
    }
    #h2 {
      color: white;
      font-size: 3em;
    }

  }
</style>
