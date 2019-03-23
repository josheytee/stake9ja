<template>
  <div id="clockdiv">
    <h1>Countdown Clock</h1>
    <div>
      <span class="days">{{days}}</span>
      <div class="smalltext">Days</div>
    </div>
    <div>
      <span class="hours">{{hours}}</span>
      <div class="smalltext">Hours</div>
    </div>
    <div>
      <span class="minutes">{{minutes}}</span>
      <div class="smalltext">Minutes</div>
    </div>
    <div>
      <span class="seconds">{{seconds}}</span>
      <div class="smalltext">Seconds</div>
    </div>
    <br>
  </div>

</template>

<script>
  export default {
    name: 'Timer',
    data: function () {
      return {
        days: 1,
        minutes: 10,
        hours: 2,
        seconds: 3
      }
    },
    methods: {
      getTimeRemaining: function (endtime) {
        // console.log(endtime)
        var t = Date.parse(endtime) - Date.now()
        var seconds = Math.floor((t / 1000) % 60)
        var minutes = Math.floor((t / 1000 / 60) % 60)
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        var days = Math.floor(t / (1000 * 60 * 60 * 24))
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        }
      },
      initializeClock: function (id, endtime) {
        // var clock = document.getElementById(id)
        // var daysSpan = clock.querySelector('.days')
        // var hoursSpan = clock.querySelector('.hours')
        // var minutesSpan = clock.querySelector('.minutes')
        // var secondsSpan = clock.querySelector('.seconds')
      }
    },
    mounted: function () {
// count down timer:
      var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000)
      let t = this.getTimeRemaining(deadline)
      console.log(t)

      function updateClock(t) {
        this.days = t.days
        this.minutes = ('0' + t.minutes).slice(-2)
        this.seconds = ('0' + t.seconds).slice(-2)

        if (t.total <= 0) {
          clearInterval(timeinterval)
        }
      }

      updateClock(t)
      let timeinterval = setInterval(updateClock, 1000)
      // this.initializeClock('clockdiv', deadline)
    }
  }
</script>

<style lang="scss" scoped>
  body {
    text-align: center;
    background: #ffcdd2;
    font-family: sans-serif;
    font-weight: 100;
  }

  h1 {
    color: #d32f2f;
    font-weight: 100;
    font-size: 40px;
    margin: 40px 0px 20px;
  }

  #clockdiv {
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
  }

  #clockdiv > div {
    padding: 10px;
    border-radius: 3px;
    background: #ff8a80;
    display: inline-block;
  }

  #clockdiv div > span {
    padding: 15px;
    border-radius: 3px;
    background: #f44336;
    display: inline-block;
  }

  .smalltext {
    padding-top: 5px;
    font-size: 16px;
  }
</style>
