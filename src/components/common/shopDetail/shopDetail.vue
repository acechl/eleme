<template>
    <div class="shopDetail">
        <h6>附近商家</h6>
           <ul>
                <li v-for="item in detail">
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
                                <div class="fl">
                                    <span>
                                        <star v-bind:star="item.score" class="score-star"></star>
                                        <span>{{item.score}}</span>
                                        <span>月售{{item.quatity}}单</span>
                                    </span>
                                </div>
                                <div class="fr">
                                    <span v-if="item.hose == 1">蜂鸟专送</span>
                                    <span v-if="item.time">准时送</span>
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
    </div>
</template>
<script>
import start from "../../common/start/start.vue"
    export default {
        props: ["detail"],
        data () {
            return {

            }
        },
        components: {
            "star":start
        },
        created () {
            this.detail.forEach(function(value,index,array){
                if(value.title.length >= 10) {
                    value.title = value.title.substr(0,11)+"...";
                }
            })
        }
    }
</script>
<style lang="less" scoped>
    .shopDetail {
        background-color: #fff;
        h6 {
            font-size: 20px;
            text-align: left;
            line-height: 50px;
            height: 50px; 
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
                        padding-left: 0.75rem;
                        box-sizing: border-box;
                        .qof {
                            margin-right: 0.2rem;
                             transform: scale(0.9);
                            span {
                                display: inline-block;
                                width: 12px;
                                height: 12px;
                                border: 1px solid #333;
                                text-align: center;
                                line-height: 12px;
                            }
                        }
                        .middle {
                            margin: 0.08rem 0;
                            .score-star {
                                display: inline-block;
                                height: 0.12rem;
                                width: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>