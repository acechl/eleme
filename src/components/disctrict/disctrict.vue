<template >
    <div class="disctrict overflow">
        <div class="header">
            <vue-header>
                <a href="JavaScript;:" slot="left" class="el-icon-arrow-left fl left"></a>
                <span class="fl middle" slot="middle">{{city}}</span>
                <router-link to="/address" slot="right" class="fr right">切换城市</router-link>
            </vue-header>
        </div>
        <div class="input">
            <input type="text" placeholder="输入学校、商务楼、地址" v-on:input="changeAddress" v-model="addressing">
            <ul>
                 <li v-for="item in shops" class="shops">
                       <router-link v-bind="{to:'/square/'+item.address}" >{{item.address}}</router-link>
                 </li>
             </ul>
        </div>
        <div>{{login}}</div>
    </div>
    
</template>
<script>
    import header from "../common/header/header.vue"
    import {Vue,check} from "../../js/common.js"   
    export default {
        name: "disctrict",
        components: {
            "vue-header": header
        },
        computed: {
             login () {
                 return this.$store.state.isLogin
             }
         },
        data ()  {
            return {
                city: "",
                addressing: "",
                encoding: "",
                shops: [],
                shop: [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路" },
                    { "value": "十二泷町", "address": "上海市北翟路" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路" },
                    { "value": "浏阳蒸菜", "address": "天山西路" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路" },
                    { "value": "阳阳麻辣烫", "address": "天山西路" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路" }
                ]
               
            }
        },
        methods: {
            changeAddress: function() {
                 this.shops = [];
                if(this.addressing.length == 0) return;
                for(var i=0;i<this.shop.length;i++){
                    if(this.shop[i].value.indexOf(this.addressing) !== -1 || this.shop[i].address.indexOf(this.addressing) != -1){
                        this.shops.push(this.shop[i])
                    }
                }
            }
        },
        created ()  {
            var _this = this;
            _this.city = this.$route.params.city;
            console.log(_this.city);
            var user = localStorage.getItem("user");
            console.log(user);
        }
         
    }
</script>
<style lang="less" scoped>
    .disctrict {
        .header {
            .el-icon-arrow-left {
                line-height: 30px;
            }
            .middle {
                 width: 100%;
                 padding: 0 60px;
                 box-sizing: border-box;
                 margin: 0px;
             }
             .left {
                 position: absolute;
                 top: 0px;
                 left: 0px;
                 height: 30px;
                 width: 60px;
                 margin: 0px;
             }
             .right {
                 position: absolute;
                 top: 0px;
                 right: 20px;
                 height: 30px;
                 width: 60px;
                margin: 0px;
                text-align: center;
             }
        }
        .input {
            input {
                width: 100%;
                border: none;
                border: 1px solid #eee;
                height: 30px;
                line-height: 30px;
                padding-left: 0.2rem;
            }
            .shops {
                text-align: left;
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid #eee;
                padding-left: 0.2rem;
            }
        }   
    }
</style>