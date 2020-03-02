<template>

    <div style="width: 80%;" id="box">
      <ul class="ulclass">
          <li v-for="item in content" :key="item.blogid" class="showli">
              <div> <router-link :to="'/content/'+item.blogid" >{{item.blogtitle}}</router-link></div>
          </li>
      </ul>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>
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
            ],
            pageSize:'',
            total:'',
        };
      },
      methods: {
          page(currentPage){
              axios.get('http://localhost:8181/writeBlog/findAllBlog/'+(currentPage-1)+'/5').then(resp=> {
                  this.content=resp.data.content
                  this.pageSize=resp.data.size
                  this.total=resp.data.totalElements
              })
          }
    },
      created() {
          axios.get('http://localhost:8181/writeBlog/findAllBlog/0/5')
              .then(response=>{
                  this.content=response.data.content;
                  this.pageSize=response.data.size
                  this.total=response.data.totalElements
              })
      }

    }


  </script>
<style>
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
        text-align: left;
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