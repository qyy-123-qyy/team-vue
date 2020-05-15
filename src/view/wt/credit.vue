<template>
    <div>
        <div class="title_area">
            <p class="title">技术信用(查询我的)</p>
            <p class="second">这是他人查询您的技术信用查询记录，共0个 ，同意授权(0) ，拒绝授权(0)</p>
            <a href="" class="second third">点击左侧菜单栏“前往企业版”按钮，查看“我查询的”授权记录</a>
            <div class="select">
                <el-select v-model="value" clearable placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div class="bottom_area">
            <div class="page">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待授权'
        }, {
          value: '选项3',
          label: '已同意'
        }, {
          value: '选项4',
          label: '已拒绝'
        }],
        value: ''
      }
    }
  }
</script>
<style>
    .title_area{
        width: 830px;
        height: 170px;
        margin-left: 15px;
        background: white;
        color: #333;
        position: relative;
    }
    .title{
        width: 100%;
        height:20px;
        line-height: 20px;
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        top: 0px;
        left: 20px;
    }
    p{
        font-size: 12px;
    }
    .second{
        position: absolute;
        top: 45px;
        left: 20px;
        color: #919aa7;
    }
    a{
        text-decoration: none;
        font-size: 12px;
    }
    .third:hover{
        color: orange;
    }
    .third{
        top:85px;
        color: orange;
    }
    .select{
        width: 165px;
        height: 40px;
        position: absolute;
        top: 120px;
        left: 20px;
    }
    .bottom_area{
        width: 830px;
        height: 70px;
        margin-left: 15px;
        background: white;
        color: #333;
        position: relative;
        margin-top: 10px;
    }
    .page{
        width: 130px;
        height: 32px;
        position: absolute;
        top: 19px;
        left: 350px;
    }
</style>