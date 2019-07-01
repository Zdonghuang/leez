// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Api from "./api/index.js";
// Vue.prototype.$api = Api;
Vue.config.productionTip = false;
import utils from '../static/js/utils.js'    //获取url参数
import VueI18n from "vue-i18n";
import qs from "qs";
Vue.prototype.$qs = qs;
import axios from "axios";
import reg from "../static/js/reg.js";
import store from "../src/store/store.js";

import "babel-polyfill";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。

Vue.use(VueAwesomeSwiper)
Vue.use(reg);

// 页面刷新时，重新赋值token
if (sessionStorage.getItem("token")) {
  store.commit("setToken", sessionStorage.getItem("token"));
  store.commit("changeLoginState", false);
}
axios.defaults.headers = {
  "Content-Type": "application/json"
};
axios.defaults.baseURL = "https://api.ileapcloud.com/leez/v1/";
// axios.defaults.headers.common['authorization']= store.state.token;
Vue.prototype.$api = axios;
axios.interceptors.request.use(
  config => {
    if (store.state.usertoken) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `${store.state.usertoken}`;
    }
    config.responseType = 'text';
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    // if (response.request.responseURL
    //   && response.request.responseURL.indexOf('/v2/users/userinfo') != -1
    //   && response.data.status != 'ok' && response.config.method != 'put') {
    //   sessionStorage.removeItem("token");
    //   store.commit("setToken", "");
    //   store.commit("changeLoginState", false);

    //   router.push('/login');
    // }

    return response;
  },
  err => {
    // if (err.response.status === 401 || err.response.status === 403) {
    //   sessionStorage.removeItem("token");
    //   store.commit("setToken", "");
    //   store.commit("changeLoginState", false);

    //   router.push('/login');
    // }

    return Promise.reject(err);
  }
);



Vue.use(VueI18n);

// this.$api.post('user/login.do(地址)', {
//   "参数名": "参数值"
// }, response => {
//   if (response.status >= 200 && response.status < 300) {
//     console.log(response.data); \\请求成功，response为成功信息参数
//   } else {
//     console.log(response.message); \\请求失败，response为失败信息
//   }
// });

const i18n = new VueI18n({
  locale: "en", // 语言标识
  messages: {
    zh: require("../static/lang/zh.js"),
    en: require("../static/lang/en.js")
  }
});

Vue.prototype.writeCookie = function (cookieName, cookieValue, expDays, domain) {
  var dt, expires;
  dt = new Date();
  dt.setTime(dt.getTime() + (expDays * 24 * 60 * 60 * 1000));
  expires = "; expires=" + dt.toGMTString();
  var s = cookieName + "=" + cookieValue + expires + '; domain=' + domain;
  document.cookie = s;
}

/* eslint-disable no-new */
Vue.prototype.$utils = utils   //注册全局方法
Vue.prototype.$domainName = utils.getDomain(window.location.hostname);
new Vue({
  el: "#app",
  router,
  i18n,
  store,
  components: { App },
  template: "<App/>"
});
