<template>

    <div style="width: 80%;float: right">
      <ul>
          <li v-for="item in content" :key="item.blogid">
                 <router-link :to="'/content/'+item.blogid" >{{item.blogtitle}}</router-link>
          </li>
      </ul>
  </div>
</template>

  <script>
    export default {
        data() {
        return {
            content:[
                {blogid:''},
                {userid:''},
                {blogauthor:''},
                {blogtitle:''},
                {blogcontent:''},
                {blogcreatetime:''},
                {blogupdatetime:''},
                {blogremarks:''},
            ]
        };
      },
      methods: {

    },
      created() {
          axios.get('http://localhost:8181/writeBlog/findAllBlog/0/100')
              .then(response=>{
                  console.log(response.data.content);
                  this.content=response.data.content;
              })
      }

    }


  </script>
<style>
  li{
    color: black;
      text-align: left;
      padding-left: 0px;
    }
  ul,li{
      margin: 0;
      padding: 0;
      height: 80px;
      background-color: white;
      border-left:0;
      border-right:0;
      list-style: none;

  }
    a {
        text-decoration: none;
    }
</style>