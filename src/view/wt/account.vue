<template>
    <div>
        <div class="account">
            <div class="top_info">
                <div class="info_left">
                    <div class="info_one">
                        <span class="zhye">账户余额</span>
                        <a href="" class="check">查看明细></a>
                    </div>
                    <div class="info_two">
                        <div class="price">￥0.00</div>
                        <a href="" class="xq">详情</a>
                    </div>
                    <div class="info_three">
                        <div class="three_item">薪资余额
                            <a href="">￥0.00</a>
                        </div>
                        <div class="three-line"></div>
                        <div class="three_item">冻结余额
                            <a href="">￥0.00</a>
                        </div>
                    </div>
                    <div class="info_four">
                        <a href="" class="left_btn">我要充值</a>
                        <a href="" class="right_btn">我要取现</a>
                    </div>
                </div>
                <div class="ifo_right">
                    <div class="info_rt_top">
                        <div class="right_top">
                            <span>账户管理</span>
                            <a href="" class="edit">编辑</a>
                        </div>
                        <p class="group pay">
                            <span class="name">支付宝</span>
                        </p>
                        <p class="group card">
                            <span class="name">银行卡</span>
                        </p>
                    </div>
                    <div class="info_rt_top">
                        <div class="right_top">
                            <span>我的权益</span>
                            <a href="" class="edit">查看></a>
                        </div>
                        <p class="group intergroul">
                            <span class="name">积分</span>
                            <span class="txt">0分</span>
                        </p>
                        <p class="group money">
                            <span class="name">现金劵</span>
                            <span class="txt">0分</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="down_info">
                <div class="title">收支记录</div>
                <div class="stats">
                    <div class="summary">
                        <span class="desc">累计收入0.00元，服务0个项目，共计0个客户</span>
                        <ul class="tab">
                            <li class="on">我的收入</li>
                            <li>我的支出</li>
                        </ul>
                    </div>
                     <div style="height: 300px;">
                        <div style="font-size: 20px;text-align: center; color: #999;">您暂时没有收入记录，祝早日赚到第一笔收入！</div>
                    </div>
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
    .account{
        width: 830px;
        margin-left: 15px;
    }
    .top_info{
        overflow: hidden;
    }
    .info_left{
        width: 540px;
        height: 240px;
        background: white;
        position: relative;
        float: left;
    }
    .info_one{
        width: 480px;
        height: 20px;
        margin-left: 30px;
        margin-right: 0px;
    }
    .zhye{
        font-size: 14px;
        color: #666;
    }
    .check{
        font-size: 14px;
        color: #258fe6;
        float: right;
    }
    .info_two{
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
        align-items: center;
        
    }
    .price{
        line-height: 66px;
        text-align: left;
        font-weight: 600;
        font-size: 47px;
        color: #222222;
    }
    .xq{
        margin-left: 19px;
        line-height: 27px;
        font-size: 19px;
        color: #1d90f6;
    }
    .info_three{
        margin-top: 11px;
        margin-left: 30px;
        display: flex;
    }
    .three_item{
        line-height: 27px;
        font-size: 19px;
        color: #666666;
    }
    .three_item a{
        color: #1e91f5;
    }
    a{
        text-decoration: none;
    }
    .three-line{
        margin-left: 31px;
        margin-right: 22px;
        width: 1px;
        height: 27px;
        background-color: #666666;
    }
    .info_four{
        position: absolute;
        bottom: 15px;
        left: 30px;
        font-size: 0;
    }
    .info_four a{
        display: inline-block;
        width: 234px;
        height: 35px;
        line-height: 35px;
        border-radius: 18px;
        text-align: center;
        color: #fff;
        font-size: 14px;
    }
    .left_btn{
        background-color: #258fe6;
        margin-right: 10px;
    }
    .right_btn{
        background-color: #fdc20f;
    }
    .ifo_right{
        margin-left: 550px;
        font-size: 14px;
    }
    .info_rt_top{
        margin-bottom: 10px;
        padding: 15px;
        border: 1px solid #eee;
        background-color: #fff;
    }
    .right_top{
        margin-bottom: 15px;
    }
    .edit{
        position: relative;

    }
    .info_rt_top a{
        float: right;
        color: #258fe6;
    }
    .edit::before{
        display: block;
        content: '';
        position: absolute;
        left: -18px;
        top: 2px;
        background: url(../../assets/wt/icons.png) 0 -97px no-repeat;
        width: 13px;
        height: 13px;
    }
    .group{
        position: relative;
        padding-left: 30px;
    }
    .name{
        display: inline-block;
        width: 45px;
    }
    p {
        margin: 0 0 1em;
        line-height: 1.33;
    }
    p:last-child {
        margin-bottom: 0;
    }
    .pay::before{
        background: url(../../assets/wt/icons.png) no-repeat;
        left: 0;
        top: -2px;
        width: 22px;
        height: 22px;
        content: '';
        position: absolute;
        display: block;
    }
    .card::before{
        background: url(../../assets/wt/card.png) no-repeat;
        background-size: contain;
        left: 0;
        top: -2px;
        width: 22px;
        height: 22px;
        content: '';
        position: absolute;
        display: block;
    }
    .intergroul::before{
        display: block;
        content: '';
        position: absolute;
        left: -4px;
        top: -6px;
        background: url(../../assets/wt/ji.png);
        background-size: contain;
        width: 28px;
        height: 28px;
    }
    .money::before{
        display: block;
        content: '';
        position: absolute;
        left: -3px;
        top: -2px;
        background: url(../../assets/wt/money.png);
        background-size: contain;
        width: 25px;
        height: 25px;
    }
    .down_info{
        padding-top: 10px;
    }
    .title{
        padding-left: 30px;
        padding-bottom: 10px;
        font-size: 16px;
        color: #666;
    }
    .stats{
        padding: 25px;
        border: 1px solid #eee;
        background-color: #fff;
    }
    .summary{
        overflow: hidden;
        margin-bottom: 25px;
        line-height: 28px;
    }
    .desc{
        float: left;
        color: #258fe6;
        font-size: 18px;
    }
    .tab{
        float: right;
        overflow: hidden;
    }
    ul{
        padding: 0;
        margin: 0;
    }
    .summary .tab li.on {
        background-color: #088ee3;
        color: #fff;
    }
    .summary .tab li:first-child {
        border-right: none;
    }
    .summary .tab li {
        float: left;
        width: 75px;
        height: 28px;
        line-height: 28px;
        border: 1px solid #eee;
        text-align: center;
        color: #333;
        cursor: pointer;
    }
    ul li {
        list-style: none;
    }
</style>