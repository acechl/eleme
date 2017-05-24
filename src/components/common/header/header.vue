<template> 
    <div class="header">
            <!--<a href="javascript;:" class="fl">黄氏烘焙</a>-->
            <!--<a href="javascript;:" class="fl"></a>-->
            <slot name="left" class="left"></slot>
            <slot name="middle" class="middle"></slot>
            <slot name="right" class="right"></slot>
            <!--<span class=" fr"></span>-->
       </div>
</template>
<script>
    export default {
        data: ()=>{
            return {

            }
        }
    }
</script>
<style lang="less" scoped>
     @cblue: #1D8CE0;
     .header {
             background-color: @cblue;
             height: 40px;
             width: 100%;
             line-height: 40px;
             position: fixed;
             top: 0px;
             left: 0px;
             z-index: 10;
             span {
                display: inline-block;
                 line-height: 40px;
                 margin-right: 0.2rem;
                    color: #fff;
             }
            a {
                 margin-left: 0.2rem;
                 color: #fff;
                 font-size: 16px;
             }
             .left {
                 position: absolute;
                 width: 60px;
                 height: 40px;
                 left: 0px;
                 top: 0px;
                 margin: 0px; 
                 line-height: 40px;
             }
             .right{
                 position: absolute;
                 width: 90px;
                 height: 40px;
                 top: 0px;
                 right: 0px;
                 margin: 0px;
                 text-align: center;
                 line-height: 40px;
             }
             .middle {
                 width: 100%;
                 padding: 0 60px;
                 box-sizing: border-box;
                 margin: 0px;
                 text-align: center;
                 font-size: 16px;
                 color: #fff;
             }
         }
</style>