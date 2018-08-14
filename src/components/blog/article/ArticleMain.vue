<template>
<b-col >
 <b-card class="mb-2" :title="article.title">
   <p class="card-text">
     {{article.descAll}}
   </p>
 </b-card>
  <div class="well">
    <b-form @submit="onSubmit"  >
      <b-form-group id="exampleInputGroup1"
                    label="Оставить комментарий:"
                    label-for="textarea1">
        <b-form-textarea id="textarea1"
                         v-model="comment"
                         placeholder="Писать тут.."
                         :rows="3"
                         :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Отправить</b-button>
    </b-form>
  </div>



</b-col>
</template>

<script>
  import _ from 'lodash';

    export default {
        name: "article-main",
      data () {
          return {
            article: '',
            showCommentForm: false,
            comment: ''
          }
      },
      mounted () {
          console.log(this.$route.params.id);
        this.getArticle(this.$route.params.id)
      },
        methods: {
          getArticle(id) {
             this.article =  _.find(this.$store.state.articles, (o => o.id == id));
          },
          onSubmit(evt) {
            evt.preventDefault();
          }
        }
    }
</script>

<style scoped>
  .well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
  }
</style>
