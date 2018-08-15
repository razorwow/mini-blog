<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-jumbotron class="text-center w-100" header="Welcome to Blog" >
        </b-jumbotron>
      </b-row>
      <b-row>
        <router-view></router-view>
      </b-row>



    </b-container>
  </div>
</template>

<script>
import BlogList from "./blog/BlogList";

export default {
  components: {BlogList},
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
