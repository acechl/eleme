<template>
   <div class="moreDetail overflow">
       <component v-bind:is="type" v-bind:title="title"></component>
   </div>
</template>
<script>
import backfast from "./backfast.vue";
import squareElse from "./squareElse.vue";
    export default {
        name: "moreDetail",
        data: function() {
            return {
                type: "",
                title: ""
            }
        },
        components: {
            "backfast": backfast,
            "squareElse": squareElse
        },
        created () {
            if(this.$route.params.type == "预定早餐"){
                this.type = "backfast"
            }else {
                this.type = "squareElse"
                this.title = this.$route.params.type;
            }

        },
         methods: {
            
         }
    }
</script>
<style lang="less" scoped>
   .moreDetail {
       height: 100%;
   }
</style>

