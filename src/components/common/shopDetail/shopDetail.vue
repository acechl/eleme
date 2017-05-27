<template>
    <div class="shopDetail">
        <h6>附近商家</h6>
             <ul v-on:touchstart="touchStart($event)" v-on:touchend="touchEnd($event)">
                <li v-for="(item,index) in listData" >
                    <router-link to="squareDetail" class="clearfix">
                        <img v-bind:src="item.img" alt="" class="fl">
                        <div class="fl content">
                            <div class="top clearfix">
                                <h4 class="fl">{{item.title}}</h4>
                                <div class="fr qof">
                                    <span v-if="item.quality == 1">保</span>
                                    <span v-if="item.inTime == 1">准</span>
                                    <span v-if="item.free ==1">票</span>
                                </div>
                            </div>
                            <div class="middle clearfix">
                                <div class="fl number">
                                    <span>
                                        <star v-bind:star="item.score" class="score-star"></star>
                                        <span class="score">{{item.score}}</span>
                                        <span class="book">月售{{item.quatity}}单</span>
                                    </span>
                                </div>
                                <div class="fr logo clearfix">
                                    <span v-if="item.host == 1" class="host fl">蜂鸟专送</span>
                                    <span v-if="item.time == 1" class="time fl">准时送</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <span class="fl">￥{{item.min}}元送/配送费约￥{{item.free}}</span>
                                <div class="fr">{{item.kilometer}}/<span>{{item.minute}}分钟</span></div>
                            </div>
                        </div>
                    </router-link>                
                </li>
            </ul>
            <div class="loading" v-show="loading">正在加载</div>
    </div>
</template>
<script>
import start from "../../common/start/start.vue";
import Vue from "vue";
    export default {
        props: ["detail"],
        data () {
            return {
                num: 5,
                listData: [], 
                page: 0,
                loading: true,
                previous: "",
                plus: ""
            }
        },
        methods: {
            getList: function (page) {
                return this.detail.slice(page,this.num+page);
            },
            touchStart (e) {
               this.previous = e.changedTouches[0].clientY;
            },
            touchEnd (e) {
                if(this.previous < e.changedTouches[0].clientY) {
                    return;
                }
                this.plus = this.plus - e.changedTouches[0].clientY + this.previous;
                if(this.plus > 100){
                    this.page = this.page + 5;
                    this.loading = true;
                    setTimeout(()=> {
                        let items = this.getList(this.page)
                    this.listData = this.listData.concat(items);
                    this.plus = 0
                    },2000)
                }
                // this.loading = false;
            }
        },
        components: {
            "star":start,
        },
        created () {
            this.detail.forEach(function(value,index,array){
                if(value.title.length >= 10) {
                    value.title = value.title.substr(0,11)+"...";
                }
            })
             this.listData = this.getList(0);
             console.log(this.detail)
        }
    }
</script>
<style lang="less" scoped>
    .shopDetail {
        background-color: #fff;
        h6 {
            font-size: 16px;
            text-align: left;
            line-height: 40px;
            height: 40px; 
            padding-left: 0.1rem;
        }
        ul {
            width: 100%;
            li {
                height: 0.8rem;
                width: 100%;
                border-bottom: 1px solid #ccc;
                padding: 0.2rem 0 0 0.1rem;
                position: relative;
                font-size: 12px;
                a{
                    display: block;
                    width: 100%;
                    height: 0.8rem; 
                    img {
                        width: 0.6rem;
                        height: 0.6rem;
                        position: absolute;
                        left: 0.1rem;
                        top: 0.2rem;
                    }
                    .content {
                        width: 100%;
                        padding-left: 0.65rem;
                        box-sizing: border-box;
                        .qof {
                            margin-right: 0.2rem;
                            span {
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                text-align: center;
                                line-height: 12px;
                                font-size: 0.1rem;
                                transform: scale(0.8);
                            }
                        }
                        .middle {
                            margin: 0.08rem 0 0 0;
                            .number {
                                .score-star {
                                    display: inline-block;
                                    height: 0.12rem;
                                }
                                .score {
                                    font-size: 0.1rem;
                                    margin-left: 2px;
                                    color: orange;
                                }
                                .book {
                                    display: inline-block;
                                    font-size: 0.1rem;
                                    transform: scale(0.8);
                                    margin-left: -6px;
                                }
                            }
                            .logo { 
                                margin-right: 0.2rem;
                                span {
                                    font-size: 0.1rem;
                                    display: inline-block;
                                    transform: scale(0.8);
                                }
                                .host {
                                    border: 1px solid #44a5ff;
                                    padding: 0 2px;
                                    border-radius: 3px;
                                    color: #2395ff;
                                    background-color: #fff;
                                    line-height: 0.2rem;
                                }
                                .time {
                                    background-color: #2395ff;
                                    color: #fff;
                                    padding: 1px 2px;
                                    border-radius: 3px;
                                    line-height: 0.2rem;
                                }
                            }
                        }
                        .bottom {
                            span {
                                display: inline-block;
                                font-size: 0.1rem;
                                transform: scale(0.8);
                            }
                        }
                    }
                }
            }
        }
        .loading {
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #666;
        }
    }
</style>