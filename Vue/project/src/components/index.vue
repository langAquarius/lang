<template>
    <div>
        <headers :tit="'主页'"></headers>
        <tab style="margin-right: -100px;":tits="tits" :cons="cons"></tab>
        <tab2 style="margin-left: -100px;" :tits="tit2" :cons="con2"></tab2>
    </div>
</template>
<script>
import Vue from "vue"
import axios from "axios"
import tab from "@/components/tab.vue"
import tab2 from "@/components/tab2.vue"
import headers from "@/components/include/header.vue"


export default {
    name: "",
    data() {
        return {
            tits: null,
            cons: null,
            tit2:[2,3,4,5],
            con2:[2,3,4,5]
        }
    },
    created() {
        this.init();
    },
    components: {
        tab,
        tab2,
        headers
    },
    methods: {
        init() {
            axios.get("/tabs")
                .then((result) => {
                    const res = result.data;
                    this.tits = res.tits;
                    this.cons = res.cons;
                });
        }
    }
}
</script>
<style>
</style>