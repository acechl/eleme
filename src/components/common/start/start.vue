<template>
    <div class="start clearfix">
        <span v-bind:class="{'el-icon-star-off':star<1,'el-icon-star-on':star>=1}"></span>
        <span v-bind:class="{'el-icon-star-off':star<2,'el-icon-star-on':star>=2}"></span>
        <span v-bind:class="{'el-icon-star-off':star<3,'el-icon-star-on':star>=3}"></span>
        <span v-bind:class="{'el-icon-star-off':star<4,'el-icon-star-on':star>=4}"></span>
        <span v-bind:class="{'el-icon-star-off':star<5,'el-icon-star-on':star>=5}"></span>
    </div>
</template>
<style lang="less" scoped>
    .start {
        background-color: #fff;
        span {
            width: 0.12rem;
            height: 0.12rem;
            transform: scale(0.8);
            color: orange;
            float: left;
        }
    }
</style>
<script> 
    export default {
        name: "start",
        props: ["star"],
        data () {
            return {

            }
        }
    }
</script>