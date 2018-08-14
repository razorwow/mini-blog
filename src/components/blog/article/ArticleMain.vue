<template>
<b-col >
 <b-card class="mb-2" :title="article.title">
   <p class="card-text">
     {{article.descAll}}
   </p>
 </b-card>
<article-form></article-form>
<article-comments></article-comments>


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
