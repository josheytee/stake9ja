<template>
  <div style="margin: 0 auto; width: 500px">
    <div class="grid grid-picker" id="picker">
      <div :class="compClasses" :id="'ball_'+ball" v-for="ball in balls" @click="pickBall(ball)">
        <img :src="'static/asset/'+ball+'.png'" :alt="ball">
      </div>
    </div>
    <div id="picked" class="grid grid-8">
      <div class="pick" v-for="ball in picked_balls">
        <img :src="'static/asset/'+ball+'.png'" :alt="ball">
      </div>
    </div>

    <div style="margin: 10px auto;width: 500px">
      <div class="btn btn-login">
        <label for="stake">
          stake
          <select name="" id="stake">
            <option>200</option>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
          </select>
        </label>
      </div>
      <div class="btn btn-login">
        POTENTIAL WINNINGS N1000
      </div>
    </div>
    <div style="margin: 20px auto; width: 120px">
      <button class="btn" style="">Play Now</button>
    </div>
  </div>
</template>

<script>
  // import _ from 'lodash'

  export default {
    name: 'Picker',
    data: function () {
      return {
        balls: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          35, 36
        ],
        picked_balls: [],
        picked: false,
        pick: true
      }
    },
    methods: {
      pickBall: function (number) {
        // console.log(number)
        let clickedBall = document.getElementById('ball_' + number)
        if (this.picked_balls.length <= 8) {
          if (!this.picked_balls.includes(number)) {
            clickedBall.classList.add('picked')
            this.picked_balls.push(number)
          } else if (this.picked_balls.includes(number)) {
            let index = this.picked_balls.indexOf(number)
            if (index > -1) {
              this.picked_balls.splice(index, 1)
            }
            clickedBall.classList.remove('picked')
            // this.picked_balls.splice(number)
          }
        } else {
          this.picked_balls.length = 8
        }
        // console.log(this.picked_balls)
      },
      unPickBall: function (number) {
        // _.remove(this.picked_balls, (n) => number === n)
      },
      selectBall: function (number) {

      }
    },
    computed: {
      compClasses: function () {
        return {
          picked: this.picked,
          pick: this.pick
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $picker-width: 500px;
  #picked {
    background-color: $color-primary;
    border-radius: 5px;
    max-width: $picker-width;
    margin-top: 10px;
    height: 40px;
  }

  #picker {
    background: $color-light;
    border-radius: 10px;
    width: $picker-width;
    border: $color-primary 1px solid;
  }

  .picked {
    opacity: .2
  }

  .pick {
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
    &:hover {
      opacity: .8;
    }
  }
</style>
