import Vue from "vue";
import Vuex from "vuex";
import  {change_Login,picture_Url,user_Name} from "./mutation-type.js";
Vue.use(Vuex);

const state = { // 用来数据共享  数据存储
    isLogin: false,
    pictureUrl: "",
    userName: ""
}
const getters = { // 用于对共享数据进行过滤操作

}
const mutations = { // 用于注册改变数据的状态 但是只能是同步  不能是异步
    [change_Login](state,object) {
        state.isLogin = object.login
    },
    [picture_Url](state,object) {
        state.pictureUrl = object.pictureUrl;
    },
    [user_Name](state,object) {
        state.userName = object.userName
    }
}
const actions = { // 解决异步改变共享数据
    // 若要用异步来改变状态 则需要用到action来实现  用法是通过action ==> mutations ==> state来实现  context表示上下文  代表store对象
    // changeLoginAsync (context,object) { 这里只是commit了mutations里面的方法
    //     context.commit("changeLogin",object)
    // }
    // 上述的写法可以简写成
        // changeLoginAsync({commit}) {
        //     commit("increment")
        // }
    // 在组件的写法为
    // this.$store.dispatch(changeLoginAsync,{})
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})