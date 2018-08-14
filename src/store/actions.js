import * as types from './mutation-types';

export const addArticle = ({commit}, article_payload) => {
  commit(types.ARTICLE_ADD, article_payload);
};

export const addComment = ({commit}, comment_payload) => {
  commit(types.COMMENT_ADD, comment_payload)
};
