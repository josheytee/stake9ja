<template>
  <div>
    <form action="" class="Form">
      <div class="title">Login</div>
      <div class="Form-wrap">
        <div class="Form-item">
          <input type="text" placeholder="username" v-model="username" class="txt"/>
        </div>
        <div class="Form-item"><input type="password" placeholder="password" v-model="password" class="txt"></div>
        <div class="Form-item">
          <label class="Form-check">
            <input type="checkbox" id="check" v-model="check">
            <span class="checkmark"></span>
            Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-full btn-dark">
          Sign In
        </button>
        <div class="grid">
          <a href="#" class="btn btn-login">Create Account</a>
          <a href="#" class="btn btn-login">Reset Password</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Login',
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
