import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(`./pages/Home.vue`)
const About = () => import(`./pages/About.vue`)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
  mode: `history`,
})

router.beforeEach((to, from, next) => {
  document.title = 'Tcar-Coffee - ' + to.name
  next()
})

export default router
