<template>
  <div>
    <div>
      <div class="index_contanier">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="0" class="index_nav"><img src="../../assets/img/logo_new.png" alt="" srcset="" width="140"> </el-menu-item>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">云端工作</el-menu-item>
          <el-menu-item index="3">程序员</el-menu-item>
          <el-submenu index="4">
            <template slot="title">更多服务</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>img/
            <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu >
          <el-menu-item class="index_input">
              <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
          </el-menu-item>
          <el-menu-item index="5" class="index_login">登录</el-menu-item>
          <el-menu-item index="6" class="index_regist" >免费注册</el-menu-item>
          </el-menu>
      </div>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
       
        <div class="content-top">
            <h4 style="color:black;margin-top:20px;margin-bottom:15px">发布新项目需求</h4>
            <p>1、请提供详细的项目资料，以便于我们为您推荐合适的开发者</p>
            <p>2、整包项目收费标准：报价含14%的平台服务费，如需开票另收税费9.36%</p>
            <p>3、项目发布之后，客栈工作人员将在半个工作日内联系您</p>
        </div>
        <el-form :model="demand" :rules="rules" ref="demandForm" label-position="top" class="demo-ruleForm">
          <el-form-item label="第一步：项目名称 " prop="demandName">
            <el-input v-model="demand.demandName" placeholder="请输入项目名称"></el-input>
          </el-form-item>
          <el-form-item label="第二步：我的项目类型（可多选）" prop="demandType">
            <el-checkbox-group v-model="demand.demandType">
              <el-checkbox label="Android">
                 <img src="../../assets/img/do1.png" class="origin" style="width: 105px;height: 123px;">
              </el-checkbox>
              <el-checkbox label="iOS">
                 <img src="../../assets/img/do2.png" class="origin" style="width: 105px;height: 123px;">
              </el-checkbox>
              <el-checkbox label="pc网站">
                 <img src="../../assets/img/do3.png" class="origin" style="width: 105px;height: 123px;">
              </el-checkbox>
              <el-checkbox label="微信开发端">
                 <img src="../../assets/img/do4.png" class="origin" style="width: 105px;height: 123px;">
              </el-checkbox>
              <el-checkbox label="HTML5">
                 <img src="../../assets/img/do5.png" class="origin" style="width: 105px;height: 123px;">
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="第三步：项目预算（元）" prop="demandBudget">
            <el-input v-model="demand.demandBudget" placeholder="请输入金额" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label=" 第四步：我的项目介绍" prop="demandDetail">
            <el-input type="textarea" :rows="8" placeholder="请输入项目介绍" v-model="demand.demandDetail"></el-input>
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
            <el-checkbox v-model="checked">我已阅读并同意
                <a href="javascript;" style="text-decoration: none;color:#258fe6">《程序员发布协议》</a>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即发布</el-button>
            <el-button @click="resetForm('demandForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-col :span="24">
        <div class="bottom">
            <div class="links">
              <a href="javascript;" class="logo">
                <img src="../../assets/img/logo_new.png" style="width: 100%">
              </a>
              <div class="container">
                  <h5>重点城市程序员兼职推荐</h5>
                  <div class="item_b">
                      <div class="list">
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                      </div>
                      <span class="more">更多</span>
                  </div>
              </div>
              <div class="container">
                  <h5>重点岗位程序员兼职推荐</h5>
                  <div class="item_b">
                      <div class="list">
                          <a href="javascript;">Java兼职</a>
                          <a href="javascript;">Java兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                          <a href="javascript;">北京程序员兼职</a>
                      </div>
                      <span class="more">更多</span>
                  </div>
              </div>
            </div>
        </div>
         <div class="footer">
        <div class="footer-container">
          <a href="javascript;" class="item_b">APP下载</a>
          <a href="javascript;" class="item_b">帮助</a>
          <a href="javascript;" class="item_b">关于我们</a>
          <a href="javascript;" class="item_b">合作伙伴</a>
          <a href="javascript;" class="item_b">意见反馈</a>
          <span style="color: rgb(204, 204, 204);" class="ui-item">
            @程序员客栈
            <a href="javascript;" title="远程工作" style="text-decoration: none;">远程工作</a>
          </span>
          <div style="float:right" class="footer-r">
            <p>
              <a href="javascript;" target="_blank" class="ui-item_fr">浙ICP备15029175号</a>
             </p> 
             <p>
              <a href="javascript;" target="_blank" class="ui-item_fr1" style="margin-top:0px;padding:0px">
                <img width="20" height="20" style="float:left" src="../../assets/img/badge.png">
                <span>浙公网安备  33011002011566号</span>
              </a>
              </p>
          </div>
        </div>
      </div>
      </el-col>
  </div>
</template>


<script>
export default {
  data() {
    return {
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
  .index_nav{
  width: 160px;
  height: 60px;
  /* background: yellow; */
  }
  .index_contanier{
      width:1140px;
      margin: auto; 
  }
  .index_input{
      width:300px;
      margin-left: 100px;
  }
  .index_login{
      margin-left:200px;
  }
  .index_regist{
    height: 20px;
    padding:0 15px;
    /* background-color: #008def; */
    color: #fff;
    height: 36px;
    line-height: 36px;
    margin-top: 12px;
    /* border-radius: 30px; */
    margin-left: 5px;
  }
   .content-top{
      margin: 10px 0;
      padding: 10px 20px;
      background-color: #ebf5fe;
      border: 1px solid #badefb;
      color: #73afe0;
      font-size: 12px;
    }
  .bottom{
      margin-top: 30px;
      padding: 50px 0 25px;
      background:white;
   }
   .bottom .links{
      width: 1000px;
      margin: 0 auto;
      font-size: 12px;
      color: #0c0c0c;
   }
   .bottom .links .logo{
      display: block;
      position: absolute;
      z-index: 1;
      width: 115px;
      margin-left: 0;
   }
   .container{
      padding-left: 210px;
      position: relative;
      min-height: 60px;
   }
   .container h5{
     margin: 0 0 10px 0;
    line-height: 2;
   }
   .container .item_b{
      overflow: hidden;
      position: relative;
      height: 25px;
   }
   .container .list{
     max-width: 720px;
   }
   .container .list a{
      text-decoration: none;
      display: inline-block;
      margin-bottom: 12px;
      margin-right: 15px;
      color: #4a4a4a;
  }
  .footer{
    line-height: 60px;
    background: #fff;
  }
  .footer-container{
    width: 1000px;
    margin: auto;
    border-top: 1px solid #eee;
  }
  .footer .item_b{
    text-decoration: none;
    color: #4a4a4a;
    padding: 0;
    margin-right: 30px;
    font-size: 12px;
  }
  .ui-item{
    margin-right: 30px;
    font-size: 12px;
  }
  .ui-item a{
    line-height: 1.3;
    color: rgba(0, 0, 0, .8);
  }
  .footer-r p{
    margin: 0 0 -1em;
  }
  .footer-r a{
    margin-top: 17px;
    text-decoration: none;
    color: #4a4a4a;
    padding: 0;
    font-size: 12px;
    line-height: 1;
  }
  .footer-r span{
    float: left;
    height: 20px;
    line-height: 20px;
    margin: 0px 0px 0px 5px;
  }
</style>