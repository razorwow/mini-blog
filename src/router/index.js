import Vue from 'vue'
import Router from 'vue-router'
import BlogMain from '../components/blog/BlogMain'
import ArticleMain from '../components/blog/article/ArticleMain'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list of articles',
      component: BlogMain
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleMain
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
