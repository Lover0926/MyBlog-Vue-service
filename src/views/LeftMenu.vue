<template>
   <div class="leftMenu" >
       <ul>
           <router-link :to="'/content/'+13"><p>算法</p></router-link>

           <p class="class1"></p>
           <p>Java</p>
           <p class="class1"></p>
           <p>Spring</p>
           <p class="class1"></p>
           <p>数据库</p>
           <p class="class1"></p>
           <p>Linux</p>
       </ul>


   </div>
</template>

<script>
    export default {
        name: "LeftMenu"
    }
</script>

<style scoped>
    .leftMenu{
        float: left;
        width: 200px;
        height: 580px;
        background-color: wheat;

    }
    ul{
        border-left:0;
        border-right:0;
        border-top:0 ;
        border-bottom:0 ;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 0px;
    }
    .class1{
        height: 10px;
    }
</style>