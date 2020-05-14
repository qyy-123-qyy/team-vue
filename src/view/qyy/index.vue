<template>
    <div>
      <div class="index_contanier">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="0" class="index_nav"><img src="../../assets/logo@2x.png" alt="" srcset="" width="140"> </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">云端工作</el-menu-item>
    <el-menu-item index="3">程序员</el-menu-item>
    <el-submenu index="4">
      <template slot="title">更多服务</template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
      </el-submenu >
    <el-menu-item class="index_input">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
    </el-menu-item>
    <el-menu-item index="5" class="index_login">登录</el-menu-item>
    <el-menu-item index="6" class="index_regist">免费注册</el-menu-item>
      </el-menu>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

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
   padding:0 15px;
   background-color: #008def;
   color: #fff;
   height: 36px;
   line-height: 36px;
   margin-top: 12px;
   border-radius: 30px;
   margin-left: 5px;
}
</style>