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
                        <p class="group name">
                            <span>支付宝</span>
                        </p>
                        <p class="group card">
                            <span>银行卡</span>
                        </p>
                    </div>
                    <div class="info_rt_down">
                        <div class="right_top">
                            <span>我的权益</span>
                            <a href="" class="edit">查案</a>
                        </div>
                        <p class="group name">
                            <span>积分</span>
                        </p>
                        <p class="group card">
                            <span>现金劵</span>
                        </p>
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
    .info_rt a{
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
    p {
        margin: 0 0 1em;
        line-height: 1.33;
    }
    .name::before{
        background: url(../../assets/wt/icons.png) no-repeat;
        /* background-size: contain; */
        left: 0;
        top: -2px;
        width: 22px;
        height: 22px;
        content: '';
        position: absolute;
        display: block;
    }
    .card::before{
        background: url(../../assets/wt/icons.png) no-repeat;
        left: 0;
        top: -2px;
        width: 22px;
        height: 22px;
        content: '';
        position: absolute;
        display: block;
    }
</style>