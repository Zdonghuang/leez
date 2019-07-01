import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false,
        username: "",
        usertoken: "",
    },
    mutations: {
        //登陆状态
        changeLoginState(state, res) {
            state.isLogin = res;
        },
        setUsername(state, res) {
            state.username = res;
            sessionStorage.username = res;
        },
        // 用户 token
        setToken(state, res) {
            state.usertoken = res;
            sessionStorage.token = res;
        }
    }
});
export default store
