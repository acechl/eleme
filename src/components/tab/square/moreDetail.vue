<template>
   <div class="moreDetail overflow" v-on:touchend="touchEnd($event)" v-on:touchstart="touchStart($event)" v-on:touchmove="touchMove($event)">
       <component v-bind:is="type" v-bind:title="title" v-bind:detail="detail" v-bind:loading="loading" v-bind:more="more" v-bind:fresh="fresh" ></component>
   </div>
</template>
<script>
import backfast from "./backfast.vue";
import squareElse from "./squareElse.vue";
import iscroll from "iscroll"
    export default {
        name: "moreDetail",
        data: function() {
            return {
                type: "",
                title: "",
                num: 7,
                page: 0,
                loading: false,
                more: false,
                detail: [],
                fresh: false,
                top: 0,
                totalScroll: 0,
                currentScroll: 0,
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
                   {"img":"../../../../static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m4.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m1.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m2.png","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33},
                   {"img":"../../../../static/imgs/m3.jpeg","title": "上海第一家香吧岛龙虾（寿司免费）","brand":0,"score":4,"quatity": 100,"min":"0","fare":"8","quality":1,"inTime":1,"free":0,"host":1,"time":1,"kilometer":1.12,"minute":33}
                 ],
                 start: 0
            }
        },
        components: {
            "backfast": backfast,
            "squareElse": squareElse
        },
        created () {
            if(this.$route.params.type == "预定早餐"){
                this.type = "backfast"
            }else {
                this.type = "squareElse"
                this.title = this.$route.params.type;
                this.detail = this.getList(this.page);
            }
        },
         methods: {
              getList: function (page) {
                return this.details.slice(0,this.num+page);
            },
            touchStart (e) {
                this.start = e.changedTouches[0].clientY;
            },
            touchMove (e) {
                if(e.currentTarget.scrollTop <= 0 && e.changedTouches[0].clientY > this.start){
                    e.preventDefault();
                }
            },
             touchEnd: function (e) {
                 if(e.changedTouches[0].clientY - this.start >0){
                     //上拉 
                     if(e.currentTarget.scrollTop <= 0) {
                         if(this.fresh == true) {
                             return;
                         }
                        this.fresh = true;
                        setTimeout(()=>{
                            this.fresh = false;
                        },1000)
                     }
                 }else {
                      if(this.loading == true){
                    return;
                }
                if(e.currentTarget.scrollTop + e.currentTarget.offsetHeight >= e.currentTarget.scrollHeight-300){
                    this.loading = true;
                    this.page = this.page + this.num;
                    if(this.details.slice(this.page,this.num+this.page).length == 0) {
                        this.loading = false;
                        this.more = true;
                        return;
                    }
                    this.detail = this.getList(this.page);
                    this.loading = false;
                }
                 }
                 
             }
         }
    }
</script>
<style lang="less" scoped>
   .moreDetail {
       height: 100%;
   }
</style>

