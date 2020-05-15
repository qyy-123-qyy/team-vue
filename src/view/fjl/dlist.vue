<template>
    <div>
        <div class="top">
            <a href="/xuqiu" class="btn" track="descripition,post,middle">我要发布需求</a>
        </div>
        <div class="main">
            <div class="title">成功案例</div>
            <div class="container">
                <div class="projects">
                    <div class="p_item">
                        <a href="javascript;" target="_blank" data-type="image">
                            <div class="image">
                                <img src="../../assets/img/1.png" alt="成功案例：AUSHEN  TECHNOLOGY 整包项目">
                            </div>
                            <div class="meta">
                                <p>成功案例：AUSHEN  TECHNOLOGY 整包项目</p>
                                <span class="price" >￥
                                    <em style="font-size:26px">147865</em>
                                </span>
                                <span class="period">
                                    <em class="time">项目周期：95天</em>
                                    <em>交付时间：2020-10-18</em>
                                </span>
                
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.top {
    /* position: fixed; */
    /* top: 82px; */
    padding-top: 20px;
    width: 100%;
    /* z-index: 1; */
    background-color: #fff;
    padding-bottom: 20px;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    text-align: center;
}
.top .btn {
    display: inline-block;
    width: 110px;
    height: 30px;
    line-height: 30px;
    background-color: #258fe7;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
}
.main {
    display: block;
    padding-top: 55 px;
    margin: 0 auto;
    width: 1000px;
}
.title {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    color: #666;
    font-weight: 700;
}
.container {
    width: 1000px;
    margin: 0 auto;
}
.cases .projects {
    margin-top: 25px;
    margin-right: -30px;
}
.p_item {
    width: 314px;
    margin: 0 27px 27px 0;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    float: left;
}
.p_item a{
    text-decoration: none;
}
.image {
    display: block;
    overflow: hidden;
    width: 312px;
    height: 238px;
}
 .image img {
    margin-top: -30px;
    max-width: 100%;
    vertical-align: middle;
}
.p_item .meta {
    overflow: hidden;
    padding: 20px 15px 25px 20px;
    background-color: #f8f8f8;
    color: #595b65;
    line-height: 1;
}
.p_item .meta p {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #424450;
    line-height: 1.33;
}
.p_item .meta .price {
    font-size: 18px;
}
.p_item .meta .period {
    margin-top: 1px;
    font-size: 12px;
    float: right;
}
.p_item .meta .period .time {
    margin-bottom: 7px;
}
.p_item .meta .period em {
    display: block;
    font-style: normal;
}
</style>