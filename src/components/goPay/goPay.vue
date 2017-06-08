<template>
    <div class="goPay">
        <vue-header>
            <span slot="left" class="el-icon-arrow-left left"></span>
            <span slot="right" class="middle">确认订单</span>
        </vue-header>
        <div class="address"></div>
    </div>
</template>
<script>
import header from "../common/header/header";
import goPay from "../../js/common.js";
    export default {
        name: "goPay",
        data () {
            return {
                menu: [],
                shopName
            }
        },
        components: {
            "vue-header":header,
        },
        created () {
            payNow.$on("menu",function(id){
                this.menu = id;
            })
            payNow.$on("shopName",function(id){
                this.shopName = id;
            })
            console.log(this.shopName);
        }
    }
</script>
<style lang="less" scoped>
    
</style>