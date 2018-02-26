<template>
    <div class="index overflow">
      <vue-header>
        <a href="javascript:;" slot="left" class="fl" @click="reFresh">黄氏烘焙</a>
        <span slot="middle" class="fl"></span>
        <div slot="right">
            <router-link v-if="login" class="el-icon-setting fr right" to="./self"></router-link>
            <div class="fr" v-else>
                <router-link to="/register" class="register">登录</router-link>|<router-link to="/login" class="login">注册</router-link>
            </div>
        </div>
      </vue-header>
       <div class="location">
            <div class="tips clearfix">
                <span class="fl">当前定位城市：</span>
                <span class="fr">定位不准时，请在城市列表中选择</span>
            </div>
            <div class="local clearfix">
               <router-link v-bind="{to:'/disctrict/'+local}" class="fl">{{local}}</router-link>
               <router-link v-bind="{to:'/disctrict/'+local}" class="fr el-icon-arrow-left"></router-link>
            </div>
       </div>
       <div class="hot">
       <h6>热门城市</h6>
           <ul class="hotCity clearfix">
               <li v-for="item in hotCity">
                   <router-link v-bind="{to:'/disctrict/'+item.city}">{{item.city}}</router-link>
               </li>
           </ul>
       </div>
       <div class="city">
       <h6>城市</h6>
        <ul class="clearfix">
            <li v-for="item in city">
                <router-link v-bind="{to:'/disctrict/'+item.city}">{{item.city}}</router-link>
            </li>
        </ul>
       </div>
    </div>
</template>
<script>
import header from "../common/header/header.vue";
import {Vue,check,check_out} from "../../js/common.js";
import { mapState,mapMutations } from "vuex"
// import Vue from "vue"
import {check_login} from "../../js/utlis"
// data,钩子函数（声明函数）、需要要引入的组件都在export default中书写
    export default {
        name: "address",
        components: {
            "vue-header": header,
        },
        data: () => {
            return  {
                 local: "广州",
            hotCity: [
                {city: "上海"},
                {city: "哈尔滨"},
                {city: "南京"},
                {city: "广州"},
                {city: "厦门"},
                {city: "杭州"},
                {city: "天津"},
                {city: "青岛"}
            ],
            city: [
                {city: "北京"},
                {city: "安徽"},
                {city: "深圳"},
                {city: "河南"},
                {city: "河北"},
                {city: "湖南"},
                {city: "湖北"},
                {city: "黑龙江"},
                {city: "青岛"},
                {city: "青海"},
                {city: "包头"},
                {city: "内蒙古"},
                {city: "新疆"},
                {city: "江苏"},
                {city: "西藏"},
                {city: "香港"},
                {city: "台湾"},
                {city: "澳门"},
                {city: "山西"},
                {city: "陕西"},
            ],
            }
        },
        methods:  {
            reFresh: () => {
                location.reload();
            },
            ...mapMutations([
                "pictureUrl",
                "userName",
                ])


        },
        computed: ({
            login () {
                return this.$store.state.isLogin
            }
        }),
        created () {
            var _this = this;
            if(check_login() == false){//非自动登录
                this.$store.commit("changeLogin",{
                    login: false
                })
                //向后台发送数据请求
            }else {//自动登录
                this.$store.commit("changeLogin",{
                    login: true
                })
               _this.pictureUrl({pictureUrl:"/static/imgs/self.jpg"});
               _this.userName({userName: "蜡笔小新"})
            }
        }
    }
</script>
<style class="scoped" lang="less">
    @import "../../css/common.less";
     @cblue: #1D8CE0;
     .fontSize(@x) when (default()) {font-size: @x;}
        .index {
            background-color: #eee;
        .register {
            margin-right: 0.05rem !important;
        }
        .login {
            margin-left: 0.05rem !important;
            margin-right: 0.2rem;
        }
     }
     .location {
         background-color: #fff;
         border-bottom: 2px solid #ddd;
         margin-bottom: 0.1rem;
        .tips {
            border-bottom: 1px solid #ddd;
            span {
                margin-left: 0.2rem;
                .fontSize(12px);
                line-height: 30px;
            }
            span:last-child {
                margin-right: 0.15rem;
            }
        }
        .local {
            a:last-child {
                .fontSize(12px);
                margin-right: 0.1rem;
                line-height: 30px;
            }
            a:first-child {
                color: #1D8CE0;
                .fontSize(14px);
                margin-left: 0.2rem;
                line-height: 30px;
            }
        }
     }
     .hot,.city {
         background-color: #fff;
         margin-bottom: 10px;
         border-top: 2px solid #ddd;
         border-bottom: 2px solid #ddd;
         h6 {
             text-align: left;
             font-weight: 400;
             font-size: 16px;
             height: 30px;
             line-height: 30px;
             margin-left: 0.2rem;
         }
     }
     .hotCity,.city ul {
         li {
             float: left;
             width: 25%;
             border: 1px solid #eee;
             margin-top: -1px;
             box-sizing: border-box;
             height: 30px;
             line-height: 30px;
             a {
                 display: inline-block;
                 width: 100%;
                 height: 100%;
             }
         }
     }
     .right{
         line-height: 30px;
     }
</style>
