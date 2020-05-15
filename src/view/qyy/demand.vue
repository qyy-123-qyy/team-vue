<template>
  <div>
    <div class="item">
      <!-- 发布需求 -->
      <h3>发布需求</h3>
      <div class="item_content">
        <!-- 第一个 -->
        <div class="item_service">
          <p class="bg">
            <span class="image">
              <img src="../../assets/xqsl.png" />
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
          <p class="bg">
            <span class="image">
              <img src="../../assets/zbxm.png" />
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
          <p class="bg">
            <span class="image">
              <img src="../../assets/ydgz.png" />
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
      <!-- 服务方案 -->
      <section class="compare">
        <h4>我该如何选择合适的服务方案？</h4>
        <ul class="table">
          <li>
              <span></span>
            <span>需求梳理</span>
            <span>整包项目</span>
            <span>云端工作</span>
            <span>短期雇佣</span>
          </li>
          <li>
            <span>服务定义</span>
            <span>协助客户将产品想法转为专业的产品文档，明确产品功能。客栈将基于此进行报价。</span>
            <span>软件研发项目整体外包，覆盖功能设计、开发到测试全流程，交付完整的产品。</span>
            <span>按月聘用远程开发员工，支持灵活定制用工时间。</span>
            <span>自行筛选、预约平台的程序员，按工时计价。</span>
          </li>
          <li>
            <span>适用场景</span>
            <span>希望整体外包，但不具备产品策划能力，只有初步想法，具体功能需求不明确。</span>
            <span>研发定制化的软件产品，希望按时高质量地完成。产品需求已明确，但缺乏技术力量，需要委托开发。</span>
            <span>希望快速、低成本地招聘到有经验的优秀人才；非核心技术岗位，工作量并不饱和。</span>
            <span>小规模的开发或优化需求，通常一周以内；对技术有所了解，可以和开发者进行研发沟通。</span>
          </li>
          <li>
            <span>专属服务</span>
            <span>专属的客户经理、项目经理、产品经理，提供1周的梳理服务</span>
            <span>专属的客户经理、项目经理全程跟进开发</span>
            <span>专属的客户经理全程协助管理</span>
            <span>无</span>
          </li>
          <li>
            <span>收费标准</span>
            <span>
              <strong>￥1980</strong>，如需开票另收税费6%
            </span>
            <span>
              平台服务费
              <strong>14%</strong>，如需开票另收税费6%
            </span>
            <span>
              平台服务费
              <strong>6%</strong>，如需开票另收税费6%
            </span>
            <span>
              平台服务费
              <strong>7%</strong>，不提供开票服务
            </span>
          </li>
        </ul>
      </section>
      <h6 class="one-more-step">我想要进一步了解服务方案</h6>
      <div class="title-meta">如有任何问题，欢迎咨询客服热线：0571-28120931 转1</div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "@/view/qyy/foot"
export default {
      components:{
      foot,
    },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f7f7f7;
}
/* 发布需求  */
.item {
  width: 970px;
  /* height: 600px; */
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
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
  margin: 0 20px;
}
.item .item_service .bg {
  width: 308px;
  height: 194px;
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
  color: #666;
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
  line-height: 30px;
  text-align: center;
  margin: 30px 0 0 93px;
}

.compare{
    width: 950px;
    margin-top: 40px;
}
.compare h4 {
    margin: 0 auto 34px;
    font-size: 22px;
    color: #333;
    text-align: center;
    font-family: SourceHanSansSC-bold;
}
.compare > ul{
    list-style: none;
}
.compare > ul > li {
    display: flex;
    justify-content: space-between;
    padding: 15px 0 10px;
    min-height: 50px;
    color: #666;
    font-size: 13px;
    text-align: left;
    line-height: 25px;
    font-family: SourceHanSansSC-regular;
    border-bottom: 1px solid #EBEEF5;
}
.compare > ul > li:first-of-type {
    color: #909399;
    line-height: 25px;
    font-size: 15px;
    text-align: center;
    border-top: 1px solid #EBEEF5;
}
.compare > ul > li:nth-of-type(2n) {
    background: #fafafa;
}
.compare > ul > li>span{
    width: 200px;
    display: inline-block;
}
.compare > ul > li > span:first-of-type {
    width: 56px;
}
.one-more-step {
    margin: 57px auto 31px;
    color: rgba(16, 16, 16, 1);
    font-size: 20px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
}
.title-meta{
    margin-bottom: 20px;
    font-size: 18px;
    color: #999;
    text-align: center;
}
</style>