<template>
    <div>
       <div class="main" v-for="(k,v) in proList" :key="v">
           <div class="main_left">
               <div class="main_left_top">
                <div class="main_img"><img src="../../assets/index/1.png"></div>
               <p class="name">{{k.user_name}}</p>
               <p class="company">西点科技</p>
               </div>
               <div class="main_left_bottom">
                   <p>可工作地点：</p>
                   <p>可工作时间：</p>
                   <button>预约沟通</button>
               </div>
           </div>
           <div class="main_right">
               <div class="present">
                   <h3>个人介绍</h3>
                   <p>介绍内容</p>
               </div>
               <div class="present work">
                   <h3>工作经历</h3>
                   <p>经历内容</p>
               </div>
               <div class="present work">
                   <h3>技能</h3>
                   <p>技能内容</p>
               </div>
                <div class="present work">
                   <h3>作品</h3>
                   <p>作品内容</p>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            proList:[],
            getDta:""
        }
    },
    created(){
  this.proAll();
  this.getDta=this.$route.query.info;
  console.log(this.getDta)
    },
    methods:{
       proAll(){
           //跳转后的页面代码
        let self=this;          
          this.$axios.post("/wb/excellent",{user_email: this.getDta}).then(function(res){
              console.log(res);
              self.proList=res.data.data.showExcellent;
              console.log(self.proList);
          })
         },
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.main{
    width: 1000px;
    background-color: pink;
    display: flex;
    margin: auto;
}
.main .main_left{
    width: 260px;
    background-color: khaki;
}
.main .main_left .main_left_top{
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
}
.main .main_left .main_img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 90px;
}
.main .main_left .main_img img{
    width: 80px;
    height: 80px;
}
.main .main_left p{
    padding: 20px 0 0;
    text-align: center;
}
.main .main_left p.name{
    font-size: 18px;
    color: #333;
}
.main .main_left p.company{
   font-size: 12px;
   color: #a8a8a8;
}
.main .main_left .main_left_bottom{
    padding: 40px 0;
    background-color: gainsboro;
    margin-top: 40px;
}
.main .main_left .main_left_bottom p{
    color: #96989c;
    text-align: left;
    padding:0 15px 0 45px;
    line-height: 30px;
}
.main .main_left .main_left_bottom button{
   background-color: #308EFF;
   width: 160px;
   height: 40px;
   border: 0;
   color: #fff;
   margin: 20px 50px;
   
}
.main .main_right{
  border: 1px solid #eee;
  width: 700px;
}
.main .main_right .present{
  border-bottom: 1px solid #eee;
  margin-bottom:30px;
  background-color: yellow;
}
.main .main_right .present.work{
  border-top: 1px solid #eee;
}
.main .main_right .present h3{
  border-bottom: 1px solid #eee;
  margin: 0;
  padding: 7px 5px 7px 20px;
  font-size: 16px;
  font-weight: 400;
}
.main .main_right .present p{
  padding: 12px 20px 20px;
}
</style>