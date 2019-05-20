<template>
  <!--<b-col>-->

  <div class="footer container-fluid">
    <div class="footer-top">
      <a href="#/responsible-gaming">Responsible Gaming</a>
      <!--<a href="#/contact">Contact Us</a>-->
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
    <div class="footer-bottom row">
      <div class="footer-social col-md-4 col-sm-12">
        <a href="#">
          <img src="/static/asset/Facebook.png" alt="facebook">
          <span>@stake9ja</span>
        </a>
        <a href="#">
          <img src="/static/asset/Twitter.png" alt="twitter">
          <span>@stake9ja</span>
        </a>
        <a href="#">
          <img src="/static/asset/Instgram.png" alt="Instagram">
          <span>@stake9ja</span>
        </a>
        <a href="#">
          <img src="/static/asset/Whatsapp.png" alt="Instagram">
          <span>+234</span>
        </a>

      </div>
      <div class="footer-powered col-md-4 col-sm-6 my-sm-4">
        <br>
        Powered by Truth ware Solutions
        <br>
        <br>
      </div>
      <div class="footer-others col-md-4 col-sm-6">
        <div class="row">
          <div class="col-12">
            <img src="/static/asset/+18.png" id="img18" alt="18+">
            <img src="/static/images/logo.png" id="imgl" alt="logo">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</b-col>-->
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
    color: darken(white, 20%);
    z-index: 10;
    /*display: flex;*/
    background-color: #47061c;
    padding: 20px;
    font-size: 14px;
    .payments {
      margin: 10px 0;
      img {
        /*margin: 0 10px;*/
        padding: 10px;
        height: 40px;
      }
    }
    &-top {
      a {
        margin: 0px 10px;
        &:hover {
          color: white;
        }
      }
    }
    &-bottom {
      height: 110px;
    }
    &-social {
      a {
        float: left;
        margin: 0 3px;
      }
      img {
        width: 30px;
        margin-left: 10px;
      }
      span {
        display: block;
        font-size: 10px;
      }
      background-color: #47061c;
    }
    &-powered {
      background-color: #47061c;
      text-align: center;
    }
    &-others {
      background-color: #47061c;
      #img18 {
        width: 4em;
      }
      #imgl {
        width: 11em;
      }
    }
  }

  @media screen and (min-width: 250px) and (max-width: 786px) {

  }

</style>
