<template>
    <div class="goPay">
        <vue-header>
            <span slot="left" class="el-icon-arrow-left left"></span>
            <span slot="right" class="middle">确认订单</span>
        </vue-header>
        <div class="session">   
            <div class="address clearfix">
                <div class="fl">
                    <div class="selected" v-if="sure">{{address}}</div>
                    <div class="choose" v-else>请添加一个收货地址</div>
                </div>
                <span class="fr el-icon-arrow-right fr"></span>
                <!--<router-link v-bind="{to:'/disctrict/'+local}" class="fr el-icon-arrow-left"></router-link>-->
            </div>
            <div class="sendTime clearfix">
                <span class="fl">送达时间</span>
                <span class="fr el-icon-arrow-right arrow"></span>
                <span class="fr timer"v-on:click="changed">{{timer}}</span>
                <ul v-if="show">
                    <li v-for="item in timeList" v-on:click="selecting(item.time)">{{item.time}}</li>
                </ul>
                 
            </div>
            <div class="payType clearfix">
                <div class="cash">  
                    <span class="fl">支付方式</span>
                    <span class="fr">{{payType}}<span class="el-icon-arrow-right"></span></span>
                </div>
                <div class="lucky">
                    <span class="fl">红包</span>
                    <span class="fr">暂时只在饿了么APP中支持 <span class="el-icon-arrow-right"></span></span>
                </div>
                <div class="selectType">
                    <h4>支付方式</h4>
                    <ul>
                        <li v-for="item in types">ee
                            <span class="fl">{{item.type}}</span>
                            <span class="fr el-icon-circle-check"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="listDetail">
                <div>{{}}</div>
                <div class="list">
                    <ul>
                        <li v-for="" class="clearfix">
                            <span class="fl">{{}}</span>
                            <span class="fl">x{{}}</span>
                            <span class="fr">￥{{}}</span>
                        </li>
                    </ul>
                </div>
                <div class="sendFare clearfix">
                    <span class="fl">配送费</span>
                    <span class="fr">￥{{}}</span>
                </div>
                <div class="booking clearfix">
                    <span class="fl">订单￥{{}}</span>
                    <span class="fr">待支付￥{{}}</span>
                </div>
            </div>
            <div class="remark clearfix">
                <span class="fl">订单备注</span>
                <span class="fr">{{}}</span>
            </div>
            <div class="invoice clearfix">
                <span class="fl">发票抬头</span>
                <span class="fr">不需要发票 <span class="el-icon-arrow-right"></span></span>
            </div>
            <div class="footer clearfix">
                <span class="fl">待支付￥{{}}</span>
                <span class="fr">确认下单</span>
            </div>
        </div>
    </div>
</template>
<script>
import header from "../common/header/header";
import {paynow,menu,shop_name} from "../../js/common.js";
    export default {
        name: "goPay",
        data () {
            return {
                menu: [],
                sure: false,
                show: false,
                timer: "请选择送达时间",
                payType: "在线支付",
                timeList: [
                    {time: "请选择送达时间"},
                    {time:"08:00-08:15"},
                    {time:"08:15-08:30"},
                    {time:"08:30-08:45"},
                    {time:"08:45-09:00"},
                    {time:"09:00-09:15"},
                    {time:"09:15-09:30"},
                    {time:"09:30-09:45"},
                    {time:"09:45-10:00"},
                    {time:"10:00-10:15"},
                    {time:"10:15-10:30"},
                    {time:"10:30-10:45"},
                    {time:"10:45-11:00"},
                    {time:"11:00-11:15"},
                    {time:"11:15-11:30"},
                    {time:"11:30-11:45"},
                    {time:"11:45-12:00"},
                    {time:"12:45-13:00"},
                    {time:"13:00-13:15"},
                    {time:"13:15-13:30"},
                    {time:"13:30-13:45"},
                    {time:"13:45-14:00"}
                ],
                types : [
                    {type:"在线支付"},
                    {type: "货到付款"},
                    {type: "银行转账"}
                ]
            }
        },
        methods: {
            selecting (value) {
                this.timer = value;
                this.show = false;
            },
            changed () {
                this.show = true;
            }
        },
        components: {
            "vue-header":header,
        },
        created () {
            paynow.$on(menu,function(id){
                this.menu = id;
                console.log(id);
            })
            paynow.$on(shop_name,function(id){
                this.shopName = id;
                console.log(id);
            })
        }
    }
</script>
<style lang="less" scoped>
    .goPay {
        background-color: #f5f5f5;
        .session {
            padding-top: 40px;
            width: 100%;
            .address {
                padding: 0 0.1rem;
                width: 100%;
                box-sizing: border-box;
                height: 0.6rem;
                line-height: 0.6rem;
                background: url("../../../static/imgs/address_bottom.png") repeat-x 0 100% #fff;
                background-size: 10%;
                text-align: left;
                margin-bottom: 10px;
                .fr {
                    width: 0.2rem;
                    height: 0.2rem;
                    color: #ddd;
                    margin-top: 0.2rem;
                }
            }
            .sendTime {
                width: 100%;
                padding: 0 0.1rem;
                box-sizing: border-box;
                height: 0.4reml;
                line-height: 0.4rem;
                background-color: #fff;
                border-left: 5px solid #3190e8;
                font-size: 0.12rem;
                position: relative;
                margin-bottom: 10px;
                .fl {
                    font-weight: 600;
                }
                ul {
                    width: 100px;
                    border: 1px solid #ddd;
                    height: 200px;
                    overflow: scroll;
                    position: absolute;
                    top: 0.35rem;
                    right: 0.2rem;
                    background-color: #fff;
                }
                .timer {
                    color: #3190e8;
                }
                .arrow {
                    width: 0.16rem;
                    height: 0.16rem;
                    margin-top: 0.14rem;
                    font-size: 0.12rem;
                    transform: scale(0.8);
                }
            }
            .payType {
                width: 100%;
                padding-left: 0.1rem;
                margin-bottom: 10px;
                background-color: #fff;
                box-sizing: border-box;
                font-size: 0.12rem;
                .cash {
                    height: 0.4rem;
                    width: 100%;
                    padding-right: 0.1rem;
                    box-sizing: border-box;
                    border-bottom: 1px solid #eee;
                    line-height: 0.4rem;
                    .fr {
                        color: #ddd;
                    }
                }
                .lucky {
                    height: 0.4rem;
                    line-height: 0.4rem;
                    color: #ddd;
                    padding-right: 0.1rem;
                    width: 100%;
                    box-sizing: border-box;
                }
                .el-icon-arrow-right {
                    transform: scale(0.8);
                }
            }
        }
        
    }
</style>