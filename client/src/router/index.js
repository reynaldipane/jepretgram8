import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'
import FormUpload from '@/components/FormUpload'
import UserPost from '@/components/UserPost'
import DetailPost from '@/components/DetailPost'
import Timeline from '@/components/Timeline'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (store.state.activeUser.token !== ``) {
          next()
        } else {
          next({name: 'signin'})
        }
      },
      children: [{
        path: '',
        name: 'NewPost',
        component: FormUpload
      }, {
        path: 'mypost',
        component: UserPost,
        children: [{
          path: ':id',
          name: 'userdetailpost',
          component: DetailPost,
          props: true
        }]
      }, {
        path: 'timeline',
        component: Timeline
      }]
    }
  ]
})
