<template>
  <div class="panel">
    dashboard
    <canvas ref="dashboard"/>
  </div>
</template>

<script>
  // require('./js/canvas.js')
  // import c from './js/canvas'

  export default {
    name: 'Dashboard',
    data: function () {
      return {
        'exampleContent': 'lets k'
      }
    },
    methods: {
      updateCanvas: function () {
        // const canvas = document.getElementById('dashboard')
        const canvas = this.$refs.dashboard
        console.log(canvas)
        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
        ctx.font = '20px Georgia'
        ctx.fillText(this.exampleContent, 10, 50)
      }
    },
    watch: {
      exampleContent: function (val, oldVal) {
        this.updateCanvas()
      }
    },
    created: function () {
      this.updateCanvas()
    }
  }
</script>

<style lang="scss" scoped>

</style>
