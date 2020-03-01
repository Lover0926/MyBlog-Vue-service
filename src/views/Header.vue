<template>
    <div style="width: 100%;height: 80px;margin-top: 15px;">
        <router-link to="/" style="float: left">MyBlog<p></p></router-link>
        <router-link to="/" style="float: left">首页</router-link>
        <router-link to="/login" style="float: right">登录<p></p></router-link>
        <router-link to="/writeBlog" style="float: right">写博客<p></p></router-link>
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="submitForm('search')"></el-button>
        </el-input>


    </div>

</template>
<script>
    export default {
        name: "Header",
        data() {
            return {
                search:''
            }
        },
        methods:{
        }

    }

</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .input-with-select {
        background-color: #fff;
        width: 300px;
    }
    p {
        width: 100px;
    }
</style>