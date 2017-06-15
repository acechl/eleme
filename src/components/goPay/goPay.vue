<template>
    <div class="goPay">
        <vue-header>
            <router-link slot="left" class="el-icon-arrow-left left" to="/squareDetail"></router-link>
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
                    <span class="fr" v-on:click="payChange">{{payType}}<span class="el-icon-arrow-right"></span></span>
                </div>
                <div class="lucky">
                    <span class="fl">红包</span>
                    <span class="fr">暂时只在饿了么APP中支持 <span class="el-icon-arrow-right"></span></span>
                </div>
            </div>
            <div class="selectType" v-if="pay">
                    <h4>支付方式</h4>
                    <ul>
                        <li v-for="item in types" class="clearfix" v-on:click="typeChange(item.type,item.id)">
                            <span class="fl">{{item.type}}</span>
                            <span class="fr el-icon-circle-check" v-bind:style="{'color':item.color}"></span>
                        </li>
                    </ul>
            </div>
            <div class="bg" v-if="pay"></div>
            <div class="listDetail">
                <h4>{{shopName}}</h4>
                <div class="list">
                    <ul>
                        <li v-for="item in menuList" class="clearfix">
                            <span class="fl">{{item.titles}}</span>
                            <span class="fr">￥{{item.price}}</span>
                            <span class="fr qua">x{{item.qua}}</span>
                        </li>
                    </ul>
                </div>
                <div class="sendFare clearfix">
                    <span class="fl">配送费</span>
                    <span class="fr">￥{{sendFare}}</span>
                </div>
                <div class="booking clearfix">
                    <span class="fl">订单￥{{total}}</span>
                    <span class="fr">待支付￥{{total}}</span>
                </div>
            </div>
            <div class="remark clearfix">
                <span class="fl">订单备注</span>
                <span class="el-icon-arrow-right fr"></span>
                <span class="fr" v-on:click="remarkChange">{{taste}}</span>
            </div>
            <div class="invoice clearfix">
                <span class="fl">发票抬头</span>
                <span class="fr">不需要发票 <span class="el-icon-arrow-right"></span></span>
            </div>
            <div class="footer clearfix">
                <span class="fl">待支付￥{{total}}</span>
                <span class="fr">确认下单</span>
            </div>
            
        </div>
        <remark class="remarks" v-if="remark"  v-on:tatseSure="makeSuring"></remark>
    </div>
</template>
<script>
var shopName = "";
var menuList = [];
var sendFare = "";
var total = 0;
import header from "../common/header/header";
import {paynow,menu,shop_name} from "../../js/common.js";
import remark from "./remark"
paynow.$on(shop_name,(id)=>{
    shopName = id;
})
paynow.$on(menu,(id)=>{
    menuList = id;
    menuList.forEach((value,index,arr)=> {
    total = total + value.qua*value.price;
    })
})
paynow.$on("sendFare",(id)=>{
    sendFare = id;
})
// paynow.$on("remark",(id)=>{
//     // remark = id;
// })
    export default {
        name: "goPay",
        components: {
            "vue-header":header,
            "remark":remark
        },
        data () {
            return {
                menu: [],
                sure: false,
                show: false,
                timer: "请选择送达时间",
                payType: "在线支付",
                pay: false,
                remark: false,
                taste: "口味、偏好等",
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
                    {type:"在线支付",id:"id0",color: "#4cd964"},
                    {type: "货到付款",id:"id1",color: "#333"},
                    {type: "银行转账",id:"id2",color: "#333"}
                ],
                shopName: "",
                menuList: [],
                sendFare: 0,
                total: 0
            }
        },
        methods: {
            selecting (value) {
                this.timer = value;
                this.show = false;
            },
            changed () {
                this.show = true;
            },
            typeChange (value,id) {
                this.payType = value;
                this.pay = false;
                this.types.forEach((value,index,arr)=>{
                    if(value.id == id){
                        value.color = "#4cd964";
                    }else {
                        value.color = "#333";
                    }
                })
            },
            payChange () {
                this.pay = true;
            },
            remarkChange(){
                this.remark = true;
            },
            makeSuring (id) {
                console.log(id);
                this.remark = id.remark;
                this.taste = id.comment;
            }
        },
        
        created () {
            this.shopName = shopName;
            this.menuList = menuList;
            this.sendFare = sendFare;
            this.total = total;
        },
    }
</script>
<style lang="less" scoped>
    .goPay {
        background-color: #f5f5f5;
        position: relative;
        .remarks {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0px;
        }
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
                height: 0.5rem;
                line-height: 0.5rem;
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
                    height: 0.5rem;
                    width: 100%;
                    padding-right: 0.1rem;
                    box-sizing: border-box;
                    border-bottom: 1px solid #eee;
                    line-height: 0.5rem;
                    .fr {
                        color: #ddd;
                    }
                }
                .lucky {
                    height: 0.5rem;
                    line-height: 0.5rem;
                    color: #ddd;
                    padding-right: 0.1rem;
                    width: 100%;
                    box-sizing: border-box;
                }
                .el-icon-arrow-right {
                    transform: scale(0.8);
                }
            }
            .selectType {
                    position: fixed;
                    bottom: 0px;
                    width: 100%;
                    height: 2.5rem;
                    background-color: #fff;
                    z-index: 2;
                    h4 {
                        height: 40px;
                        line-height: 40px;
                        background-color: #fafafa;
                    }
                    li {
                        padding: 0 0.1rem;
                        box-sizing: border-box;
                        height: 0.4rem;
                        line-height: 0.4rem;
                        border-bottom: 1px solid #eee;
                        .el-icon-circle-check {
                            width: 0.2rem;
                            height: 0.2rem;
                            margin-top: 0.1rem;
                        }
                    }
                }
                .bg {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    bottom: 0;
                    background-color: rgba(0,0,0,0.3);
                    z-index: 1;
                }
                .listDetail {
                    width: 100%;
                    background-color: #fff;
                    margin-bottom: 10px;
                    h4 {
                        height: 0.5rem;
                        padding: 0 0.1rem;
                        box-sizing: border-box;
                        line-height: 0.5rem;
                        font-size: 18px;
                        text-align: left;
                        font-weight: 400;
                        border-bottom: 1px solid #eee;
                    }
                    .list {
                        padding: 0 0.1rem;
                        border-bottom: 1px solid #eee;
                        font-size: 12px;
                        ul {
                            li {
                                height: 0.3rem;
                                line-height: 0.3rem;
                                .qua {
                                    margin-right: 0.3rem;
                                }
                            }
                        }
                    }
                    .sendFare, .booking {
                        font-size: 12px;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        border-bottom: 1px solid #eee;
                        padding: 0 0.1rem;
                        box-sizing: border-box;
                    }
                }
                .remark,.invoice {
                    height: 0.5rem;
                    line-height: 0.5rem;
                    padding: 0 0.1rem;
                    box-sizing: border-box;
                    font-size: 12px;
                    background-color: #fff;
                    border-bottom: 1px solid #eee;
                }
                .remark {
                    span:nth-child(2){
                        width: 0.16rem;
                        height: 0.16rem;
                        margin-top: 0.17rem;
                    }
                    span:last-child {
                        text-align: right;
                        width: 70%;
                        white-space: nowrap; //不允许换行
                        overflow: hidden;//超出部分隐藏
                        text-overflow: ellipsis; //超过部分用省略号代替
                    }
                }
                .invoice {
                    margin-bottom: 0.5rem;
                }
                .footer {
                    position: fixed;
                    bottom: 0;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    background-color: #3c3c3c;
                    width: 100%;
                    color: #fff;
                    padding-left: 0.1rem;
                    box-sizing: border-box;
                    font-size: 16px;
                    font-weight: 600;
                    .fr {
                        background-color: #56d176;
                        width: 30%;
                    }
                }
        }
        
    }
</style>