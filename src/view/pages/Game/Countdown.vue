<template>
    <div id="timer" class="panel panel-info timer">
      <!--<Timer-->
        <!--starttime="Mar 22, 2019 15:37:25"-->
        <!--endtime="Mar 22, 2019 16:37:25"-->
        <!--trans='{-->
         <!--"day":"Day",-->
         <!--"hours":"Hours",-->
         <!--"minutes":"Minuts",-->
         <!--"seconds":"Seconds",-->
         <!--"expired":"Event has been expired.",-->
         <!--"running":"Till the end of event.",-->
         <!--"upcoming":"Till start of event.",-->
         <!--"status": {-->
            <!--"expired":"Expired",-->
            <!--"running":"Running",-->
            <!--"upcoming":"Future"-->
           <!--}}'-->
      <!--&gt;</Timer>-->
      <Timer></Timer>
      <!--  End! Timer Component  -->
    </div>
</template>

<script>
  import Timer from './Timer'

  export default {
    name: 'Countdown',
    components: {
      'Timer': Timer
    }
  }
</script>

<style lang="scss" scoped>

</style>
