<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm2.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from 'axios'
  export default {
    name:'Login',
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('用户名不能为空'));
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                  this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
               callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                name: "",
                password: ""
            },
             rules2: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                name: [
                    { validator: checkAge, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                axios.post("http://localhost:9000/login",{
                    parms:{
                        user:this.ruleForm2.name,
                        password:this.ruleForm2.password
                    }
                })    
                this.$router.push({path:'/userList'})
            } else {
                console.log('error submit!!');
                return false;
            }
        });
        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

