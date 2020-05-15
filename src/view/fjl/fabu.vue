<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <div style="color: gray;background: #ffffcc;font-size: 14px;line-height: 36px;text-align:center;margin-top:15px;margin-bottom:15px">请详细描述您的岗位要求，以便于平台为您推荐合适的开发者</div>
        <div class="publish-hd">
          <i></i>
          发布云端工作岗位 
          <a href="javascript;" target="_blank" style="color: #258fe6;text-decoration: none">(了解更多)</a>
        </div>
        <el-form :model="demand" :rules="rules" ref="demandForm" label-position="top" class="demo-ruleForm">
          <el-form-item label="开发职位类型 " prop="demandName">
             <el-radio v-model="radio" label="1">后端工程师</el-radio>
            <el-radio v-model="radio" label="2">前端工程师</el-radio>
             <el-radio v-model="radio" label="3">移动端工程师</el-radio>
            <el-radio v-model="radio" label="4">DBA工程师</el-radio>
             <el-radio v-model="radio" label="5">测试工程师</el-radio>
            <el-radio v-model="radio" label="6">运维工程师</el-radio>
             <el-radio v-model="radio" label="7">产品经理</el-radio>
            <el-radio v-model="radio" label="8">游戏工程师</el-radio>
             <el-radio v-model="radio" label="9">设计师</el-radio>
            <el-radio v-model="radio" label="10">小程序</el-radio>
             <el-radio v-model="radio" label="11">其他</el-radio>
          </el-form-item>
          <el-form-item label="语言技能要求" prop="demandBudget">
            <el-input v-model="demand.demandBudget" placeholder="如php\python\vue等，最多五项" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="每周工作时间 " prop="demandName">
             <el-radio v-model="radio" label="1">12-18小时</el-radio>
            <el-radio v-model="radio" label="2">18-24小时</el-radio>
             <el-radio v-model="radio" label="3">24-30小时</el-radio>
            <el-radio v-model="radio" label="4">30-36小时</el-radio>
            <p style="font-size:12px;line-height: 2;color: gray;">具体时间安排，可与开发者协商，如：周一~周五每天工作4小时，周末每天工作2小时，每周累计24小时。</p>
          </el-form-item>
          <div></div>
          <el-form-item label="工作说明" prop="demandDetail">
            <el-input type="textarea" :rows="6" placeholder="请描述需要开发者日常完成的开发内容，越详细越有助于我们对接口合适的开发者接单" v-model="demand.demandDetail"></el-input>
          </el-form-item>
          <el-form-item>
             <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
          </el-form-item>
          <el-form-item>
              <el-radio v-model="radio" label="1"><b>试用7天（试用期免押金，满意后再正式合作）</b></el-radio>
               <el-radio v-model="radio" label="2"><b>需要开发票（税率9.36%）</b></el-radio>
          </el-form-item>
          <el-form-item>
              <b>发布驻场招聘     </b>
               <el-radio v-model="radio" label="1-1"><b>需要</b></el-radio>
               <el-radio v-model="radio" label="2-2"><b>不需要</b></el-radio>
          </el-form-item>
          <el-form-item>
            <div class="tishi">
            <p>温馨提示</p>
            <p>1.云端工作的协作方式，包括远程、驻场两种工作方式；</p>
            <p>2、云端工作收费：服务费率为每月薪资的6%，如需开票另收税费9.36%；</p>
            <p>3、发布云端工作，即代表您同意
              <a href="javascript;">《程序员客栈服务协议》</a>
              <a href="javascript;">《程序员客栈工作规则》</a></p>
             </div>
          </el-form-item>
          <el-form-item>
            <div class="tt">
              <a href="javascript;" class="qx">取消</a>
              <a href="/xuqiu" class="fb">发布需求</a>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
     return {
      radio:{
          radio: '1'
      },
      demand: {
        demandName: '',
        demandType: [],
        demandBudget: '',
        demandDetail: '',
        demandFile: {}
      },
      filelist:{},
      rules: {
        demandName: [{required: true, message: '项目名称不能为空', trigger: 'blur'}],
        demandType: [{required: true, message: '项目类型必选', trigger: 'blur'}],
        demandBudget: [
          {required: true, message: '项目预算不能为空', trigger: 'blur'},
          { type: 'number', message: '项目预算必须为数字值', trigger: 'change'}
        ],
        demandDetail: [{required: true, message: '项目描述不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
   
  }
}
</script>


<style>
  .publish-hd {
    border-bottom: 1px solid #eee;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    color: #666;
    font-weight: 700;
  }
  .publish-hd i {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
    width: 40px;
    height: 53px;
    background: url(../../assets/img/medal.png);
  }
  .tishi{
    line-height: 6px;
  }
  .tishi a{
    text-decoration: none;
    color:#308eff ;
  }
  .qx {
    text-decoration: none;
    display: block;
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    color: white;
    text-decoration: none;
    color: white;
    background-color: gray;

  }
  .fb {
    text-decoration: none;
    display: block;
    float: right;
    margin-right: 300px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 2px;
    font-size: 16px;
    color: white;
    text-decoration: none;
    color: white;
    background-color: #308eff;

  }
</style>