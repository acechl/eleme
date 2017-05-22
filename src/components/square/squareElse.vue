<template>
   <div class="squareElse">
        <vue-header>
            <span slot="left" class="el-icon-arrow-left left" v-on:click="back"></span>
            <p slot="middle" class="middle">{{title}}</p>
        </vue-header>
        <div class="shopDetail">
            <div class="tab">
                <ul class="clearfix">
                    <li v-for="(item,index) in tab" v-on:click="tabChange($event,item.type)" v-bind:style="{color: item.color}">
                        <div>{{item.name}}<span v-bind:class="item.classes"></span></div>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div class="classify clearfix">
                    <div class="fl left clearfix">
                        <div><span class="fl">全部商家</span><span class="num fr">3299</span></div>
                        <ul>
                            <li v-for="item in classify" class="clearfix" v-on:click="leftClick($event,item.name)" v-bind:style="{backgroundColor: item.color}">
                                <img v-bind:src="item.img" alt="" class="fl">
                                <span class="fl name">{{item.name}}</span>
                                <span class="fl num">{{item.num}}</span>
                                <span class="el-icon-arrow-right fr icon"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="fr right">
                        <ul>
                            <li v-for="item in c1" class="clearfix" v-on:click="rankClick">
                                <span class="fl name">{{item.name}}</span>
                                <span class="fr num">{{item.num}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rank">
                    <ul>
                        <li v-for="item in ranks">
                            <img v-bind:src="item.img" alt="" class="fl">
                            <span class="fl">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
                <div class="select"></div>
            </div>
        </div>
    </div>
</template>
<script>
import header from "../common/header/header";
import detail from "../common/detail/detail"
    export default {
         name: "squareElse",
         components: {
            "vue-header": header,
            "detail": detail
        },
        props: ["title"],
         data () {
            return {
                title: "",
                type: "",
                types: "",
                previous: "",
                details: [
                    {"img":"../../../static/imgs/m1.jpeg",}
                ],
                tab: [
                    {name:this.title,type:"classify",color: "#bbb",classes: "el-icon-caret-bottom"},
                    {name:"排序",type:"rank",color:"#bbb",classes: "el-icon-caret-bottom"},
                    {name:"筛选",type:"select",color:"#bbb",classes: "el-icon-caret-bottom"}
                ],
                classify: [
                    {img: "../../../static/imgs/c1.png",num: 111,name: "快餐便当",color:"#fff"},
                    {img: "../../../static/imgs/c2.jpeg",num: 222,name: "特色菜系",color: "f1f1f1"},
                    {img: "../../../static/imgs/c3.jpeg",num: 333,name: "异国料理",color: "f1f1f1"},
                    {img: "../../../static/imgs/c4.png",num: 444,name: "小吃宵夜",color: "f1f1f1"},
                    {img: "../../../static/imgs/c5.png",num: 555,name: "甜品饮品",color: "f1f1f1"},
                    {img: "../../../static/imgs/c6.png",num: 666,name: "果蔬生鲜",color: "f1f1f1"},
                    {img: "../../../static/imgs/c7.png",num: 777,name: "鲜花蛋糕",color: "f1f1f1"},
                    {img: "../../../static/imgs/c8.png",num: 888,name: "商品超市",color: "f1f1f1"},
                ],
                ranks: [
                    {name:"智能排序",img: "../../../static/imgs/c1.png"},
                    {name:"距离最近",img: "../../../static/imgs/c2.jpeg"},
                    {name:"销量最高",img: "../../../static/imgs/c3.jpeg"},
                    {name:"起送价最低",img: "../../../static/imgs/c4.png"},
                    {name:"配送速度最快",img: "../../../static/imgs/c5.png"},
                    {name:"评分最高",img: "../../../static/imgs/c6.png"},
                ],
                c1: [
                    {name:this.types,num: 999},
                    {name:"日韩料理",num:111},
                    {name:"西餐",num:222},
                    {name:"披萨意面",num:333},
                    {name:"东南亚菜",num:444},
                    {name:"海鲜",num:555},
                    {name:"江浙菜",num:666},
                    {name:"蛋糕",num:777},
                    {name:"面包",num:888},
                    {name:"火锅",num:999},
                    {name:"中式甜品",num:101},
                    {name:"榴莲",num:121},
                    {name:"鸡蛋炒米线",num:131},
                    {name:"烧烤",num:141},
                    {name:"雪糕",num:151},
                    {name:"蜡笔小新",num:161},

                ]
            }
        },
        methods : {
             back: function() {
                 this.$router.back(-1)
             },
             rankClick: function () {

             },
             tabChange: function(e,type){
                 var _this = this;
                 if(this.previous == type) {
                    this.tab[0].name= this.title;
                    this.tab.forEach(function(value,index,array){
                        value.color = "#bbb";
                        _this.previous = '';
                        value.classes ="el-icon-caret-bottom"
                    })
                    return;
                 }
                 if(type =="classify") {
                     this.tab[0].name = "分类";
                 }else {
                     this.tab[0].name = this.title
                 }
                 this.tab.forEach(function(value,index,array){
                    if(value.type == type) {
                        value.color = "#3190e8";
                        value.classes="el-icon-caret-top";
                    }else {
                        value.color = "#bbb";
                    }
                 })
                 this.previous = type;
             },
             leftClick: function (e,type) {
                this.classify.forEach(function(value,index,array){
                    if(value.name == type) {
                        value.color = "#fff"
                    }else {
                        value.color = "#f1f1f1";
                    }
                })
             }
        },
        created () {
           this.types = this.type + "全部";
        }
    }
</script>
<style lang="less" scoped>
    .choosed {
        background-color: #fff;
    }
     .select {
        color: blue;
    }
    .unselect {
        color: #bbb;
    }
    .moreDetail {
        width: 100%;
        .tab {
            ul {
                border-bottom: 1px solid #eee;
                height: 40px;
                li {
                    width: 33.33%;
                    height: 40px;
                    text-align: center;
                    float: left;
                    div {
                        margin-top: 5px;
                        height: 30px;
                        line-height: 30px;
                        border-right: 1px solid #eee;
                        box-sizing: border-box;
                        span {
                            font-size: 12px;
                            margin-left: 3px;
                        }
                    }
                   
                }
            }
        }
        .tab-content {
            background-color: #fff;
            height: 360px;
            .classify {
            .left {
                background-color: #f1f1f1;
                width: 50%;
                color: #666;
                font-size: 12px;
                div {
                    height: 40px;
                    padding: 0 0.08rem 0 0.1rem;
                    span {
                        height: 40px;
                        line-height: 40px;
                    }
                    .num {
                        color: #fff;
                            background-color: #ccc;
                            border-radius: 10px;
                            padding: 0 8px;
                            height: 20px;
                            line-height: 20px;
                            margin-top: 10px;
                    }
                }
                ul {
                    li {
                        padding: 0 0.1rem;
                        height: 40px;
                        line-height: 40px;
                        img {
                            width: 16px;
                            height: 16px;
                            margin-right: 0.08rem;
                            margin-top: 12px;
                            vertical-align: middle;
                        }
                        .icon {
                            height: 40px;
                            line-height: 40px;
                            font-size: 12px;
                            color: rgb(187, 187, 187);
                        }
                        .num {
                            color: #fff;
                            background-color: #ccc;
                            border-radius: 10px;
                            padding: 0px 5px;
                            height: 20px;
                            line-height: 20px;
                            margin-top: 10px;
                            margin-left: 0.2rem;
                        }
                    }
                    li:first-child {
                        background-color: #fff;
                    }
                }
            }
            }
            .rank {
                height: 240px;
                background-color: #fff;
                ul {
                    li {
                        height: 50px;
                        line-height: 50px;
                        width: 100%;
                        padding-left: 0.4rem;
                        box-sizing: border-box;
                        position: relative;
                    }
                    img {
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        left: 0.2rem;
                        top: 17px;
                    }
                    span {
                        border-bottom: 1px solid #ccc;
                        width: 100%;
                        text-align: left;
                        padding-left: 10px;
                    }
                }
            }
            .right {
                overflow-y: auto; 
                height: 360px;
                padding-left: 0.1rem;
                box-sizing: border-box;
                ul {
                    li {
                        height: 40px;
                        line-height: 40px;
                        border-bottom: 1px solid #e4e4e4;
                        width: 100%;
                        color: #666;
                        font-size: 12px;
                        .num {
                            margin-right: 0.1rem;
                        }
                        .name {
                            margin-left: 0.1rem;
                        }
                    }
                    li:first-child {
                        color: #3190e8;
                    }
                    
                }
            }
            .right {
                width: 50%;
            }
        }
    }
</style>

