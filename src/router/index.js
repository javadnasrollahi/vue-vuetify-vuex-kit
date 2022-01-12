import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'root',
      component: () => import('@/components/Main')
    },
    {
      path: '/exam',
      name: 'exam',
      component: () => import('@/components/exam')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/components/question')
    },
    {
      path: '/question/virayesh/:id',
      name: 'questionvirayesh',
      component: () => import('@/components/Soal/virayesh')
    },
    {
      path: '/question/add',
      name: 'questionadd',
      component: () => import('@/components/Soal/add')
    },
    {
      path: '/question/namayesh/:id',
      name: 'questionnamayesh',
      component: () => import('@/components/Soal/namayesh')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('@/components/student')
    },
  ]
})
