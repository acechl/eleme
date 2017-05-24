<template>
    <div class="search overflow">
        <vue-header>
            <span class="left el-icon-arrow-left" slot="left" v-on:click="back"></span>
            <span class="middle" slot="right">搜索</span>
        </vue-header>
        <historySearch></historySearch>
        <shopDetails></shopDetails>
    </div>
</template>
<script>
import header from "../../common/header/header.vue"
import history from "./history.vue"
import shopDetails from "./shopDetails.vue"
    export default {
        name: "search",
        data () {
            return {

            }
        },
        components: {
            "vue-header": header,
            "historySearch": history,
            "shopDetails": shopDetails
        },
        methods: {
            back () {
                this.$router.back(-1);
            }
        }
    }
</script>
<style lang="less" scoped>
    .search {
        background-color: #f5f5f5;
        height: 100%;
    }
</style>