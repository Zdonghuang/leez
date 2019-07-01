export default {
    install:function(Vue) {
        Vue.prototype.regUser = function (val) {
            if (!/^(?![0-9]+$)[a-zA-Z0-9_\u4e00-\u9fa5]{1,20}/.test(val)) {
              return "";
            } else {
              return val;
            }
        }
        Vue.prototype.regEmail = function (val) {
            if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val)) {
              return "";
            } else {
              return val;
            }
        }
        Vue.prototype.regPwd = function (val) {
            if (!/^.{6,20}$/.test(val)) {
                return "";
            } else {
                return val;
            }
        }
    }
}