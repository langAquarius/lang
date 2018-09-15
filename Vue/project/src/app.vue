<template>
    <div>
        {{msg}}this is app
        <router-view class="content"></router-view>
        <footers></footers>
    </div>
</template>
<script>
import footers from "@/components/include/footer.vue"
export default {
    name: "app",
    data() {
        return {
            msg: "hello"
        }
    },
    components: {
        footers
    }
}
</script>
<style>
@import url("./css/font-awesome.min.css");
@import url("./css/reset.css");
@import url("./css/common.css");
@import url("./css/style.css")
</style>