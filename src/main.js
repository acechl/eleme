// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue文件
import ElementUi from "element-ui" //引入elementui
import "element-ui/lib/theme-default/index.css"
import App from './App' //引入app.vue
import router from './router' 
import store from "./js/store"
import moment from "moment";
Vue.filter("datefmt",function(value){
  return moment(Number(value)).format("YYYY-MM-DD");
})
// import FastClick from "fastclick"
// FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.use(ElementUi)
// 下面那个句话的意思是 由于 如果定义了一个变量 但是不使用的话会报错  而又不能直接声明  所以下面的那句话的意思就是可以直接声明
/* eslint-disable no-new */ 
new Vue({
  el: '#app', //将app.vue的内容挂载到index.html的标签处
  router, //将vue的路由组件注入到根组件  使得其他组件也能这样直接使用router  例如：this.$router.params 
  store, //同理 将vuex注入到根组件中  在其他组件中使用的例子为 this.$store 
  template: '<App/>',
  components: { App },
})
