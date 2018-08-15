<template>
  <b-col class="mb-3 text-center">
    <b-btn v-b-modal.modal1>Добавить новую статью</b-btn>

    <!-- Modal Component -->
    <b-modal id="modal1" ref="modalRef" title="Добавить статью" ok-title="Закрыть" ok-only>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="exampleInputGroup1"
                      label="Заголовок:"
                      label-for="exampleInput1">
          <b-form-input id="exampleInput1"
                        type="text"
                        v-model="form.title"
                        required
                        placeholder="Укажите заголовок">
          </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                      label="Краткое описание:"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="text"
                        v-model="form.descShort"
                        required
                        placeholder="Укажите краткое описание">
          </b-form-input>
        </b-form-group>
        <b-form-group id ="exampleInputGroup3"
        label="Полное описание"
        label-for="exampleTextarea3">
          <vue-editor v-model="form.descAll"></vue-editor>

        </b-form-group>
        <b-button type="submit" variant="primary">Добавить</b-button>
        <b-button type="reset" variant="danger">Сбросить</b-button>
      </b-form>
    </b-modal>

  </b-col>
</template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {
    components: {
      VueEditor
    },
    data () {
      return {
        form: {
          title: '',
          descShort: '',
          descAll: '',
          id: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        if (!this.checkTabs()) {
          alert('Заполните все поля');
          return;
        }
        const article = {
          title: this.form.title.trim(),
          descShort: this.form.descShort.trim(),
          descAll: this.form.descAll.trim(),
          id: Date.now()
        };
        this.$store.dispatch('addArticle', article);
        this.$refs.modalRef.hide();
        this.show = false;
        this.$nextTick(() => { this.show = true });
        this.onReset(evt);

      },
      checkTabs() {
        return !(this.form.title.trim() == '' || this.form.descShort.trim() == '' || this.form.descAll.trim() == '');
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.title = '';
        this.form.descShort = '';
        this.form.descAll = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
    }
  }
</script>

<!-- b-form-1.vue -->
