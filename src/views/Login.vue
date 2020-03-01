<template>
  <el-form style="margin: 0 auto;width: 25%;" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="userid">
      <el-input type="userid" v-model="ruleForm.userid" autocomplete="off" ref="userid1"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off" ref="userPassword1"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      <el-button @click="resetForm('ruleForm')">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return{
        ruleForm: {
          userid:'',
          password:'',
        },
        rules: {
          userid: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },

          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        const  userid=this.$refs.userid1.value
        const  password=this.$refs.userPassword1.value
        const  _this =this
        this.$refs[formName].validate((valid) =>{
          if(valid){
            axios.get('http://localhost:8181/user/login/'+userid+'/'+password).then(function (resp) {
             if(valid.userid==resp.userid){
               _this.$router.push('/')
             }
            })
          }


        })
      },
      resetForm(formName) {
        this.$router.push('/register')
      }
    }
  }
</script>