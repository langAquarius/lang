<template>
    <div class="account">
        <span class="photo" @click="upload">
            <img :src="photo" alt="">
        </span>
        <span class="user" @click="logout">{{username}}</span>
    </div>
</template>
<script>
export default {
    name: "photo",
    props: {
        username: {
            type: String,
            default: "default user"
        },
        photo: {
            type: String,
            default: "/src/assets/images/pht/default.jpg"
        }
    },
    methods: {
        upload() {

        },
        logout() {
            this.$router.push({ path: '/login' });
        }
    }
}
</script>
<style>
.account {
    position: absolute;
    right: 15px;
    top: 15px;
    height: 35px;
}

.photo {
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    vertical-align: middle;
}

.photo img {
    width: 100%;
    height: 100%;
}

.user {
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
    vertical-align: middle
}
</style>