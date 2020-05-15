<template>
  <div class="login_container">
    <div class="login_box">
      <h4>账号注册</h4>
      <div class="vip">
        <span class="hd">新用户注册</span>
        <span class="tips">尊敬的用户，欢迎您注册!</span>
        <span class="account" @click="go">
          已有账号，
          <font color="#0075E0">去登录</font>
        </span>
      </div>

      <!-- 登录注册区域 -->
      <el-form
        label-width="0px"
        class="regist_form"
        :model="registForm"
        :rules="registFormRules"
        ref="registFormRef"
      >
        <!-- 手机号 -->
        <el-form-item prop="email">
          <el-input v-model="registForm.email" placeholder="请输入邮箱" @blur="yx"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="captcha">
          <el-input v-model="registForm.captcha" class="regist_captcha" placeholder="短信验证码"></el-input>
          <el-button type="info" @click="getcode">获取验证码</el-button>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item prop="userName">
          <el-input v-model="registForm.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 创建密码-->
         <el-form-item prop="checkpass">
          <el-input v-model="registForm.checkpass" type="password" placeholder="设置密码"></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="pass">
          <el-input v-model="registForm.pass" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
         <el-form-item >
            <el-radio-group v-model="registForm.role">
              <el-radio :label="0">开发方</el-radio>
              <el-radio :label="1">需求方</el-radio>
            </el-radio-group>
          </el-form-item>
        <!-- 协议 -->
        <!-- <el-form-item>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        </el-form-item>-->
        <!-- 注册 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="zhuce">注册</el-button>
          <el-button type="info" @click="resetRegistForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //设置密码
    var validatePass = (rule, value, callback) => {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!reg.test(value)) {
          callback(new Error("密码至少包含 数字和英文，长度6-20"));
        } else if (this.registForm.pass !== "") {
          this.$refs.registFormRef.validateField("checkpass");
        }
        callback();
      }
    };
    //确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registForm.checkpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // var validateEmail = (rule, value, callback) => {
    //   if(value === "code:20000") {
    //     callback("邮箱可用");
    //   }else{
    //      callback(new Error("邮箱不可用"));
    //   }
    //   console.log(value);
    // };
    return {
      //登录表单数据对象
      registForm: {
        email: "",
        checkpass: "",
        pass: "",
        captcha: "",
        role:0,
        userName:""
      },
      //表单验证
      registFormRules: {
        //用户名
        email: [
          { required: true, message: "请输入正确的邮箱", trigger: "blur" },
          // {validator:function(rule,value,callback){
          //     if(/^1[34578]\d{9}$/.test(value) == false){
          //         callback(new Error("请输入正确的手机号"));
          //     }else{
          //         callback();
          //     }
          // }, trigger: 'blur'},
          // {
          //   pattern: /^1[34578]\d{9}$/,
          //   trigger: "blur",
          //   message: "请输入正确的手机号"
          // }
        ],
        //设置密码
        checkpass: [
          { validator: validatePass, trigger: "blur" }
          // { min:6, max: 10, message: '长度在 6 到 10 个字', trigger: 'blur'},
        ],
        //确认密码
        pass: [{ validator: validatePass2, trigger: "blur" }],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    resetRegistForm() {
      //  console.log(this);
      this.$refs.registFormRef.resetFields();
    },
    go() {
      this.$router.push("/login");
    },
    getcode(){
      this.$axios.post('/api/user/sendEmail',{
        userEmail:this.registForm.email
      }).then(res=>{
        console.log(res);
      })
    },
    zhuce(){
      console.log(this.registForm.role)
      this.$axios.post('/api/user/register',{
        userEmail:this.registForm.email,
        userName:this.registForm.userName,
        userPassword:this.registForm.pass,
        userRole:this.registForm.role,
        yzm:this.registForm.captcha,
        i:this.registForm.role
      }).then(res=>{
        console.log(res);
      })
    },
    yx(){
      this.$axios.post('/api/user/cEmain',{
        userEmail:this.registForm.email
      }).then(res=>{
        console.log(res);
      })
    }
  }
};
</script>
<style scoped>
.login_container {
  height: 100%;
  background-color:#f2f2f2;
}
.login_box {
  width: 600px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 50px 70px;
}
.login_box h4 {
  margin: 0;
  padding: 0 20px 30px;
  text-align: center;
  font-size: 26px;
}
.vip {
  border: 1px solid #eee;
  position: relative;
  padding: 20px 10px;
}
.vip .hd {
  color: #289EFF;
  font-size: 18px;
}
.vip .tips {
  font-size: 14px;
  color: #666;
  margin-left: 20px;
}
.account {
  position: absolute;
  right: 50px;
  font-size: 14px;
  cursor: pointer;
}
.login {
  width: 150px;
  height: 60px;
}

.regist_form {
  width: 300px;
  box-sizing: border-box;
  margin: 60px auto;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.regist_captcha {
  width: 175px;
  margin-right: 8px;
}
</style>