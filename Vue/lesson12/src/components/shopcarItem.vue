<template>
  <ul style="background-color: #dec">
    <li v-for="(product,index) in products" class="product-item">
      <div class="p10 mt10">
        <input type="checkbox" v-model="product.isCheck" @click="checkItem">
      </div>
      <dl class="clearfix">
        <dt class="col-xs-3">
          <img :src="product.url" alt="">
        </dt>
        <dd class="col-xs-8 pt15">
          <h4>{{product.name}}</h4>
          <div class="mt15">
            <span class="float-right mt3">
          		<em class="pl10 pr10 pt5 pb5 bd1" @click="minus(index)">-</em>
          		<em class="pl10 pr10 pt5 pb5">{{product.count}}</em>
          		<em class="pl10 pr10 pt5 pb5 bd1" @click="plus(index)">+</em>
          	</span>
            <span>价格：{{product.price}}</span>
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
export default {
  name: "",
  props: ["products"],
  data() {
    return {}
  },
  methods: {
  	checkItem(){
  		this.$emit("update");
  	},
    minus($index) {
      if (this.products[$index].count < 1) return;
      this.products[$index].count--;
      this.$emit("update");
    },
    plus($index) {
      this.products[$index].count++;
      this.$emit("update");
    }
  }
}

</script>
<style>


</style>
