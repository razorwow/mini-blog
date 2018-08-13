import Vue from 'vue'
import Router from 'vue-router'
import BlogMain from '../components/blog/BlogMain'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list of articles',
      component: BlogMain
    }
    /*{
      path: '/',
      name: 'List of Tasks',
      component: TaskList,
    },
    {
      path: '/signin',
      name: 'SignIn to App',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'SignUp to App',
      component: SignUp,
    },
    {
      path: '/task/:id',
      name: 'Task comp',
      component: TaskMain,
    }*/
  ],
});
