<template>
    <div>
        <headers :tit="'购物车'"></headers>
        <div class="p10 bdb1">
            <label for="checkall">全选</label>
            <input type="checkbox" name="checkall" id="checkall" v-model="checkallItem" @click="checkall">
        </div>
        <div>
            <item :products="products" @update="onUpdate" @delete="onDelete"></item>
        </div>
        <div>
            <span class="float-left">合计金额：{{totols}}</span>
            <span class="float-right">合计数量：{{counts}}</span>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import headers from "@/components/include/header.vue"
import item from "./shopcarItem.vue"
export default {
    name: "",
    data() {
        return {
            products: null,
            checkallItem: false,
            totols: 0,
            counts: 0
        }
    },
    components: {
        item,
        headers
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        onDelete() {
            this.compute();
        },
        onUpdate($index) {
            let temp = [];
            this.products[$index].isCheck = true;

            this.products.forEach((item, index) => {
                console.log(item);
                if (item.isCheck == true) {
                    temp.push(item);

                }
                this.compute();
            });

            if (temp.length == this.products.length) {
                this.checkallItem = true;
            } else {
                this.checkallItem = false;
            }
        },
        checkall() {
            if (!this.checkallItem == true) {
                this.products.map((item, index) => {
                    item.isCheck = true;
                });
            } else {
                this.products.map((item, index) => {
                    item.isCheck = false;
                });
            }
            this.compute();
        },

        getProducts() {
            axios.get("/product").then((result) => {
                this.products = result.data;
                this.compute();
            });
        },
        compute() {
            this.counts = 0;
            this.totols = 0;
            this.products.map((item) => {
                if (item.isCheck == true) {
                    this.totols += item.price * item.count;
                    this.counts += item.count
                }
            });
        }
    }
}
</script>
<style>
img {
    width: 100%;
    height: 100%;
}

.product-list {}

.product-item {
    padding: 15px;
    position: relative;
    ;
}

.product-item dl dt {
    width: 80px;
    height: 80px;
    overflow: hidden;
}
</style>