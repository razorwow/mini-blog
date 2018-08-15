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
  ],
});
