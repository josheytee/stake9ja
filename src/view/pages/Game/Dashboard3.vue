<template>
  <v-stage ref="stage" :config="stageConfig()" @mouseup="mouseup_touchend" @touchend="mouseup_touchend"
           @mousemove="mousemove_touchmobe" @touchmove="mousemove_touchmobe">
    <v-layer ref="animatedLayer">
      <v-star ref="star" :config="{
    x: this.$refs.stage.width() / 2,
    y: this.$refs.stage.height() / 2,
    outerRadius: 80,
    innerRadius: 40,
    stroke: '#005500',
    fill: '#b5ff88',
    strokeWidth: 4,
    numPoints: 5,
    lineJoin: 'round',
    shadowOffset: 5,
    shadowBlur: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    opacity: 0.8
  }" @mousedown="mousedown_touchstart" @touchstart="mousedown_touchstart"></v-star>
      <v-circle ref="circle" :config="{
        x: this.$refs.stage.width() / 2,
        y: this.$refs.stage.height() / 2,
        radius: 3,
        fill: '#555'
      }"></v-circle>
    </v-layer>
  </v-stage>
</template>
<script>
  import Konva from 'konva'

  var width = window.innerWidth
  var height = window.innerHeight

  export default {
    name: 'Dashboard',
    data: function () {
      return {
        width: width,
        height: height
      }
    },
    methods: {
      stageConfig: function () {
        return {
          container: 'container',
          width: width,
          height: height
        }
      },
      animate: function (animatedLayer, star, frame) {
        // 20% slow down per second
        var angularFriction = 0.2
        var angularVelocityChange = (star.angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000
        star.angularVelocity -= angularVelocityChange

        if (star.controlled) {
          star.angularVelocity = ((star.rotation() - star.lastRotation) * 1000) / frame.timeDiff
        } else {
          star.rotate((frame.timeDiff * star.angularVelocity) / 1000)
        }

        star.lastRotation = star.rotation()
      },
      mousedown_touchstart: function (evt) {
        this.angularVelocity = 0
        this.controlled = true
      },
      mouseup_touchend: function () {
        var star = this.$refs.star
        star.controlled = false
      },
      mousemove_touchmobe: function () {
        var star = this.$refs.star
        var stage = this.$refs.stage
        if (star.controlled) {
          var mousePos = stage.getPointerPosition()
          var x = star.x() - mousePos.x
          var y = star.y() - mousePos.y
          star.rotation(0.5 * Math.PI + Math.atan(y / x))

          if (mousePos.x <= stage.width() / 2) {
            star.rotate(Math.PI)
          }
        }
      }
    },
    mounted: function () {
      var animatedLayer = this.$refs.animatedLayer
      Konva.angleDeg = false
      // var stage = this.$refs.animatedLayer
      var star = this.$refs.star
      // custom properties
      star.lastRotation = 0
      star.angularVelocity = 6
      star.controlled = false
      console.log(star)
      // var center = this.$refs.circle
      // star.on('mousedown touchstart', function (evt) {
      // })

      // animatedLayer.add(star)
      // animatedLayer.add(center)

      // add listeners to container
      // stage.on('mouseup touchend', function () {
      // })

      // stage.on('mousemove touchmove', function () {
      //   if (star.controlled) {
      //     var mousePos = stage.getPointerPosition()
      //     var x = star.x() - mousePos.x
      //     var y = star.y() - mousePos.y
      //     star.rotation(0.5 * Math.PI + Math.atan(y / x))
      //
      //     if (mousePos.x <= stage.width() / 2) {
      //       star.rotate(Math.PI)
      //     }
      //   }
      // })

      // stage.add(animatedLayer)

      var anim = new Konva.Animation(function (frame) {
        this.animate(animatedLayer.getLayer(), star, frame)
      }, animatedLayer.getLayer())

      // wait one second and then spin the star
      setTimeout(function () {
        anim.start()
      })
    }
  }
</script>
<style lang="scss" scoped>

</style>
