<template>
    <div class="self overflow">
        <div class="header">
            <div class="top">
                <a href="" v-on:click="$router.back(-1)" class="el-icon-arrow-left"></a>
                <span>我的服务</span>
                <span class="right"></span>
            </div>
            <div class="user">
                <div class="use">
                    <img v-bind:src="pictureUrl" alt="">
                    <span class="name">用户名:{{userName}}</span>
                    <input type="file" name="" id="" v-on:change="chooseImg($event)" multiple>
                </div>
                <router-link to="./account"class="el-icon-arrow-right"></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
    export default {
        name: "self",
        data: function () {
            return {
                imgValue: ""
            }
        },
        computed: {
            ...mapState([
                "pictureUrl",
                "userName"
            ])
        },
        mounted () {
            
        },
        methods: {
            chooseImg: function (event) {
               console.log( event.currentTarget.value);
               console.log(event.target.files)
            }
        }
    }
</script>
<style lang="less" scoped>
    .header .top {
        padding-bottom: 30px;
        width: 100%;
        height: 30px;
        position: relative;
        background-color: #1D8CE0;
        a {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 50px;
            height: 30px;
            line-height: 30px;
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
</style>