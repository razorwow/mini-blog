import * as types from './mutation-types';

export const addArticle = ({commit}, article_payload) => {
  commit(types.ARTICLE_ADD, article_payload);
};

export const editArticle = ({commit}, article_payload) => {
  commit(types.ARTICLE_EDIT, article_payload);
};

export const deleteArticle = ({commit}, article_payload) => {
  commit(types.ARTICLE_DELETE, article_payload);
};

export const addComment = ({commit}, comment_payload) => {
  commit(types.COMMENT_ADD, comment_payload)
};

export const editComment = ({commit}, comment_payload) => {
  commit(types.COMMENT_EDIT, comment_payload)
};

export const deleteComment = ({commit}, comment_payload) => {
  commit(types.COMMENT_DELETE, comment_payload)
};
