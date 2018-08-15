<template>
  <div class="article_templ">
    <div class="article_comments no_articles" v-if="!comments.length">
      <h2>Комментариев пока нет.</h2>
    </div>
    <div class="article_comments" v-else>
      <div v-for="comment in comments" class="article article_comment row">
        <div class="col-sm-1">
          <div class="thumbnail mb-3 mt-3">
            <img class="img-fluid user-photo" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
          </div>
        </div>

        <div class="col-md-11">
          <div class="card mb-3 mt-3">
            <div class="card-header"><strong>{{comment.name}}</strong>
              <span class="text-muted">
              {{commentDate(comment.time)}}
              </span>
            </div>
            <div class="card-body">{{comment.text}}</div>
            <div class="article_comment_buttons animated">
              <b-btn @click="editCommentVal=comment" v-b-modal.modal1><em class="fa fa-pencil"></em></b-btn>
              <b-btn @click="deleteComment(comment.id)" class="btn btn-danger">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
                </b-btn>
            </div>
          </div>
        </div>


      </div>
    </div>

    <!-- Modal Component -->
    <b-modal id="modal1" ref="modal1" title="Редактирование комментария" @ok="handleOk">
      <form >
        <b-form-input class="mb-3" type="text" name="text" placeholder="" v-model="editCommentVal.name"></b-form-input>
        <b-form-input type="text" name="text" placeholder="" v-model="editCommentVal.text"></b-form-input>
      </form>
    </b-modal>

  </div>
</template>

<script>
  import _ from 'lodash';

    export default {
      name: "article-comments",
      data() {
        return {
          comments: '',
          editCommentVal: {
            name: '',
            text: ''
          }
        }
      },
      mounted() {
        this.getComments(this.$route.params.id);
        this.subscribe();

      },
      methods: {
        commentDate (time)  {
          return new Date(time).toLocaleString('ru', {day: 'numeric', month:'long', hour:'numeric', minute: 'numeric', second: 'numeric'})
        },
        getComments(id) {
          this.comments = _.filter(this.$store.state.comments, (o => o.article_id == id));
        },
        subscribe() {
          this.$store.subscribe((mutation) => {
            if (mutation.type == 'COMMENT_ADD' || mutation.type == 'COMMENT_EDIT' || mutation.type == 'COMMENT_DELETE' ) {
              this.getComments(this.$route.params.id);
            }
          })
        },
        deleteComment(id) {
          this.$store.dispatch('deleteComment', id);
        },
        handleOk(e) {
          e.preventDefault();
          if (!this.editCommentVal.text || !this.editCommentVal.name) {
            alert('Не оставляйте поле пустым');
          } else {
            this.handleSubmit(this.editCommentVal)
          }
        },
        handleSubmit(id) {
          this.$store.dispatch('editComment', id);
          this.$refs.modal1.hide()
        }
      }
    }
</script>

<style scoped>
  .article_comment_buttons {
    opacity: 0;
    position: absolute;
    top: 4px;
    right: 20px;
  }

  .article_comment:hover .article_comment_buttons {
    animation-name: fadeIn;
    opacity: 1;
  }
</style>
