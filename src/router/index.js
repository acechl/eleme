import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Resource from "vue-resource"
import address from "@/components/address/address"
import disctrict from "@/components/disctrict/disctrict"
import register from "@/components/register/register"
import passwordRegister from "@/components/register/passwordRegister"
import square from "@/components/tab/square/square"
import self from "@/components/tab/self/self"
import search from "@/components/tab/search/search"
import squareDetail from "@/components/tab/square/squareDetail"
import account from "@/components/tab/self/account"
import moreDetail from "@/components/tab/square/moreDetail"
import tab from "@/components/tab/tab"
import goPay from "@/components/goPay/goPay"
// import remark from "@/components/goPay/remark"
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  // base: '/vue-eleme/eleme/',
  routes: [
    {path: '/',name:"address",component:address},
    {path: "/address",name:"address",component:address},
    {path:"/disctrict/:city",name:"disctrict",component:disctrict},
    {path: "/register",name: "register",component: register},
    {path:"/passwordRegister",name:"passwordRegister",component: passwordRegister},
    {path:"/square/:addressing",name:"square",component:square},
    {path:"/self",name:"self",component:self},
    {path:"/search",name:"search",component:search},
    {path:"/squareDetail",name:"squareDetail",component: squareDetail},
    {path:"/account",name:"account",component:account},
    {path:"/moreDetail/:type",name:"moreDetail",component:moreDetail},
    {path:"/tab/:address",name:"tab",component:tab},
    {path:"/goPay",name:"goPay",component:goPay},
    // {path:"/remark",name:"remark",component:remark}
  ]
})
