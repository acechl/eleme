<template>
    <div class="history">
        <div class="search clearfix">
            <div class="fl input">
                <input type="text" placeholder="请输入商家或美食名称" v-on:input="input" v-model="values" v-on:focus="focus" v-on:blur="blur" required>
                <span class="close" v-on:click="closed" v-if="show">x</span>
            </div>
            <button class="fl" v-on:click="submiting(values)">提交</button>
        </div>
        <div class="his" v-show="cleared">
            <div class="title">搜索历史</div>
            <ul>
                <li v-for="(item,index) in his" class="clearfix" >
                    <p class="" v-on:click="searchContent(item.his)">{{item.his}}</p>
                    <span v-on:click="deleted(index)" class="clear">x</span>
                </li>
            </ul>
            <p class="clear" v-on:click="clear">清空历史记录</p>
        </div>
    </div>
</template>
<script>
    export default {
        name:"history",
        data () {
            return {
                show: false,
                values: "",
                his: [],
                cleared: false
            }
        },
        methods: {
            input () {
                console.log(this.values.length);
                if(this.values.length != 0){
                    this.show = true;
                }else {
                    this.show = false;
                }
            },
            focus () {
                if(this.values.length == 0) {
                    this.show = false;
                }else {
                    this.show = true
                }
            },
            blur () {
               setTimeout(()=>{
                    this.show = false;
               },10);
            },
            closed () {
                this.values = "";
                this.show = false;
            },
            submiting (value) {
                console.log("djijeie")
                console.log(value);
                this.$emit("search-content",value)
                this.his.push({his: this.values})
                localStorage.setItem("his",JSON.stringify(this.his));
                this.values = "";
                this.show = false;
                this.cleared = true;
                
            },
            deleted (index) {
                this.his.splice(index,1)
                localStorage.setItem("his",JSON.stringify(this.his));
                if(this.his.length == 0){
                    this.cleared = false;
                }
            },
            clear () {
                this.his = [];
                localStorage.removeItem("his");
                this.cleared = false;
            },
            searchContent (value) {
                this.$emit("search-content",value);
            }
        },
        created () {
            this.his = JSON.parse(localStorage.getItem("his")) || [];
            if(this.his.length != 0){
                this.cleared = true;
            }
        }        

    }
</script>
<style lang="less" scoped>
    .history {
        background-color: #f5f5f5;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .search {
            background-color: #fff;
            padding: 20px 3%;
            .input {
                position: relative;
                width: 70%;
                margin-right: 3%;
                input {
                    width: 100%;
                    height: 0.3rem;
                    padding-left: 5px;
                    box-sizing: border-box;
                    border: 1px solid #e4e4e4;
                    background-color: #fff;
                    color: #666;
                    font-weight: 600;
                    border-radius: 3px;
                }
                input::-ms-clear {
                    display: none;
                }
                .close {
                    position: absolute;
                    font-size: 0.2rem;
                    top: 0px;;
                    width: 0.3rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                    right: 0px;
                }
            }
            button {
                width: 20%;
                height: 0.3rem; 
                color: #fff;
                background-color: #3190e8;
                border: 1px solid #3190e8;
                box-sizing: border-box;
                font-weight: 600;
                border-radius: 3px;
            }
        }
        .his {
             .title {
                padding: 0 3%;
                color: #666;
                height: 40px;
                line-height: 40px;
                text-align: left;
                font-size: 14px;
                font-weight: 600;
            }
            ul {
                background-color: #fff;
                li {
                    padding: 0 3%;
                    height: 40px;
                    border-bottom: 1px solid #f5f5f5;
                    font-size: 14px;
                    position: relative;
                    p {
                        line-height: 40px;
                        height: 40px;
                        margin: 0;
                        width: 100%;
                        padding-right: 0.2rem;
                        box-sizing: border-box;
                        text-align: left;
                    }
                    span {
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        width: 0.2rem;
                        position: absolute;
                        right: 0.1rem;
                        top:0;
                    }
                }
            }   
        }
    }
</style>