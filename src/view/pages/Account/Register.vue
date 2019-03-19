<i18n src="./i18n/index.json"></i18n>

<template>
  <div>
    <form action="" class="Form">
      <div class="title">Create Account</div>
      <div class="Form-wrap">
        <div class="Form-item"><input type="text" placeholder="Full Name" v-model="name" class="txt"></div>
        <div class="Form-item"><input type="text" placeholder="Username" v-model="username" class="txt"></div>
        <div class="Form-item"><input type="text" placeholder="E-mail" v-model="email" class="txt"></div>
        <div class="Form-item"><input type="text" placeholder="Phone Number" v-model="phone" class="txt"></div>
        <div class="Form-item"><input type="password" placeholder="Password" v-model="password" class="txt"></div>
        <div class="Form-item"><input type="password" placeholder="Confirm Password" v-model="cpassword" class="txt">
        </div>
        <button type="submit" class="btn btn-full btn-dark">
          Register
        </button>
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
