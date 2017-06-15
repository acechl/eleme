<template>
    <div class="shopDetails overflow" >
        <div class="shop">商家</div>
         <p class="load" v-if="fresh">下拉刷新...</p>
        <div class="detail">
            <ul>
                <li v-for="item in shopDetail">
                    <router-link to="/squareDetail">
                        <img v-bind:src="item.img" alt="">
                        <div class="content">
                            <p class="title">{{item.title}} <span></span></p>
                            <p class="qua">月售 {{item.qua}} 单</p>
                            <p class="price-dis">{{item.price}} 元起送 / 距离 {{item.dis}}</p>
                            <p v-show="item.send==1" class="send">满赠优惠<span>(手机客户端专享)</span></p>
                            <p v-show="item.discount==1" class="discount">满减优惠<span>(手机客户端专享)</span></p>
                            <p v-show="item.first==1" class="first">新用户立减(不与其他活动共享)<span>手机客户端共享</span></p>
                            <p></p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <p class="load" v-if="loading">正在加载</p>
        <p class="load" v-if="more">没有更多了喔</p>
    </div>
</template>
<script>
    export default {
        name: "shopDetails",
        props: ["shopDetail","loading","more","fresh"],
        data () {
            return {
            }
        },
        methods: {
           
        },
        created () {
            console.log(this.shopDetail);
        }
    }
</script>
<style lang="less" scoped>
    .shopDetails {
        width: 100%;
        .load {
            height: 40px;   
            line-height: 40px;
            text-align: center;
            margin:0;
            width: 100%;
        }
        .shop {
            padding: 0 0.1rem;
            width: 100%;
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            text-align: left;
            font-size: 0.18rem;
        }
        .detail {
            ul {
                background-color: #fff;
                width: 100%;
            }
            li {
                width: 100%;
                box-sizing: border-box;
                padding: 0.1rem;
                position: relative;
                border-bottom: 1px solid #eee;
                img {
                    width: 0.6rem;
                    height: 0.6rem;
                    position: absolute;
                    left: 0.1rem;
                }
                .content {
                    padding-left: 0.7rem;
                    width: 100%;
                    box-sizing: border-box;
                    text-align: left;
                    font-size: 0.12rem;
                    p {
                        margin:0;
                        line-height: 0.2rem;
                    }
                    .price-dis {
                        border-bottom: 1px solid #eee;
                    }
                    .send,.first,.discount { 
                        font-size: 0.1rem;
                        span {
                            color: orange;
                        }
                    }
                }
            }
        }
    }
</style>