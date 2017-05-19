<template>
    <div class="moreDetail">
        <vue-header>
            <span slot="left" class="el-icon-arrow-left left" v-on:click="back"></span>
            <p slot="middle" class="middle">{{title}}</p>
        </vue-header>
        <div class="shopDetail">
            <div class="tab">
                <ul class="clearfix">
                    <li v-for="(item,index) in tab" v-on:click="tabChange($event,item.type)" v-bind:style="{color: item.color}">
                        <div>{{item.name}}<span class="el-icon-caret-bottom"></span></div>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <div class="classify clearfix">
                    <div class="fl">
                        <div>全部商家<span>3299</span></div>
                        <ul>
                            <li v-for="item in classify">
                                <span></span>
                                <span></span>
                                <span class="el-icon-arrow-right"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="fr">
                        <ul>
                            <li v-for="item in c1">
                                <span>{{item.name}}</span>
                                <span>{{item.num}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rank"></div>
                <div class="select"></div>
            </div>
        </div>
    </div>
</template>
<script>
import header from "../common/header/header";
import detail from "../common/detail/detail"
    export default {
        name: "moreDetail",
        data () {
            return {
                title: "",
                type: "",
                details: [
                    {"img":"../../../static/imgs/m1.jpeg",}
                ],
                tab: [
                    {name:this.title,type:"classify",color: "#bbb"},
                    {name:"排序",type:"rank",color:"#bbb"},
                    {name:"筛选",type:"select",color:"#bbb"}
                ],
                classify: [
                    {img: "../../../../static/img/c1.png",num: 111,name: "快餐便当"},
                    {img: "../../../../static/img/c2.jpeg",num: 222,name: "特色菜系"},
                    {img: "../../../../static/img/c3.jpeg",num: 333,name: "异国料理"},
                    {img: "../../../../static/img/c4.png",num: 444,name: "小吃宵夜"},
                    {img: "../../../../static/img/c5.png",num: 555,name: "甜品饮品"},
                    {img: "../../../../static/img/c6.png",num: 666,name: "果蔬生鲜"},
                    {img: "../../../../static/img/c7.png",num: 777,name: "鲜花蛋糕"},
                    {img: "../../../../static/img/c8.png",num: 888,name: "商品超市"},
                ],
                c1: [
                    {name:"全部"+this.type,num: 999},
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
        components: {
            "vue-header": header,
            "detail": detail
        },
        created () {
            var _this = this;
            this.title = this.$route.params.type;
            if(this.title == "预定早餐"){
               var map = new BMap.Map("allmap");
               var geoc = new BMap.Geocoder();
               var geolocation = new BMap.Geolocation();
               geolocation.getCurrentPosition(function(r){
                   if(this.getStatus() == 0){
                       var point = new BMap.Point(r.point.lng,r.point.lat);
                       geoc.getLocation(point,function(rs){
                           var addComp = rs.addressComponents;
                           var street = addComp.street;
                           var streetNumber = addComp.streetNumber;
                           _this.title = street + streetNumber;
                       })
                   }else {
                    //    open() {
                    //       this.$message('获取位置失败,请前往手机中心设置')
                    //     };
                   }
               },{enableHeightAccuracy:true})
           
            }    
        },
         methods: {
             back: function() {
                 this.$router.back(-1)
             },
             tabChange: function(e,type){
                 if(type =="classify") {
                     this.tab[0].name = "分类";
                 }else {
                     this.tab[0].name = this.title
                 }
                 this.tab.forEach(function(value,index,array){
                    if(value.type == type) {
                        value.color = "#3190e8";
                    }else {
                        value.color = "#bbb";
                    }
                 })
             }
         }
    }
</script>
<style lang="less" scoped>
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
    }
</style>

