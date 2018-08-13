import * as types from './mutation-types';

export const mutations = {

  [types.SET_BLOG_LIST] (state, blog_payload) {
    state.articles = blog_payload;
  },

  [types.ARTICLE_ADD] (state, article_payload) {
    state.articles.unshift(article_payload);
  },

 /* [types.SIGN_OUT] (state){
    state.user = {};
    state.tasks = {};
  },

  [types.SET_TASKS] (state, tasks_payload) {
    state.tasks = tasks_payload;
  },*/
}
