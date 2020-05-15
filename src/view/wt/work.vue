<template >
    <div class="back">
        <div class="box">
            <div class="box_top">
                <el-tabs v-model="activeName" @tab-click="handleClick" class="together">
                    <el-tab-pane label="待办任务(0)" name="first">
                        <div class="one">
                            <a href="" class="one_1">全部</a>
                            <a href="" class="one_2">开发中</a>
                            <a href="" class="one_2">已完成</a>
                        </div>
                        <div class="one_right">
                            <el-select v-model="value" clearable placeholder="时间筛选">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="平台项目(0)" name="second">
                        <div class="one">
                            <a href="" class="one_1">全部</a>
                            <a href="" class="one_2">开发中</a>
                            <a href="" class="one_2">已完成</a>
                        </div>
                        <div class="one_right">
                            <el-select v-model="value" clearable placeholder="时间筛选">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="雇佣项目(0)" name="third">
                        <div class="one">
                            <a href="" class="one_1">全部</a>
                            <a href="" class="one_2">开发中</a>
                            <a href="" class="one_2">已完成</a>
                        </div>
                        <div class="one_right">
                            <el-select v-model="value" clearable placeholder="时间筛选">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="云端工作(0)" name="fourth">
                        <div class="one">
                            <a href="" class="one_1">全部</a>
                            <a href="" class="one_2">开发中</a>
                            <a href="" class="one_2">已完成</a>
                        </div>
                        <div class="one_right">
                            <el-select v-model="value" clearable placeholder="时间筛选">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-tab-pane>
                </el-tabs> 
                <a href="" class="five">成为签约开发者</a>
                <div class="images">
                    <img src="../../assets/wt/tip.png" class="image"/>
                    <div class="down">
                        <span>您还未签约,</span>
                        <a href="" class="down_two">成为签约开发者,</a>
                        <span>享受平台项目推送</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
        return {
            activeName: 'second',
            options: [{
                value: '选项1',
                label: '时间筛选'
                }, {
                value: '选项2',
                label: '1个月内开发'
                }, {
                value: '选项3',
                label: '1-3个月内开发'
                }, {
                value: '选项4',
                label: '3-6个月内开发'
                }, {
                value: '选项5',
                label: '6个月以前开发'
                }],
                value: '',
            };
        },
        methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
        }
    };    
</script>
<style>
    body{
        background: rgb(243, 243, 243);
        color: #333; 
    }
    .box_top{
        width: 830px;
        height: 330px;
        margin-left: 15px;
        background: white;
        position: relative;
    }
    .together{
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
        margin-right: 20px;
    }
    a{
        text-decoration: none;
    }
    .five{
        width: 100px;
        height: 30px;
        background: #258fe7;
        position: absolute;
        display: block;
        top: 10px;
        right: 20px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: white;
        cursor: pointer;
    }
    .five:hover{
        color: white;
        opacity: 0.9;
    }
    .one{
        width: 810px;
        height: 50px;
        text-align: left;
        line-height: 50px;
        background: #f7f7f7;;
        cursor: pointer;
        margin-right: 20px;
    }
    .one_1{
        margin-left: 20px;
        margin-right: 20px;
        cursor: pointer;
        font-size: 14px;
    }
    .one_2{
        margin-right: 20px; 
        cursor: pointer;
        font-size: 14px;
    }
    a:hover{
        color: #258fe7;
    }
    .one_right{
        position: absolute;
        top: 0px;
        right: 20px;
        font-size: 14px;
        width: 140px;
    }
    .image{
        margin-top: 125px;
        margin-left: 385px;
    }
    .down{
        text-align: center;
        line-height: 20px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
        font-size: 14px;
        color: #999;
    }
    .down_two{
        color: #258fe7;
        
    }
</style>
