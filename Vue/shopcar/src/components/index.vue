<template>
    <div>
        <headers :tit="'主页'"></headers>
        <tab :tits="tits" :cons="cons"></tab>
    </div>
</template>
<script>
import Vue from "vue"
import axios from "axios"
import tab from "@/components/tab.vue"
import headers from "@/components/include/header.vue"


export default {
    name: "",
    data() {
        return {
            tits: null,
            cons: null,
            tit2: [2, 3, 4, 5],
            con2: [2, 3, 4, 5]
        }
    },
    created() {
        this.init();
    },
    components: {
        tab,
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