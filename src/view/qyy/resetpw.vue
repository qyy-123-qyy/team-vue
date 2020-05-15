<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step title="输入邮箱"></el-step>
      <el-step title="身份验证"></el-step>
      <el-step title="重置密码"></el-step>
      <el-step title="重置成功"></el-step>
    </el-steps>
    <div class="box">
    <!-- 邮箱 -->
      <div v-if="active==0">
        <p>您账户绑定的邮箱</p>
        <div>
          <el-input v-model="yx" placeholder="请输入邮箱"></el-input>
        </div>
        <div>
          <el-input v-model="yzm" placeholder="请输入验证码" class="yzm_input"></el-input>
          <el-button type="info">获取验证码</el-button>
        </div>
        <el-button class="primary" type="primary">确认</el-button>
      </div>
      <!-- 身份验证 -->
      <div v-if="active==1">
        <p>您的角色</p>
        <div>
          <el-input v-model="yhm" placeholder="请输入用户名"></el-input>
        </div>
        <div>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <el-button class="primary" type="primary">确认</el-button>
      </div>
      <!-- 重置密码 -->
      <div v-if="active==2">
      <p>请重新设置密码</p>
        <el-form
          :model="resetpwForm"
          status-icon
          :rules="resetpwFormRules"
          ref="resetpwRef"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item prop="checkpass">
            <el-input type="password" v-model="resetpwForm.checkpass" placeholder="重置密码"></el-input>
          </el-form-item>
          <el-form-item prop="Pass">
            <el-input type="password" v-model="resetpwForm.Pass" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="primary" type="primary">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 重置成功 -->
      <div v-if="active==3">
        <p class="checkimg"><img src="../../assets/index/check.png" alt=""></p>
        <p class="reset">重置成功</p>
      </div>
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
        } else if (this.resetpwForm.pass !== "") {
          this.$refs.resetpwRef.validateField("checkpass");
        }
        callback();
      }
    };
    //确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.resetpwForm.checkpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active:2,
      yx: "",
      yzm: "",
      yhm: "",
      value: "",
      options: [
        {
          value: "选项1",
          label: "普通用户"
        },
        {
          value: "选项2",
          label: "程序员"
        }
      ],
     resetpwForm: {
        pass: "",
        checkPass: ""
      },
      resetpwFormRules: {
        //设置密码
        checkpass: [
          { validator: validatePass, trigger: "blur" }
          // { min:6, max: 10, message: '长度在 6 到 10 个字', trigger: 'blur'},
        ],
        //确认密码
        pass: [{ validator: validatePass2, trigger: "blur" }]
      }
        
    };
  }
};
</script>
<style scoped>
.box {
  padding: 20px;
  margin: 100px auto;
  width: 400px;
  height: 300px;
}
.el-input {
  width: 300px;
  height: 50px;
  margin-bottom: 0px;
}
.el-select{
  width: 300px;
}
.primary{
  margin: 10px 0 0;
}
.yzm_input {
  width: 183px;
}
.checkimg{
  text-align: center;
}
.reset{
  text-align: center;
}
</style>