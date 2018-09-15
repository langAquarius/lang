<template>
  <div>
    this is news detail page
    <h3>{{news.title}}</h3>
    <p>{{news.content}}</p>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "",
  data() {
    return {
      news: {}
    }
  },
  mounted() {
    this.getJson();
  },
  methods: {
    getJson() {
      let id = this.$route.query.id;

      axios.get("/newsDetail", { params: { newsid: id } })
        .then((result) => {
          this.news = result.data;
        });
    }
  }
}

</script>
<style>


</style>
