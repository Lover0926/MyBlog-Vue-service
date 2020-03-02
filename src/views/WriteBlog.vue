<template>
    <div>
        <el-form :model="blog" status-icon :rules="rules"   ref="content" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题" prop="blogtitle">
                <el-container >
                    <!--<div style="margin: 20px 0;"></div>-->
                    <el-input id="blogtitlevule"
                            type="text"
                            placeholder="请输入内容"
                            v-model="blog.blogtitle"
                            maxlength="50"
                            show-word-limit
                              style="width: 1000px"
                    >
                    </el-input>
                    <el-input id="bloglablelistvule"
                              type="text"
                              placeholder="请输入标签，用逗号隔开"
                              v-model="blog.listname"
                              show-word-limit
                              style="width: 500px"
                    >
                    </el-input>
                    <el-button type="primary" @click="submitForm1('ruleForm')" style="width: 100px;">保存草稿</el-button>
                    <el-button type="primary" @click="submitForm('blog')" style="width: 100px;">发布文章</el-button>

                </el-container>
            </el-form-item>
            <el-form-item prop="blogcontent">
                <mavon-editor id="blogcontentvule" v-model="blog.blogcontent" ref="md" @change="change" @imgAdd="$imgAdd" style="min-height: 600px" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
    // 导入组件 及 组件样式
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {

        components: {
            mavonEditor,//mavon-editor组件
        },
        data() {
            return {
                blog: {
                    userid:'',
                    blogauthor:'',
                    blogtitle:'',
                    blogcontent:'',
                    blogcreatetime:new Date(),//获取当前时间
                    blogupdatetime:new Date(),
                    blogremarks:'',
                    listname:''

                }, // 输入的markdown   v-model="content"可以直接传到后台保存，使用时在将MarkDown文件转换为html文件，
                // 也可以先进行转换然后保存使用时直接取值即可
                html:'',    // 转成的html
                rules: {

            },
            }

        },

        methods: {
            change(value, render) {
                //实时获取转成html的数据
                this.html = render
            },
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                let formdata = new FormData();
                formdata.append('image', $file);
                this.axios({
                    url: 'http://localhost:8181/writeBlog/addBlog',
                    method: 'post',
                    data: formdata,
                }).then((data) => {
                    //将返回的url替换到文本原位置
                    if (data.data.success == 1) {
                        this.$refs.md.$img2Url(pos, data.data.url);
                        console.log(data.data.url)
                    }

                })
            },

            submitForm(formName){
                this.blogtitlevule=document.getElementById("blogtitlevule").value
                if( this.blogtitlevule==""){
                    alert("标题不能为空！")
                    return
                }else if (this.blog.blogcontent=="") {
                    alert("文章主题不能为空！")
                    return;
                }else if (this.blog.listname==""){

                    alert("标签不能为空！")
                    return;
                }
               this.blogcontent=this.html
                const  _this = this
                        axios.post('http://localhost:8181/writeBlog/addBlog',this.blog).then(function (resp) {
                           if(resp.data=="success") {

                               _this.$alert('发布成功！', '消息提示', {
                                   confirmButtonText: '确定',
                                   callback: action => {
                                       _this.$router.push('/')
                                   }
                               });
                           }
                        })

            },


        },
        created() {
            axios.get('http://localhost:8181/list/findList').then(resp=>{
                this.lablelists=resp.data
            })
        }
    }
</script>
<style scoped>

</style>