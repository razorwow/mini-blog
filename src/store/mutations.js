import * as types from './mutation-types';
import _ from 'lodash';

export const mutations = {

  [types.ARTICLE_ADD] (state, article_payload) {
    state.articles.unshift(article_payload);
  },
  [types.ARTICLE_EDIT] (state, article_payload) {

  },

  [types.ARTICLE_DELETE] (state, article_payload) {

  },

  [types.COMMENT_ADD] (state, comment_payload) {
    state.comments.unshift(comment_payload);
  },

  [types.COMMENT_EDIT] (state, comment_payload) {
    let commentKey = _.find(state.comments, function(o) { return o.id == comment_payload.id; });
    commentKey.text = comment_payload.text;
    commentKey.name = comment_payload.name;
  },

  [types.COMMENT_DELETE] (state, comment_id) {
    let commentKey = _.findIndex(state.comments, function(o) { return o.id == comment_id; });
    state.comments.splice(commentKey, 1);
  }

 /* [types.SIGN_OUT] (state){
    state.user = {};
    state.tasks = {};
  },

  [types.SET_TASKS] (state, tasks_payload) {
    state.tasks = tasks_payload;
  },*/
}
