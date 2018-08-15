import * as types from './mutation-types';
import _ from 'lodash';

export const mutations = {

  [types.ARTICLE_ADD] (state, article_payload) {
    state.articles.unshift(article_payload);
  },
  [types.ARTICLE_EDIT] (state, article_payload) {
    let article = _.find(state.articles, function(o) { return o.id == article_payload.id; });
    article.title = article_payload.title.trim();
    article.descShort = article_payload.descShort.trim();
    article.descAll = article_payload.descAll.trim();
  },

  [types.ARTICLE_DELETE] (state, article_id) {
    let articleKey = _.findIndex(state.articles, function(o) { return o.id == article_id; });
    state.articles.splice(articleKey, 1);
    state.comments = _.filter(state.comments, o => o.article_id != article_id);
  },

  [types.COMMENT_ADD] (state, comment_payload) {
    state.comments.unshift(comment_payload);
  },

  [types.COMMENT_EDIT] (state, comment_payload) {
    let comment = _.find(state.comments, function(o) { return o.id == comment_payload.id; });
    comment.text = comment_payload.text.trim();
    comment.name = comment_payload.name.trim();
  },

  [types.COMMENT_DELETE] (state, comment_id) {
    let commentKey = _.findIndex(state.comments, function(o) { return o.id == comment_id; });
    state.comments.splice(commentKey, 1);
  }


}
