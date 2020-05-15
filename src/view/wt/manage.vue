<template>
    <div class="box">
        <div class="box_mng">
            <h3 class="top">主页管理</h3>
            <div class="images">
                <a href=""><img src="../../assets/wt/01.png" class="img_one"/></a>
                <a href="" class="img1">创建我的程序员主页</a>
                <a href=""><img src="../../assets/wt/02.png" class="img_two"/></a>
                <a href="" class="img1 img2">创建我的企业主页</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    body{
        background: rgb(243, 243, 243);
        color: #333; 
    }
    .box_mng{
        width: 830px;
        height: 400px;
        margin-left: 15px;
        background: white;
        position: relative;
    }
    .top{
        position: absolute;
        top:0px;
        left:15px;
    }
    .img_one{
        width:250px;
        height:195px;
        margin-top: 100px;
        margin-left: 155px;
    }
    .img_two{
        width:250px;
        height:195px;
        margin-top: 100px;
        margin-left: 25px;
    }
    a{
        text-decoration: none;
    }
    .img1{
        color: rgb(87, 86, 86);
        margin-top: 10px;
        position: absolute;
        top: 290px;
        left: 210px;
        font-size: 14px;
    }
    .img2{
        left: 500px;
    }
</style>