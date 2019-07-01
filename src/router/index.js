import Vue from 'vue'
import Router from 'vue-router'
import Home from "../App.vue";
import index from '@/components/index'
import login from '@/components/login'
import register from '@/components/register'
import checkEmail from "@/components/checkEmail";
import mwc from "@/components/mwc";
import mwccn from "@/components/mwccn";
import facebookLogin from "@/components/facebookLogin";
import product from "@/components/product";
import p515 from "@/components/p515";
import p710 from "@/components/p710";
import lab from "@/components/lab";

import shopUser from "@/components/Shop/shopUser";
import shopTryAll from "@/components/Shop/shopTryAll";
import shop from "@/components/Shop/shopping";
import report from "@/components/Shop/report";
import CommodityDetails from "@/components/Shop/CommodityDetails";

import zoology from "@/components/zoology";
import news from "@/components/news";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/MWC",
      name: "MWC",
      component: mwc
    },
    {
      path: "/MWC/cn",
      name: "MWCcn",
      component: mwccn
    },
    {
      path: "/product/en",
      name: "product",
      component: product
    },
    {
      path: "/p515",
      name: "p515",
      component: p515,
      meta: {
        index: 1
      }
    },
    {
      path: "/p710",
      name: "p710",
      component: p710,
      meta: {
        index: 1
      }
    },
    {
      path: "/lab",
      name: "lab",
      component: lab,
      meta: {
        index: 3
      }
    },
    {
      path: "/shop",
      name: "shop",
      component: shop
    },
    {
      path: "/shopUser",
      name: "shopuser",
      component: shopUser
    },
    {
      path: "/shopTryAll",
      name: "shopTryAll",
      component: shopTryAll
    },
    {
      path: "/shop/showinfo",
      name: "CommodityDetails",
      component: CommodityDetails
    },
    {
      path: "/shop/report",
      name: "report",
      component: report
    },
    {
      path: "/zoology",
      name: "zoology",
      component: zoology,
      meta: {
        index: 2
      }
    },
    {
      path:'/news',
      name:'news',
      component:news
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login
    // },
    // {
    //   path: "/facebookLogin",
    //   name: "facebookLogin",
    //   component: facebookLogin
    // },
    // {
    //   path: "/register",
    //   name: "register",
    //   component: register
    // },
    // {
    //   path: "/checkEmail",
    //   name: "checkEmail",
    //   component: checkEmail
    // },
    {
      path: "*",
      redirect: "/index"
    }
  ]
});