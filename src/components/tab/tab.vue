<template>
    <div class="tab overflow">
        <component v-bind:is="type" v-bind:addresses="address"></component>
        <div class="tab-bottom">
            <ul class="clearfix">
                <li v-on:click="change">
                    <span v-bind:class="{change:type == 'square'}" class="el-icon-setting"></span>
                    <span>外卖</span>
                </li>
                <li v-on:click="change">
                    <span v-bind:class="{change:type == 'square'}" class="el-icon-setting"></span>
                    <span>搜索</span>
                </li>
                <li v-on:click="change">
                    <span v-bind:class="{change:type == 'square'}" class="el-icon-setting"></span>
                    <span>订单</span>
                </li>
                <li v-on:click="change">
                    <span v-bind:class="{change:type == 'square'}" class="el-icon-setting"></span>
                    <span>我的</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import square from  "./square/square"
import self from "./self/self";
import booking from "./booking/booking"
import Vue from "vue";
    export default {
        name: "tab",
        components: {
            "square": square,
            "self": self
        },
        data () {
            return {
                type: "square",
                address: ""
            }
        },
        created () {
            console.log("ddddd");
            this.address = this.$route.params.address;
        },
        methods: {
            change: function (e){
                console.log(e.target); 
            }
        }
    }
</script>
<style lang="less" scoped>
    .tab {
        position: relative;
        width: 100%;
        .tab-bottom { 
            position: fixed;
            bottom: 0px;
            width: 100%;
            ul {
                width: 100%;
                background-color: #fff;
                height: 50px;
                li {
                    width: 25%;
                    text-align: center;
                    float: left;
                    span {
                        display: block;
                    }
                    span:first-child {
                        width: 100%;;
                        height: 20px;
                        margin-top: 5px;
                        margin-bottom: 5px;
                        font-size: 14px;
                    }
                    change {
                        color: blue;
                    }
                    span:last-child {
                        line-height: 20px;
                    }
                }
            }
        }
    }
</style>