<template>
  <div class="panel">
    <h1>How to play</h1>

    <div v-for="step in steps" v-bind:key="step" class="steps">
      <div>
        <h3>step {{step}}</h3>
        <p>{{description[step-1]}}</p>
        <img :src="'/static/images/step%20'+step+'.png'" alt=""/>
        <img src="/static/images/logo.png" alt="" style="width:80px;margin: 0 80% 0 0"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HowToPlay',
    data: function () {
      return {
        steps: [1, 2, 3, 4, 5, 6],
        description: ['go to www.stake9ja.com', 'Idenfy a desire stake and click play now\n', 'Select 8 lucky numbers 0 - 36 and click play now\n', 'Fill details in create account to register \n', 'Fund Account using your ATM cards, online transfer and bank\n', 'Click play now and WIN BIG \n']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .steps {
    margin: 5px auto;
    width:50%;
    /*height: 400px;*/
    padding: 20px;
    h3 {
      color: white;
      ::after {
        content: '';
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
      }
    }
    p{
      color: white;
      padding: 10px;
      text-align: center;
    }
    div {
      background-color: $color-4;
      width: 450px;
      padding: 20px;
      margin: 10px;
      border-radius: 5px;
      img {
        width: 400px;
      }
    }
  }
</style>
