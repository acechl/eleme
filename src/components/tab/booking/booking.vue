<template>
    <div class="booking" v-on:touchstart="touchStart($event)" v-on:touchend="touchEnd($event)" v-on:touchmove="touchMove($event)">
        <vue-header>
            <span slot="left" class="left el-icon-arrow-left"></span>
            <span slot="middle" class="middle">订单详情</span>
        </vue-header>
        <div class="fresh" v-show="fresh">下拉刷新...</div>
        <div class="bookingDetail">
            <ul>
                <li v-for="item in bookDetail">
                   <router-link to="/squareDetail">
                     <img v-bind:src="item.img" alt="">
                    <div class="content">
                        <div class="top">
                            <div class="clearfix">
                                <span class="fl title">{{item.title}}</span>
                                <span class="fr state">{{item.state}}</span>
                            </div>
                            <div class="time">{{item.time}}</div>
                        </div>
                        <div class="middle clearfix">
                            <span class="fl list">{{item.list}}</span>
                            <span class="fr price">{{item.price}}</span>
                        </div>
                        <div class="bottom">
                            <span>再来一单</span>
                        </div>
                    </div>
                   </router-link>
                </li>
            </ul>
        </div>
        <div class="load" v-show="load">正在加载</div>
        <div class="more" v-show="more">没有更多订单了</div>
    </div>
</template>
<script>
import header from "../../common/header/header"
    export default {
        name: "booking",
        data () {
            return {
                bookDetails: [
                    {img: "../../../../static/imgs/m1.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m2.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m3.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m4.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m1.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m2.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m3.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m4.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567}, {img: "../../../../static/imgs/m1.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m2.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m3.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m4.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567}, {img: "../../../../static/imgs/m1.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m2.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m3.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m4.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567}, {img: "../../../../static/imgs/m1.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m2.png",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m3.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567},
                    {img: "../../../../static/imgs/m4.jpeg",title:"黄氏烘焙",state:"订单已完成",list:"野原新之助风间彻樱田妮妮正男阿呆野原向日葵野原广志野原美伢",price: "￥999",time:1423434546567}
                ],
                num: 5,
                page: 0,
                bookDetail: [],
                start: 0,
                load: false,
                more: false,
                fresh: false
            }
        },
        components: {
            "vue-header": header
        },
        created () {
            this.bookDetail = this.getList(this.page);
        },
        methods: {
            getList (page) {
                return this.bookDetails.slice(0,page+this.num);
            },
            touchStart (e) {
                this.start = e.changedTouches[0].clientY;
            },
            touchMove (e) {
                if(e.changedTouches[0].clientY > this.start && e.currentTarget.scrollTop <= 0){
                    e.preventDefault();
                }
            },
            touchEnd (e) {
                if(e.changedTouches[0].clientY - this.start >0){
                    this.load = false;
                    //上拉
                    if(e.currentTarget.scrollTop <=0){//当达到顶端时
                        console.log("到达顶端");
                        if(this.fresh == true){
                            return;
                        }
                        this.fresh = true;
                        setTimeout(()=>{
                            this.fresh = false;
                        },1000)
                    }
                }else { //还没有到达顶端
                        if(this.load == true){
                            return;
                        }
                        if(e.currentTarget.scrollTop + e.currentTarget.offsetHeight >= e.currentTarget.scrollHeight-100){
                            this.load = true;
                            this.page = this.page+this.num;
                            if(this.bookDetails.slice(this.page,this.num+this.page).length == 0){
                                this.load = false;
                                this.more = true;
                                return;
                            }
                            this.bookDetail = this.getList(this.page);
                            this.load = false;
                        }
                    }
            }
        }
    }
</script>
<style lang="less" scoped>
    .booking {
        background-color: #eee;
        height: 100%;
        .fresh,.load,.more {
            font-size: 0.14rem;
            line-height: 40px;
        }
    }
    .bookingDetail {
        width: 100%;
        box-sizing: border-box;
        ul {
            width: 100%;
            li {
                background-color: #fff;
                padding: 0.1rem;
                position: relative;
                margin-bottom: 20px;
                color: #666;
                img {
                    position: absolute;
                    left:0.1rem;
                    width: 0.6rem;
                    height: 0.6rem;
                }
                .content {
                    width: 100%;
                    padding-left: 0.7rem;
                    box-sizing: border-box;
                    .top {
                        padding-bottom: 0.1rem;
                        border-bottom: 1px solid #eee;
                        .title {
                            font-size: 0.2rem;
                            font-weight: 600;
                            color: #000;
                        }
                        .state {
                            font-size: 0.14rem;
                        }
                        .time {
                            text-align: left;
                            line-height: 0.18rem;
                        }
                    }
                    .middle {
                        width: 100%;
                        padding: 0.1rem 0;
                        border-bottom: 1px solid #eee;
                        .price {
                            width: 20%;
                        }
                        .list {
                            width: 78%;
                            overflow:hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;

                        }
                    }
                    .bottom {
                        padding-top: 0.1rem;
                        text-align: right;
                        span {
                            border: 1px solid blue;
                            color: blue;
                            padding: 5px 0.05rem;
                            border-radius: 4px;
                            display: inline-block;
                        }
                    }
                }
            } 
        }
    }
</style>