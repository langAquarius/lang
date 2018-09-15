<template>
  <div class="maybelike clearfix mt10">
    <div class="title bg-white ">
        <a href=""><img src="src/assets/images/ico/heart.png" alt="" class="img-title"> 猜你喜欢</a>
    </div>
    <keep-alive>
      <ul class="list" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li class="list-item " v-for="(v,k) in newData" :key="k">
            <dl class="bd1">
              <dt><img v-bind:src="v.imgsrc" alt="img" class="img-ad"></dt>
              <dd>
                <h5 class="text-nobr">{{v.merchanName}}</h5>
                <p>￥{{v.price}}</p>
              </dd>
            </dl>
        </li>
      </ul>
    </keep-alive>
  </div> 
</template>
<script>
import Vue from 'vue';
import data from '@/mock/data/youlike';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
    name: 'operating',
    data () {
        return {
            data: data.data,
            newData: [],
            msg: 'Welcome to Your Vue.js App'
        };
    },
    methods: {
        loadMore () {
            this.loading = true;
            setTimeout(() => {
                for (let i = 1; i <= 4; i++) {
                    let last = this.data[this.data.length - i];
                    this.newData.push(last);
                }
                this.loading = false;
            }, 500);
        }
    }
};
</script>
<style scoped>
.maybelike {
  width: 100%;
  height: auto;
  background: #fff;
}
.list {
  width: 100%;
}
.list-item {
  width: 48%;
  float: left;
  margin-left: 1%;
  margin-top: .25rem;
  box-sizing: border-box;
}
.img-ad {
  width: 100%;
  height: 2rem;
}
.list-item dd {
  padding: 0.1rem;
  box-sizing: border-box;
}
.list-item h5 {
  margin: 0;
  color: #999;
  font-weight: 500;
  font-size: 0.12rem;
}
.list-item p {
  color: #f60;
  font-size: 0.16rem;
}
.title {
    width: 100%;
    height: 0.3rem;
    border-bottom: solid 1px #eee;
    text-align: center;
}
.img-title {
    height: 50%;
    vertical-align: sub;
}
</style>
