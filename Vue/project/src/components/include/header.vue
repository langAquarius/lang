<template>
    <header class="header">
        <div class="title">
            <a class="back">
            <i class="fa fa-angle-left f20"></i>
        </a>
            <a class="more">
            <i class="fa fa-ellipsis-h"></i>
        </a>
            <h3>
                {{tit}}
            </h3>
        </div>
    </header>
</template>
<script>
export default {
    name: "",
    data() {
        return {}
    },
    mounted() {
        this.gets();
    },
    methods: {
        gets() {
            console.log(this.tit);
        
        }
    },
    props: ["tit"]
}
</script>
<style>
</style>