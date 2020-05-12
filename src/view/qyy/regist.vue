<template>
  <div class="login_container">
    <div class="login_box">
      <h4>账号注册</h4>
      <div class="vip">
        <span class="hd">新用户注册</span>
        <span class="tips">尊敬的用户，欢迎您注册!</span>
        <span class="account" @click="go">
          已有账号，
          <font color="red">去登录</font>
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
          <el-input v-model="registForm.phone" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <!-- 创建密码-->
        <el-form-item prop="checkpass">
          <el-input v-model="registForm.checkpass" type="password" placeholder="设置密码"></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="pass">
          <el-input v-model="registForm.pass" type="password" placeholder="确认密码"></el-input>
        </el-form-item>
        <!-- 注册 -->
        <el-form-item class="btn">
          <el-button type="primary">注册</el-button>
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
    /*  var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registForm.pass !== '') {
            this.$refs.registFormRef.validateField('checkpass');
          }
          callback();
        }
      }; */
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
    return {
      //登录表单数据对象
      registForm: {
        phone: "",
        checkpass: "",
        pass: "",
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
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            trigger: "blur",
            message: "请输入正确的邮箱号"
          }
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
  color: #ff4466;
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