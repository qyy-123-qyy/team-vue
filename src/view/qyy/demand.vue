<template>
    <div>
              <!-- 发布需求 -->
    <div class="item">
      <h3>发布需求</h3>
      <div class="item_content">
        <!-- 第一个 -->
           <div class="item_service">
           <p class="bg">
             <span class="image"><img src="../../assets/xqsl.png"></span>
             <span class="item_title">需求梳理</span>
           </p>
           <div class="secd">
                产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。
          </div>
          <div class="third">
            <div class="item_third">
              <span> <span class="keyword">严选资深</span>产品专家 更懂用户的需求</span>
            </div>
              <div class="item_third">
               <span>标准产品文档<span class="keyword">节约40%</span>开发成本</span>
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
             <span class="image"><img src="../../assets/zbxm.png"></span>
             <span class="item_title">整包项目</span>
           </p>
           <div class="secd">
               一站式软件开发服务，智能匹配优质开发者，五星级的过程体验和交付质量。
          </div>
          <div class="third">
            <div class="item_third">             
             <span>专属项目经理<span class="keyword">全程跟进</span>轻松高效</span>
            </div>
              <div class="item_third">
              <span>标准化开发流程 可视化在线监管</span>
            </div>
               <div class="item_third">
               <span>按阶段付款 平台<span class="keyword">托管担保</span></span>
            </div>
          </div>
          <div class="more">了解详情</div>
           </div>
           <!-- 第三个 -->
                <div class="item_service">
           <p class="bg">
             <span class="image"><img src="../../assets/ydgz.png"></span>
             <span class="item_title">云端工作</span>
           </p>
           <div class="secd">
                产品需求规划，是软件项目成功的关键，帮助您把产品想法更好地落地。
          </div>
          <div class="third">
            <div class="item_third">
               <span>优选<span class="keyword">5年+经验</span>的资深开发者</span>
            </div>
              <div class="item_third">
               <span>可选<span class="keyword">全职兼职</span>，支持定制每周工时</span>
            </div>
               <div class="item_third">
                 <span>每天提交日报，进度可控</span>
            </div>
          </div>
          <div class="more">了解详情</div>
           </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
*{
   margin: 0;
   padding: 0;
}
body{
    background-color: #f7f7f7
}
/* 发布需求  */
.item{
  width:970px;
  /* height: 600px; */
  margin:50px auto;
  background-color: #fff;
  padding:30px;
}
.item>h3{
  font-size: 32px;
  text-align: center;
  padding:19px 0 40px 0;
  font-weight: 500;
  color: #333;
  position: relative;
}
.item h3::before{
  width: 44px;
  height: 3px;
  position: absolute;
  content: "";
  left: 50%;
  top: 75px;
  margin-left: -22px;
  background-color: #44A0FF;
}
.item .item_content{
  width: 100%;
  height: 500px;
  display: flex;
}
.item .item_service{
  width: 308px;
  height: 500px;
  border: 1px solid #EBEFF5;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
  cursor: pointer;
}
.item .item_service:hover{
  border: 2px solid #308EFF;
}
.item .item_service:hover .keyword{
  color: orange;
}
.item .item_service:hover .more{
  background-color: #0075E0;
  color: #fff;
  border: none;
}
.item .item_service.item_service_two{
  margin: 0 20px;
}
.item .item_service .bg{
  width: 308px;
  height: 194px;
}
.item .item_service .bg .image{
  display:block;
    width: 55px;
  height: 55px;
}
.item .item_service .bg img{
  width: 55px;
  height: 55px;
  margin: 49px 0 0 124px ;
}
.item .item_service .bg .item_title{
font-size: 22px;
color: #666;
margin:70px 0 0 106px;
display: block;
}
.item .item_service .secd{
  margin: 40px 28px 0 25px;
  font-size: 14px;
  line-height:28px;
}
.item .item_service .third{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
.item .item_service .item_third{
      font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #858E9B;
    letter-spacing: 0;
    line-height: 30px;
}
.item .item_service .more{
  width:120px;
  height:30px;
  font-size: 14px;
  color: #465364;
  border: 1px solid #465364;
  border-radius: 30px;
  line-height: 30px;
  text-align: center;
  margin:30px 0 0 93px;
}
</style>