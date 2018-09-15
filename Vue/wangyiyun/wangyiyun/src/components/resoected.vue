<template>
    <div class="wraper" > 
       <section class="section">
            <div class="recommend">
                <div class="tit">推荐歌单</div>
                <div class="row" >
                    <div class="remd_img" v-for="arr in msgP" >
                        <img v-bind:src="arr.pic" alt="">
                        <p class="remd_text">{{arr.text}}</p>
                    </div>
                </div>
            </div>
            <div class="newmusic">
                <div class="tit">最新音乐</div>
                <div class="m-List">
                    <a class="m-item" href="" v-for="Mlist in msgL" >
                        <div class="m-message">
                            <div class="sg-name">{{Mlist.name}}</div>
                            <div class="sg-info"><i class="sg-hot">{{Mlist.hot}}</i>{{Mlist.info}}</div>
                        </div>
                        <div class="player">
                            <i class="icon iconfont icon-bofang2"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
   </div>
</template>

<script>
    import axios from "axios"
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                msgP:"",
                msgL:"",               
            }
        },
        mounted(){
            this.resoect()
            this.$nextTick(() => { this.scroll = new BScroll(this.$refs.wraper, {}) })

        },
        methods: {
            resoect(){
                axios.get("/resoected").then((result) => {
                    console.log(result.data.MusicP);
                    this.msgP=result.data.MusicP;
                    this.msgL=result.data.MusicL
                });
             const wraper = document.querySelector('.wraper');
            const scroll = new BScroll(wraper);
            }         
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    
</style>
