import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ],
  //mode: 'history'
})
