<template>
    <div class="back">
        <div class="setionLeft"> 
            <div class="tabs">
                <div :class="step==0 ? class2 : class1" @click="changeSteps(0)">我的工作</div>
                <div :class="step==1 ? class2 : class1" @click="changeSteps(1)">主页管理</div>
                <div :class="step==2 ? class2 : class1" @click="changeSteps(2)">技术信用</div>
                <div :class="step==3 ? class2 : class1" @click="changeSteps(3)">协作群组</div>
                <div :class="step==4 ? class2 : class1" @click="changeSteps(4)">资金账户</div>
                <div :class="step==5 ? class2 : class1" @click="changeSteps(5)">信息设置</div>
                <div :class="step==6 ? class2 : class1" @click="changeSteps(6)">API交易平台</div>
                <div :class="step==7 ? class2 : class1" @click="changeSteps(7)">代码托管GitInn</div>
                <div :class="step==8 ? class2 : class1" @click="changeSteps(8)">其他</div>
                <a href="" class="left_b">
                    <el-button type="primary" round >前往企业版</el-button>
                </a>
            </div>
            <div class="box">
                <div v-if="step==0">
                    <work></work>
                </div>
                <div v-if="step==1">
                    <manage></manage>
                </div>
                <div v-if="step==2">
                    <credit></credit>
                </div>
                <div v-if="step==3">
                    <group></group>
                </div>
                <div v-if="step==4">
                    <account></account>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import work from './work'
import manage from './manage'
import credit from './credit'
import group from './group'
import account from './account'
export default {
    components:{
        work,
        manage,
        credit,
        group,
        account
    },
    data() {
      return {
        step: 0,
        class1: "tabsList",
        class2: "tabsList active",
      };
    },
    methods: {
      changeSteps(n){
          console.log(n);
          this.step=n;
      }
    }
  };
</script>
<style>
    .back{
        background: rgb(243, 243, 243);
        /* color:rgba(0, 0, 0, .8);*/
        color: #333; 
    }
    .tabs{
        width: 170px;
        height: 100%;
        background: white;
        margin-left: 140px;
        /* margin-top: 15px; */
    }
    .setionLeft{
        width: 90%;
        overflow:hidden;
        display:flex;
        justify-content: flex-start;
    }
    .tabsList{
        height: 40px;
        line-height: 40px;
        text-align: left;
        margin-left: 30px;
        font-size: 14px;
        color: #333;
        cursor: pointer;
    }
    .active{
        color: #258fe7;
        /* border-bottom: 2px solid #258fe7; */
    }
    a{
        text-decoration: none;
    }
    .left_b{
        margin-left: 20px;
        margin-right: 20px;
        /* margin-top: 15px; */
    }
</style>