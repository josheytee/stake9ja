import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/view/pages/Home/route'
import Contact from '@/view/pages/Contact/route'
import Register from '@/view/pages/Account/route/Register'
import Login from '@/view/pages/Account/route/login'
import Terms from '@/view/pages/Others/route/Terms'
import Responsible from '@/view/pages/Others/route/Responsible'
import Privacy from '@/view/pages/Others/route/Privacy'
import Stake from '@/view/pages/Game/route/Stake'
import Countdown from '@/view/pages/Game/route/Countdown'
import Dashboard from '@/view/pages/Game/route/Dashboard'
import Result from '@/view/pages/Game/route/Result'
import Picker from '@/view/pages/Game/route/Picker'

Vue.use(Router)

const router = new Router({
  routes: [
    Home,
    Contact,
    Login,
    Register,
    Terms,
    Responsible,
    Privacy,
    Stake,
    Countdown,
    Result,
    Dashboard,
    Picker,
  ]
})

export default router
