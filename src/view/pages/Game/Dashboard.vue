<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer">
      <v-image ref="wheel" :config="wheelConfig()"/>
      <!--<v-regular-polygon ref="wheel" :config="wheel" @mousedown="mousedown"></v-regular-polygon>-->
      <v-group ref="group">
        <!--<v-image :config="ballConfig(b)"  v-for="b in balls" v-bind:key="b"/>-->
        <v-image :config="ballConfig(1)" ref="b1"/>
        <v-image :config="ballConfig(2)" ref="b2"/>
        <v-image :config="ballConfig(3)" ref="b3"/>
        <v-image :config="ballConfig(4)" ref="b4"/>
        <v-image :config="ballConfig(5)" ref="b5"/>
        <v-image :config="ballConfig(6)" ref="b6"/>
        <v-image :config="ballConfig(7)" ref="b7"/>
        <v-image :config="ballConfig(8)" ref="b8"/>
        <v-image :config="ballConfig(9)" ref="b9"/>
        <v-image :config="ballConfig(10)" ref="b10"/>
        <v-image :config="ballConfig(11)" ref="b11"/>
        <v-image :config="ballConfig(12)" ref="b12"/>
        <v-image :config="ballConfig(13)" ref="b13"/>
        <v-image :config="ballConfig(14)" ref="b14"/>
        <v-image :config="ballConfig(15)" ref="b15"/>
      </v-group>
    </v-layer>
    <!--<v-layer ref="animate">-->
    <!--</v-layer>-->
  </v-stage>
</template>
<script>
  import Ball from './js/ball'
  import Konva from 'konva'

  const stageWidth = 600
  const StageHeight = 600

  export default {
    name: 'Dashboard',
    data() {
      return {
        stageSize: {
          width: stageWidth,
          height: StageHeight
        },
        gravity: 1,
        friction: 0.99,
        width: 600,
        height: 600,
        wheel: null
      }
    },
    methods: {
      wheelConfig: function () {
        let wheelWidth = 500
        let wheelHeight = 500
        let wheelImage = new Image()
        wheelImage.src = '/static/asset/fancy/wheel.png'
        // wheelImage.onload = () => {
        // set image only when it is loaded
        // this.image = image
        // }
        return {
          width: wheelWidth,
          height: wheelHeight,
          image: wheelImage,
          x: stageWidth / 2,
          y: StageHeight / 2,
          offset: {
            x: wheelWidth / 2,
            y: wheelHeight / 2
          }
        }
      },
      ballConfig: function (id) {
        return Ball.draw(id)
      }
    },
    mounted: function () {
      // let that = this
      let wheel = this.$refs.wheel.getStage()
      console.log(wheel.width(), wheel.height())
      // let group = this.$refs.group.getStage()
      let ball1 = this.$refs.b1.getStage()
      let ball2 = this.$refs.b2.getStage()
      let ball3 = this.$refs.b3.getStage()
      let ball4 = this.$refs.b4.getStage()
      let ball5 = this.$refs.b5.getStage()
      let ball6 = this.$refs.b6.getStage()
      let ball7 = this.$refs.b7.getStage()
      let ball8 = this.$refs.b8.getStage()
      let ball9 = this.$refs.b9.getStage()
      let ball10 = this.$refs.b10.getStage()
      let ball11 = this.$refs.b11.getStage()
      let ball12 = this.$refs.b12.getStage()
      let ball13 = this.$refs.b13.getStage()
      let ball14 = this.$refs.b14.getStage()
      let ball15 = this.$refs.b15.getStage()
      // initialization
      Ball.init(ball1)
      console.log(ball1.radius)
      Ball.init(ball2)
      Ball.init(ball3)
      Ball.init(ball4)
      Ball.init(ball5)
      Ball.init(ball6)
      Ball.init(ball7)
      Ball.init(ball8)
      Ball.init(ball9)
      Ball.init(ball10)
      Ball.init(ball11)
      Ball.init(ball12)
      Ball.init(ball13)
      Ball.init(ball14)
      Ball.init(ball15)
      // console.log(ball1)

      const anim = new Konva.Animation(function (frame) {
        let pos = 3
        wheel.rotate(pos)
        // ball1.rotate(pos)
        Ball.update(ball1, frame, wheel)
        Ball.update(ball2, frame, wheel)
        Ball.update(ball3, frame, wheel)
        // Ball.update(ball4, frame)
        // Ball.update(ball5, frame)
        // Ball.update(ball6, frame)
        // Ball.update(ball7, frame)
        // Ball.update(ball8, frame)
        // Ball.update(ball9, frame)
        // Ball.update(ball10, frame)
        // Ball.update(ball11, frame)
        // Ball.update(ball12, frame)
        // Ball.update(ball13, frame)
        // Ball.update(ball14, frame)
        // Ball.update(ball15, frame)
        // ball1.setX(Math.sin((frame.time * 2 * Math.PI)))
        // console.log(ball1)
      }, wheel.getLayer())
      anim.start()
    }
  }
</script>

<style lang="scss" scoped>

</style>
