<template>
  <div>
    <el-row type="flex" justify="center" >
      <el-col :span="16" >
        <div class="intro" style="background: #fff;margin-bottom: 10px;">
            <h3>完善个人简历后，才能申请签约开发者进行接单
                <span class="status">
                    <a href="javascript;" target="_blank" style=" text-decoration: none;color:#308eff;">签约规则</a>
                </span>
            </h3>
            <p> 
            成为程序员客栈签约开发者后，才能在平台接单，包括平台派单类项目、雇佣项目等，并 享受交易担保等服务。
            <br>
            申请签约需要满足以下条件：
            <br>
            1.三年及以上正规互联网工作经验
            <br>
            2.按签约规则如实填写个人简历
            <br>
            3.具有契约精神、服务意识，能按约定高效完成开发
            <br>
            4.不在程序员客栈黑名单（无开发黑历史）
            </p>
        </div>
        <div class="verify" style="background: #fff;margin-bottom: 10px;">
            <h5>
                实名认证
                <span class="status">
                    <a href="javascript;" target="_blank">去认证</a>
                </span>
            </h5>
        </div>
        <div style="background: #fff;margin-bottom: 10px;padding:30px 20px 20px 10px;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item >
                <el-form-item style="float:left">
                   <p style="font-size: 18px;color: #1d2a3a;line-height: 22px; font-weight: 500;">基本信息</p> 
                </el-form-item>
                <el-form-item style="float:right">
                <el-button>取消</el-button>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form-item>
            <el-form-item label="昵称" prop="name" >
                 <el-col :span="10">
                <el-input v-model="ruleForm.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="职业方向" prop="region">
                <el-col :span="10">
                <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="求职" value="qz"></el-option>
                <el-option label="自由工作" value="zygz"></el-option>
                <el-option label="正常工作" value="zcgz"></el-option>
                </el-select>
                </el-col>
            </el-form-item>
             <el-form-item label="活动区域" >
                <el-col :span="10">
                <el-form-item prop="quyu1">
                <el-select v-model="ruleForm.quyu1" placeholder="请选择" type="quyu">
                <el-option label="产品经理" value="cpjl"></el-option>
                <el-option label="设计师" value="sjs"></el-option>
                <el-option label="前端" value="qd"></el-option>
                <el-option label="移动端" value="yd"></el-option>
                <el-option label="小程序" value="xcx"></el-option>
                </el-select>
                 </el-form-item>
                </el-col>
                <el-col :span="10">
                <el-form-item prop="quyu2">
                <el-select v-model="ruleForm.quyu2" placeholder="请选择">
                <el-option label="产品经理" value="cpjl"></el-option>
                <el-option label="设计师" value="sjs"></el-option>
                <el-option label="前端" value="qd"></el-option>
                <el-option label="移动端" value="yd"></el-option>
                <el-option label="小程序" value="xcx"></el-option>
                </el-select>
                 </el-form-item>
                </el-col>
            </el-form-item>
             <el-form-item label="所在地区" >
                <el-col :span="10">
                <el-form-item prop="diqu1">
                <el-select v-model="ruleForm.diqu1" placeholder="请选择" type="diqu">
                <el-option label="北京" value="bj"></el-option>
                <el-option label="上海" value="sh"></el-option>
                <el-option label="天津" value="tj"></el-option>
                <el-option label="重庆" value="cq"></el-option>
                <el-option label="西安" value="xa"></el-option>
                </el-select>
                 </el-form-item>
                </el-col>
                <el-col :span="10">
                <el-form-item prop="diqu2">
                <el-select v-model="ruleForm.quyu2" placeholder="请选择">
                <el-option label="北京" value="bj"></el-option>
                <el-option label="上海" value="sh"></el-option>
                <el-option label="天津" value="tj"></el-option>
                <el-option label="重庆" value="cq"></el-option>
                <el-option label="西安" value="xa"></el-option>
                </el-select>
                 </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="日薪" prop="num">
                <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="1000">

                </el-input-number>
            </el-form-item>
            <el-form-item label="可工作时间" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-form-item>
                <el-radio label="工作日"></el-radio>
                <el-time-select v-model="value"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
                <el-time-select v-model="value"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
               </el-form-item>
               <el-form-item style="height:10px"></el-form-item>

                <el-form-item>
                <el-radio label="周末"></el-radio>
                <el-time-select v-model="value"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
                <el-time-select v-model="value"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
            </el-form-item>
                </el-radio-group>
            </el-form-item>
            </el-form>
        </div>
        <div class="profile" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">个人介绍</h5>
                <div class="opts" style="float:right">
                    <el-button type="primary" @click="onSubmit">编辑</el-button>
                </div>
            </header>
            <div class="empty">点击右上角“添加”按钮添加教育经历</div>
        </div>
        <div class="profile" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">工作经历</h5>
                <div class="opts" style="float:right">
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </div>
            </header>
            <div class="empty">点击右上角“添加”按钮添加工作经历</div>
        </div>
        <div class="profile" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">教育经历</h5>
                <div class="opts" style="float:right">
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </div>
            </header>
            <div class="empty">点击右上角“添加”按钮添加教育经历</div>
        </div>
        <div class="profile" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">技能</h5>
                <div class="opts" style="float:right">
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </div>
            </header>
            <div class="empty">点击右上角“添加”按钮添加技能</div>
        </div>
        <div class="profile" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">作品</h5>
                <div class="opts" style="float:right">
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                </div>
            </header>
            <div class="empty">点击右上角“添加”按钮添加作品(至少添加3项）</div>
        </div>
        <div class="info" style="background: #fff;margin-bottom: 10px;padding:0px 20px 20px 10px;">
            <header>
                <h5 style="float:left">专业社区影响力</h5>
            </header>
            <div class="edit">
            <el-form ref="form" :model="form" label-width="80px">
                <div class="line">
                    <el-col :span="24">
                    <img src="../../assets/img/github.png" alt="github">
                    <el-form-item label="Github" style="margin-left:10px">
                        <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                        </el-col>
                    <el-button type="primary" @click="onSubmit" style="float:right;margin-right:50px">添加</el-button>
                    </el-form-item>
                    </el-col>
                </div>
                <div class="line">
                    <el-col :span="24">
                    <img src="../../assets/img/zhihu.png" alt="github">
                    <el-form-item label="Github" style="margin-left:10px">
                        <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                        </el-col>
                    <el-button type="primary" @click="onSubmit" style="float:right;margin-right:50px">添加</el-button>
                    </el-form-item>
                    </el-col>
                </div>
                <div class="line">
                    <el-col :span="24">
                    <img src="../../assets/img/sta.png" alt="github">
                    <el-form-item label="Github" style="margin-left:10px">
                        <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                        </el-col>
                    <el-button type="primary" @click="onSubmit" style="float:right;margin-right:50px">添加</el-button>
                    </el-form-item>
                    </el-col>
                </div>
                <div class="line">
                    <el-col :span="24">
                    <img src="../../assets/img/dri.png" alt="github">
                    <el-form-item label="Github" style="margin-left:10px">
                        <el-col :span="10">
                        <el-input v-model="form.name"></el-input>
                        </el-col>
                    <el-button type="primary" @click="onSubmit" style="float:right;margin-right:50px">添加</el-button>
                    </el-form-item>
                    </el-col>
                </div>
            </el-form>
            </div>
        </div>
        <el-button class="btn">
            <span>申请签约开发者</span>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          quyu1:'',
          quyu2:'',
          diqu1:'',
          diqu2:'',
          num:300,
          value:'',
          work:'',
          resource: '',
        },
         form: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择', trigger: 'change' }
          ],
          quyu1: [
            { type: 'quyu', required: true, message: '请选择', trigger: 'change' }
          ],
          quyu2: [
            { type: 'quyu',required: true, message: '请选择', trigger: 'change' }
          ],
          diqu1: [
            { type: 'diqu', required: true, message: '请选择', trigger: 'change' }
          ],
          diqu2: [
            { type: 'diqu',required: true, message: '请选择', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
       
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleChange(value) {
        console.log(value);
      },
    }
  }
</script>
<style >
    body {
    line-height: 1;
    background: #f4f5f9;
    }
    .intro{
        padding: 13px 20px;
        line-height: 30px;
        box-sizing: border-box;
        margin: 0;
    }
    .intro h3 {
        display: block;
        padding: 12px 0 25px;
        text-align: center;
        border-bottom: 2px solid rgba(1,1,1,.06);
        font-size: 22px;
        color: #222;
        line-height: 30px;
    }
    .intro .status{
        color: grey;
        position: relative;
        display: inline-block;
        font-size: 14px;
        line-height: 30px;
        float: right;
        font-weight: 500;
    }
    .intro .status a {
        font-size: 14px;
        line-height: 20px;
    }
    .intro p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin: 24px 0 20px;
        font-size: 14px;
        color: #333;
        line-height: 30px;
    }
    .verify {
    padding: 13px 20px;
    }
    .verify h5 {
    font-size: 16px;
    color: #1d2a3a;
    line-height: 22px;
    font-weight: 500;
    }
    .verify .status{
        color: grey;
        float: right;
        position: relative;
        display: inline-block;
        font-size: 14px;
        line-height: 30px;
        margin-left: 100px;
        font-weight: 500;
    }
    .verify .status a {
        
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        color:#308eff;
    }
    .profile  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    border-bottom: 1px solid #ebeef5;
    }
    
   .profile h5 {
    font-weight: 500;
    font-size: 16px;
    color: #1d2a3a;
    line-height: 22px;
    }
    .profile .empty {
    margin: 112px auto 104px;
    font-size: 27px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #cdcdcd;
    line-height: 38px;
    }
    .info  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ebeef5;
    }
    form .line {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #ebeef5;
    }
    .line img {
    position: absolute;
    left: 0;
    top:15px;
    width: 26px;
    height: 26px;
    max-width: 100%;
    }
    .btn {
        display: block;
        margin: 30px auto;
        width: 210px;
        height: 46px;
        background: #308eff;
        border-radius: 2px;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        text-align: center;
        padding: 12px 20px;
        line-height: 20px;
    }
</style>