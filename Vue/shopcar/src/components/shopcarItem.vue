<template>
    <ul class="product-list">
        <li class="product-item clearfix pt10 pb10 bdb1" v-for="(product,index) in products">
            <span @click="delte(index)" style="padding:10px;position: absolute;top: 10px;right:10px;z-index: 1;">
            		<i class="fa fa-close"></i>
            	</span>
            <div class="col-sm-1">
                {{product.isCheck}}
                <input type="checkbox" name="" v-model="product.isCheck" class="pt15" @click="checkItem(index)">
            </div>
            <dl class="col-sm-9 clearfix">
                <dt class="col-sm-5 pl0 pr0">
                    <img :src="product.url" alt="">
                </dt>
                <dd class="col-sm-7">
                    <h3>{{product.name}}</h3>
                    <p>价格：{{product.price}}</p>
                    <p>{{product.discribe}}</p>
                </dd>
            </dl>
            <div class="col-sm-2 pt20 pl0 pr0">
                <span class="bd1 p10" @click="minus(index)">-</span>
                <span class="bd1 p10" style="display: inline-block;width:35px">{{product.count}}</span>
                <span class="bd1 p10" @click="add(index)">+</span>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: "",
    props: {
        products: {
            type: Array
        }
    },
    data() {
        return {}
    },
    methods: {
        delte($index) {
            this.products.splice($index, 1);
            this.$emit("delete");
        },
        minus($index) {
            if (this.products[$index].count <= 1) {
                return;
            };

            --this.products[$index]["count"];
           this.$emit("update", $index);
        },
        add($index) {
            ++this.products[$index]["count"];
            this.$emit("update", $index);
        },
        checkItem($index) {
            this.$emit("update", $index);

        }
    }
}
</script>
<style>
</style>