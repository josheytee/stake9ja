<template>
  <div class="">
    <span id="timer">Play now Game closes in... </span>
    <div class="row">
      <div class="col-6">
        <slider-card ref="slider_item" image="18000" amount="200"/>
      </div>
      <div class="col-6">
        <slider-card ref="slider_item" image="45000" amount="500"/>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <slider-card ref="slider_item" image="90000" amount="1000"/>
      </div>
      <div class="col-6">
        <slider-card ref="slider_item" image="180000" amount="2000"/>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <slider-card ref="slider_item" image="900000." amount="5000"/>
      </div>
      <div class="col-6">
        <slider-card ref="slider_item" image="180000" amount="10000"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SliderCard from '../Home/SliderCard'

  export default {
    name: 'Stake',
    component: {'slider-card': SliderCard}
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
      a {
        margin: 2px;
        float: left;
        width: 120px;
        padding: 10px;
      }
    }
  }
</style>
