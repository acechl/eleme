<template>
    <div class="register overflow">
        <vue-header>
            <router-link class="el-icon-arrow-left fl left" slot="left" to="./" ></router-link>
            <span slot="middle" class="middle">登录</span>
            <router-link to="./passwordRegister" slot="right" class="fr right">
                密码登录</router-link>
        </vue-header>
        <div class="input">
            <div class="pr">
                <input type="text" placeholder="手机号码" v-model="phone"></input>
                <div>
                    <span class="code" v-on:click="getCodes" v-if="getCode">获取验证码</span> 
                    <span v-else class="code">重新获取({{second}}s)</span>
                </div>
                
            </div>
            <input type="text" placeholder="验证码" v-model="code"></input>
        </div>
        <div class="tips">温馨提示：未注册饿了么账户的手机号码，登录时将自动注册，且代表您已同意 <span class="paper">《用户服务协议》</span></div>
        <el-button type="success" size="large" v-on:click="registering">登录</el-button>
    </div>
</template>
<style lang="less" scoped>
    @import "../../css/common.less";
    .register {
        background-color: #eee;
        height: 100%;
        .input {
            margin-top: 10px;
            input {
                border: none;
                width: 100%;
                height: 40px;
                padding-left: 0.2rem;
                box-sizing: border-box;
                margin-bottom: 1px;

            }
            .code {
                position: absolute;
                height: 30px;   
                top: 5px;
                padding: 0px 3px;
                background-color: #ddd;
                color: #fff;
                line-height: 25px;
                right: 10px;
            }
        }
        .tips {
            background-color: #fff;
            font-size: 12px;
            padding: 5px 0px;;
            .paper {
                color: green;
            }
        }
        button {
            width: 100%;
        }
    }
</style>

<script>
import header from "../common/header/header.vue";
import {isPhone} from "../../js/utlis.js"
import {paynow,shop_name,menu} from "../../js/common.js"
var shopName = "";
paynow.$on(shop_name,(id)=>{
    shopName = id;
})
    export default {
        name: "register",
        components: {
            "vue-header":header,
        },
        data: function() {
            return {
                getCode: true,
                phone: "",
                code: "",
                message: "",
                timer: "",
                second: 60,
                booking: "",
                shopName: "",
                ii: "rrrr",
            }
        },
        // created () {
        //     var _this = this;
        //     console.log("333");
        //     paynow.$on("shopName",(id)=>{
        //         this.shopName = id;
        //         console.log(this.shopName);
        //         console.log(id);
        //     })
        // },
         created () {
               
            },
        methods: {
            getCodes () {
                var _this = this;
                if(isPhone(this.phone) != true){
                    this.message = "请输入正确的手机号码";
                    this.open();
                    return;
                }
                this.getCode = false;
                _this.timer = setInterval(function(){
                     if(_this.second < 0){
                        clearInterval(_this.timer);
                        _this.getCode = true;
                        return;
                    }
                    _this.second--;
                },1000)
            },
            open () {
                this.$message(this.message);
            },
            registering () {
                var _this = this;
                if(isPhone(this.phone) != true){
                    this.message = "请输入正确的手机号码";
                    this.open();
                    return;
                }else if(this.code.length == 0) {
                    this.message="请输入正确的验证码";
                    this.open();
                    return;
                }
                this.$store.commit("changeLogin",{
                    login: true
                })
                var nowTime = new Date().getTime();
                localStorage.setItem("lastTime",nowTime);
                localStorage.setItem("user","蜡笔小新");
                    if(shopName){
                        this.$router.push({path:"goPay"});
                    }else {
                        this.$router.back(-10);
                    }
            }
        },
    }
</script>