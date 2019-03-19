<template>
  <div class="footer">
    <div class="footer-top">
      <a href="#/responsible-gaming">Responsible Gaming</a>
      <a href="#/contact">Contact Us</a>
      <a href="#/help">Help</a>
      <a href="#/privacy">Privacy Policy</a>
      <a href="#/terms">T&Cs</a>
    </div>
    <div class="payments">
      <img src="/static/asset/padlock.png" alt="secure">
      <img src="/static/asset/visa.png" alt="visa">
      <img src="/static/asset/verve.png" alt="verve">
      <img src="/static/asset/mastercard.png" alt="master card">
      <img src="/static/asset/interswitch.jpg" alt="interswitch">
    </div>
    <div class="footer-bottom">

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'AppFooter',
    data() {
      return {
        siteLang: ''
      }
    },
    mounted() {
      this.siteLang = this.langDefault
    },
    watch: {
      siteLang() {
        const payload = {
          lang: this.siteLang,
          app: this
        }
        this.$store.commit('i18n/LANG_CHANGE', payload, {root: true})
      }
    },
    computed: {
      ...mapGetters('i18n', [
        'langDefault',
        'langSupport'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 20px;
    color: darken(white,20%);
    z-index: 10;
    /*display: flex;*/
    background-color: #47061c;
    padding: 20px;
    font-size: 14px;
    .payments{
      margin: 10px 0;
      img{
        /*margin: 0 10px;*/
        padding: 10px;
        height: 40px;
      }
    }
    .footer-top{
      a{
        margin: 0px 10px;
        &:hover{
          color: white;
        }
      }
    }
  }
</style>
