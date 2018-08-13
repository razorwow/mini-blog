<template>
<div class="blog_list w-100">
  <blog-form></blog-form>
  <blog-list></blog-list>
</div>
</template>

<script>
    import BlogList from "./BlogList";
    import BlogForm from "./BlogForm";

    export default {
      components: {BlogList, BlogForm},
      name: "blog-main"
    }
</script>

<style scoped>

</style>
