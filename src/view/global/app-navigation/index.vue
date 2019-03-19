<template lang="pug">
  .AppNavigation
    SideBar
    ul
      router-link(v-for="(item, index) in mainNav",
      tag="li", :to="item.path", :key="index")
        a {{ (item.name) }}
        <!--a {{ $t(item.name) }}-->
</template>

<script>
  import router from '@/router'
  import _has from 'lodash/has'
  import SideBar from '@/view/global/side-bar'

  export default {
    name: 'AppNavigation',
    components: {
      SideBar
    },
    computed: {
      mainNav() {
        let nav = router.options.routes.filter(route => {
          return _has(route, 'meta') && route.meta.main_menu
        })
        nav.forEach(item => {
          item.name = item.name.toLocaleLowerCase()
        })
        return nav
      }
    }
  }
</script>

<style lang="scss" scoped>
  .AppNavigation {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ul {
      display: flex;
      align-items: center;

      li {
        margin-left: 10px;
        margin-right: 10px;
        text-transform: capitalize;
        &.router-link-exact-active {
          color: darken(white, 30%);
        }
      }
    }
  }
</style>
