<template>
    <div class="tab">
        <button class="float-right" @click="send">发送</button>
        <ul class="tab-title">
            <li v-for="(tit,ind) in tits" @click="changeTab(ind)">{{tit}}</li>
        </ul>
        <ol class="tab-content">
            <li v-for="con in cons">{{con}}</li>
        </ol>
    </div>
</template>
<script>
export default {
    name: "tab2",
    props: {
        tits: {
            type: Array
        },
        cons: {
            type: Array,
        }
    },
    mounted() {

    },
    methods: {
        send(){
            bus.$emit("wanttosay","爱老虎油！");
        },
        changeTab(index) {
            let tlis = document.querySelectorAll("ul li");
            let clis = document.querySelectorAll("ol li");
            [...clis].map((item, index) => {
                item.style.display = "none";
            });
            clis[index].style.display = "block";
        }
    }
}
</script>
<style scoped>
@import url("../css/tab.css")
</style>