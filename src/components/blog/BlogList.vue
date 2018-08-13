<template>
<b-col>
  <b-card v-for="article in articles" :title=article.title
          :key=article.id
          tag="article"
          class="card-text-more mb-3">
    <p class="card-text">
      {{article.descShort}}
    </p>
  </b-card>

</b-col>
</template>

<script>
    export default {
        name: "blog-list",
      data () {
        return {
          articles: this.$store.state.articles
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
