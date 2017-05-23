<template>
    <div class="account overflow">
        <vue-header>
            <router-link to="./self" class="el-icon-arrow-left left" slot="left"></router-link>
            <span slot="middle" class="middle">账户信息</span>
            <span slot="right" class="right"></span>
        </vue-header>
        <div>
            <div v-if="login">
                <div class="body">
                    <div class="pic clearfix">
                        <span class="fl">头像</span>
                        <img v-bind:src="pictureUrl" alt="" class="fr">
                    </div>
                    <div class="name clearfix">
                        <span class="fl">用户名</span>
                        <span class="fr">{{userName}}</span>
                    </div>
                </div>
                <div class="quit">
                    <el-button type="danger" size="large" v-on:click="quitLogin">退出</el-button>
                </div>
            </div>
            <div v-else>
                <router-link to="./register" class="register">请登录</router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
import header from "../../common/header/header.vue";
import {mapState,mapMutations} from "vuex"
    export default {
        name: "account",
         components: {
            "vue-header": header
        },
        data: function () {
            return {

            }
        },
        computed: {
            ...mapState([
                "pictureUrl",
                "userName"
            ]),
            login () {
                return this.$store.state.isLogin
            }
        },
        methods: {
            quitLogin: function () {
                localStorage.setItem("lastTime",0)
                this.$store.commit("changeLogin",{
                    login: false
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../css/common.less";
    .body {
        .pic {
            border-bottom: 2px solid #ddd;
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 0.2rem;
            }
            span {
                margin-left: 0.2rem;
                line-height: 60px;
            }
        }
        .name {
            span:first-child {
                margin-left: 0.2rem;
                line-height: 30px;
            }
            span:last-child {
                margin-right: 0.2rem;
                line-height: 30px;
            }
        }
    }
    .quit {
        button {
            width: 100%;
        }
    }
    .register {
        margin-top: 20px;
    }
</style>