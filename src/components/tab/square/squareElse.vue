<template>
   <div class="squareElse" ref="total">
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
                <div  v-bind:class="{'fadeIn':selected !='classify','fadeOut': selected == 'classify'}" class="classify clearfix">
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
                <div v-bind:class="{'fadeIn':selected !='rank','fadeOut': selected == 'rank'}" class="rank">
                    <ul>
                        <li v-for="item in ranks">
                            <img v-bind:src="item.img" alt="" class="fl">
                            <span class="fl">{{item.name}}</span>
                        </li>
                    </ul>
                </div>
                <div v-bind:class="{'fadeIn':selected !='select','fadeOut': selected == 'select'}" class="select">
                    <div class="send">
                        <p>配送方式</p>
                        <p v-on:click="choose($event,-1)" ref="p">蜂鸟专送</p>
                    </div>
                    <div class="attribute">
                        <p>商家属性(可多选)</p>
                        <ul class="clearfix">
                            <li v-for="(item,index) in attr" v-on:click="choose($event,index)" ref="li">
                                <span>{{item.logo}}</span>
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="button">
                        <p v-on:click="clear">清空</p>
                        <p v-on:click="makeSure">确定<span style="margin-left: 3px;">{{num}}</span></p>
                    </div>
                </div>
            </div>
            <shopDetail v-bind:detail="details"></shopDetail>
        </div>
         <div class="bg" ref="bg"></div>
    </div>
</template>
<script>
import header from "../../common/header/header";
import shopDetail from "../../common/shopDetail/shopDetail"
    export default {
         name: "squareElse",
         components: {
            "vue-header": header,
            "shopDetail": shopDetail
        },
        props: ["title"],
         data () {
            return {
                title: "",
                type: "",
                types: "",
                num: "",
                numArray: [],
                previous: "",
                selected: "",
                details: [
                    {"img":"../../../../static/imgs/m1.jpeg",}
                ],
                tab: [
                    {name:this.title,type:"classify",color: "#bbb",classes: "el-icon-caret-bottom"},
                    {name:"排序",type:"rank",color:"#bbb",classes: "el-icon-caret-bottom"},
                    {name:"筛选",type:"select",color:"#bbb",classes: "el-icon-caret-bottom"}
                ],
                classify: [
                    {img: "../../../../static/imgs/c1.png",num: 111,name: "快餐便当",color:"#fff"},
                    {img: "../../../../static/imgs/c2.jpeg",num: 222,name: "特色菜系",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c3.jpeg",num: 333,name: "异国料理",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c4.png",num: 444,name: "小吃宵夜",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c5.png",num: 555,name: "甜品饮品",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c6.png",num: 666,name: "果蔬生鲜",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c7.png",num: 777,name: "鲜花蛋糕",color: "f1f1f1"},
                    {img: "../../../../static/imgs/c8.png",num: 888,name: "商品超市",color: "f1f1f1"},
                ],
                ranks: [
                    {name:"智能排序",img: "../../../../static/imgs/c1.png"},
                    {name:"距离最近",img: "../../../../static/imgs/c2.jpeg"},
                    {name:"销量最高",img: "../../../../static/imgs/c3.jpeg"},
                    {name:"起送价最低",img: "../../../../static/imgs/c4.png"},
                    {name:"配送速度最快",img: "../../../../static/imgs/c5.png"},
                    {name:"评分最高",img: "../../../../static/imgs/c6.png"},
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

                ],
                attr: [
                    {name: "品牌商家",logo:"品"},
                    {name:"外卖保",logo:"保"},
                    {name:"新店",logo:"新"},
                    {name: "开发票",logo:"票"},
                    {name:"在线支付",logo:"付"},
                    {name:"准时达",logo:"准"}
                ],
                 details: [
                   {"img":"../../../../static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":2.2,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":1,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":0.3,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                    {"img":"../../../../static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":3.4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4.5,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":5,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33}
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
                 console.log(this.$refs.total);
                 this.selected = type;
                 console.log(this.selected);
                 var _this = this;
                 if(this.previous == type) {
                     this.$refs.bg.style.display = "none";
                     this.$refs.total.style.height = "auto";
                     this.$refs.total.style.overflow = "visible";
                     this.selected = "";
                    this.tab[0].name= this.title;
                    this.tab.forEach(function(value,index,array){
                        value.color = "#bbb";
                        _this.previous = '';
                        value.classes ="el-icon-caret-bottom"
                    })
                    return;
                 }
                 this.$refs.bg.style.display = "block";
                 this.$refs.total.style.height = "100%";
                 this.$refs.total.style.overflow = "hidden";
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
             },
             choose: function(e,num){
                    if(this.numArray.indexOf(num) == -1) {
                        this.numArray.push(num);
                        e.currentTarget.style.borderColor = "#a2d2ff";
                        e.currentTarget.style.color = "#3190e8";
                        e.currentTarget.style.backgroundColor = "#edf5ff";
                    }else {
                        var index = this.numArray.indexOf(num);
                        e.currentTarget.style.borderColor = "rgb(102, 102, 102)";
                        e.currentTarget.style.color = "#666";
                        e.currentTarget.style.backgroundColor = "#fff";
                        this.numArray.splice(index,1);
                    }
               if(this.numArray.length == 0){
                   this.num = "";
               }else {
                   this.num = this.numArray.length;
               }
             },
             clear: function () {
                this.num = "";
                this.numArray = [];
                this.clearAll();
             },
             makeSure: function () {
                 this.num = "";
                 this.numArray = [];
                 this.selected = "";
                 this.tabChange(1,"select");
                 this.clearAll();
             },
             clearAll: function() {
                 for(var i=0;i<this.$refs.li.length;i++){
                    this.$refs.li[i].style.borderColor = "rgb(102, 102, 102)";
                    this.$refs.li[i].style.color = "#666";
                    this.$refs.li[i].style.backgroundColor = "#fff";
                }
                this.$refs.p.style.borderColor = "rgb(102, 102, 102)";
                this.$refs.p.style.color = "#666";
                this.$refs.p.style.backgroundColor = "#fff";
             }
        },
        created () {
           this.types = this.type + "全部";
        }

    }
</script>
<style lang="less" scoped>
    @keyframes fadeIn {
        0% {
            height: auto;
        }
        50% {
            height: 180px;
        }
        99.9% {
            height: 0px;
        }
        100% {
            height: 0px;
        }
    }
    @keyframes fadeOut {
        0% {
            height: 0px;
        }
        0.1% {
            height: 0px;
        }
        50% {
            height: 180px;
        }
        100% {
            height: auto;
        }
    }
    .fadeIn {
       animation: fadeIn 0.3s;
       animation-fill-mode : forwards;
    }
    .fadeOut {
        animation: fadeOut 0.3s;
        animation-fill-mode : forwards;
    }
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
        position: relative;
        .bg {
            display: none;
            width: 100%;
            height: calc(~"100% - 81px");
            position: absolute;
            top: 80px;
            left: 0px;
            background-color: rgba(0,0,0,0.2);
        }
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
            position: absolute;
            top: 81px;
            left: 0px;
            width: 100%;
            .classify {
                height: 0px;
                overflow: hidden;
                position: relative;
                z-index: 9;
                background-color: #fff;
                 width: 100%;
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
                position: absolute;
                width: 100%;
                top: 0px;
                left: 0px;
                height: 0px;
                overflow: hidden;
                background-color: #fff;
                z-index: 9;
                width: 100%;
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
            .select {
                position: absolute;
                width: 100%;
                z-index: 9;
                top: 0px;
                left: 0px;
                padding: 0 0.2rem;
                box-sizing: border-box;
                color: #666;
                font-size: 12px;
                width: 100%;
                text-align: left;
                height: 0px;
                overflow: hidden;
                background-color: #fff;
                .send {
                    p:first-child {
                        width: 100%;
                        margin: 8px 0;
                        text-align: left;
                    }
                    p:nth-child(2) {
                        display: inline-block;
                        height: 30px;
                        line-height: 30px;
                        padding: 0 10px;
                        border: 1px solid #666;
                        margin: 0;
                    }
                }
                .attribute {
                    width: 100%;
                    margin-bottom: 0.2rem;
                    ul {
                        li {
                            float: left;
                            width: 31%;
                            margin-right: 3%;
                            position: relative;
                            border: 1px solid #666;
                            box-sizing: border-box;
                            padding: 0.08rem 0;
                            margin-bottom: 0.1rem;
                            span:first-child {
                                border: 1px solid rgb(255, 78, 0);
                                border-radius: 2px;
                                margin: 0 0.08rem 0 0.1rem;
                                display: inline-block;
                                padding: 0.01rem;
                                color: rgb(255,78,0);
                            }
                            span:nth-child(2) {
                                margin-left: -0.03rem;
                            }
                        }
                        li:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                }
                .button {
                    p {
                        width: 47%;
                        margin: 0 3% 0 0;
                        border: 1px solid #ddd;
                        color: #333;
                        box-sizing: border-box;
                        float: left;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        text-align: center;
                        font-size: 0.12rem;
                        margin-bottom: 20px;
                    }
                    p:nth-child(2) {
                        margin: 0;
                        background-color: #56d176;
                        color: #fff;
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

