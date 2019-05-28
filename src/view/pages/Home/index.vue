<template>
  <div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-6 left">
          <img src="/static/images/logo.png" style="width: 80%" class="mx-auto d-block" alt="">
        </div>
        <div class="col-md-6 mt-5 mx-auto right">
          <h2>WELCOME TO</h2>
          <h1>STAKE9<span style="color: white">J</span>A</h1>
          <div class="row m-2">
            <a href="#/login" class="btn btn-home col mr-2">LOGIN</a>
            <a href="#/register" class="btn btn-home col">CREATE ACCOUNT</a>
          </div>
          <a href="#" class="btn btn-home-full btn-home-transparent">FORGET PASSWORD</a>
        </div>
      </div>
      <card/>
    </div>
    <div class="quick-information">
      <div class="container">

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
  </div>

</template>

<script>
  import Card from '../Others/Card'
  // import Slider from './Slider'

  export default {
    name: 'Home',
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  /*@import '~/slick-carousel/slick/slick.css'*/
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
    margin-top: 60px;
    background: #8d183f url("/static/images/WIN BIG.png") no-repeat center;
    margin-bottom: -20px;
    position: relative;
    img {
      position: absolute;
      width: 100px;
      bottom: 10px;
      right: 20px;
    }
  }

  .right {
    text-align: center;
    h1 {
      color: #00a859;
      font-size: 5em;
      line-height: 1;
    }
    h2 {
      color: wheat;
      font-size: 3em;
      line-height: 0.4;
    }
  }

  @media screen and(min-width: 250px) and (max-width: 320px) {
    .left {
      img {
        width: 70%;
        margin: 0 auto;
      }
    }
    .right {
      text-align: center;
      margin-top: 50px;
      h1 {
        color: #00a859;
        font-size: 3.2em;
        line-height: 1;
      }
      h2 {
        color: wheat;
        font-size: 2.2em;
        line-height: 0.4;
      }
    }
  }

  @media screen and(min-width: 321px) and (max-width: 786px) {
    .right {
      margin-top: 50px;
      h1 {
        color: #00a859;
        font-size: 4em;
        line-height: 1;
      }
      h2 {
        color: wheat;
        font-size: 2em;
        line-height: 0.4;
      }
    }
  }
</style>
