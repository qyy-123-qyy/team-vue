<template>
  <div>
    <el-row type="flex" justify="center" >
      <el-col :span="16" >
        <div class="intro">
            <h3>完善个人简历后，才能申请签约开发者进行接单
                <span class="status">
                    <a href="javascript;" target="_blank" style=" text-decoration: none;color:#308eff;">签约规则</a>
                </span>
            </h3>
            <p> 
            成为程序员客栈签约开发者后，才能在平台接单，包括平台派单类项目、雇佣项目等，并 享受交易担保等服务。
            <br>
            申请签约需要满足以下条件：
            <br>
            1.三年及以上正规互联网工作经验
            <br>
            2.按签约规则如实填写个人简历
            <br>
            3.具有契约精神、服务意识，能按约定高效完成开发
            <br>
            4.不在程序员客栈黑名单（无开发黑历史）
            </p>
        </div>
        <div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style >
    .intro{
        padding: 13px 20px;
        line-height: 30px;
        box-sizing: border-box;
        margin: 0;
    }
    .intro h3 {
        display: block;
        padding: 12px 0 25px;
        text-align: center;
        border-bottom: 2px solid rgba(1,1,1,.06);
        font-size: 22px;
        font-weight: 500;
        color: #222;
        line-height: 30px;
    }
    .status{
        color: grey;
        position: relative;
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        margin-left: 100px;
    }
    .status a {
        font-size: 14px;
        line-height: 20px;
    }
    .status p{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
    }
</style>