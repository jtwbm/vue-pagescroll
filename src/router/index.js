import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Portfolio from '@/components/portfolio'
import Gallery from '@/components/gallery'
import Team from '@/components/team'
import Contacts from '@/components/contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
  ],
  mode: 'history'
})
