<template>
    <div>
        <heder></heder>
        <div>
            {{msg}}
        </div>
        <footer></footer>
    </div>
</template>
<script>
export default {
    name: "",
    //data变成方法，并返回一个{}
    data() {
        return {
            msg: "666"
        }
    }
}
</script>
<style>
@import url("./css/font-awesome.min.css");
@import url("./css/bootstrap.min.css");
@import url("./css/reset.css");
@import url("./css/common.css");
@import url("./css/style.css");
header{
	background-color: red;
}
</style>