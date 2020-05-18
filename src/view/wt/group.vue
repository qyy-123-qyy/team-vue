<template>
    <div>
        <div class="group1">
            <h3 class="title">协作群组</h3>
            <span class="word">适用于云端工作团队共享、管理日报和工时统计等</span>
            <a href="">
                <el-button type="primary" class="cread">创建</el-button>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .group1{
        width: 830px;
        height: 400px;
        margin-left: 15px;
        background: white;
        position: relative;
    }
    .title{
        height: 20px;
        line-height: 20px;
        position: absolute;
        top: 5px;
        left: 20px;
    }
    .word{
        width: 310px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        position: absolute;
        top: 28px;
        left: 115px;
        color: #919aa7;
        font-size: 14px;
    }
    .cread{
        width: 100px;
        height: 40px;
        position: absolute;
        top: 20px;
        right: 20px;
    }
</style>