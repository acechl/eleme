<template>
    <div class="tab overflow">
        <component v-bind:is="type" v-bind:addresses="address"></component>
        <div class="tab-bottom">
            <ul class="clearfix">
                <li v-on:click="change($event,item.type)" ref="tab" v-for="item in tab">
                    <span v-bind:class="{change:type == item.type}" class="el-icon-setting"></span>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import square from  "./square/square"
import self from "./self/self";
import booking from "./booking/booking"
import search from "./search/search"
import Vue from "vue";
    export default {
        name: "tab",
        components: {
            "square": square,
            "self": self,
            "search":search,
            "booking": booking
        },
        data () {
            return {
                type: "square",
                address: "",
                tab: [
                    {name:"外卖",type:"square"},
                    {name:"搜索",type:"search"},
                    {name:"订单",type:"booking"},
                    {name:"我的",type:"self"}
                ]
            }
        },
        created () {
            console.log("ddddd");
            this.address = this.$route.params.address;
        },
        methods: {
            change: function (e,type){
                this.type = type;
            }
        }
    }
</script>
<style lang="less" scoped>
    .change {
        color: #3190e8;
    }
    .tab {
        position: relative;
        width: 100%;
        height: 100%;
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