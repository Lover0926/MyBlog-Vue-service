<template>
    <div v-html="blogcontent" style="text-align:left;word-wrap: break-word;"></div>
</template>

<script>
    import marked from 'marked'
    import hljs from 'highlight.js';
    import 'highlight.js/styles/a11y-dark.css';
    export default {
        name: "Content",
        data(){
            return {
                blogcontent:''
            };
        },
        methods:{
        },
        created() {
            axios.get('http://localhost:8181/writeBlog/findByBlogid/'+this.$route.params.blogid)
                .then(response=>{
                    console.log(response.data.blogcontent);
                    var  marked = require('marked');
                    console.log(marked(response.data.blogcontent));
                    this.blogcontent=marked(response.data.blogcontent);
                    this.$nextTick(()=>{
                        const  block=document.querySelectorAll('pre code');
                        block.forEach(block=>{
                            hljs.highlightBlock(block);
                        })
                    })

                })
        }
    }
</script>

<style scoped>

</style>