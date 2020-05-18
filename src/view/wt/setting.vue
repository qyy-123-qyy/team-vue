<template>
    <div class="inn_setting">
        <el-tabs type="border-card" class="togther">
            <el-tab-pane label="个人资料" class="person">
                <div class="one"> 
                    <div class="form">
                        <h4 class="header"><i class="el-icon-document"></i>
                        基本信息</h4>
                    </div>
                    <el-divider class="line"></el-divider>
                    <div class="field">
                        <label class="niche">昵称</label>
                        <input id="nickname" type="text" name="nickname" value="wangting123" placeholder="昵称不能为空">
                    </div>
                    <div class="field">
                        <label class="niche">状态</label>
                        <el-select v-model="value" placeholder="请选择" class="select1">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="field">
                        <label class="niche">职业</label>
                        <el-select v-model="value" placeholder="请选择" class="select1">
                            <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="value" placeholder="请选择" class="select1">
                            <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="field">
                        <label class="niche">公司</label>
                        <el-select v-model="value" placeholder="输入公司名称" class="select2">
                            <el-option
                            v-for="item in options3"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="field">
                        <label class="niche">职位</label>
                        <el-select v-model="value" placeholder="输入职位名称" class="select3">
                            <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="form1">
                        <h4 class="header"><i class="el-icon-s-tools"></i>
                        个人设置</h4>
                    </div>
                    <el-divider class="line1"></el-divider>
                    <div class="field1">
                        <ul>
                            <li>邮箱</li>
                            <li class="button">
                                <el-switch
                                    v-model="value1"
                                    active-text="接受订阅邮件"
                                    inactive-text="">
                                </el-switch>
                            </li>
                        </ul>
                    </div>
                    <a href="" class="baocun"><el-button type="primary">保存</el-button></a>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工作设置">
                <div class="work_set" >
                    <span class="work_time">可工作时间</span>
                    <el-radio v-model="radio1" label="1">工作日</el-radio>
                    <div class="work_time1">
                        <el-time-picker
                            v-model="value1"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                        <el-time-picker
                            arrow-control
                            v-model="value2"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </div>
                    <p class="week"><el-radio v-model="radio1" label="2">周末</el-radio></p>
                    <div class="work_time1">
                        <el-time-picker
                            v-model="value3"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                        <el-time-picker
                            arrow-control
                            v-model="value4"
                            :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </div>
                    <div class="place">
                        <span class="place1">所在地区</span>
                        <el-select v-model="value5" multiple placeholder="省份">
                            <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select
                            v-model="value6"
                            multiple
                            collapse-tags
                            style="margin-left: 0px;"
                            placeholder="城市">
                            <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="selection">
                        <span class="work_time">每周工作时长</span>
                        <el-radio v-model="radio2" label="7">15小时以下</el-radio>
                        <el-radio v-model="radio2" label="8">15-25小时以下</el-radio>
                        <el-radio v-model="radio2" label="9">25-40小时以下</el-radio>
                        <el-radio v-model="radio2" label="10">40小时以上</el-radio>
                    </div>
                    <div class="selection">
                        <span class="work_time">可工作区域</span>
                        <el-radio v-model="radio3" label="11">远程工作</el-radio>
                        <el-radio v-model="radio3" label="12">驻场工作</el-radio>
                    </div>
                    <div class="place2">
                        <el-select v-model="value7" disabled multiple placeholder="省份">
                            <el-option
                            v-for="item in options6"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select disabled
                            v-model="value8"
                            multiple
                            collapse-tags
                            style="margin-left: 0px;"
                            placeholder="城市">
                            <el-option
                            v-for="item in options7"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="selection">
                        <span class="work_time2">日薪</span>
                        <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10000"></el-input-number>
                        <span class="minute">元/天(8小时)</span>
                    </div>
                    <div class="selection">
                        <span class="work_time3">接待状态</span>
                        <el-radio v-model="radio4" label=""></el-radio>
                    </div>
                    <div class="place2">
                        <el-select v-model="value9" placeholder="接受所有派单及预约机会" class="val">
                            <el-option
                                v-for="item in options8"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="wenhao">?</span>
                    </div>
                    <div class="place2">
                        <a href="" class="baocun1"><el-button type="primary">保存</el-button></a>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="实名个人信息">
                <div class="field3">
                    <div class="head_01">
                        <h5><i class="el-icon-s-custom"></i>实名个人信息</h5>
                    <el-divider class="line3"></el-divider>
                    </div>
                    <div class="head_2">
                        <span class="work_time3">实名认证</span>
                        <button class="btn3">去认证</button>
                    </div>
                    <div class="head_3">
                        <span class="time4">邮箱</span>
                        <input id="email" disabled="disabled" type="text" name="email" class="input1">
                        <button class="btn3 btn4">立即绑定</button>
                    </div>
                    <div class="head_3">
                        <span class="time4">手机</span>
                        <input id="J_Mobile" type="text" name="info_mobile" disabled="disabled" class="input1">
                        <button class="btn4 btn5">修改</button>
                    </div>
                    <div class="head_3">
                        <span class="time4 time5">支付宝</span>
                        <input id="J_Mobile" type="text" name="info_mobile" disabled="disabled" class="input1">
                        <el-button type="text" @click="open1" class="btn btn5">立即绑定</el-button>
                    </div>
                    <div class=" head_3 head_4">
                        如果使用手机号为支付宝账号，请确保已在支付宝开启手机登录。
                    </div>
                    <div class="head_3 head_5">
                        <span class="time4 time6">微信(选填)</span>
                        <input id="J_Mobile" type="text" name="info_mobile" disabled="disabled" class="input1">
                        <el-button type="text" @click="open2" class="btn btn5">立即预留</el-button>
                    </div>
                    <div class="head_3">
                        <span class="time4 time7">QQ(选填)</span>
                        <input id="J_Mobile" type="text" name="info_mobile" disabled="disabled" class="input1">
                        <el-button type="text" @click="open3" class="btn btn5">立即预留</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改密码">
                <div class="field4">
                    <div class="head_01">
                        <h5><i class="el-icon-unlock"></i>修改密码</h5>
                        <el-divider class="line3"></el-divider>
                    </div>
                    <div class="head_2">
                        <span class="work_time3">实名认证</span>
                        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="修改头像">定时任务补偿</el-tab-pane>
            <el-tab-pane label="绑定账号">定时任务补偿</el-tab-pane>
            <!-- <a href="" class="btn_btn">成为签约开发者</a> -->
        </el-tabs>
    </div>
</template>
<script>
 export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '求职'
        }, {
          value: '选项2',
          label: '自由工作'
        }, {
          value: '选项3',
          label: '正常工作'
        }],
        options1: [{
          value: '选项1',
          label: '后端'
        }, {
          value: '选项2',
          label: '移动端'
        }, {
          value: '选项3',
          label: '正常工作'
        }],
        options2: [{
          value: '选项1',
          label: 'JAVA'
        }, {
          value: '选项2',
          label: 'C++'
        }, {
          value: '选项3',
          label: 'PHP'
        }],
        options3: [{
          value: '选项1',
          label: '智联招聘'
        }, {
          value: '选项2',
          label: '途牛'
        }, {
          value: '选项3',
          label: '迅雷'
        }, {
          value: '选项4',
          label: '七牛云'
        }, {
          value: '选项5',
          label: '途家网'
        }],
        options4: [{
          value: '选项1',
          label: '高级后端工程师'
        }, {
          value: '选项2',
          label: '高级移动端工程师'
        }, {
          value: '选项3',
          label: '高级架构师'
        }, {
          value: '选项4',
          label: '创始人&CEO'
        }, {
          value: '选项5',
          label: '高级数据库工程师'
        }],
        options5: [{
          value: '选项1',
          label: '北京'
        }, {
          value: '选项2',
          label: '天京'
        }, {
          value: '选项3',
          label: '重庆'
        }, {
          value: '选项4',
          label: '河北'
        }, {
          value: '选项5',
          label: '山西'
        }],
        options6: [{
          value: '选项1',
          label: '山西'
        }],
        options7: [{
          value: '选项1',
          label: '山西'
        }],
        options8: [{
          value: '选项1',
          label: '接受派单及预约机会'
        }, {
          value: '选项2',
          label: '只接受平台派单和认证企业预约'
        }, {
          value: '选项3',
          label: '只接受平台派单'
        }],
        value1: true,
        radio1: '1',
        radio1: '2',
        radio2: '7',
        radio3: '11',
        radio4: '',
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40),
        value4: new Date(2016, 9, 10, 18, 40),
        value: '',
        value5: [],
        value6: [],
        value7: [],
        value8: [],
        value9: [],
        num: 1
      }
    },
    methods: {
        open1() {
        this.$prompt('支付宝', '绑定支付宝', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的支付宝账号是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open2() {
        this.$prompt('微信', '绑定微信', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的微信号是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open3() {
        this.$prompt('QQ', '绑定QQ', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的QQ号是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
<style>
.inn_setting{
    width: 830px;
    margin-left: 15px;
}
.togther{
    width: 830px;
    height: 100%;
    position: relative;
}
.btn_btn{
    width: 130px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: right;
    position: absolute;
    top: 10px;
    right: 20px;
    border-radius: 13px;
    background-color: #37a1f9;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.btn_btn:hover{
    color: white;
    opacity: 0.9;
}
.one{
    width: 100%;
    height: 500px;
    background: white;
}
.form{
    /* width: 768px; */
    height: 28px;
    margin: auto;
    text-align: left;
    line-height: 28px;
    position: absolute;
    top: 0;
    left: 30px;
}
h4.header{
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: rgba(0, 0, 0, .8);
}
i {
    font-style: normal; 
}
.line{
    width: 95%;
    margin-left: 15px;
    margin-top: 35px;
    background: rgb(241, 240, 240);
}
.field {
    height: 35px;
    line-height: 35px;
    margin-bottom: 20px;
}
.niche{
    font-size: 0.9285em;
    font-weight: 700;
    margin-left: 20px;
    color: rgba(0, 0, 0, .8);
}
input{
    background-color: #f7f9fb;
    border-color: #f3f2f2;
    color: #4b4a4a;
    padding: 5px 10px 5px;
}
.select1{
    width: 180px;
    /* height:35px; */
    background-color: #f7f9fb;
}
.select2{
    width: 380px;
    /* height:35px; */
    background-color: #f7f9fb;
}
.form1{
    /* width: 768px; */
    height: 28px;
    margin: auto;
    text-align: left;
    line-height: 28px;
    position: absolute;
    top: 340px;
    left: 30px;
}
.line1{
    width: 95%;
    margin-left: 15px;
    margin-top: 60px;
    background: rgb(241, 240, 240);
}
.field1{
    font-weight:700;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
    position: absolute;
    left: 30px;
    top: 400px;
    float: left;
}
.button{
    width: 150px;
    height: 20px;
    line-height: 20px;
    float: left;
    position: absolute;
    left: 630px;
    top:0;
}
.baocun{
    width: 90px;
    height: 35px;
    position: absolute;
    left: 70px;
    top: 430px;
}
.work_set{
    width: 768px;
    height: 675px;
    margin-top:10px;
    margin-left:20px;
    font-size: 14px;
}
.work_time{
    margin-right: 30px;
}
.work_time1{
    margin-left: 105px;
    margin-top: 20px;
}
.week{
    margin-left: 105px;
    margin-top: 20px;
}
.place{
    margin-top: 30px;
}
.place1{
    margin-right: 45px;
}
.selection{
    margin-top: 30px;
}
.place2{
    margin-left: 105px;
    margin-top: 10px;
}
.work_time2{
    margin-right: 75px;
    margin-top: 20px;
}
.minute{
    color: #999;
}
.work_time3{
    margin-right: 45px;
}
.wenhao{
    color: #258fe6;
    font-weight: bold;
    font-size: 400;
}
.val{
    width: 250px;
}
.baocun1{
    width: 90px;
    height: 35px;
    position: absolute;
    left: 170px;
    top: 630px;
}
.field3{
    width: 768px;
    height: 344px;
    position: relative;
    top: -10px;
    left: 13px;
}
.line3{
    /* margin-top: 0; */
    position:absolute; 
    top: 0px; 
    background: rgb(241, 240, 240);
}
.work_time3{
    margin-right: 35px;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
}
.btn3{
    font-size: 14px;
    outline: 0;
    border: 0;
    background-color: #e0e0e0;
    color: rgba(0, 0, 0, .6);
    padding: 8px 18px;
    text-shadow: none;
    font-weight: 700;
    line-height: 1;
    font-style: normal;
    text-align: center;
    background-image: none;
}
.input1{
    display: inline-block;
    width: auto;
    vertical-align: middle;
    font-size: .9285em;
    border: 1px solid #eee;
}
.head_3{
    height: 36px;
    margin-top: 15px;
    text-align: left;
    line-height: 36px;
    position: relative;
}
.time4{
    margin-right: 65px;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 700;
}
.btn4{
    width: 98px;
    height: 30px;
    /* line-height: 30px; */
    font-size: 14px;
    top: 5px;
    border: 0;
    position: absolute;
    left: 298px; 
}
.btn{
    width: 98px;
    height: 30px;
    line-height: 8px;
    font-size: 14px;
    top: 5px;
    position: absolute;
    left: 295px;
    color: white;
    border: 0;
}
.btn:hover{
    background-color: #308EFF;
    color: white;
}
button{
    cursor: pointer;
    color: white;
}
/* .btn:hover{
    background-color: #308EFF;
    color: white;
} */
.btn5{
    background-color: #308EFF;
}
.time5{
    margin-right: 50px;
}
.time6{
    margin-right: 25px;
}
.time7{
    margin-right: 30px;
}
.head_4{
    height: 16px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 95px;
    line-height: 16px;
    font-size: 12px;
    color: rgb(223, 168, 0);
}
.head_5{
    margin-top:0px;
}
.field4{
    width: 768px;
    height: 310px;
    position: relative;
    top: -10px;
    left: 13px;
}
</style>