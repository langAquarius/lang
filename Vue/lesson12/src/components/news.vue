<template>
  <div>
    this is news page
    <ul>
      <li v-for="news in newsList" class="p10">
        <router-link :to="{path:'/detail',query:{id:news.id}}">
          <dl class="clearfix">
            <dt class="col-xs-4">
              <img :src="news.url" alt="">
            </dt>
            <dd class="col-xs-8">
              <h4>{{news.title}}</h4>
              <p>
                <span class="float-right">{{news.ptime}}</span>
                <span>{{news.ctime}}</span>
              </p>
            </dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "",
  data() {
    return {
      newsList: null
    }
  },
  mounted() {
    this.getJson();
  },
  methods: {
    getJson() {
      axios.get("/newsList").then((result) => {
        this.newsList = result.data;
      });
    }
  }
}

</script>
<style scooed>
img {
  width: 100%;
  height: 100%;
}

</style>
