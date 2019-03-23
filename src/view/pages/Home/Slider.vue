<template>
  <div class="slider">
    <button class="slider-control slider-control-left" @click="pushLeft"><<</button>
    <div ref="slider_wrap" class="slider-wrap animated bounce">
      <slider-card ref="slider_item" image="18000" amount="200"/>
      <slider-card ref="slider_item" image="45000" amount="500"/>
      <slider-card ref="slider_item" image="90000" amount="1000"/>
      <slider-card ref="slider_item" image="180000" amount="2000"/>
      <slider-card ref="slider_item" image="900000." amount="5000"/>
      <slider-card ref="slider_item" image="180000" amount="10000"/>
    </div>
    <button href="#" class="slider-control slider-control-right" @click="pushRight">>></button>
    <div style="clear: both"></div>
  </div>
</template>
<script>
  import SliderCard from './SliderCard'

  export default {
    name: 'Slider',
    components: {
      'slider-card': SliderCard
    },
    data: function () {
      return {
        val: 0
      }
    },
    methods: {
      pushLeft: function (e) {
        let slider = this.$refs.slider_wrap
        let children = slider.children
        console.log(children[0])
        this.val -= 300 * 2
        console.log(this.$refs.slider_wrap.style.marginLeft = this.val + 'px')
        // console.log(this.$refs.slider_wrap.style.marginLeft += 10)
      },
      pushRight: function (e) {
        this.val += 300 * 2
        console.log(this.$refs.slider_wrap.style.marginLeft = this.val + 'px')
        // console.log(this.$refs.slider_wrap.style.marginLeft += 10)
      }
    }
  }
</script>
<style lang="scss">
  .slider {
    /*float: left;*/
    height: 340px;
    width: 100%;
    margin: 20px;
    display: block;
    &-wrap {
      overflow-x: hidden;
      overflow-y: hidden;
      width: 2400px;
      height: 340px;
      float: left;
      margin-left: 10px;
    }
    &-item {
      float: left;
      margin: 10px;
      width: 250px;
      height: 340px;
      display: inline-block;
    }
    &-control {
      /*float: left;*/
      margin: auto;
      height: 50px;
      width: 50px;
    }
  }
</style>
