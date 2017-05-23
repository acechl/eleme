<template>
    <div class="self overflow">
        <div class="header">
            <div class="top">
                <router-link to="./address" class="el-icon-arrow-left"></router-link>
                <span>我的服务</span>
                <span class="right"></span>
            </div>
            <div class="user" v-if="login">
                <div class="use">
                    <img v-bind:src="pictureUrl" alt="">
                    <span class="name">用户名:{{userName}}</span>
                    <input type="file" name="" id="" v-on:change="chooseImg($event)" accept="image/jpg,image/png,image/jpeg" multiple>
                </div>
                <router-link to="./account"class="el-icon-arrow-right"></router-link>
                
            </div>
            <div v-else>
                <router-link to="./register">请登录</router-link>
            </div>
            <div class="add">
                <img v-for="url in imgUrl" v-bind:src="url.src" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex";
import img from "../../../js/img.js";
import {imgChoosing} from "../../../js/common.js";
    export default {
        name: "self",
        data: function () {
            return {
                imgValue: "",
                imgNumLimit: 4,//限制每一次最多上传的图片
                imgArr: [],
                imgEle: "",
                imgUrl: "",
                change: false
            }
        },
        computed: {
            ...mapState([
                "pictureUrl",
                "userName"
            ]),
            login () {
                return this.$store.state.isLogin;
            }
        },
        mounted () {
            
        },
        methods: {
            chooseImg: function (event) {
               console.log( event.currentTarget.value);
               console.log(event.target.files);
               var fileList = event.target.files;
               var _this = this;
            //    方法1：用回调函数
                // img.choose_Img(fileList,this.imgArr,this.imgNumLimit,this.imgEle,function(imgAdd){
                    // _this.$store.commit("pictureUrl",{
                    //     pictureUrl: imgAdd[0].src
                    // })
                // })
                // 方法2： 用非父子组件通信
                 img.choose_Img(fileList,this.imgArr,this.imgNumLimit,this.imgEle)
                 imgChoosing.$on("imgAdd",function(obj){
                    _this.$store.commit("pictureUrl",{
                        pictureUrl: obj[0].src
                    })
                })
            },
        }
    }
</script>
<style lang="less" scoped>
    .header .top {
        padding-bottom: 30px;
        width: 100%;
        height: 50px;
        position: relative;
        background-color: #1D8CE0;
        a {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 12px;
            color: #fff;
        }
        span {
            width: 100%;
            padding: 0 50px;
            box-sizing: border-box;
            text-align: center;
            height: 30px;
            display:  block;
            line-height: 30px;
            color: #fff;
            font-weight: 500;
        }
        .right {
            position: absolute;
            right: 0px;
            top: 0px;
            width: 50px;
            height: 30px;
        }
    }
    .user {
        background-color: #1D8CE0;
        height: 60px;
        position: relative;
        a {
            position: absolute;
            right: 0px;
            top: 0px;
            height: 60px;
            width: 50px;
            text-align: center;
            color: #fff; 
            line-height: 60px;
        }
        .use {
            width: 100%;
            padding-right: 50px;
            box-sizing: border-box;
            height: 60px;
            text-align: left;
            margin-left: 0.3rem;
            position: relative;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 10px;
            }
            input {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                position: absolute;
                top: 0px;
                left: 0px;
                opacity: 0;
            }
        }
    }
    .add img {
        width: 60px;
        height: 60px;
    }
</style>