<template>
    <div class="squareDetail overflow">
        <div class="shopDetail"  v-for="item in shopDetail">
            <div class="el-icon-arrow-left back"></div>
            <div class="content">
                <img v-bind:src="item.img" alt="">
                <div class="right">
                    <h4>{{item.titles}}</h4>
                    <div class="fare clearfix">
                        <div class="fl">
                            商家配送 / {{item.timer}}分钟送达 / 配送费￥{{item.fare}}
                        </div>
                        <div class="fr el-icon-arrow-right"></div>
                    </div>
                    <div class="warm">
                        公告：{{item.warm}}
                    </div>
                </div>
            </div>
            <div class="bottom clearfix">
                <div class="fl">{{item.new}}</div>
                <div class="fr">{{item.activity}}个活动</div>
            </div> 
        </div>
        <div class="tab">
                <ul class="clearfix">
                    <li v-bind:class="{'selected':type=='shop'}"><a href="javascript:;">商品</a></li>
                    <li v-bind:class="{'selected':type=='evaluate'}"><a href="javascript:;">评价</a></li>
                </ul>
        </div>
        <div class="tabContent">
            <div class="goods clearfix" v-for="item in shopDetail" v-bind:class="{'none':type!='shop','block':type=='shop'}">
                <div class="fl">
                    <ul>
                        <li v-for="em in item.classify" v-bind:class="{'choosed':types==em.id}">
                            <a v-bind:href="'#'+em.id">{{em.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                     <li v-for="itemes in item.contents" v-bind:id="itemes.id" v-bind:name="itemes.id">
                        <h4>{{itemes.name}}</h4>
                        <div v-for="im in itemes.goods" class="con">
                            <img v-bind:src="im.img" alt="">
                            <div class="content">
                                <h6>{{im.title}}</h6>
                                <!--<p>{{im.content}}</p>-->
                                <div>
                                    <span>月售{{im.qua}}份</span>
                                    <span>好评率{{im.good}}</span>
                                </div>
                                <div class="price clearfix">
                                    <span class="fl">￥{{im.price}}</span>
                                    <span class="delete" v-if="im.delete" v-on:click="deleteMenu(im.price,im.title)">-</span>
                                    <span class="number" v-if="im.delete">{{im.num}}</span>
                                    <span class="" v-on:click="addMenu(im.price,im.title)">+</span>
                                </div>
                            </div>
                       </div>
                     </li>
                    </ul>
                </div>
            </div>
            <div class="evaluate" v-for="item in evaluate" v-bind:class="{'none':type!='evaluate','block':type =='evaluate'}">
                <div class="score clearfix">
                    <div class="fl">
                        <h3>{{item.total}}</h3>
                        <p>综合评价</p>
                        <p>高于周边商家{{item.higher}}</p>
                    </div>
                    <div class="fr">
                        <div class="attitude">
                            <span>服务态度</span>
                            <start v-bind:start="item.attitude"></start>
                            <span>{{item.attitude}}</span>
                        </div>
                        <div class="menus">
                            <span>菜品评价</span>
                            <start v-bind:start="item.menus"></start>
                            <span>{{item.menus}}</span>
                        </div>
                        <div class="timer">
                            <span>送达时间</span>
                            <span>{{item.timer}}分钟</span>
                        </div>
                    </div>
                </div>
                <div class="appraise">
                    <ul>
                        <li v-for="it in item.classify">
                            <a href="javascript:;">
                                <span>{{it.name}}</span>
                                <span>{{it.qua}}</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="it in item.client">
                            <img v-bind:src="it.img" alt="" class="fl">
                            <div class="fr">
                                <div class="top">
                                    <span class="nickName">{{it.nickName}}</span>
                                    <span class="time">{{it.time}}</span>
                                </div>
                                <div>
                                    <start v-bind:start="it.score"></start>
                                    <span v-if="it.timer">{{it.timer}}分钟送达</span>
                                </div>
                                <div v-show="it.goods" v-for="itemes in it.goods">
                                    <span>{{itemes.name}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fix-bottom clearfix">
            <span class="el-icon-date icon"></span>
            <div class="fare fl">
                <div class="food">￥{{price}}</div>
                <div class="send">配送费￥{{send}}</div>
            </div>
            <div class="pay fr" v-bind:class="{'goPay':goPay==true}" v-on:click="payNow">
               去结算
            </div>
        </div>
    </div>
</template>
<script>
import start from "../../common/start/start";
import {paynow,shop_name,menu} from "../../../js/common.js"
    export default {
        name: "squareDetail",
        data () {
            return {
                type:"shop",
                types: "id0",
                send:0,
                price: 0,
                agian: false,
                menu: [],
                goPay: false,
                urlPath: "",
                evaluate: [
                    {attitude: 3.4,menus: 4.3,timer: 33,total: 3.8,higher: "33.3%",
                        classify: [
                            {name:"全部",qua: 197},
                            {name: "满意",qua: 88},
                            {name: "不满意",qua: 77},
                            {name: "送餐快",qua:88},
                            {name: "味道好",qua: 66},
                            {name: "环境好",qua: 33}
                        ],
                        client: [
                            {img: "../../../../static/imgs/client.jpeg",nickName: "蜡笔小新",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "风间彻",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "寿司"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "樱田妮妮",time: "1432345434545",score: 4.5},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "蒙奇.D.路飞",time: "1432345434545",score: 4.5},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "蒙奇.D.卡普",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "蒙奇.D.龙",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "托尼托尼.乔巴",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "江户川柯南",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "灰原哀",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "毛利兰",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "野原向日葵",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "向日宁次",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "我爱罗",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]},
                            {img: "../../../../static/imgs/client.jpeg",nickName: "宇智波佐助",time: "1432345434545",score: 4.5,goods:[
                                {name:"卤蛋"},
                                {name:"保心丸"},
                                {name: "菠萝焗饭"}
                            ]}
                ]}
                ],
                shopDetail: [
                    {img:"../../../../static/imgs/logo.png",titles:"黄氏烘焙",timer:28,fare: 5,warm: "戚风蛋糕蛋挞葡挞意大利面pizza双皮奶豆沙面包泡芙蔓越莓曲奇饼",
                    new:"新用户下单立减30.0元(不与其他活动共享)",activity: 8,send:9,min: 44,classify: [
                        {name: "戚风蛋糕",id: "id0"},
                        {name: "蔓越莓曲奇",id: "id1"},
                        {name: "双皮奶",id: "id2"},
                        {name: "意大利面",id: "id3"},
                        {name: "pizza",id:"id4"},
                        {name: "泡芙",id:"id5"},
                        {name: "蛋挞",id: "id6"},
                        {name: "豆沙面包",id:"id7"},
                        {name: "寿司",id:"id8"},
                        {name: "番茄炒蛋",id:"id9"},
                        {name: "茶树菇炒牛肉",id:"id10"},
                        {name: "梅菜蒸猪肉",id:"id11"},
                        {name: "绿豆海带糖水",id:"id12"} 
                    ],contents: [
                        {name:"戚风蛋糕",id: "id0",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新1",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete:false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮1",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "蔓越莓曲奇",id: "id1",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新2",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮2",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name:"双皮奶",id: "id2",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新3",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮3",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "意大利面",id: "id3",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新4",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮4",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "pizza",id:"id4",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新5",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮5",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "泡芙",id:"id5",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新6",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮6",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "蛋挞",id: "id6",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新7",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮7",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "豆沙面包",id:"id7",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新8",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮8",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]},
                        {name: "寿司",id:"id8",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新9",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮9",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]} ,
                        {name: "番茄炒蛋",id:"id9",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新10",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮10",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]} ,
                        {name: "茶树菇炒牛肉",id:"id10",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新11",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮11",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]} ,
                        {name: "梅菜蒸猪肉",id:"id11",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新12",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮12",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]} ,
                        {name: "绿豆海带糖水",id:"id12",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新13",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0},
                            {img:"../../../../static/imgs/goods.jpeg",title:"樱田妮妮13",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33,delete: false,num:0}
                        ]}  
                    ]}
                ]
                
                
            }
        },
        created () {
            this.send = this.shopDetail[0].send;
        },
        components: {
            "start": start
        },
        computed: {
            login () {
                return this.$store.state.isLogin;
            }
        },
        methods: {
            addMenu (price,title) {
                this.price = this.price + price;
                this.shopDetail[0].contents.forEach((value,index,arr)=>{ 
                    value.goods.forEach((values,indexs,array)=>{
                        if(values.title == title){
                            values.delete = true;
                        }
                    })
                })
                if(this.menu.length ==0) {
                    this.menu.push({titles:title,qua:1,price:price});
                }else {
                    this.again = true;
                    this.menu.forEach((value,index,arr)=>{
                        if(value.titles == title){
                            this.again = false;
                            value.qua = value.qua + 1;
                        }
                    })
                    if(this.again == true){
                        this.menu.push({titles:title,qua:1,price:price});
                    }
                }
                this.colorChange();
                this.sendFare();
                this.number();
            },
            deleteMenu (price,title) {
                this.price = this.price - price;
                this.menu.forEach((value,index,arr)=>{
                    if(value.titles == title){
                        value.qua --;
                    }
                    if(value.qua == 0){
                        arr.splice(index,1);
                        this.shopDetail[0].contents.forEach((value1,index1,arr1)=>{
                            value1.goods.forEach((value2,index2,arr2)=>{
                                if(value.titles == value2.title){
                                    value2.delete = false;
                                    value2.num = 0;
                                }
                            })
                        })
                    }
                })
                this.colorChange();
                this.sendFare();
                this.number();
            },
            number () {
                var _this = this;
                this.menu.forEach((value,index,arr)=>{
                    _this.shopDetail[0].contents.forEach((value1,index1,arr1)=>{
                        value1.goods.forEach((value2,index2,arr2)=>{
                            if(value.titles == value2.title){
                                value2.num = value.qua;
                            }
                        })
                    })
                })
            },
            sendFare () {
                if(this.price >= this.shopDetail[0].min){
                    this.send = 0;
                }else {
                    this.send = this.shopDetail[0].send
                }
            },
            colorChange () {
                console.log(this.menu);
                if(this.menu.length != 0){
                    this.goPay = true;
                }else {
                    this.goPay = false;
                }
            },
            payNow () {
                if(this.goPay == false){
                    return;
                }
                paynow.$emit(menu,this.menu);
                paynow.$emit(shop_name,this.shopDetail[0].titles);
                paynow.$emit("sendFare",this.send);
                this.$router.push({path:"register"})
                if(this.login == false) {
                    this.$router.push({path:"register"})
                    
                }else {
                    this.$router.push({path:"goPay"})
                }
            }
        }
    }
</script>
<style>
    body #app {
        padding: 0px;
    }
</style>
<style lang="less" scoped>
    .squareDetail {
        width: 100%;
        padding-top: 0px !important;
        height: 100%;
        overflow: hidden;
        .selected a{
            color: #3190e8;
            display: inline-block;
            border-bottom: 2px solid #3190e8;
            height: 30px;
            line-height: 30px;
            margin-top: 0px;
        }
        .none {
            display: none;
        }
        .block {
            display: block;
        }
        .goPay {
            background-color: #4cd964 !important;
        }
        .shopDetail {
            width: 100%;
            background-color: green;
            padding-left: 0.1rem;
            box-sizing: border-box;
            .back {
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: left;
                font-size: 20px;
                color: #fff;
            }
            .content {
                position: relative;
                width: 100%;
                img {
                    width: 0.6rem;
                    height: 0.6rem;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                }
                .right{
                    width: 100%;
                    padding-left:0.7rem;
                    padding-right: 0.1rem;
                    box-sizing: border-box;
                    color: #fff;
                    h4 {
                        font-size: 0.18rem;
                        text-align: left;
                        line-height: 0.25rem;
                    }
                    .fare,.warm {
                        font-size: 0.12rem;
                        line-height: 0.2rem;
                        text-align: left;
                    }
                    .warm {
                        white-space: nowrap;
                        overflow:hidden;
                        text-overflow: ellipsis;
                    }
                }

            }
            .bottom {
                font-size: 0.12rem;
                color: #fff;
                line-height: 0.3rem;
                .fr {
                    margin-right: 0.1rem;
                }
            }
        }
        .tab {
            width: 100%;
            border-bottom: 1px solid #eee;
            ul {
                li {
                    float: left;
                    width: 50%;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
                    padding-bottom: 5px;
                }
            }
        }
        .tabContent {
            overflow: hidden;
            height: calc(~"100% - 135px - 0.95rem");
            .goods {
                display: flex;
                row: nowrap;
                height: 100%;
                .fl {
                    flex: 1.3rem;
                    overflow-y: auto;
                    background-color: #f8f8f8;
                    ul {
                        width: 100%;;
                        .choosed {
                            background-color: #fff;
                            border-left: 2px solid #3190e8;
                        }
                        li {
                            height: 100%;
                            text-align: center;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            border-bottom: 1px solid #ededed;
                        }
                    }
                }
                .fr {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    overflow-y: auto;
                    ul {
                        li {

                            h4 {
                                background-color: #f1f1f1;
                                height: 30px;
                                line-height: 30px;
                                color: #333;
                                text-align: left;
                                font-size: 14px;
                                padding-left: 0.1rem;
                            }
                            .con {
                                position: relative;
                                border-bottom: 1px solid #eee;
                                img {
                                    width: 0.6rem;
                                    height: 0.6rem;
                                    position:absolute;
                                    left: 0.1rem;
                                    top: 0.1rem;
                                }
                                .content {
                                    padding-top: 0.1rem;
                                    padding-left: 0.8rem;
                                    h6 {
                                        color: #333;
                                        font-size: 16px;
                                        text-align: left;
                                    }
                                    div:nth-child(2) {
                                        color: #666;
                                        font-size: 14px;
                                        line-height: 30px;
                                        text-align: left;
                                    }
                                    .price {
                                        color: #f60;
                                        position: relative;
                                        span:first-child {
                                            display: inline-block;
                                            font-size: 18px;
                                            background-color: #fff;
                                            line-height: 50px;
                                            font-weight: 600;
                                        }
                                        span:last-child {
                                            position: absolute;
                                            background-color: #3190e8;
                                            color: #fff;
                                            width: 20px;
                                            height: 20px;
                                            font-size: 16px;
                                            line-height: 20px;
                                            text-align: center;
                                            border-radius: 50%;
                                            margin-top: 15px;
                                            right: 0.1rem;
                                        }
                                        .delete {
                                            position: absolute;
                                            right: calc(~"0.1rem + 40px");
                                            width: 20px;
                                            height: 20px;
                                            font-size: 15px;
                                            line-height: 18px;
                                            text-align: center;
                                            border-radius: 50%;
                                            margin-top: 15px;
                                            color: #3190e8;
                                            background-color: #fff;
                                            border: 1px solid #3190e8;
                                        }
                                        .number {
                                            line-height: 20px;
                                            margin-top: 15px;
                                            position: absolute;
                                            right: calc(~"0.1rem + 25px");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .evaluate {
            }
        }
        .fix-bottom {
            position: fixed;
            height: 50px;
            width: 100%;
            background-color: #3d3d3f;
            color: #fff;
            position: relative;
            .icon {
                position: absolute;
                left: 0.1rem;
                top: 5px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 4px solid rgba(0,0,0,0.3);
                color: rgba(0,0,0,0.3);
            }
            .fr {
                width: 30%;
                background-color:#535356;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 18px;
                font-weight: 600;
            }
            .fl {
                width: 70%;
                line-height: 30px;
                font-size: 18px;
                font-weight: 600;
                .send {
                    font-size: 14px;
                    line-height: 20px;
                }
            }
        }
    }
</style>