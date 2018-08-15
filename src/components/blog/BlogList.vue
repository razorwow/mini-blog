<template>
<b-col>
  <div v-if="paginatedData.length" class="article_list">
  <b-card v-for="article in paginatedData" :title=article.title
          :key=article.id
          tag="article"
          class="mb-3 article_list_item">
    <p class="card-text">
      {{article.descShort}}
    </p>
    <b-link :to="`article/${article.id}`">Подробнее</b-link>
    <span class="float-right"><i class="fa fa-comments"></i> Комментариев: {{commentsCount(article.id)}}</span>
    <div class="article_buttons animated">
      <b-btn @click="editArticleVal=article" v-b-modal.modalarticle><em class="fa fa-pencil"></em></b-btn>
      <b-btn @click="deleteArticle(article.id)" class="btn btn-danger">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </b-btn>
    </div>
  </b-card>
  </div>
  <div v-else>
    <h2>Записей пока нет.</h2>
  </div>
  <b-pagination v-if="paginatedData.length" align="center" v-model="currentPage" :per-page="size" :limit="pageCount" :total-rows="articles.length"></b-pagination>

  <!-- Modal Component -->
  <b-modal id="modalarticle" ref="modalarticle" title="Редактирование записи" @ok="handleOk">
    <form >
      <b-form-input class="mb-3" type="text" name="text" placeholder="" v-model="editArticleVal.title"></b-form-input>
      <b-form-input class="mb-3" type="text" name="text" placeholder="" v-model="editArticleVal.descShort"></b-form-input>
      <vue-editor :rows="3"
                       required
                       :max-rows="6" type="text" name="text" placeholder="" v-model="editArticleVal.descAll"></vue-editor>
    </form>
  </b-modal>
</b-col>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import _ from 'lodash'

    export default {
      components: {
        VueEditor
      },
        name: "blog-list",
      data () {
        return {
          currentPage: 1,
          size: 3,
          articles: this.$store.state.articles,
          comments: this.$store.state.comments,
          editArticleVal: {}
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
          return this.articles
            .slice(start, end);
        },

      },
      mounted() {

      },
      methods: {
        commentsCount(id) {
          return _.filter(this.comments,(o) => o.article_id == id).length;
        },
        handleOk(e) {
          e.preventDefault();
          if (!this.editArticleVal.title.trim() || !this.editArticleVal.descShort || !this.editArticleVal.descAll.trim()) {
            alert('Не оставляйте поле пустым');
          } else {
            this.handleSubmit(this.editArticleVal)
          }
        },
        handleSubmit(id) {
          this.$store.dispatch('editArticle', id);
          this.$refs.modalarticle.hide()
        },
        deleteArticle(id) {
          this.$store.dispatch('deleteArticle', id);
        },
      }
    }
</script>

<style scoped>
  .article_buttons {
    opacity: 0;
    position: absolute;
    top: 4px;
    right: 20px;
  }

  .article_list_item:hover .article_buttons {
    opacity: 1;
  }
</style>
