<template>
  <div class="article_comments_block">
    <div class="article_comments" v-if="comments.length">
      <b-card class="mb-4" v-for="comment in comments">
        <b-row>
        <b-col md="2">
          <b-img fluid src="https://image.ibb.co/jw55Ex/def_face.jpg"></b-img>
          <p class="text-secondary text-center">
            {{new Date(comment.time).toLocaleString('ru', {day: 'numeric', month:'long', hour:'numeric', minute: 'numeric', second: 'numeric'})}}
          </p>
        </b-col>
        <b-col md="10">
          <p class="float-left font-weight-bold">
            {{comment.name}}
          </p>
          <div class="clearfix"></div>
          <div class="card-text">
            {{comment.text}}
          </div>
        </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="article_comments" v-else>
      <h2>Комментариев пока нет.</h2>
    </div>

  </div>
</template>

<script>
    export default {
        name: "article-comments",
      data () {
          return {
            comments: ''
          }
      },
      mounted() {
        this.getComments(this.$route.params.id)
      },
      methods: {
        getComments(id) {
          this.comments =  _.filter(this.$store.state.comments, (o => o.article_id == id));
        },
      }
    }
</script>

<style scoped>

</style>
