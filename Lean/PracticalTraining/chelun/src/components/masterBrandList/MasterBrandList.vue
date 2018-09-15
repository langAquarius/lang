<template>
    <div :class='"brand-master-list "+showMaster'
        @touchstart="touchStart" 
        @touchmove="touchMove" 
        @touchend="touchEnd"
        ref="master">
        <aside class="brand-master-item-list" v-for="(item,index) in getMasterBrandList" :key="index" :id="item">
            <p class="initial" ref="initial">{{item.GroupName}}</p>
            <ul>
                <li v-for="(value,key) in item.GroupList" @click="toDetail(value.SerialID)" :key="key">
                    <img :src="value.Picture"/>
                    <p>
                        <span>{{value.AliasName}}</span>
                        <span>{{value.DealerPrice}}</span>
                    </p>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'MasterBrandList',
    props:{
        getMasterBrandList:{
            type:Array,
            default:[]
        },
        //添加class名，使MasterBrandList组件显示
        showMaster:{
            type:String,
            default:''
        },
        //清空class名的函数
        hiddenMaster:{
            type:Function,
            default:()=>{}
        }
    },
    methods:{
        touchStart(e){
           this.startTouch = e.touches[0];
        },
        touchMove(e){
            let touch = e.touches[0];
            let pageX = touch.pageX - this.startTouch.pageX;
            this.pageX = pageX;
            if (pageX>0){
                this.$refs.master.style = `transform:translate3d(${pageX}px,0,0)`;
            }
        },
        touchEnd(e){
            //清空this.$refs.master.style = `transform:translate3d(${pageX}px,0,0)`;样式再次点击时添加样式
            this.$refs.master.style = ``;
            if (this.pageX>100){
                //调用hiddenMaster将showMaster置空使MasterBrandList组件在次隐藏
                 this.hiddenMaster();
            }
        },
        toDetail(id){
            //路由传参
            this.$router.push({
                path: `/detail?id=${id}`,
                query:{
                    id
                }
            })
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import 'masterBrandList.scss';
</style>