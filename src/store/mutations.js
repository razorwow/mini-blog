import * as types from './mutation-types';

export const mutations = {

  [types.ARTICLE_ADD] (state, article_payload) {
    state.articles.unshift(article_payload);
  },

  [types.COMMENT_ADD] (state, comment_payload) {
    state.comments.push(comment_payload);
  }

 /* [types.SIGN_OUT] (state){
    state.user = {};
    state.tasks = {};
  },

  [types.SET_TASKS] (state, tasks_payload) {
    state.tasks = tasks_payload;
  },*/
}
