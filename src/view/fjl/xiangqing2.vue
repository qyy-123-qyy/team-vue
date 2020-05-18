<template>
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
    
    <div class="deploy-warp">
        <div class="banner">
            <img src="../../assets/img/Group.png" class="Group">
            <h2>标准化软件定制开发服务</h2>
            <p>
                <span>五星级</span>
                "过程体验与交付质量"
            </p>
            <a href="/xuqiu" class="button" track="descripition,post,middle">
                <img src="" style="height: 30px;">发布需求
            </a>
        </div>
        <div class="title">
            平台优势
            <p>advantage of platform</p>
        </div>
        <ul class="advantage">
            <li>
                <img src="../../assets/img/Group1.png" >
                <h4>专业的需求梳理服务</h4>
                <p>资深产品专家协助前期需求分析、梳理，让产品想法更好地落地，节约开发成本、提升交付效率。</p>
            </li>
            <li>
                <img src="../../assets/img/Group2.png" >
                <h4>智能匹配全球资深开发者</h4>
                <p>海量技术人才库，平台签约开发者至少具备3年以上的研发经历，快速匹配最合适的资深开发者。</p>
            </li>
            <li>
                <img src="../../assets/img/Group3.png" >
                <h4>过程可控 省心高效</h4>
                <p>专职项目经理全程监管，确保开发进度和质量；可视化的在线研发管理工具，进度、产出一目了然。。</p>
            </li>
        </ul>
        <div class="reliable">
            <div class="right">
                <h3>可靠贴心的服务保障</h3>
                <p>客户顾问一对一跟进、随时响应需求</p>
                <p>按阶段分期付款，平台进行托管担保</p>
                <p>成熟的风险管理机制，确保交付质量</p>
                <p>项目交付后，可选长期的迭代维护服务</p>
            </div>
        </div>
        <div style="margin: 60px auto 0; width: 960px;height: 3px;border-bottom: 1px solid rgba(0,0,0,0.08);"></div>
        <div class="title">
            案例评价
            <p>typical cases</p>
        </div>
        <ul class="case">
            <li>
                <img src="../../assets/img/case1.png"  class="top">
                <div class="bottom">
                    <div class="cent">
                        <img src="../../assets/img/daishu.png" class="left">
                        <div class="right">
                            <h5>袋鼠麻麻</h5>
                            <p>一款专注于2-10岁儿童托管服务，致力于打造一站式专业连锁儿童托管平台。</p>
                        </div>
                    </div>
                    <h5>袋鼠麻麻CEO</h5>
                    <p>客户评价：感谢项目团队的付出，虽然过程曲折，但团队始终及时响应和从不推卸责任，让我们这种不懂技术的传统企业也可以放心合作。</p>
                </div>
            </li>
            <li>
                <img src="../../assets/img/case2.png"  class="top">
                <div class="bottom">
                    <div class="cent">
                        <img src="../../assets/img/xinxuex.png" class="left">
                        <div class="right">
                            <h5>新学习App</h5>
                            <p>一款可以观看线上课程，听读学习资料的APP，让用户认识智库的各项服务、购买课程、会议、资料及实体商品等。</p>
                        </div>
                    </div>
                    <h5>重庆新美育文化传媒有限公司</h5>
                    <p>客户评价：企业可以通过众包增强核心竞争力，程序员客栈是专业的开发平台，选择它是一个正确的决策。</p>
                </div>
            </li>
        </ul>
        <a href="/dlist" class="more-case" >查看更多案例 > </a>
        <div class="services">
            <div class="title">
            开发服务
            <p>development services</p>
            </div>
            <div class="title1">全品类定制服务</div>
            <ul class="type">
                <li>
                    <img src="../../assets/img/type1.png" >
                    <h5>WEB开发</h5>
                </li>
                <li>
                    <img src="../../assets/img/type2.png" >
                    <h5>APP开发</h5>
                </li>
                <li>
                    <img src="../../assets/img/type3.png" >
                    <h5>软件开发</h5>
                </li>
                <li>
                    <img src="../../assets/img/type4.png" >
                    <h5>H5开发</h5>
                </li>
                <li>
                    <img src="../../assets/img/type5.png" >
                    <h5>公众号</h5>
                </li>
                <li>
                    <img src="../../assets/img/type6.png" >
                    <h5>小程序</h5>
                </li>
            </ul>
            <div class="title1">全研发流程服务</div>
            <ul class="type">
                <li>
                    <img src="../../assets/img/type11.png" >
                    <h5>需求梳理</h5>
                </li>
                <li>
                    <img src="../../assets/img/type22.png" >
                    <h5>原型设计</h5>
                </li>
                <li>
                    <img src="../../assets/img/type33.png" >
                    <h5>UI设计</h5>
                </li>
                <li>
                    <img src="../../assets/img/type44.png" >
                    <h5>程序开发</h5>
                </li>
                <li>
                    <img src="../../assets/img/type55.png" >
                    <h5>测试</h5>
                </li>
                <li>
                    <img src="../../assets/img/type66.png" >
                    <h5>代码托管</h5>
                </li>
            </ul>
        </div>
        <div class="crop-flow">
            <div class="title">
            合作流程
            <p>cooperation process</p>
            </div>
            <ul class="flow-list">
                <li class="item fl">
                    <img src="../../assets/img/flow1.png" class="group">
                    <img src="../../assets/img/flow-jian.png"  class="path">
                    <p class="hd">发布项目</p>
                    <p class="bd1">成功发布项目后，客户顾问将在1小时内联系，沟通、确认具体的需求，并全程跟进</p>
                </li>
                <li class="item fl">
                    <img src="../../assets/img/flow2.png" class="group">
                    <img src="../../assets/img/flow-jian.png" class="path">
                    <p class="hd">需求梳理</p>
                    <p class="bd1">资深产品专家协助梳理需求，输出需求功能文档，包括产品结构图、业务核心流程图、完整功能明细</p>
                </li>
                <li class="item fl">
                    <img src="../../assets/img/flow3.png" class="group">
                    <img src="../../assets/img/flow-jian.png" class="path">
                    <p class="hd">平台报价</p>
                    <p class="bd1">平台根据需求功能文档，提供明确的项目总报价、预估的开发工期；客户确认后，进入开发阶段</p>
                </li>
                <li class="item fl">
                    <img src="../../assets/img/flow4.png" class="group">
                    <img src="../../assets/img/flow-jian.png" class="path">
                    <p class="hd">项目实施</p>
                    <p class="bd1">由专属的项目经理负责组建线上开发团队 ，协调、监管研发流程；客户分阶段付款、托管费用</p>
                </li>
                <li class="item fl">
                    <img src="../../assets/img/flow5.png" class="group">
                    <p class="hd">项目验收</p>
                    <p class="bd1">项目整体开发、测试完成后，交付给客户验收；项目结束后，可选长期的迭代维护服务</p>
                </li>
            </ul>
            <a href="/xuqiu" class="xuqiu" >发布需求 </a>
            <div style="margin: 60px auto 0; width: 960px;height: 3px;border-bottom: 1px solid rgba(0,0,0,0.08);"></div>
            <div class="title">
                常见问题
                <p>typica issues</p>
            </div>
            <div class="issue">
                <div style="margin: 20px auto 0; width: 1000px;height: 3px;border-bottom: 1px dashed rgba(0,0,0,0.08);"></div>
                <h4>Q：整包项目是如何报价的？</h4>
                <p>1、根据发布的项目需求，客户经理将初步预估项目的价格范围作为参考；“需求梳理”环节结束后，客户报价组将根据标准化的需求功能文档，给出明确的报价。</p>
                <p>2、费用说明：1）报价包含客栈收取14%的平台服务费；2）如果需要开发票，需要额外缴纳相应税额，税率为6%。</p>
                <div style="margin: 20px auto 0; width: 1000px;height: 3px;border-bottom: 1px dashed rgba(0,0,0,0.08);"></div>
                <h4>Q：“需求梳理”项目是必须的吗？如何收费？</h4>
                <p>1、“需求梳理”是整包项目开发成功的关键。在这一阶段，产品经理将结合用户需求场景和市场分析，进行产品规划、设计，把项目想法转化为可落地的专业文档，打造符合用户需求和项目要求的产品设计，提高开发效率、节约成本，减少不必要的重复沟通和返工。</p>
                <p>2、该项目费用为1980元，资深产品专家将与您深入合作16工时，交付内容包括产品功能清单、产品思维导图、核心功能流程图 
                    <a href="/xuqiu" target="_blank" style="color: #258fe6;text-decoration: none;">更多详情</a></p>
                <div style="margin: 20px auto 0; width: 1000px;height: 3px;border-bottom: 1px dashed rgba(0,0,0,0.08);"></div>
                <h4>Q：如何确保远程开发者的工作质量？ </h4>
                <p>1、客栈将严格筛选优秀、匹配需求的开发者组建项目团队；由专属项目经理全程跟进、协调开发，保证进度、严控风险；平台提供里程碑、日报、代码托管等协作工具服务，工作产出看得见、可检验。</p>
                <p>2、客栈提供费用托管担保，分阶段验收、结算； 如果开发者个人原因导致出现问题，平台有权采取扣减佣金、降权拉黑、扣除保证金等处罚措施。</p>
            </div>
        </div>
        <!-- <el-col :span="24">
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
      </el-col> -->
      
    </div>
    <foot></foot>
    </div>
</template>
<script>
import foot from "@/view/qyy/foot";
export default {
    components: {
    foot
  },
}
</script>
<style>
    .index_nav{
  width: 160px;
  height: 60px;
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
    color: #fff;
    height: 36px;
    line-height: 36px;
    margin-top: 12px;
    margin-left: 5px;
  }
    .banner {
    margin: 20px auto;
    background-image: url(../../assets/img/banner_bj.jpg);
    background-position: center;
    background-repeat: no-repeat;
    height: 699px;
    width: 90%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    }
    .banner .Group {
    height: 98px;
    }
    .banner h2 {
    height: 72px;
    font-size: 56px;
    line-height: 72px;
    }
    .banner p {
    letter-spacing: 8px;
    font-size: 20px;
    }
    .banner p span {
    color: #CB9D53;
    }
    .banner .button {
    margin-top: 66px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 18px;
    background-color: #CB9D53;
    }
    .button {
    width: 220px;
    height: 52px;
    padding: 0;
    background: #4f9ff5;
    line-height: 52px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    }
    .title {
    height: 70px;
    font-size: 32px;
    color: black;
    line-height: 30px;
    position: relative;
    text-align: center;
    padding-top: 60px;
    box-sizing: content-box;
    }
    .title  p{
        font-size: 14px;
        height: 20px;
        color: black;
        opacity: 0.7;
    }
    .advantage {
    text-align: center;
    display: flex;
    width: 988px;
    margin: 65px auto;
    }
    .advantage li {
    -webkit-box-flex: 1;
    flex: 1;
    list-style: none;
    }
   .advantage img {
    width: 106px;
    }
    .advantage h4 {
    height: 25px;
    font-size: 18px;
    color: #181a20;
    line-height: 25px;
    margin: 14px 0;
    }
    .advantage p {
    width: 230px;
    height: 54px;
    font-size: 13px;
    color: #666;
    line-height: 18px;
    margin: 0 auto;
    text-align: left;
    }
    .reliable {
    background-image: url(../../assets/img/reliable.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 988px;
    height: 308px;
    margin: 0 auto;
    position: relative;
    }
    .reliable .right {
    width: 316px;
    position: absolute;
    right: 58px;
    top: 34px;
    }
    .reliable h3 {
    height: 45px;
    font-size: 32px;
    color: #1d2a3a;
    line-height: 45px;
    }
    .reliable p {
    background-image: url(../../assets/img/gou.png);
    font-size: 14px;
    color: #666;
    line-height: 20px;
    background-repeat: no-repeat;
    background-position: left center;
    text-indent: 2em;
    }
    .case {
    width: 1000px;
    margin: 65px auto 30px;
    display: flex;
    }
    .case li:nth-child(1) {
    margin-right: 10px;
   }
    .case li {
        background: #fff;
        box-shadow: 0 5px 18px 0 rgba(0,0,0,.05);
        width: 490px;
        list-style: none;
    }
    .case .top{
        width: 490px;
    }
    .case li .bottom {
    padding: 22px;
    box-sizing: border-box;
    }
    .case li .bottom .cent {
    display: flex;
    margin-bottom: 41px;
    }
    .case li .left {
    width: 66px;
    height: 66px;
    }
    .case li .right {
    margin-left: 17px;
    }
    .case li .right h5 {
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: #000;
    margin: 0;
    }
    .case li .right p {
    height: 35px;
    font-size: 12px;
    color: #919aa7;
    line-height: 17px;
    margin-top: 8px;
    }
    .case li h5 {
    font-size: 16px;
    color: #000;
    height: 22px;
    line-height: 22px;
    margin: 0;
    }
    .case li p {
    height: 35px;
    font-size: 12px;
    color: #919aa7;
    line-height: 17px;
    margin-top: 8px;
    }
    .more-case {
    text-decoration: none;
    display: block;
    width: 210px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 2px;
    border: 1px solid #308eff;
    font-size: 16px;
    color: #308eff;
    margin: 0 auto;
    }
    .services {
    background-color: #f4f5f9;
    margin-top: 60px;
    padding-bottom: 80px;
    }
    .title1 {
    width: 963px;
    margin: 53px auto 20px;
    height: 25px;
    font-size: 18px;
    border-left: 3px solid #308eff;
    color: #1d2a3a;
    line-height: 25px;
    position: relative;
    text-indent: 1em;
    }
    .services .type {
    width: 1022px;
    margin: 0 auto;
    display: flex;
    height: 190px;
    }
    .services .type li {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    background: #fff;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,.02);
    border-radius: 2px;
    margin: 0 6px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    }
   .flow-list {
    width: 1000px;
    margin: 49px auto;
    display: flex;
    }
    .item {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    margin: 0 15px;
    position: relative;
    font-size: 13px;
    font-weight: 400;
    color: #999;
    line-height: 23px;
    }
     .fl {
        float: left;
        list-style: none;
    }
    .item .group {
    width: 80px;
    }
    .item .path {
    position: absolute;
    height: 10px;
    right: -45px;
    top: 33px;
    }
    .item .hd {
    color: #000;
    font-weight: 700;
    margin: 0 0 1em;

   }
   .item .bd1 {
    text-align: left;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
   }
   .xuqiu {
    text-decoration: none;
    display: block;
    width: 210px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 2px;
    background-color:#308eff ;
    font-size: 16px;
    color: white;
    margin: 0 auto;
    }
    .issue {
    width: 1000px;
    margin: 0 auto;
    }
    .issue h4 {
    font-size: 18px;
    font-weight: 600;
    color: #19222e;
    line-height: 25px;
    }
    .issue p {
    font-size: 15px;
    font-weight: 400;
    color: #19222e;
    line-height: 28px;
    margin: 0;
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
  /* .footer{
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
  } */
</style>