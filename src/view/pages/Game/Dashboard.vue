<template>
  <v-stage ref="stage" :config="stageSize" @mouseup="mouseup" @mousemove="mousemove">
    <v-layer ref="layer">
      <v-image ref="wheel" :config="{image:image}" @mousedown="mousedown"/>
      <!--<v-regular-polygon ref="wheel" :config="wheel" @mousedown="mousedown"></v-regular-polygon>-->
      <v-group>
        <v-image :config="ball(b)" v-for="b in balls" v-bind:key="b"></v-image>
      </v-group>
    </v-layer>
    <v-layer ref="animate">
    </v-layer>
  </v-stage>
</template>
<script>
  import utils from './js/utils'
  import Konva from 'konva'

  const width = 600
  const height = 600

  export default {
    name: 'Dashboard',
    data() {
      return {
        stageSize: {
          width: width,
          height: height
        },
        width: width,
        height: height,
        image: '',
        wheel: null,
        balls: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          35, 36
        ]
      }
    },
    methods: {
      ball: function (id) {
        let imageObj = new Image()
        imageObj.onload = function () {
          return {}
        }
        imageObj.src = '/static/asset/' + id + '.png'
        return {
          x: utils.randomIntFromRange(0, 500),
          y: utils.randomIntFromRange(0, 500),
          image: imageObj,
          width: 50,
          height: 50
        }
      },
      animate: function (animatedLayer, wheel, frame) {
        // 20% slow down per second
        console.log(wheel, frame)
        let angularFriction = 0.2
        let angularVelocityChange = (wheel.angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000
        wheel.angularVelocity -= angularVelocityChange

        if (wheel.controlled) {
          wheel.angularVelocity =
            ((wheel.rotation() - wheel.lastRotation) * 1000) / frame.timeDiff
        } else {
          wheel.rotate((frame.timeDiff * wheel.angularVelocity) / 1000)
        }

        wheel.lastRotation = wheel.rotation()
      },
      mouseup: function () {
        this.wheel.controlled = false
      },
      mousemove: function () {
        if (this.wheel.controlled) {
          var mousePos = this.$refs.stage.getPointerPosition()
          var x = this.wheel.x() - mousePos.x
          var y = this.wheel.y() - mousePos.y
          this.wheel.rotation(0.5 * Math.PI + Math.atan(y / x))

          if (mousePos.x <= this.$refs.stage.width() / 2) {
            this.wheel.rotate(Math.PI)
          }
        }
      },
      mousedown: function (evt) {
        this.angularVelocity = 0
        evt.controlled = true
      }
    },
    created() {
      const image = new Image(500, 500)
      image.src = '/static/asset/fancy/wheel.png'
      image.onload = () => {
        // set image only when it is loaded
        this.image = image
      }
    },
    mounted() {
      const vm = this
      // const amplitude = 100
      // const period = 5000
      // // in ms
      // const centerX = vm.$refs.stage.getStage().getWidth() / 2
      Konva.angleDeg = false
      // example of Konva.Animation
      console.log(this.$refs)
      let animatedLayer = this.$refs.layer
      var anim = new Konva.Animation(function (frame) {
        this.wheel = this.$refs.wheel
        this.wheel.image = this.image
        this.wheel.lastRotation = 0
        this.wheel.angularVelocity = 6
        this.wheel.controlled = false

        vm.animate(animatedLayer, this.wheel, frame)
      }, animatedLayer)

      // wait one second and then spin the star
      setTimeout(function () {
        anim.start()
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
