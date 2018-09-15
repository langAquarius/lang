<template>
    <div class="header-page">
        <header>译见/新闻媒体</header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        components: {
        },
        methods:{
            changes(){
                this.$emit('data',{
                    place:this.name,
                    txt:this.txt
                })
            }
        }
    }
</script>
<style>

</style>
