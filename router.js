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

// simple way to modify document's title according to the current page!
router.beforeEach((to, from, next) => {
  document.title = `Tsar-Coffee - ${to.name}`
  next()
})

export default router
