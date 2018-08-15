<template>
<b-col >
  <div v-if="!article" class="article_wrap">
    <p class="h1">Нет такой статьи.</p>
    <b-link to="/">На главную.</b-link>
  </div>
  <div v-else class="article_item">

 <b-card class="mb-2 article_item_more" :title="article.title">
   <p v-html="article.descAll" class="card-text">
   </p>
 </b-card>
<article-form></article-form>
<article-comments></article-comments>
  </div>

</b-col>
</template>

<script>
  import _ from 'lodash';
  import ArticleForm from "./ArticleForm";
  import ArticleComments from "./ArticleComments";

    export default {
      components: {
        ArticleComments,
        ArticleForm},
      name: "article-main",
      data () {
          return {
            article: '',
          }
      },
      mounted () {
        this.getArticle(this.$route.params.id);
      },
        methods: {
          getArticle(id) {
             this.article =  _.filter(this.$store.state.articles, (o => o.id == id))[0];
          },

        }
    }
</script>

<style scoped>

</style>
