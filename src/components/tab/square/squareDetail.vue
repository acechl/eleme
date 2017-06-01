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
                            商家配送/{{item.timer}}分钟送达/配送费￥{{item.fare}}
                        </div>
                        <div class="fr el-icon-arrow-right"></div>
                    </div>
                    <div class="warm">
                        公告：{{item.warm}}
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="fl">{{item.new}}</div>
                <div class="fr">{{item.activity}}个活动</div>
            </div>
        </div>
        <div class="tab">
            <ul>
                <li>商品</li>
                <li>评价</li>
            </ul>
        </div>
        <div class="tabContent">
            <div class="goods" v-for="item in shopDetail">
                <div class="fl">
                    <ul>
                        <li v-for="em in item.classify">
                            <a v-bind:href="'#'+em.id">{{em.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                     <li v-for="itemes in item.contents" v-bind:src="itemes.id">
                        <h6>{{itemes.name}}</h6>
                        <div v-for="im in itemes.goods">
                            <img v-bind:src="im.img" alt="">
                            <div class="fr">
                                <h4>{{im.name}}</h4>
                                <p>{{im.content}}</p>
                                <div>
                                    <span>月售{{im.qua}}份</span>
                                    <span>好评率{{im.good}}</span>
                                </div>
                                <div class="price">
                                    <span class="fl">￥{{im.price}}</span>
                                    <span class="fr">+</span>
                                </div>
                            </div>
                       </div>
                     </li>
                    </ul>
                </div>
            </div>
            <div class="evaluate" v-for="item in evaluate">
                <div class="score">
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
    </div>
</template>
<script>
import start from "../../common/start/start"
    export default {
        name: "squareDetail",
        data () {
            return {
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
                    new:"新用户下单立减30.0元(不与其他活动共享)",activity: 8,classify: [
                        {name:"戚风蛋糕",id: "id0"},
                        {name: "蔓越莓曲奇",id: "id1"},
                        {name:"双皮奶",id: "id2"},
                        {name: "意大利面",id: "id3"},
                        {name: "pizza",id:"id4"},
                        {name: "泡芙",id:"id5"},
                        {name: "蛋挞",id: "id6"},
                        {name: "豆沙面包",id:"id7"} 
                    ],contents: [
                        {name:"戚风蛋糕",id: "id0",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "蔓越莓曲奇",id: "id1",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name:"双皮奶",id: "id2",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "意大利面",id: "id3",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "pizza",id:"id4",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "泡芙",id:"id5",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "蛋挞",id: "id6",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]},
                        {name: "豆沙面包",id:"id7",goods:[
                            {img:"../../../../static/imgs/goods.jpeg",title:"蜡笔小新",content: "尊贵的客人：如果您觉得享甜的服务不错，请给我们5星好评支持我们的工作，您的支持是我们努力的动力，如果您遇到任何问题，请不要随意给差评，欢迎致电本店电话：23991027，我们会第一时间为您解决和服务。",qua: 333,good: "99.98%",price:33}
                        ]} 
                    ]}
                ]
                
                
            }
        },
        created () {
            
        },
        components: {
            "start": start
        }
    }
</script>
<style lang="less" scoped>
    .squareDetail {
        .shopDetail {
            background-color: green;
            padding: 0 0.1rem;
            box-sizing: border-box;
            position: fixed;
            top: 0px;
            left: 0px;
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
                img {
                    width: 0.6rem;
                    height: 0.6rem;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                }
                .right{
                    width: 100%;
                    padding-left: 0.7rem;
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
                        text-aling: left;
                    }
                    .warm {
                        width: 100%;
                        overflow:hidden;
                        text-overflow: ellipsis;
                        white-space: nowarp;
                    }
                }

            }
        }
    }
</style>