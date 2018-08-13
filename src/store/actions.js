import * as types from './mutation-types';

export const setBlogList = ({commit}, blog_payload) => {
  commit(types.SET_BLOG_LIST, blog_payload);
};

export const addArticle = ({commit}, article_payload) => {
  commit(types.ARTICLE_ADD, article_payload);
};
