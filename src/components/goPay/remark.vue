<template>
    <div class="remark">
        <!--<vue-header>
            <router-link to="/goPay" class="el-icon-arrow-left left" slot="left"></router-link>
            <span slot="middle" class="middle">订单备注</span>
        </vue-header>-->
        <div class="choose">
            <h6>快速备注</h6>
             <div class="radio clearfix">
                <div v-for="item in remarkList" class="items clearfix fl">
                    <div v-for="items in item.name" class="item fl" ref="alone" v-on:click="remarkChange(items.id,items.names)">
                        <input type="radio" v-bind:name="items.id" ref="input" v-bind:value="items.names" >
                        <span v-bind:class="{'blue':items.color}">{{items.names}}</span>
                    </div>
                </div>
             </div>
        </div>
        <div class="else">
            <h6>其他备注</h6>
            <textarea v-on:input="textarea($event)" cols="30" rows="10" placeholder="请输入备注内容（可不填）"></textarea>
        </div>
        <div class="sure">
            <button v-on:click="makeSure">确定</button>
        </div>
    </div>
</template>
<script>
import header from "../common/header/header";
import {paynow} from "../../js/common.js"
    export default {
        name:"remark",
        components: {
            "vue-header": header,
        },
        data () {
            return {
                remarkList: [
                    {name: [
                        {names: "不要辣",color:false,id:"id0"},
                        {names:"少点辣",color:false,id:"id0"},
                        {names:"多点辣",color:false,id:"id0"}
                    ]},
                    {name:[
                        {names:"不要香菜",color:false,id:"id1"}
                    ]},
                    {name:[
                        {names:"不要洋葱",color:false,id:"id2"}
                    ]},
                    {name:[
                        {names:"多点醋",color:false,id:"id3"}
                    ]},
                    {name:[
                        {names:"去冰",color:false,id:"id4"},
                        {names:"少冰",color:false,id:"id4"}
                    ]},
                ],
                remark: "",
                text: ""
            }
        },
        mounted () {
            console.log(this.$refs.alone)
            this.$refs.alone.forEach((value,index,arr)=>{
                if(value.parentNode.children.length == 1){
                    value.children[1].style.borderRadius = "4px";
                }
            })
        },
        methods: {
            remarkChange (id,names) {
                this.remark = "";
                this.$refs.input.forEach((values,index,arr)=>{
                    if(values.checked == true){
                        this.remark += values.value;
                    }
                })
                this.remarkList.forEach((value,arr,index)=>{
                    console.log(value.name.length)
                    var length = value.name.length;
                        value.name.forEach((value,index,arr)=>{
                            if(length > 1) {
                                if(value.names == names && value.id == id){
                                    value.color = true;
                                }else if(value.names != names && value.id ==id){
                                    value.color = false
                                }  
                            }else {
                                if(value.names == names){
                                    value.color = true;
                                }
                            }
                              
                        })
                })
            },
            textarea (e) {
                this.text = e.currentTarget.value;
            },
            makeSure () {
                var comment = this.remark + this.text;
                var obj = {"comment":comment,"remark":false};
                console.log(obj)
                // this.$emit("tatseSure",33); //子组件触发父组件sure方法 并向父组件传递obj对象
                this.$emit('tatseSure',obj)
            }
        }
    }
</script>
<style lang="less" scrope>
    .remark {
        padding-top: 0.5rem;
        background-color: #f5f5f5;
        width: 100%;
        height: 100%;
        .blue {
            background-color: #1D8CE0;
            color: #fff;
        }
        .choose {
            padding: 0 0.1rem;
            width: 100%;
            box-sizing: border-box;
            background-color: #fff;
            padding-bottom: 0.2rem;
            margin-bottom: 0.2rem;
            h6 {
                font-weight: 400;
                font-size: 12px;
                text-align: left;
                height: 0.4rem;
                line-height: 0.4rem;
            }
            .radio {
                .items {
                    margin-right: 0.1rem;
                    margin-bottom: 10px;
                    .item {
                        position: relative;
                        span {
                            display: inline-block;
                            border: 1px solid #1D8CE0;
                            margin-left: -1px;
                            padding: 0.07rem 0.1rem;
                        }
                        input {
                            opacity: 0;
                            position: absolute;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .item:first-child {
                        span {
                            border-radius: 4px 0 0 4px;
                        }
                    }
                    .item:last-child {
                        span {
                            border-radius: 0 4px 4px 0;
                        }
                    }
                }
            }
        }
        .else {
            background-color: #fff;
            padding: 0 0.1rem;
            width: 100%;
            box-sizing: border-box;
            padding-bottom: 0.2rem;
            h6 {
                font-size: 14px;
                text-align: left;
                height: 0.3rem;
                line-height: 0.3rem;
                font-weight: 400;
            }
            textarea {
                width: 100%;
                box-sizing: border-box;
                padding: 0.1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #f5f5f5;
                height: 1rem !important;
                resize: none;
                outline: none;
            }
        }
        .sure {
            padding: 0 0.1rem;
            width: 100%;
            box-sizing: border-box;
            margin-top: 0.1rem;
            button {
                width: 100%;
                height: 0.3rem;
                line-height: 0.3rem;
                background-color: #4cd964;
                color: #fff;
                border: none;
                border-radius: 4px;
                outline: none;
            }
        }
    }
</style>