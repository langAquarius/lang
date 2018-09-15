<template>
  <div>
    <div class="bg-orange text-white p10">
      <label for="checkall" style="vertical-align:middle">
        <span v-if="check">反选</span>
        <span v-else>全选</span>
      </label>
      <input type="checkbox" name="checkall" v-model="check" id="checkall" @click="checkAll">
    </div>
    <shopcarItem :products="products" v-on:update="onUpdate"></shopcarItem>
    <div class="bg-orange text-white p10">
      <span class="float-right">
    		总数：{{nums}}
    	</span>
      <span>总价：{{tots}}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import shopcarItem from "./shopcarItem.vue"

export default {
  name: "",
  data() {
    return {
      nums: 0,
      tots: 0,
      products: null,
      check: false
    }
  },
  mounted() {
    this.getJson();
  },
  methods: {
    compute() {
      let num = 0;
      let tot = 0;
      this.products.map((item) => {
        if (item.isCheck) {
          num += item.count;
          tot += item.count * item.price;
        }
      })
      this.nums = num;
      this.tots = tot;
    },
    onUpdate() {
      let temp = [];
      this.products.map((item) => {
        if (item.isCheck) {
          temp.push(item);
        }
      })
      if (temp.length == this.products.length - 1) {
        this.check = true;
      } else {
        this.check = false;
      }
      this.compute();
    },
    checkAll() {
      if (!this.check) {
        this.products.map((item) => {
          item.isCheck = true;
        });
      } else {
        this.products.map((item) => {
          item.isCheck = false;
        });
      }
      this.compute();
    },
    getJson() {
      axios.get("/products").then((result) => {
        this.products = result.data;
        this.compute();
      });
    }
  },
  components: {
    shopcarItem
  }
}

</script>
<style>


</style>
