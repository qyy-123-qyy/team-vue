<template>
    <div>
             <!-- 友情链接 -->
    <div class="friend_link">
       <img src="../../assets/index/logo_new.png">
       <div class="link">
         <h5>重点城市程序员兼职推荐</h5>
         <div>
           <ul>
             <li>北京程序员兼职</li>
             <li>上海程序员兼职</li>
             <li>深圳程序员兼职</li>
             <li>杭州程序员兼职</li>
             <li>广州程序员兼职</li>
             <li>成都程序员兼职</li>
             <li>武汉程序员兼职</li>
           </ul>
      </div>
      <span>更多</span>
       </div>
       <!-- 第二个 -->
          <div class="link link_two">
         <h5>重点岗位程序员兼职推荐</h5>
         <div>
           <ul>
             <li>Java兼职</li>
             <li>C++兼职</li>
             <li>PHP兼职</li>
             <li>C兼职</li>
             <li>C#兼职</li>
             <li>Python兼职</li>
             <li>Ruby兼职</li>
             <li>Node.js兼职</li>
             <li>Android兼职</li>
              <li>iOS兼职</li>
             <li>前端兼职</li>
           </ul>
      </div>
      <span>更多</span>
       </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="foot_left">
        <ul>
          <li>App下载</li>
          <li>帮助</li>
          <li>关于我们</li>
          <li>合作伙伴</li>
          <li>意见反馈</li>
          <li><span>@程序员客栈</span> 远程工作</li>
        </ul>
      </div>
      <div class="foot_right">
        <p>浙ICP备15029175号</p>
        <p><img src="../../assets/index/badge.png">浙公网安备 33011002011566号</p>
      </div>
    </div>
    </div>
</template>
<script>
export default{
    
}
</script>
<style>
 /* 友情链接  */
.friend_link{
  width: 1000px;
  height: 170px;
  margin: auto;
  padding: 50px 0 20px;
}
.friend_link img{
  width: 115px;
  height: 38px;
  float: left;
}
.friend_link .link{
  width: 800px;
  float: left;
  padding-left: 85px;
}
.friend_link .link.link_two{
  margin-left: 115px;
}
.friend_link .link h5{
  color: #4a4a4a;
  margin-bottom: 10px;
  font-size: 14px;
}
.friend_link .link ul{
  list-style: none;
}
.friend_link .link ul li{
  font-size: 12px;
  color: #4a4a4a;
  margin-bottom: 12px;
  margin-right: 15px;
  float: left;
  cursor: pointer;
}
.friend_link .link ul li:hover{
 color: #258fe6;
}    
.friend_link .link span{
  font-size: 12px;
  color: #4a4a4a;
  float: right;
}
/* 底部 */
.footer{
  width: 1000px;
  height: 60px;
  margin:auto;
  border-top:1px solid #eee; 
}
.foot_left{
  height: 100%;
  float: left;
}
.foot_left ul{
  list-style: none;
}
.foot_left ul li{
  font-size: 12px;
  color: #4a4a4a;
  margin-right: 30px;
  float: left;
  line-height: 60px;
  cursor: pointer;
}
.foot_left ul li:hover{
 color: #258fe6;
} 
.foot_left ul li span{
  color: rgb(204, 204, 204);
}
.foot_right{
  height: 100%;
  float: right;

}
.foot_right p{
  font-size: 12px;
  color: #4a4a4a;
  cursor: pointer;
}
.foot_right p:hover{
  color: #258fe6;
}
.foot_right p:nth-child(1){
  margin-top: 17px;
  text-align: right;
}
.foot_right p:nth-child(2){
  display: flex;
}
.foot_right p:nth-child(2) img{
  margin-right: 4px;
}
</style>