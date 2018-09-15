<template>
  <div>
    <div class="shopcar-header">
      <label for="checkall" v-if="!isAll">全选</label>
      <label for="checkall" v-else>反选</label>
      <input type="checkbox" id="checkall" @click="checkAll" v-model="isAll">
    </div>
    <div class="shopcar-content">
      <ul>
        <li class="bdb1 p10" v-for="product in products">
          <dl class="clearfix">
            <dt class="col-xs-4">
              <img :src="product.url" alt="">
            </dt>
            <dd class="col-xs-8">
              <span class="float-right">
                  <input type="checkbox" v-model="product.isCheck" @click="checkItem">
              </span>
              <h4>{{product.name}}</h4>
              <p>{{product.describe}}</p>
              <ol>
                <li>{{product.price}}元/斤</li>
              </ol>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "",
  data() {
    return {
      isAll: false,
      products: null
    }
  },
  mounted() {
    axios.get("/products").then((result) => {
      this.products = result.data;
    });
  },
  methods: {
    checkItem() {
      let temp = [];
      this.products.map((item) => {
        if (item.isCheck == true) {
          temp.push(item);
        }
      })
      if (temp.length == this.products.length - 1) {
        this.isAll = true
      } else {
        this.isAll = false
      }
    },
    checkAll() {
      if (!this.isAll) {
        this.products.map((item, index) => {
          item.isCheck = true;
        });
      } else {
        this.products.map((item, index) => {
          item.isCheck = false;
        });
      }

    }
  }
}

</script>
<style>
@import url("../css/bootstrap.min.css");
@import url("../css/reset.css");
@import url("../css/common.css");
@import url("../css/style.css");

.shopcar-content ul li dl dt {

  height: 120px;
}

.shopcar-content ul li dl dt img {
  width: 100%;
  height: 100%;
}

</style>
