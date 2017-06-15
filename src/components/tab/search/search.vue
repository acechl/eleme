<template>
    <div class="search" v-on:touchstart="touchStart($event)" v-on:touchmove="touchMove($event)" v-on:touchend="touchEnd($event)">
        <vue-header>
            <span class="left el-icon-arrow-left" slot="left" v-on:click="back"></span>
            <span class="middle" slot="right">搜索</span>
        </vue-header>
        <!--<historySearch is="" v-on:search-content="searchContent"></historySearch>
        <shopDetails is=""></shopDetails>-->
        <component v-bind:is="type" v-on:search-content="searchContent" v-bind:shopDetail="details" v-bind:fresh="fresh" v-bind:more="more" v-bind:loading="loading"></component>
    </div>
</template>
<script>
import header from "../../common/header/header.vue"
import history from "./history.vue"
import shopDetails from "./shopDetails.vue"
    export default {
        name: "search",
        data () {
            return {
                searchValue: "",
                type: "historySearch",
                shopDetail: "shopDetail",
                details: [],
                page: 0,
                num: 7,
                loading: false,
                fresh: false,
                more: false,
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
                ],
            }
        },
        components: {
            "vue-header": header,
            "historySearch": history,
            "shopDetails": shopDetails
        },
        methods: {
            back () {
                this.$router.back(-1);
            },
            searchContent (value) {
                this.searchValue = value;
                if(value){
                    this.type = "shopDetails"
                }
            },
             getList (page) {
                return this.shopDetails.slice(0,page+this.num)
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
                if(this.type == "shopDetails"){
                    console.log(e.currentTarget.scrollTop);
                if(e.changedTouches[0].clientY > this.start && e.currentTarget.scrollTop <= 0){
                    //上拉
                    if(this.fresh == true){
                        return;
                    }
                    this.fresh = true;
                    setTimeout(()=>{
                        this.fresh = false;
                    },2000) 
                }else {
                     if(this.loading == true){
                        return;
                    }
                    if(e.currentTarget.offsetHeight + e.currentTarget.scrollTop >= e.currentTarget.scrollHeight - 100){
                    //下到最底部
                        this.loading = true;
                        this.page = this.page + this.num;
                        if(this.shopDetails.slice(this.page,this.page+this.num).length == 0){
                            this.loading = false;
                            this.more = true;
                        }
                        this.details = this.getList(this.page);
                        this.loading = false;
                    }
                }
                }
                   
            }
        },
        created () {
            this.details  = this.getList(this.page);
            console.log(this.details)
        }
    }
</script>
<style lang="less" scoped>
    .search {
        background-color: #f5f5f5;
        height: 100%;
    }
</style>