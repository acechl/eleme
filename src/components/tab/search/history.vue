<template>
    <div class="history">
        <div class="search clearfix">
            <div class="fl input">
                <input type="text" placeholder="请输入商家或美食名称" v-on:input="input" v-model="values" v-on:focus="focus" v-on:blur="blur">
                <span class="close" v-if="show" v-on:click="closed">x</span>
            </div>
            <button class="fl" v-on:click="submiting">提交</button>
        </div>
        <div class="his">
            <div class="title">搜索历史</div>
            <ul>
                <li v-for="(item,index) in his">
                    <p>{{item.his}}</p>
                    <span v-on:click="deleted(item.his)">x</span>
                </li>
            </ul>
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
                this.show = false;
            },
            closed () {
                this.values = "";
            },
            submiting () {
                var historyS = localStorage.getItem("his") || [];
                console.log(historyS);
                historyS.push({his: this.values})
                this.his = historyS;
                console.log(historyS);
                localStorage.setItem("his",historyS);
            },
            deleted (type) {
                var historyS = localStorage.getItem("his") || [];
                historyS.forEach(function(value,index,arr){
                    if(value.his == type){
                        historyS.splice(index,1)
                    }
                })
                this.his = historyS;
                localStorage.setItem("his",historyS);
            }
        }
    }
</script>
<style lang="less" scoped>
    .history {
        background-color: #fff;
        width: 100%;
        padding: 3%;
        box-sizing: border-box;
        .search {
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
                    background-color: #f2f2f2;
                    color: #666;
                    font-weight: 600;
                    border-radius: 3px;
                }
                .close {
                    position: absolute;
                    right: 0.1rem;
                    font-size: 0.2rem;
                    top: 0.05rem;
                    width: 0.2rem;
                    height: 0.2rem;
                    line-height: 0.2rem;
                    
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
    }
</style>