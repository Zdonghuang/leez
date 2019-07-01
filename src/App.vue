<template>
  <div id="app">
    <nav v-if="!login&&!reg&&!crowd&&this.$route.path.indexOf('shop') == -1" class="nav menu">
      <!-- default -->
      <div class="bar">
        <img src="./assets/common/leez.png" alt="" @click="goto('/index')">
        <div class="bmiddle">
          <a :class="now==1?'now':''">
            <span>产品系列</span>
            <ul>
              <li>Smart Vertical Device</li>
              <li class="has">
                <span>Leez Core</span>
                <ul>
                  <li><router-link  to="p710">Lezz P710</router-link></li>
                  <li><router-link  to="p515">Lezz P515</router-link></li>
                </ul>
              </li>
              <li>IOT Module</li>
            </ul>
          </a>
          <a :class="now==2?'now':''">
            <span>生态</span>
            <ul>
              <li><router-link  to="/zoology">生态合作</router-link></li>
              <li>解决方案</li>
            </ul>
          </a>
          <a :class="now==3?'now':''">
            <router-link to="/lab">Leez Lab</router-link>
          </a>
          <a :class="now==4?'now':''">
            <router-link to="/shop">试用</router-link>
          </a>
          <a :class="now==5?'now':''"><span>资料文档</span></a>
          <a :class="now==6?'now':''"><span>论坛</span></a>
        </div>
        <div class="user">
          <span>登录</span>
          <span>注册</span>
        </div>
      </div>
      <!-- 下拉菜单 -->
      <div class="bar2">
        <img src="./assets/common/leez.png" alt="" @click="goto('/index')">
        <div class="dropdown">
          <a href="#"><img src="./assets/common/menu.png" alt=""/></a>
          <div class="dropdown-content">
            <ul>
              <span>产品系列</span>
              <li>Smart Vertical Device</li>
              <li class="has">
                <span>Leez Core</span>
                <ul>
                  <li><router-link  to="p710">Lezz P710</router-link></li>
                  <li><router-link  to="p515">Lezz P515</router-link></li>
                </ul>
              </li>
              <li>IOT Module</li>
            </ul>
            <ul>
              <span>生态</span>
              <li><router-link  to="zoology">生态合作</router-link></li>
              <li>解决方案</li>
            </ul>
            <ul>
              <span><router-link to="/lab">Leez Lab</router-link></span>
            </ul>
            <ul>
              <span><router-link to="/shop">试用</router-link></span>
            </ul>
            <ul>
              <span><a href="#">资料文档</a></span>
            </ul>
            <ul>
              <span><a href="#">论坛</a></span>
            </ul>
            <ul>
              <span><a href="#">登录</a></span>
            </ul>
            <ul>
              <span><a href="#">注册</a></span>
            </ul>
            <!-- <router-link to="product">产品系列</router-link>
            <a href="#">生态合作</a>
            <a href="#">解决方案</a>
            <router-link to="/lab">Leez Lab</router-link>
            <router-link to="/shop">试用</router-link>
            <a href="#">资料文档</a>
            <a href="#">论坛</a>
            <a href="#" class="loginbt">登录</a>
            <a href="#" class="signbt">注册</a> -->
          </div>
        </div>
      </div>
    </nav>
    <nav v-if="login||reg" class="nav">
      <!-- default -->
      <div>
        <span>Leez</span>
        <span class="language">
          <img src="./assets/language.png" alt="">
          <select name="language" id="" v-model="language">
            <option value="en">English</option>
            <option value="zh">Chinese</option>
          </select>
        </span>
      </div>
    </nav>
    <nav v-if="crowd" class="crowd">
      <!-- mwc -->
      <div>
        <img src="./assets/leez.png" alt="">
      </div>
    </nav>
    <nav v-if="product" class="nav product">
      <!-- product -->
      <div>
        <img src="./assets/leez.png" alt="">
        <span>Product</span>
      </div>
    </nav>
    <div v-if="this.$route.path.indexOf('shop') > -1" class="shopheader">
      <div class="logo">
        <img src="./assets/common/leez.png" alt="" @click="goto('/index')">
        <span>试用</span>
        <span>开发不设限 每天试新鲜</span>
      </div>
      <div class="shopnav">
        <ul>
          <li>
            <router-link to="/shop">首页</router-link>
          </li>
          <li>
            <router-link to="/shopTryAll">全部试用</router-link>
          </li>
          <li>
            <router-link to="/shop/report">试用报告</router-link>
          </li>
          <li>帮助</li>
          <li class="userCenter">
            <router-link to="/shopUser">个人中心</router-link>
            <div class="centerMenu">
              <div>我的账户</div>
              <div>我的试用</div>
              <div>试用评级</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
    <footer>
      <div>
        <div class="ftop">
          <div>
            <h6>关于我们</h6>
            <p>联想大数据</p>
            <p>联系我们</p>
          </div>
          <div>
            <h6>关于我们</h6>
            <p>电话 +86-18519561618</p>
            <p>微信 leezboard</p>
            <p>邮箱 leezinfo@lenovo.com</p>
          </div>
          <div>
            <h6>技术支持</h6>
            <p>QQ技术服务群 82195744</p>
          </div>
          <div>
            <h6 class="fimg">关注微信公众号</h6>
            <p><img src="./assets/index/wx.png" alt=""></p>
          </div>
          <div>
            <h6 class="fimg">加入微信技术服务群</h6>
            <p><img src="./assets/index/wx.png" alt=""></p>
          </div>
        </div>
        <div class="fbottom">
          <span>法律条款 | 隐私保护 | 京ICP备17010331号 - 1</span>
          <span>@2018-2019 Lenovo Capital & Incubator Group All Rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      language:'en',
      crowd:false,
      product:false,
      login:false,
      reg:false,
      shop: true,
      now:-1
    }
  },
  watch:{
    language(curVal,oldVal){
// 　　　console.log(curVal,oldVal);
      if(curVal == 'zh'){
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale')
      } else if (curVal == 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale')
　　  }
    }
  },
  mounted(){
    this.path();
  },
  updated(){
    this.path();
  },
  methods:{
    path(){
      (this.$route.path.slice(1,4).toLowerCase()=='mwc')?this.crowd=true:this.crowd=false;
      (this.$route.path.slice(1,6).toLowerCase()=='login')?this.login=true:this.login=false;
      (this.$route.path.slice(1,9).toLowerCase()=='register')?this.reg=true:this.reg=false;
      if(this.$route.meta.index){
        this.now=this.$route.meta.index;
      }else{
        this.now=-1;
      }
    },
    goto(path){
      this.$router.push(path);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.indexline{
  height: 40px;
}
.nav{
  position: fixed;
  background-color:#0F0F0F; 
  color: #fff;
  display: block;
  width: 100%;
  height: 42px;
  line-height: 42px;
  box-sizing: border-box;
  text-align: left;
}
.nav>div{
  width: 70%;
  margin: 0 auto;
}
.language{
  float: right;
}
.language>img{
  width: 20px;
}
.language>select{
  border: none;
  color: #fff;
  background-color: #0F0F0F;
  border: none;
}
.language>select:focus{
  outline: none;
}
.crowd>div{
  width: 100%;
  background-color: #101010;
  text-align: center;
}
.crowd>div>img{
  height: 42px;
}
.product{
  position: static;
}
.product span{
  font-size: 24px;
  margin-left: 80px;
}
.product>div>img{
  height: 42px;
  vertical-align: top;
}
.menu{
  height: 60px;
  background: #fff;
}
.bar,.bar2{
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.bar>img{
  height: 60px;
}
.bar>div{
  color:#333; 
  display: inline-block;
  height: 60px;
  line-height: 60px;
}
.bmiddle>a{
  display: inline-block;
  position: relative;
}
.bmiddle>a:hover{
  cursor: pointer;
}
.bmiddle>a>ul{
  display: none;
  position: absolute;
  top: 44px;
  left: -20px;
  background: #fff;
  z-index: 2;
  width: 180px;
  padding: 0px 20px;
}
.bmiddle>a>ul>li>a:hover{
  color:#3E8DDD;
}
.bmiddle>a:hover ul{
  display: block;
}
.bmiddle>a.now{
  color:#3E8DDD;
}
.bmiddle>a.now>a{
  color:#3E8DDD;
}
.bmiddle>a>a:hover{
  color:#3E8DDD;
}
.bar>.bmiddle>a:hover{
  color: #3E8DDD;
}
.bar>.bmiddle>a:hover ul{
  color: #333;
}
.bmiddle>a>ul>li{
  display: block;
  margin: 0;
  line-height: 20px;
  margin-top: 26px;
  font-size: 16px;
}
.bmiddle>a>ul>li:last-child{
  margin-bottom: 26px;
}
.has>span{
  border-left: 3px solid #3E8DDD;
  padding-left: 5px;
}
.has>ul>li{
  line-height: 20px;
  margin: 0 8px;
  margin-top: 16px;
  font-size: 14px;
}
.has>ul>li>a:hover{
  color: #3E8DDD;
}
.bmiddle>a>ul>li:hover{
  color: #3E8DDD;
}
.bmiddle>a>ul>li>ul>li{
  display: block;
}
.bar>div>a{
  display: inline-block;
  height: 60px;
  line-height: 60px;
  margin: 0 15px;
}
.bar>.user>span{
  margin: 0 10px;
}
.user>span:first-child{
    border-right: 1px solid #666;
    padding: 0 10px;
    vertical-align: middle;
    margin-right: 0;
    position:relative;
    top: -1px;
}
.bar2{
  display: none;
}
.menu{
  position: static;
}
footer{
  background: #272727;
}
footer>div{
  width: 70%;
  margin: 0 auto;
  color: #999;
}
.ftop{
  display: table;
  width: 100%;
}
.ftop>div{
  display: table-cell;
}
.ftop h6{
  font-size: 18px;
  padding: 20px 0 40px 0;
}
.ftop .fimg{
  padding-bottom: 20px;
}
.ftop p{
  font-size: 14px;
  margin-bottom: 20px;
}
.fbottom{
  display: flex;
  justify-content: space-between;
  padding: 30px 0 40px 0;
  border-top: 1px solid #444444;
}
a{
  color: #333;
}
.userCenter{
  position: relative;
}
.centerMenu{
  position: absolute;
  display: none;
}
.centerMenu>div{
  width: 100px;
  padding: 5px 0;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.centerMenu>div:hover{
  background: #3E8DDD;
  color: #fff;
}
@media screen and (max-width: 1244px){
  .menu>.bar{
    width: 80%;
  }
  .bar>div>span{
    margin: 0 10px;
  }
  .bar>.user>span{
    margin: 0 5px;
  }
}
@media screen and (max-width: 1024px){
  .bar{
    display: none;
  }
  .menu>.bar2{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
  }
  .dropdown>a>img{
    padding: 0 30px;
    height: 30px;
  }
  .bar2>img{
    height: 60px;
  }
  .dropdown:hover .bropbtn {
      background-color: #111;
  }
  .dropdown {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      text-align: right;
      z-index: 100;
  }
  .dropdown-content {
      line-height: 42px;
      display: none;
      position: absolute;
      right: 0;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      text-align: left;
  }
  .dropdown-content a {
      color: black;
      text-decoration: none;
      display: block;
      background: #fff;
  }
  .dropdown-content a:hover {
      color: #3E8DDD;
  }
  .dropdown-content li:hover {
      color: #3E8DDD;
  }
  .dropdown:hover .dropdown-content {
      display: block;
  }
  .dropdown-content>ul{
    background: #fff;
    color: #333;
    margin: 0;
    padding: 10px 20px 0 20px;
  }
  .dropdown-content>ul:last-child{
    padding-bottom: 20px;
  }
  .dropdown-content>ul:first-child{
    padding-top: 20px;
  }
  .dropdown-content>ul li{
    display: block;
  }
  .dropdown-content .has>ul>li:first-child{
    margin-top: 4px;
  }
  .dropdown-content .has>ul>li:last-child{
    margin-bottom: 12px;
  }
}
.pointer{
  cursor: pointer;
}
@media screen and (max-width: 768px){
  footer>div{
    width: 80%;
  }
  .ftop{
    display: inline-block;
  }
  .ftop>div{
    display: inline-block;
    width: 49%;
    vertical-align: top;
  }
  .fbottom{
    display: block;
  }
  .fbottom>span{
    display: block;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 415px){
  .userCenter:hover .centerMenu{
    display: block;
  }
  .product>div{
    width: 80%;
  }
  .product span{
    margin-left: 20px;
  }
}
.shopheader{
  height: 100px;
  background-color: #fff;
}
.shopheader div.logo{
  margin-left: 20%;
}
.shopheader div.logo span{
  margin-left: 20px;
}
.shopheader .shopnav{
  height: 40px;
  background-color: #fff;
  border:1px solid rgba(238,238,238,1);
  line-height: 40px;
}
.shopheader .shopnav ul{
  list-style: none;
  margin: 0;
  color: #333;
  margin-left: 20%;
}
.shopheader .shopnav ul li{
  float: left;
  cursor: pointer;
}
@media screen and (max-width: 622px) {
  .shopheader div.logo, .shopheader .shopnav ul{
    margin-left: 10%;
  }
}
@media screen and (max-width: 425px) {
  .shopheader div.logo, .shopheader .shopnav ul{
    margin-left: 0%;
  }
  .shopheader .shopnav ul li{
    margin: 0;
    margin-left: 8px;
  }
}
@media screen and (max-width: 360px) {
  .shopheader div.logo span:nth-child(3) {
    display: none;
  }
}
</style>
