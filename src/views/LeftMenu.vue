<template>
    <div>
   <!-- <img src="../assets/timg.jpg" height="100%" width="200" style="float: left"/>-->
    <div class="leftMenu" id="box">
       <div style="border: 100px;color: #42b983;width: 100px;height: 50px;text-align: center">选择分类</div>
       <ul>
           <li v-for="item in listAll" :key="item" class="showli">
           <router-link :to="'/content'">{{item.listname}}</router-link>
               <p class="class1"></p>
           </li>

       </ul>


   </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listAll:[
                    {listid:''},
                    {listname:''},
                ]
            };
        },
        methods: {

        },
        created() {
            axios.get('http://localhost:8181/list/findList')
                .then(response=>{
                    console.log(response.data);
                    this.listAll=response.data;
                })
        }
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
    }
    #box {
        /*margin: 50px 10px 50px;*/
        width: 200px;
        float: right;
    }
    #box li a {
        position: relative;
        display: block;
        margin-top: -1px;
        color: black;
        line-height: 50px;
        letter-spacing: 4px;
        text-align: center;
        text-decoration: none;
        background-color: white;
    }
    #box li a:hover {
        z-index: 1;
        transition: 150ms;
        background-color: dodgerblue;
        border-color: dodgerblue;
        box-shadow: 0 0 10px 0 #4fbfff inset;
        border: 1px solid rgba(0, 0, 0, .9);
    }
    #box li a:active {
        transition: 75ms;
        background-color:  #1075ff;
        border-color: #1075ff;
        box-shadow: 0 0 10px 0 black inset;
    }
</style>