<template>
    <div>
        <button type="button" @click="show=!show">toggle</button>
        <transition name="fade">
            <p v-show="show">hello transition</p>
        </transition>
        <hr>
        <button type="button" @click="flag=!flag">toggle</button>
        <transition name="slideRight">
            <div v-show="flag" style="width: 50px;height: 50px; background-color: red">
            </div>
        </transition>
        <hr>
        <button type="button" @click="dir=!dir">toggle</button>
        <transition name="slideVertival">
            <div v-if="dir">
                撒娇范德萨了飞机立刻就
            </div>
        </transition>
        <div class="tab">
            <ul class="tab-title">
                <li v-for="(tit,ind) in tits" @click="changeTab(ind)">{{tit}}</li>
            </ul>
            <ol class="tab-content">
                <li v-for="con in cons">{{con}}</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    name: "tab",
    data() {
        return {
            show: true,
            flag: true,
            dir: true
        }
    },
    props: {
        tits: {
            type: Array
        },
        cons: {
            type: Array,
        }
    },
    mounted() {
        bus.$on("wanttosay", (data) => {
            console.log(data)
        });
    },
    methods: {
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


.slideVertival-enter{
    margin-top: 100px;
}
.slideVertival-enter-active{
    transition:  margin 1s
}

.slideVertival-leave-active{
    margin-top: 100px;
    transition:  margin 1s
}


.slideRight-enter,
.slideRight-leave {
    margin-left: 100px;
    
}

.slideRight-enter-active {

    transition: margin 2s
}

.slideRight-leave-active {
    margin-left: 100px;
    transition: margin 2s
}

@import url("../css/tab.css");
.fade-enter,
.fade-leave-active {
    opacity: 0
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s
}
</style>