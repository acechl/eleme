<template>
    <div class="shopDetails">
        <div class="shop">商家</div>
        <div class="detail">
            <ul>
                <li v-for="item in shopDetails">
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
    </div>
</template>
<script>
    export default {
        name: "shopDetails",
        data () {
            return {
                shopDetails: [
                    {img:"../../../../static/imgs/m1.png",title:"张记黄焖鸡米饭",qua:444,price:22,dis:666,send:1,discount:1,first:0},
                    {img:"../../../../static/imgs/m2.png",title:"土老冒黄焖鸡米饭(人民广场店)",qua:555,dis:99,send:1,discount:1,first:1},
                    {img:"../../../../static/imgs/m3.jpeg",title:"陈记桂林米粉黄焖鸡米饭",qua:333,price:11,dis:999,send:0,discount:1,first:1},
                    {img:"../../../../static/imgs/m4.jpeg",title:"峰味饺子店",qua:44,price:80,dis:88,send:1,discount:0,first:1},
                     {img:"../../../../static/imgs/m1.png",title:"张记黄焖鸡米饭",qua:444,price:22,dis:666,send:1,discount:1,first:0},
                    {img:"../../../../static/imgs/m2.png",title:"土老冒黄焖鸡米饭(人民广场店)",qua:555,dis:99,send:1,discount:1,first:1},
                    {img:"../../../../static/imgs/m3.jpeg",title:"陈记桂林米粉黄焖鸡米饭",qua:333,price:11,dis:999,send:0,discount:1,first:1},
                    {img:"../../../../static/imgs/m4.jpeg",title:"峰味饺子店",qua:44,price:80,dis:88,send:1,discount:0,first:1},
                     {img:"../../../../static/imgs/m1.png",title:"张记黄焖鸡米饭",qua:444,price:22,dis:666,send:1,discount:1,first:0},
                    {img:"../../../../static/imgs/m2.png",title:"土老冒黄焖鸡米饭(人民广场店)",qua:555,dis:99,send:1,discount:1,first:1},
                    {img:"../../../../static/imgs/m3.jpeg",title:"陈记桂林米粉黄焖鸡米饭",qua:333,price:11,dis:999,send:0,discount:1,first:1},
                    {img:"../../../../static/imgs/m4.jpeg",title:"峰味饺子店",qua:44,price:80,dis:88,send:1,discount:0,first:1},
                     {img:"../../../../static/imgs/m1.png",title:"张记黄焖鸡米饭",qua:444,price:22,dis:666,send:1,discount:1,first:0},
                    {img:"../../../../static/imgs/m2.png",title:"土老冒黄焖鸡米饭(人民广场店)",qua:555,dis:99,send:1,discount:1,first:1},
                    {img:"../../../../static/imgs/m3.jpeg",title:"陈记桂林米粉黄焖鸡米饭",qua:333,price:11,dis:999,send:0,discount:1,first:1},
                    {img:"../../../../static/imgs/m4.jpeg",title:"峰味饺子店",qua:44,price:80,dis:88,send:1,discount:0,first:1},
                     {img:"../../../../static/imgs/m1.png",title:"张记黄焖鸡米饭",qua:444,price:22,dis:666,send:1,discount:1,first:0},
                    {img:"../../../../static/imgs/m2.png",title:"土老冒黄焖鸡米饭(人民广场店)",qua:555,dis:99,send:1,discount:1,first:1},
                    {img:"../../../../static/imgs/m3.jpeg",title:"陈记桂林米粉黄焖鸡米饭",qua:333,price:11,dis:999,send:0,discount:1,first:1},
                    {img:"../../../../static/imgs/m4.jpeg",title:"峰味饺子店",qua:44,price:80,dis:88,send:1,discount:0,first:1},
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .shopDetails {
        width: 100%;
        height: 100%;
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
            background-color: #fff;
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