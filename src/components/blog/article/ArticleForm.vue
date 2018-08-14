<template>
  <div class="well">
    <b-form @submit="onSubmit"  >
      <b-form-group id="nameInput"
                    label="Представьтесь:"
      >
        <b-form-input id="nameInput2"
                      type="text"
                      v-model="comment.name"
                      required
                      placeholder="ФИО или псевдоним">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Оставить комментарий:"
                    label-for="textarea1">
        <b-form-textarea id="textarea1"
                         v-model="comment.text"
                         placeholder="Писать тут.."
                         :rows="3"
                         required
                         :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Отправить</b-button>
    </b-form>
  </div>
</template>

<script>
    export default {
        name: "article-form",
      data () {
        return {
          comment: {
            name: '',
            text: ''
          }
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault();
          const comment = {
            article_id: this.$route.params.id,
            text: this.comment.text,
            name: this.comment.name,
            time: Date.now()
          };
          this.$store.dispatch('addComment', comment);
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
