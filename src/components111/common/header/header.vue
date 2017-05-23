<template> 
    <div class="header">
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
             height: 30px;
             width: 100%;
             line-height: 30px;
             span {
                display: inline-block;
                 line-height: 30px;
                 margin-right: 0.2rem;
                    color: #fff;
             }
            a {
                 margin-left: 0.2rem;
                 color: #fff;
                 font-size: 14px;
             }
             .left {
                 position: absolute;
                 width: 60px;
                 height: 30px;
                 left: 0px;
                 top: 0px;
                 margin: 0px; 
                 line-height: 30px;
             }
             .right{
                 position: absolute;
                 width: 100px;
                 height: 30px;
                 top: 0px;
                 right: 0px;
                 margin: 0px;
                 text-align: center;
             }
             .middle {
                 width: 100%;
                 padding: 0 60px;
                 box-sizing: border-box;
                 margin: 0px;
                 text-align: center;
                 color: #fff;
                 font-size: 14px;
             }
         }
</style>