<template>
    <ol class="letter">
        <li><a :herf='"#"'>#</a></li>
        <li v-for="(item,index) in letterList" @touchstart="touchStart" @touchmove="touchMove" :key="index">{{item}}</li>
    </ol>
</template>

<script>
export default {
    name: 'Letter',
    props:{
        letterList:{
            type:Array
        },
        changeLetter:{
            type:Function
        }
    },
    methods:{
        touchStart(e){
            //let touch = e.touches[0];
            //计算rem单位
            this.height = window.innerWidth/750*100*0.4;
            //计算letter的高度
            this.offsetTop = (window.innerHeight - this.height*this.letterList.length)/2;
        },
        touchMove(e){
            this.index = parseInt((e.touches[0].pageY - this.offsetTop)/20);
            if (this.index<0){
                this.index = 0;
            }else if(this.index>this.letterList.length-1){
                this.index = this.letterList.length-1;
            }
            this.changeLetter(this.letterList[this.index])
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import './scss/carlist.scss';
</style>
