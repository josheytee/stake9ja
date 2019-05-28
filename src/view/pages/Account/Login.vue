<i18n src="./i18n/index.json"></i18n>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mx-auto" style="width: 70%">
          <form action="" class="form">
            <div class="title">CREATE ACCOUNT</div>
            <div class="Form-wrap">
              <div class="form-group">
                <div class="col-12">
                  <input type="text" placeholder="Username" v-model="username" class="form-control form-control-lg">
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <input type="password" placeholder="Password" v-model="password" class="form-control form-control-lg">
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <Checkbox name="remember"/>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12">
                  <input value="Login" type="submit" class="btn btn-home btn-full "/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Checkbox from './Checkbox'

  export default {
    name: 'Login',
    components: {Checkbox},
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    created() {
      this.$store.dispatch('Contact/getMessages')
    },
    computed: {
      ...mapGetters('Contact', [
        'messages'
      ])
    },
    methods: {
      submitForm() {
        this.$validator.validateAll().then((result) => {
          if (!result) return
          this.$store.dispatch('Contact/sendMessage', this.form)
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
