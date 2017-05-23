<template>
    <div class="register overflow">
        <vue-header>
            <a href="javascript:;" class="el-icon-arrow-left fl left" slot="left"></a>
            <span slot="middle" class="middle">密码登录</span>
            <router-link to="./register" slot="right" class="fr right">
                短信登录</router-link>
        </vue-header>
        <div class="input">
            <input type="text" placeholder="手机号/邮箱/用户名"></input>
            <div class="password pr">
                <input type="text" placeholder="密码"></input>
                <el-switch  v-model="value" on-color="#13ce66"  off-color="#ff4949" class="switch"></el-switch>
            </div>
            <div class="code">
                <input type="text" placeholder="验证码">
            </div>
        </div>
        <div class="tips">温馨提示：未注册饿了么账户的手机号码，登录时将自动注册，且代表您已同意 <span class="paper">《用户服务协议》</span></div>
        <el-button type="success" size="large">登录</el-button>
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
            .switch {
                position: absolute;
                right: 0.1rem;
                top: 10px;
            }
            .code {
            
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
import header from "../common/header/header.vue"
    export default {
        name: "passwordRegister",
        components: {
            "vue-header":header,
        },
        data () {
            return {
                value: true
            }
        }

    }
</script>