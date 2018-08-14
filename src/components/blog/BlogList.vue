<template>
<b-col>
  <b-card v-for="article in paginatedData" :title=article.title
          :key=article.id
          tag="article"
          class="mb-3">
    <p class="card-text">
      {{article.descShort}}
    </p>
    <b-link :to="`article/${article.id}`">Подробнее</b-link>
  </b-card>
  <b-pagination align="center" v-model="currentPage" :per-page="size" :limit="pageCount" :total-rows="articles.length"/>
</b-col>
</template>

<script>
    export default {
        name: "blog-list",
      data () {
        return {
          currentPage: 1,
          size: 3,
          articles: this.$store.state.articles
        }
      },
      computed:{
        pageCount(){
          let l = this.articles.length,
            s = this.size;
          return Math.ceil(l/s);
        },
        paginatedData(){
          const start = (this.currentPage - 1) * this.size,
            end = start + this.size;
          console.log(start, end);
          return this.articles
            .slice(start, end);
        }
      },
      mounted() {
          this.fetchBlog();
      },
      methods: {
          fetchBlog() {
            this.$store.dispatch('setBlogList', this.$store.state.articles)
          }
      }
    }
</script>

<style scoped>
.card-text-more {
  cursor: pointer;
}
</style>
