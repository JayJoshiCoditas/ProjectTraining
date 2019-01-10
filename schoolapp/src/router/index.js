import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage/components/homePage'
import admissionPage from '@/components/AdmissionPage/components/admissionPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'schoolApp',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/admissionPage',
      name: 'admissionPage',
      component: admissionPage
    }
  ]
})
