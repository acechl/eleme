<template>
  <div class="backfast">
      <vue-header>
        <h6 slot="middle" class="middle">{{title}}</h6>
      </vue-header>
  </div>
</template>
<script>
import header from "../common/header/header.vue";
  export default {
    name: "backfast",
    data: function() {
      return {
        title: ""
      }
    },
    components: {
      "vue-header":header,
    },
    methods: {

    },
    created () {
      var _this = this;
       var map = new BMap.Map("allmap");
               var geoc = new BMap.Geocoder();
               var geolocation = new BMap.Geolocation();
               geolocation.getCurrentPosition(function(r){
                   if(this.getStatus() == 0){
                       var point = new BMap.Point(r.point.lng,r.point.lat);
                       geoc.getLocation(point,function(rs){
                           var addComp = rs.addressComponents;
                           var street = addComp.street;
                           var streetNumber = addComp.streetNumber;
                           _this.title = street + streetNumber;
                       })
                   }else {
                    //    open() {
                    //       this.$message('获取位置失败,请前往手机中心设置')
                    //     };
                   }
               },{enableHeightAccuracy:true})
    }
  }
</script>
<style lang="less" scoped>

</style>

