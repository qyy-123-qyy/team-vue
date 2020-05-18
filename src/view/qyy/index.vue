<template>
  <div class="index_contanier">
    <!-- 导航 -->
    <div class="contanier">
      <div class="index_nav">
        <!-- logo -->
        <div class="logo"></div>
        <!-- 导航 -->
        <div class="index_navbar">
          <ul class="index_navone">
            <li>首页</li>
            <li>云端工作</li>
            <li>程序员</li>
            <li class="server">
              更多服务
              <ol>
                <li>技术圈</li>
                <li>进制数据</li>
                <li>兼职招聘</li>
                <li>解决方案</li>
              </ol>
            </li>
            <!-- 搜索 -->
            <li>
              <div class="serach el-input el-input--suffix">
                <input
                  type="text"
                  autocomplete="off"
                  @keyup.enter="serchEnter"
                  placeholder="搜索您感兴趣的程序员"
                  class="el-input__inner serch"
                  v-model="val"
                />
                <span class="el-input__suffix">
                  <span class="el-input__suffix-inner">
                    <i class="el-input__icon el-icon-search" @click="serch()"></i>
                  </span>
                </span>
              </div>
            </li>
            <!-- 登录注册 -->
            <!-- <li class="login">登录</li>
            <li class="regist">免费注册</li> -->
          </ul>
        </div>
        <div class="dl">
            <p class="login">登录</p>
            <p class="regist">免费注册</p>
       </div>
        <!-- <div class="dl">
            <p class="login">
              工作台
              <ul>
                <li></li>
              </ul>
            </p>
            <p class="regist">免费注册</p>
       </div> -->
      </div>
      <!-- 中间部分 -->
      <p class="title">近43万优秀开发者 , 您的专属云端开发团队</p>
      <p class="sub-title">BAT级别的开发者 , 标准化的服务和交付</p>
      <div class="actions">
        <button class="btn blue" @click="blue">免费发布需求</button>
        <button class="btn light">申请签约订单</button>
      </div>
    </div>
    <!-- 开发服务方案 -->
    <div class="item">
      <h3>开发服务方案</h3>
      <div class="item_content">
        <!-- 第一个 -->
        <div class="item_service">
          <p class="bg">
            <span class="image">
              <img src="../../assets/index/1-1.png" />
            </span>
            <span class="item_title">需求梳理</span>
          </p>
          <div class="secd">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</div>
          <div class="third">
            <div class="item_third">
              <span>
                <span class="keyword">严选资深</span>产品专家 更懂用户的需求
              </span>
            </div>
            <div class="item_third">
              <span>
                标准产品文档
                <span class="keyword">节约40%</span>开发成本
              </span>
            </div>
            <div class="item_third">
              <span>免费提供开发工期、报价评估服务</span>
            </div>
          </div>
          <div class="more">了解详情</div>
        </div>
        <!-- 第二个 -->
        <div class="item_service item_service_two">
          <p class="bg bg_2">
            <span class="image">
              <img src="../../assets/index/2-1.png" />
            </span>
            <span class="item_title">整包项目</span>
          </p>
          <div class="secd">一站式软件开发服务，智能匹配优质开发者，五星级的过程体验和交付质量。</div>
          <div class="third">
            <div class="item_third">
              <span>
                专属项目经理
                <span class="keyword">全程跟进</span>轻松高效
              </span>
            </div>
            <div class="item_third">
              <span>标准化开发流程 可视化在线监管</span>
            </div>
            <div class="item_third">
              <span>
                按阶段付款 平台
                <span class="keyword">托管担保</span>
              </span>
            </div>
          </div>
          <div class="more">了解详情</div>
        </div>
        <!-- 第三个 -->
        <div class="item_service">
          <p class="bg bg_3">
            <span class="image">
              <img src="../../assets/index/3-1.png" />
            </span>
            <span class="item_title">云端工作</span>
          </p>
          <div class="secd">产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。</div>
          <div class="third">
            <div class="item_third">
              <span>
                优选
                <span class="keyword">5年+经验</span>的资深开发者
              </span>
            </div>
            <div class="item_third">
              <span>
                可选
                <span class="keyword">全职兼职</span>，支持定制每周工时
              </span>
            </div>
            <div class="item_third">
              <span>每天提交日报，进度可控</span>
            </div>
          </div>
          <div class="more">了解详情</div>
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="carousel">
      <el-carousel height="280px" width="1000px">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 程序员 -->
    <div class="item item_two">
      <h3>优秀程序员</h3>
      <div
        class="cxy_box"
        v-for="(item,index) in cxyList"
        :key="index"
        @click="jumpdetail(item.user_email)"
      >
        <div class="img_box">
          <img :src="item.user_avatar" />
        </div>
        <p>姓名：{{item.user_name}}</p>
        <p>类型：{{item.user_role}}</p>
        <p>邮箱号：{{item.user_email}}</p>
      </div>
    </div>
    <!-- 会员 -->
    <div class="item">
      <h3>开通会员，享用更多特权</h3>
      <div class="item_vip">
        <!-- 第一个 -->
        <div class="vip_box">
          <div class="vip">
            <img src="../../assets/index/vip_title.png" alt />
          </div>
          <div class="vip_line"></div>
          <div class="vip_title">
            <p class="vip_com">
              <img src="../../assets/index/vip_com.png" alt />
            </p>
            <span>需求优先</span>
          </div>
          <div class="vip_title vip_tex">
            <p class="vip_com">
              <img src="../../assets/index/zan.png" alt />
            </p>
            <span>最优技术人力解决方案</span>
          </div>
          <div class="know">了解详情</div>
        </div>
        <!-- 第二个 -->
        <div class="vip_box vip_mask">
          <div class="vip">
            <img src="../../assets/index/vip_title1.png" alt />
          </div>
          <div class="vip_line"></div>
          <div class="vip_title">
            <p class="vip_com">
              <img src="../../assets/index/vip_com1.png" alt />
            </p>
            <span>极速接单</span>
          </div>
          <div class="vip_title vip_tex1">
            <p class="vip_com">
              <img src="../../assets/index/chance.png" alt />
            </p>
            <span>更多接单机会</span>
          </div>
          <div class="know orange">了解详情</div>
        </div>
      </div>
    </div>
    <!-- 评价 -->
    <div class="evaluation_item">
      <div class="item item_three">
        <h3>最新精选评价</h3>
        <div class="evaluation_box">
          <el-carousel height="338px" width="1000px">
            <el-carousel-item v-for="(v,i) in datas" :key="i">
              <div class="evaluation">
                <div>
                  <img :src="v.img" />
                </div>
                <h3>{{v.h3}}</h3>
                <h4>{{v.h4}}</h4>
                <p>{{v.p}}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <span class="evaluation_more">查看更多</span>
      </div>
    </div>
    <!-- 数量 -->
    <div class="index_num">
      <ul>
        <li>
          <p class="num">429259</p>
          <p class="txt">优秀程序员</p>
        </li>
        <li class="li_two">
          <p class="num">7524</p>
          <p class="txt">优秀企业方</p>
        </li>
        <li>
          <p class="num">16081</p>
          <p class="txt">项目交易数</p>
        </li>
      </ul>
    </div>
    <!-- 成功案例 -->
    <div class="success_box">
      <div class="success">
        <div class="success_hd">
          <h3>成功案例</h3>
          <span class="evaluation_more success_more">查看更多</span>
        </div>
        <div class="success_right">
          <ul>
            <!-- 第一个 -->
            <li>
              <div>
                <img src="../../assets/index/cxy.png" />
              </div>
              <div class="success_content">
                <p class="success_title">成功案例：AUSHEN TECHNOLOGY 整包项目</p>
                <p class="price">¥147967</p>
                <p>项目周期：95天</p>
                <p>交付时间：2019-10-18</p>
              </div>
            </li>
            <!-- 第二个 -->
            <li class="success_two">
              <div>
                <img src="../../assets/index/cxy2.png" />
              </div>
              <div class="success_content">
                <p class="success_title">成功案例：美国Storify.ai科技公司 云端工作</p>
                <p class="price">¥70000</p>
                <p>项目周期：5个月</p>
                <p>交付时间：2019-08-27</p>
              </div>
            </li>
            <!-- 第三个 -->
            <li>
              <div>
                <img src="../../assets/index/cxy3.png" />
              </div>
              <div class="success_content">
                <p class="success_title">成功案例：光年实验室 云端工作</p>
                <p class="price">¥10000</p>
                <p>项目周期：持续云端工作</p>
                <p>交付时间：2019-08-01</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 免费发布 -->
    <div class="free_box">
      <div>
        <p class="free">免费发布需求</p>
        <p class="sign">申请签约接单</p>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "@/view/qyy/foot";
export default {
  data() {
    return {
      input: "",
      input1: "",
      input2: "",
      val: "",
      imgs: [
        { src: require("../../assets/index/img1.jpg") },
        { src: require("../../assets/index/img2.png") },
        { src: require("../../assets/index/img3.png") },
        { src: require("../../assets/index/img4.png") }
      ],
      datas: [
        {
          img: require("../../assets/index/first.png"),
          h3: "习惯近战平砍",
          h4: "2020-5-11",
          p: "做的很快，沟通也很好"
        },
        {
          img: require("../../assets/index/sec.png"),
          h3: "chen1111",
          h4: "2020-5-11",
          p:
            "工作态度认真，能够提前完成任务，为人靠谱且耐心，可以细心讲解各个步骤，沟通过程中没有差错，有机会希望下次还可以再合作?"
        },
        {
          img: require("../../assets/index/first.png"),
          h3: "Sanmu",
          h4: "2020-5-11",
          p:
            "项目因为公司需求确认的原因耽误了很久，但是远程开发仍然在近期帮忙调试接口和bug，表示非常感谢，交付质量也高?"
        }
      ],
      cxyList: []
    };
  },
  components: {
    foot
  },
  created() {
    this.dataAll();
    this.serchEnter();
  },
  methods: {
    //发布需求
    blue(){
      this.$router.push("/demand")
    },
    //获取程序员接口
    dataAll() {
      let self = this;
      this.$axios.post("/wb/excellent").then(function(res) {
        console.log(res);
        self.cxyList = res.data.data.showExcellent;
        console.log(self.cxyList);
      });
    },
    //跳转程序员详情传参
    jumpdetail(m) {
      this.$router.push("/programmer?info=" + m);
    },
    //按回车键搜索
    serchEnter() {
      console.log(1);
      this.serch();
    },
    //模糊查询
    serch() {
      if (this.val != "") {
      }

      console.log(this.val);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 导航 */
.index_contanier {
  width: 100%;
  height: 580px;
  background-image: url(../../assets/index/top-banner-5.jpg);
}
.contanier {
  width: 1140px;
  height: 580px;
  margin: auto;
}
.index_nav {
  width: 1140px;
  margin: auto;
  height: 60px;
  display: flex;
}
.logo {
  width: 160px;
  height: 45px;
  margin-top: 17.5px;
  background-image: url(../../assets/index/logo.png);
  background-repeat: no-repeat;
  background-size: 160px 45px;
}
.index_navone {
  list-style: none;
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  padding-left: 40px;
  line-height: 40px;
}
.index_navone > li {
  float: left;
  padding: 15px;
  color: #fff;
  cursor: pointer;
}
.index_navone .server {
  position: relative;
}
.index_navone .server:hover ol {
  display: block;
}
.index_navone .server ol {
  list-style: none;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: white;
  border-radius: 5px;
  display: none;
}
.index_navone .server ol li {
  padding: 15px 15px 0;
  text-align: center;
  color: #333;
  cursor: pointer;
}
.dl{
  display:flex;
  margin-left: 20px;
}
.dl p{
  color: #fff;
  padding:0 20px 0 0;
  line-height: 70px; 
  cursor: pointer; 
}
.serch {
  width: 300px;
  padding-left: 10px;
  margin-top: -5px;
}
.login {
 
}
.title {
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-top: 80px;
}
.sub-title {
  color: #fff;

  font-size: 24px;
  text-align: center;
  margin-top: 40px;
}
.actions {
  width: 352px;
  margin: 80px 394px;
}
.btn {
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  border-radius: 40px;
  border: 0;
  cursor: pointer;
}
.btn.blue {
  background: linear-gradient(to right, #289eff, #0075e0);
  margin-right: 50px;
}
.btn.light {
  background-color: transparent;
  border: 1px #fff solid;
  padding: 9px 19px;
}
.btn.light:hover {
  background-color: #fff;
  color: #333;
}
/* 开发服务方案 */
.item {
  width: 1004px;
  /* height: 600px; */
  margin: 50px auto;
}
.item > h3 {
  font-size: 32px;
  text-align: center;
  padding: 19px 0 40px 0;
  font-weight: 500;
  color: #333;
  position: relative;
}
.item h3::before {
  width: 44px;
  height: 3px;
  position: absolute;
  content: "";
  left: 50%;
  top: 75px;
  margin-left: -22px;
  background-color: #44a0ff;
}
.item .item_content {
  width: 100%;
  height: 500px;
  display: flex;
}
.item .item_service {
  width: 308px;
  height: 500px;
  border: 1px solid #ebeff5;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
  cursor: pointer;
}
.item .item_service:hover {
  border: 2px solid #308eff;
}
.item .item_service:hover .keyword {
  color: orange;
}
.item .item_service:hover .more {
  background-color: #0075e0;
  color: #fff;
  border: none;
}
.item .item_service.item_service_two {
  margin: 0 40px;
}
.item .item_service .bg {
  background-image: url(../../assets/index/1.png);
  width: 308px;
  height: 194px;
}
.item .item_service .bg.bg_2 {
  background-image: url(../../assets/index/2.png);
}
.item .item_service .bg.bg_3 {
  background-image: url(../../assets/index/3.png);
}
.item .item_service .bg .image {
  display: block;
  width: 55px;
  height: 55px;
}
.item .item_service .bg img {
  width: 55px;
  height: 55px;
  margin: 49px 0 0 124px;
}
.item .item_service .bg .item_title {
  font-size: 22px;
  color: #fff;
  margin: 70px 0 0 106px;
  display: block;
}
.item .item_service .secd {
  margin: 40px 28px 0 25px;
  font-size: 14px;
  line-height: 28px;
}
.item .item_service .third {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.item .item_service .item_third {
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #858e9b;
  letter-spacing: 0;
  line-height: 30px;
}
.item .item_service .more {
  width: 120px;
  height: 30px;
  font-size: 14px;
  color: #465364;
  border: 1px solid #465364;
  border-radius: 30px;
  line-height: 30px;
  text-align: center;
  margin: 30px 0 0 93px;
}
/* 轮播 */
.carousel {
  width: 1000px;
  height: 280px;
  margin: auto;
}
.carousel img {
  width: 1000px;
  height: 280px;
}
/* 程序员 */
.item_two {
  width: 966px;
}
.cxy_box {
  width: 300px;
  border: 1px solid #eee;
  display: inline-block;
  margin: 0 20px 20px 0;
  padding: 40px 0;
}
.cxy_box .img_box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 100px 20px;
  overflow: hidden;
}
.cxy_box img {
  width: 100px;
  height: 100px;
}
.cxy_box p {
  line-height: 30px;
  color: #666;
  text-align: center;
}
/* 会员 */
.vip_box {
  width: 414px;
  height: 440px;
  background-image: url(../../assets/index/vip.png);
  background-size: 414px 440px;
  background-repeat: no-repeat;
  padding: 10px 10px;
}
.vip_box.vip_mask {
  background-image: url(../../assets/index/vip_mask.png);
  margin: 0 0 0 20px;
}
.vip {
  width: 143px;
  height: 113px;
}
.vip img {
  width: 143px;
  height: 113px;
  margin: 30px 120px;
}
.vip_box .vip_line {
  width: 344px;
  height: 1px;
  margin: 70px 30px 24px;
  background-color: rgba(0, 0, 0, 0.07);
}
.vip_box .vip_title {
  height: 30px;
  width: 100px;
  display: flex;
  margin: 36px auto;
}
.vip_box .vip_title.vip_tex {
  width: 210px;
}
.vip_box .vip_title.vip_tex1 {
  width: 135px;
}
.vip_box .vip_title .vip_com {
  width: 22px;
  height: 22px;
  margin-top: 4px;
  margin-right: 5px;
}
.vip_box .vip_title .vip_com img {
  width: 22px;
  height: 22px;
}
.vip_box span {
  font-size: 18px;
  color: #333;
  line-height: 30px;
}
.item .vip_box .know {
  background-color: #1994ff;
  width: 190px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  border-radius: 30px;
  line-height: 40px;
  text-align: center;
  margin: auto;
}
.item .vip_box .know.orange {
  background: #e1a83f;
}
.item_vip {
  display: flex;
  width: 857px;
  margin: auto;
}
/* 评价 */
.evaluation_item {
  width: 100%;
  height: 520px;
  background: rgba(250, 250, 250, 1);
}
.evaluation_box {
  width: 100%;
  height: 360px;
}
.item_three {
  height: 520px;
  padding: 0;
  margin: 0 auto;
}
.evaluation div {
  width: 122px;
  height: 122px;
  margin: auto;
  padding: 30px 0 10px;
}
.evaluation img {
  width: 122px;
  text-align: center;
  font-weight: 500;
}
.evaluation h3 {
  text-align: center;
  font-size: 18px;
  color: rgba(50, 50, 50, 1);
  line-height: 25px;
  font-weight: 400;
}
.evaluation h4 {
  text-align: center;
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
  padding: 10px;
}
.evaluation p {
  text-align: center;
  font-size: 18px;
  color: #323232;
  padding: 20px 50px 0;
  line-height: 30px;
  cursor: pointer;
}
.evaluation p:hover {
  color: #258fe6;
}
.evaluation_more {
  display: block;
  width: 148px;
  height: 14px;
  padding: 13px 0;
  font-size: 14px;
  border-radius: 20px;
  border: 1px #9b9b9b solid;
  text-align: center;
  margin: auto;
  cursor: pointer;
}
/* 数量 */
.index_num {
  width: 1000px;
  height: 90px;
  margin: 40px auto;
}
.index_num ul {
  width: 100%;
  height: 100%;
  list-style: none;
}
.index_num ul li {
  float: left;
  width: 332px;
  height: 100%;
}
.index_num ul li.li_two {
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
}
.index_num ul li .num {
  font-size: 48px;
  text-align: center;
}
.index_num ul li .txt {
  font-size: 16px;
  text-align: center;
}
/* 成功案例 */
.success_box {
  width: 100%;
  background-color: rgba(250, 250, 250, 1);
  height: 400px;
  padding-top: 60px;
}
.success_box .success {
  width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
}
.success_box .success .success_hd {
  width: 140px;
  height: 130px;
  margin-right: 60px;
}
.success_box .success .success_hd h3 {
  font-size: 32px;
  text-align: center;
  font-weight: 500;
  color: #333;
  position: relative;
  padding-bottom: 40px;
}
.success_box .success .success_hd h3::before {
  width: 44px;
  height: 3px;
  position: absolute;
  content: "";
  background-color: #44a0ff;
  top: 50px;
  left: 50%;
  margin-left: -22px;
}
.success_box .success .success_hd .success_more {
  width: 120px;
}
.success_box .success .success_hd .success_more:hover {
  background-color: #0075e0;
  color: #fff;
  border: none;
}
.success_box .success_right {
  float: left;
  width: 800px;
  height: 100%;
}
.success_box .success_right ul {
  width: 100%;
  height: 100%;
  list-style: none;
}
.success_box .success_right ul li {
  width: 260px;
  height: 100%;
  float: left;
  cursor: pointer;
}
.success_box .success_right ul li.success_two {
  margin: 0 10px;
}
.success_box .success_right ul li:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
.success_box .success_right ul li img {
  vertical-align: middle;
  width: 260px;
  height: 200px;
}
.success_box .success_right ul li .success_content {
  padding: 20px;
  background-color: #fff;
}
.success_box .success_right ul li .success_content .success_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 700;
}
.success_box .success_right ul li .success_content .price {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
}
.success_box .success_right ul li .success_content p {
  font-size: 14px;
}
.free_box {
  height: 200px;
  background-image: url(../../assets/index/bg.png);
  width: 100%;
  background-size: 100% 200px;
  background-color: #189df6;
  margin-top: 60px;
  position: relative;
}
.free_box div {
  left: 50%;
  position: absolute;
  top: 50%;
  margin: -26px 0 0 -209px;
}
.free_box p {
  width: 190px;
  height: 20px;
  padding: 15px 0;
  display: inline-block;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
}
.free_box p.free {
  background-color: #fff;
  color: #0075e0;
}
.free_box p.sign {
  color: #fff;
  border: 2px solid #fff;
  height: 16px;
  margin-left: 30px;
}
.free_box p.sign:hover {
  background-color: #0075e0;
}
</style>

