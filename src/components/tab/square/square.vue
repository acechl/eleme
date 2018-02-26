<template>
    <div class="square">
        <vue-header>
            <router-link slot="left" to="/search" class="el-icon-search fl left"></router-link>
            <div slot="middle" class="fl middle">{{addressing}}</div>
            <div slot="right">
                <router-link v-if="isLogin" class="el-icon-setting fr right" to="/self"></router-link>
                <div class="fr right" v-else>
                    <router-link to="/register" class="register">登录</router-link>|<router-link to="/login" class="login">注册</router-link>
                </div>
            </div>
        </vue-header>
        <div class="swiper">
           <swiper :options="swiperOption">
                <swiper-slide class="loop">
                    <ul class="clearfix">
                        <li v-for="item in items1" class="fl">
                            <router-link v-bind="{to:'/moreDetail/'+item.title}">
                                <img v-bind:src='item.img' alt="">
                                <div>{{item.title}}</div>
                            </router-link>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide class="loop">
                    <ul class="clearfix">
                        <li v-for="item in items2" class="fl">
                            <router-link v-bind="{to:'/moreDetail/'+item.title}">
                                <img v-bind:src='item.img' alt="">
                                <div>{{item.title}}</div>
                            </router-link>
                        </li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div v-on:touchend="touchEnd($event)" v-on:touchstart="touchStart($event)">
            <shopDetail v-bind:detail="detail" v-bind:more = "more" v-bind:load="loading" v-bind:fresh="fresh"></shopDetail>
        </div>
        <div class="css" transition="loading"></div>
        <div class="bg"></div>
    </div>
</template>
<script>
    import header from "../../common/header/header.vue";
    import Vue from "vue";
    import {check,check_out} from "../../../js/common.js" ;
    import AwesomeSwiper from "vue-awesome-swiper";
    Vue.use(AwesomeSwiper);
    import {swiper,swiperSlider,swiperPlugins} from "vue-awesome-swiper";
    import start from "../../common/start/start.vue";
    import shopDetail from "../../common/shopDetail/shopDetail.vue"
    export default {
        name: "square",
        components: {
            "vue-header":header,
            shopDetail,
            swiper,
            swiperSlider,
            start
        },
        props: ["addressing"],
        data: function () {
            return {
                addresses: "",
                swiperOption: {
                    name: 'currentSwiper',
                    login: "",
                    autoplay: false,
                    direction : 'horizontal',
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: false,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    mousewheelControl : true,
                    observeParents:true,
                },
               items1: [
                   {"img":"/static/imgs/good.jpeg","title": "美食"},
                   {"img":"/static/imgs/drink.jpeg","title": "甜品饮品"},
                   {"img":"/static/imgs/super.jpeg","title": "商超便利"},
                   {"img":"/static/imgs/breakfast.jpeg","title": "预定早餐"},
                   {"img":"/static/imgs/fruit.jpeg","title": "果蔬生鲜"},
                   {"img":"/static/imgs/shop.jpeg","title": "新店特惠"},
                   {"img":"/static/imgs/onTime.jpeg","title": "准时达"},
                   {"img":"/static/imgs/night.jpeg","title": "夜宵"},
               ],
               items2: [
                   {"img":"/static/imgs/introduce.jpeg","title": "土豪推荐"},
                   {"img":"/static/imgs/humbeger.jpeg","title": "汉堡薯条"},
                   {"img":"/static/imgs/soup.jpeg","title": "包子粥店"},
                   {"img":"/static/imgs/cake.jpeg","title": "鲜花蛋糕"},
                   {"img":"/static/imgs/hot.jpeg","title": "麻辣烫"},
                   {"img":"/static/imgs/四川.jpeg","title": "川湘菜"},
                   {"img":"/static/imgs/pizza.jpeg","title": "披萨意面"},
                   {"img":"/static/imgs/ricce.jpeg","title": "日韩料理"},
               ],
               details: [
                   {"img":"/static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":2.2,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":1,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":0.3,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                    {"img":"/static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":3.4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4.5,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":5,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"/static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33}
               ],
               page: 0,
               num: 5,
               detail: [],
               loading: false,
               more: false,
               fresh: false,
               start: 0
            }
        },
        methods: {
            shopDetail: function (start) {
                this.detail = this.details.slice(start,4)
            },
            getList: function (page) {
                return this.details.slice(0,this.num+page);
            },
            touchStart (e) {
                this.start = e.currentTarget.scrollTop;
            },
            touchEnd (e) {
                if(this.loading == true){
                    return;
                }
                if(e.currentTarget.scrollTop + e.currentTarget.offsetHeight >= e.currentTarget.scrollHeight-300){
                    this.loading = true;
                    this.page = this.page + 5;
                    if(this.details.slice(this.page,this.num+this.page).length == 0) {
                        this.loading = false;
                        this.more = true;
                        return;
                    }
                    this.detail = this.getList(this.page);
                    this.loading = false;
                }
            }
        },
        computed: {
            swiper() {
                return (this.$children.find(children => children.options.name == 'currentSwiper').swiper)
            },
            isLogin() {
                return this.$store.state.isLogin
            }
        },
        created () {
             this.details.forEach(function(value,index,array){
                if(value.title.length >= 10) {
                    value.title = value.title.substr(0,11)+"...";
                }
            })
            this.shopDetail(0);
            this.detail = this.getList(this.page);

        },
        mounted () {
             check.$on(check_out,function(id){
                this.login = id;
            })
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../css/common.less";
    .square {
        width: 100%;
        height: 100%;
        background: #eee;
        .middle {
            color: #fff;
        }
        .register {
            margin-right: 0.05rem !important;
            font-size: 12px;
        }
        .login {
            margin-left: 0.05rem !important;
            margin-right: 0.2rem;
            font-size: 12px;
        }
        .swiper {
            position: relative;
            background-color: #fff;
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
            ul {
                box-sizing: border-box;
                padding-left: 0.05rem;
                li {
                    width: 24%;
                    margin-top: 0.2rem;
                    a {
                        display: block;
                        margin: 0 auto;
                        div {
                            font-size: 14px;
                            margin-top: 5px;
                        }
                        img {
                            width: 0.6rem;
                            height: 0.6rem;
                        }
                    }
                }
            }
            .swiper-pagination {
                position: absolute;
            }

        }
        .swiper-container,.swiper-wrapper {
                padding-bottom: 30px;
            }
        }
        @keyframes loading {
            0% {
                background-position: -4px 0px;
                background-size: 100%;
                opacity: 1;
                transform: translateX(-50%);
            }
            25% {
                background-position: -4px 0px;
                background-size: 100%;
                opacity: 1;
                transform: translate(-50%,-60px);
            }
            49.9% {
                background-position: -4px 0px;
                background-size: 100%;
                opacity:1;
                transform: translate(-50%,0px)
            }
            50% {
                background-position: -4px -57px;
                background-size: 100%;
                opacity: 0.8;
                transform: translate(-50%,0px)
            }
            90% {
                background-position: -4px -57px;
                background-size: 100%;
                opacity: 0.6;
                transform: translate(-50%,-40px);
            }
            100% {
                 background-position: -4px -57px;
                background-size: 100%;
                opacity: 0;
                transform: translate(-50%,-40px);
                display: none;
            }
        }
        @keyframes background {
            0% {
                width: 70px;
                height: 30px;
                opacity: 1;
                transform: translate(-50%,60px) rotate(-5deg);
                display: block;
            }
            25% {
                width: 40px;
                height: 15px;
                opacity: 1;
                 display: block;
                transform: translate(-50%,0px) rotate(-5deg);
            }
            50% {
                width: 70px;
                 display: block;
                height: 30px;
                opacity: 0.8;
                transform: translate(-50%,60px) rotate(-5deg);
            }
            90% {
                 width: 40px;
                  display: block;
                height: 15px;
                transform: translate(-50%,20px) rotate(-5deg);
                opacity: 0;
                display: none;
            }
            100% {
                width: 40px;
                height: 15px;
                transform: translate(-50%,20px) rotate(-5deg);
                opacity: 0;
                display: none;
            }
        }
        .css {
            background: url("/static/imgs/icon_loading.png") no-repeat;
            transform: translateX(-50%);
            background-size: 100%;
            background-position: -4px 0px;
            width: 60px;
            height: 60px;
            position: absolute;
            left: 50%;
            top: 40%;
            animation: loading 2s;
            animation-fill-mode: forwards;
        }
        .bg {
            background: rgba(0,0,0,0.2);
            position: absolute;
            left: 50%;
            transform: translate(-55%,60px) rotate(-5deg);
            top: 40%;
            width: 70px;
            height: 30px;
            border-radius: 50%;
            animation: background 2s;
            animation-fill-mode: forwards;
        }
        .right {
            line-height: 30px;
        }

</style>
