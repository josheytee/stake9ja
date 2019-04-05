<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="" id="picker">
          <div :class="'ball pick-'+ball" :id="'ball_'+ball" v-for="ball in balls" @click="pickBall(ball)">
            <!--<img :src="'static/asset/'+ball+'.png'" :alt="ball">-->
          </div>
        </div>
        <div id="picked" class="grid grid-8">
          <div :class="'pick'+ball" v-for="ball in picked_balls">
            <img :src="'static/asset/'+ball+'.png'" :alt="ball">
          </div>
        </div>

        <div class="col-6 btn btn-primary">
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
        <div class="col-6 btn btn-primary">
          POTENTIAL WINNINGS N1000
        </div>
        <button class="col-12 btn btn-secondary" style="">Play Now</button>
      </div>
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
        // if (this.picked_balls.filter() < 8) {
        let clickedBall = document.getElementById('ball_' + number)
        let pickedBall = this.picked_balls.find(ball => ball === number)
        if (pickedBall != null) {
          let index = this.picked_balls.indexOf(number)
          if (index > -1) {
            this.picked_balls.splice(index, 1)
          }
          clickedBall.classList.remove('picked-' + number)
        } else {
          if (this.picked_balls.length < 8) {
            this.picked_balls.push(number)
            clickedBall.classList.add('picked-' + number)
          }
        }
        // }
        console.log(this.picked_balls)
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
  $picker-width: 650px;
  .ball {
    float: left;
    /* width: 100%; */
    padding: 25px;
    margin: 10px;
  }

  #picked {
    background-color: $color-primary;
    border-radius: 5px;
    max-width: $picker-width;
    margin-top: 10px;
    margin: 10px auto;
    height: 80px;
    img {
      float: left;
      /*height: 60px;*/
      width: 40px;
      margin: 0px 16px;
    }
  }

  #picker {
    background: $color-light;
    border-radius: 10px;
    /*height: 300px;*/
    width: $picker-width;
    border: $color-primary 1px solid;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px auto;
  }

  @for $i from 1 through 36 {
    .pick-#{$i} {
      cursor: pointer;
      background: url("/static/asset/#{$i}.png") no-repeat center;
      background-size: contain;
      /*img {*/
      width: 50px;
      height: 50px;
      /*}*/
      &:hover {
        opacity: .8;
      }
    }
    .picked-#{$i} {
      cursor: pointer;
      background: url("/static/asset/green/#{$i}.png") no-repeat center;
      background-size: contain;
    }
  }
</style>
