<template>
  <div class="crowdFunding">
    <transition name="fade">  
      <div class="shadow-box" v-show="succed">
          <div class="shadow">
              <p>欢迎加入!</p>
              <p>您已成功订阅</p>
              <button @click="close">OK</button>
          </div>
      </div>
    </transition>
    <div class="board">
      <div>
        <p class="name">Leez Single Board Computer</p>
        <!-- <h1>The Single Board Computer</h1> -->
        <!-- LAUNCHING SOON -->
        <div>敬请期待</div>
      </div>
    </div>
    <div class="submit">
      <p class="bold">2019年2月25-28 MWC Booth 3N30 西班牙巴塞罗那，一起见证Leez SBC新品</p>
      <!-- <p>
        <input type="text" placeholder="Your email address" class="email" v-model="email" @keyup.enter="submit" @focus="changeErrors">
        <button @click="submit" :disabled='!checked'>订阅</button>
      </p>
      <div class="check">
        <p>
          <img src="../assets/check.png" alt="" v-if="!checked" @click="check">
          <img src="../assets/checked.png" alt="" v-if="checked" @click="check">
          <span>我同意订阅Leez的实时信息以及共享我的信息。</span>
        </p>
      </div>
      <p class="red">{{error}}</p> -->
    </div>
    <!-- banner -->
    <!-- <div class="banner">
      <div class="bg"></div>
       <swiper :options="swiperOption">
        <swiper-slide><img src="../assets/pic.png"></swiper-slide>
        <swiper-slide><img src="../assets/pic.png"></swiper-slide>
        <swiper-slide><img src="../assets/pic.png"></swiper-slide>
      </swiper>
      <div class="swiper-button-next swiper-button-white"></div> 
      <div class="swiper-button-prev swiper-button-white"></div> 
    </div> -->
    <!--以下看需要添加-->
    <!-- <div class="swiper-scrollbar"></div>  -->
    <!-- <div class="swiper-pagination"></div>  -->
    <div class="details">
      <div class="clearfloat detail middle">
        <div class="imgBg1">
        </div>
        <div class="cfContent">
          <div>
            <h3>独具匠心工艺</h3>
            <!-- 外观极具科技感， -->
            <p>Leez SBC拥有强大的核心组件，创新的功能体验，极具时尚感的外观，专为极客打造。</p>
          </div>
        </div>
      </div>
      <div class="clearfloat detail">
        <div class="imgBg2">
        </div>
        <div class="cfContent">
          <div>
            <h3>智能高效计算</h3>
            <p>异构多核高效能处理器和硬件编解码器，搭配丰富多样的I/O端口，让Leez SBC更灵活高效，轻松应对各种强大的开发挑战。</p>
          </div>
        </div>
      </div> 
      <div class="clearfloat detail middle">
        <div class="imgBg3">
        </div>
        <div class="cfContent">
          <div>
            <h3>随心所欲开发</h3>
            <p>在Leez社区交流开发经验，获取原厂支持，轻松搭建开发环境。Leez SBC让你尽情释放想象力。</p>
          </div>
        </div>
      </div> 
      <div class="clearfloat detail">
        <div class="imgBg4">
        </div>
        <div class="cfContent">
          <div>
            <h3>口袋极客神器</h3>
            <p>Leez SBC设计紧凑，身材小巧灵动，却能提供完整的使用体验，让你的创作激情不受空间限制。</p>
          </div>
        </div>
      </div>
      <!-- tab -->
      <div class="tab">
        <!-- <img src="../assets/tab.png" alt=""> -->
        <div class="tab1" @mouseenter="enter(1)" @mouseleave="leave(1)" @click="select(1)"></div>
        <img src="../assets/mwc/tabLine.png" alt="" class="tabImg">
        <div class="tab2"  @mouseenter="enter(2)" @mouseleave="leave(2)" @click="select(2)"></div>
        <!-- <img src="../assets/tab2.png" alt=""> -->
      </div>
      <!-- leez -->
      <div class="line" v-if="tab==1">
        <div class="clearfloat">
          <div class="lineContent">
            <div>
              <div>
                <img src="../assets/mwc/line1w.png" alt="">
              </div>
              <span>六核64位处理器</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line2w.png" alt="">
              </div>
              <span>多重硬件编解码</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line3w.png" alt="">
              </div>
              <span>支持三屏显示</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line4w.png" alt="">
              </div>
              <span>搭配多种操作系统</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line5w.png" alt="">
              </div>
              <span>各种I/O接口</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line6w.png" alt="">
              </div>
              <span>多样化创客工具</span>
            </div>      
          </div>
          <div class="linePic">
            <img src="../assets/mwc/banzi.png" alt="" v-if="!response">
            <img src="../assets/mwc/banzi2.png" alt="" v-if="response">
          </div>
        </div>
      </div>
      <!-- TI -->
      <div class="line" v-if="tab==2">
        <div class="clearfloat">
          <div class="lineContent ti">
            <div>
              <div>
                <img src="../assets/mwc/line1.png" alt="">
              </div>
              <span>Arm Cortex A15 + DSP + M4</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line2.png" alt="">
              </div>
              <span>严格工业设计</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line3.png" alt="">
              </div>
              <span>10层PCB设计</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line4.png" alt="">
              </div>
              <span>搭配多种操作系统</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line5.png" alt="">
              </div>
              <span>丰富的工业接口</span>
            </div>
            <div>
              <div>
                <img src="../assets/mwc/line6.png" alt="">
              </div>
              <span>多样化创客工具</span>
            </div>      
          </div>
          <div class="linePic">
            <img src="../assets/mwc/tiban.png" alt="" v-if="!response">
            <img src="../assets/mwc/tiban2.png" alt="" v-if="response">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="submit">
      <p class="bold">2019年2月25-28 MWC Booth 3N30 西班牙巴塞罗那，一起见证Leez SBC新品</p>
      <p>
        <input type="text" placeholder="Your email address" class="email" v-model="email" @keyup.enter="submit" @focus="changeErrors">
        <button @click="submit" :disabled='!checked'>订阅</button>
      </p>
      <div class="check">
        <p>
          <img src="../assets/check.png" alt="" v-if="!checked" @click="check">
          <img src="../assets/checked.png" alt="" v-if="checked" @click="check">
          <span>我同意订阅Leez的实时信息以及共享我的信息。</span>
        </p>
      </div>
      <p class="red">{{error}}</p>
    </div> -->
    <div class="cfooter">
      <div class="join">
        <div class="us">
          <p>我们邀请您加入Leez社区</p>
          <!-- <p>带着您的项目想法与我们一起享受开发的乐趣！ </p>
          <p>加入社区讨论</p> -->
        </div>
        <button @click="facegroup">Leez社区</button>
        <div class="right">
          <!-- <p>© 2018 All rights reserved Eyelights . By signing up you agree to receive email updates from Leez . </p>
          <p>Leez is not responsible for any emails sent by the campaigner.</p> -->
          <p>© 2019   Lenovo. All rights reserved. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      checked:false,
      // checkedb:false,
      email:'',
      error:'',
      errors:true,
      response:false,
      succed:false,
      swiperOption: {//swiper3
        // virtual: true,
        initialSlide: 0,
        slidesPerView: 'auto', // 可见数 auto
        slidesPerGroup : 1,
        loop:true,
        autoplay: true,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      tab:1
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods:{
    handleResize() {
      if(document.body.clientWidth < 415){
        this.response=true;
      }else{
        this.response=false;
      }
    },
    check(){
      this.checked?this.checked=false:this.checked=true;
    },
    checkb(){
      this.checkedb?this.checkedb=false:this.checkedb=true;
    },
    submit(){
      if(this.regEmail(this.email)&&this.checked){
        this.$api.post("emails/subscribe?email="+this.email).then(res => {
          // console.log(res);
          if(res.status==200){
            if(res.data.status=='ok'){
              this.errors=false;     
              this.succed=true;                                    
              // this.error= 'Succeeded!';
              // alert('Succeeded!');
            }else{
              this.succed=false;   
              this.errors=true;
              switch(res.data.result){
                case 50011:
                  this.error="邮箱不能为空"
                  break;
                case 50012:
                  this.error="邮箱格式不合法"
                  break;
                case 50013:
                  this.errors=false;
                  this.succed=true;   
                  // alert('Succeeded!');
                  // this.error="Mailbox has been subscribed"
                  // this.error="Succeeded!"
                  break;
                default:
                  this.errorTip = "提交失败";
              }
            }
          }else{
            this.errors=true;
            this.error= '请稍后再试';
          }
        }).catch(err => {
            console.log(err);
        });
      }else if(!this.regEmail(this.email)){
        this.errors=true;
        this.error='请输入邮箱';
      }else{
        this.errors=true;
        this.error='请勾选相应的协议';
      }
    },
    errorNone(){
      setTimeout(()=>{
        this.error='';
      },5000)
    },
    facegroup(){
      window.open("https://forum.ileapcloud.com/forum.php");
    },
    changeErrors(){
      this.errors=false;
      this.error='';
    },
    close(){
      this.succed=false;
    },
    select(num){
      this.tab=num;
    },
    enter(num){
      this.tab=num;
    },
    leave(num){
      this.tab=num;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div,span,p,a{
    color: #fff;
  }
  .fade-enter,.fade-leave-to{
      opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
      transition: opacity .3s;
  }
  .shadow-box {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.3);
      text-align: center;
  }
  .shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transition: 3s;
    width: 370px;
    height: 190px;
    padding: 36px 0 30px 0;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    /* position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0; */
  }
  .shadow>p{
    color: #666;
  }
  .shadow>p:first-child{
    font-size: 17px;
    color: #333;
    margin-bottom: 10px;
  }
  .shadow>button{
    margin-top: 40px;
  }
  .crowdFunding,.board{
    width: 100%;
  }
  .board{
    height: 458px;
    background: url(../assets/mwc/boardblue.png) no-repeat center;
    background-size: cover;
  }
  .board>div{
    padding-left: 12%;
  }
  .board .name{
    padding:140px 0 30px 0; 
    font-size: 35px;
    font-weight: bold;
  }
  .board h1{
    font-size: 24px;
    margin: 0;
  }
  .board p{
    /* width: 40%; */
    margin: 0;
    font-size:16px;
    font-weight:bold;
  }
  .board>div>div{
    /* margin-top: 50px; */
    font-size:20px;
    font-weight:bold;
  }
  .board>div>div>.indiegogo{
    color: #ED1079;
  }
  .submit{
    /* width: 100%; */
    width: 565px;
    margin: 0 auto;
    padding: 88px 0 46px 0;
    /* word-wrap:break-word ;
    word-break:break-all;  */
  }
  .submit>p{
    font-size:17px;
  }
  .submit>p.red{
    color:red;
    height:20px;
  }
  .submit>p.green{
    color:#17D117;
    height: 15px;
  }
  .submit>p:first-child{
    margin-top: 0px;
    margin-bottom:22px;
    font-size: 16px;
  }
  .submit>p:not(:first-child){
    font-size: 18px;
  }
  .submit>.check{
    font-size: 12px;
    font-weight: bold;
    width: 670px;
    /* margin: 0 auto; */
  }
  .check>p{
    margin: 20px 0;
  }
  p.red{
    margin: 20px 0;
  }
  .submit>.check>p>img{
    width: 14px;
    vertical-align: top;
    margin-top: 3px;
  }
  .submit>p>img{
    width: 14px;
    vertical-align: midlle;
  }
  .email{
    width: 307px;
    padding: 10px;
  }
  .submit button{
   background-color: #E2231A;
   height: 39px;
   padding: 10px 50px;
   margin-left: 14px;
  }
  .submit button:disabled{
   background-color: #ccc;
  }
  .submit button:hover{
   background-color: #E33E36;
  }
  .submit button:disabled:hover{
   background-color: #ccc;
  }
  .submit span{
    margin-left: 8px;
    display: inline-block;
    width: 91%;
    font-size: 14px;
  }
  .submit a{
    color: #F04187;
    font-weight: bold;
  }
  .submit a:hover{
    text-decoration: none;
  }
  .detail>div{
    width: 50%;
    height: 600px;
    float: right;
    margin-bottom: 68px;
  }
  /* .middle{
    margin-top: 70px;
  } */
  .middle>div{
    float: left;
  }
  .cfContent>div{
    width: 70%;
    margin: 0 auto;
  }
  .cfContent>div>p{
    width: 71%;
    font-size: 20px;
    margin: 0;
  }
  .cfContent>div>h3{
    padding: 200px 0 54px 0;
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }
  /* .middle>div>h3{
    padding: 175px 0 30px 0;
    font-size: 23px;
  } */
  .detail>div.imgBg2{
    background: url(../assets/mwc/cf2.png) no-repeat center;
    background-size: cover;
    /* background-position:right center; */
    /* background-size:100% 640px; */
  }
  .detail>div.imgBg1{
    background: url(../assets/mwc/cf1s.png) no-repeat center;
    background-size: cover;
  }
  .detail>div.imgBg3{
    background: url(../assets/mwc/cf3.png) no-repeat right;
    background-size: cover;
  }
  .detail>div.imgBg4{
    background: url(../assets/mwc/cf4.png) no-repeat center;
    background-size: cover;
  }
  .detail>div.imgBg5{
    background: url(../assets/mwc/cf5.png) no-repeat center;
    background-size: cover;
  }
  .detail>div.imgBg6{
    background: url(../assets/mwc/cf6.png) no-repeat center;
    background-size: cover;
  }
  .detail>div.imgBg7{
    background: url(../assets/mwc/cf7.png) no-repeat center;
    background-size: cover;
  }
  .detail>div.imgBg8{
    background: url(../assets/mwc/cf8.png) no-repeat center;
    background-size: cover;
  }
  .line{
    width: 100%;
  }
  .line>div{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  .line>div>div{
    width: 40%;
    float: left;
  }
  .lineContent>div{
    margin: 45px 0;
  }
  .lineContent>div>div{
    display: inline-block;
    width: 46px;
    text-align: center;
  }
  .lineContent>div>span{
    margin-left: 24px;
  }
  .ti>div>span{
    color: #0DC5F6;
  }
  .line>div>div.linePic{
    width: 60%;
  }
  .linePic>img{
    width: 100%;
  }
  .cfooter{
    width: 100%;
    background-color: #101010;
    font-size: 17px;
    padding: 34px 0 24px 0;
  }
  .cfooter>div{
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  .cfooter>div>p{
    color: #999;
  }
  .join>.us{
    font-size:18px;
    font-weight:500;
    color:#fff;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 22px;
  }
  .join>.us>p{
    color:#fff;
    text-align: center;
  }
  .cfooter>div>div.right{
    width: 70%;
    margin: 0 auto;
    font-size: 13px;
    padding-top: 24px;
    text-align: center;
    border-top: 1px solid#484848;
  }
  .cfooter>div>div>p{
    color: #999;  
  }
  .join>button{
    background-color: #4867CB;
    font-size: 16px;
    margin-bottom: 34px;
  }
  .banner{
    width: 100%;
    height: 526px;
    /* background:url(../assets/banner.png) #040406 no-repeat top; */
    background-color:#040406; 
    margin-bottom: 68px;
    position: relative;
  }
  .bg{
    background-image:url(../assets/mwc/banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height:263px;
  }
  .swiper-container{
    width: 1200px;
    position: relative;
    top: -151px;
  }
  .swiper-slide{
    width: 400px !important;
    text-align: center;
  }
  .swiper-button-prev:focus{
    outline: none;
  }
  .swiper-button-next:focus{
    outline: none;
  }
  .tab{
    width: 330px;
    margin: 0 auto;
    margin-bottom: 100px;
    text-align: center;
    margin-top: 100px;
  }
  .tab>img{
    vertical-align: top;
  }
  .tabImg{
    margin: 0 60px;
  }
  .tab1,.tab2{
    height: 94px;
    display: inline-block;
  }
  .tab1{
    width: 94px;
    background: url(../assets/mwc/tabs.png) no-repeat center;
  }
  /* .tabs{
    background: url(../assets/tabs.png) no-repeat center;
  } */
  /* .tab1:hover{
    background: url(../assets/tabHover.png) no-repeat center;
  } */
  .tab2{
    width: 94px;
    background: url(../assets/mwc/tabs2.png) no-repeat center;
  }
  /* .tabs2{
    background: url(../assets/tabs2.png) no-repeat center;
  } */
  /* .tab2:hover{
    background: url(../assets/tab2Hover.png) no-repeat center;
  } */
  @media screen and (max-width:1200px){
    .line>div{
      width: 90%;
      margin: 0 auto;
    }
    .cfContent>div{
      width: 80%;
      margin: 0 auto;
    }
    .cfContent>div>p{
      width: 90%;
      font-size: 20px;
      margin: 0;
    }
    .swiper-container{
      width: 900px !important;
      position: relative;
      top: -151px;
    }
    .swiper-slide{
      width:300px !important;
      text-align: center;
    }
    .swiper-slide>img{
      width:300px;
    }
  }
  @media screen and (max-width:1024px){
    .line>div{
      width: 100%;
      margin: 0 auto;
    }
    .line>div>div{
      float: none;
      display: block;
      width: 80%;
      margin: 0 auto;
    }
    .line>div>div.linePic{
      width: 80%;
      margin-top: 50px;
    }
    .lineContent>div{
      width: 49%;
      display: inline-block;
    }
    .detail>div{
      height: 470px;
    }
    .cfContent>div>h3{
      padding: 150px 0 54px 0;
    }
    .board>div{
        padding-left: 5%;
    }
  }
  /* 轮播 */
  @media screen and (max-width:900px){
      .swiper-container{
        width: 600px !important;
        position: relative;
        top: -151px;
      }
      .swiper-slide{
        width:300px !important;
        text-align: center;
      }
      .swiper-slide>img{
        width:280px;
      }
  }
  @media screen and (max-width:822px){
      .lineContent>div>span{
          margin-left: 2px;
      }
  }
  @media screen and (max-width:772px){
      .lineContent>div{
        width: 49%;
        display: inline-block;
        text-align: center;
      }
      .lineContent>div>div{
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
      }
  }
  @media screen and (max-width:768px){
    .board{
      height: 680px;
      background: url(../assets/mwc/boardib.png) no-repeat;
      background-size: cover;
      background-size: 100%;
      text-align: center;
    }
    .submit>p:first-child{
      margin-top: 40px;
    }
    .board>div{
      padding-left: 0;
      padding: 10px 0;
    }
    .board h1{
      font-size: 28px;
      margin: 0;
      padding:20px 0 0px 0; 
      text-align: center;
    }
    .board .name{
      padding:70px 0 5px 0; 
      font-size: 42px;
      font-weight: bold;
    }
    .board>div>div{
      font-size: 18px;
      font-weight: normal;
      margin-top: 30px;
    }
    .board p{
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
    .board>div>div{
      text-align: center;
    }
    .cthree>div{
      width: 100%;
      margin: 0 auto;
    }
    .threeItem{
      width: 100%;
      float: none;
      text-align: center;
      margin-bottom: 50px;
    }
    .email{
      width: 50%;
    }
    .detail>div.cfContent{
      height: auto;
      margin: 68px 0;
    }
    .cfContent>div>h3{
      padding:0px 0 24px 0;
    }
    .middle{
      margin-top: 60px;
    }
    .submit {
      width: 86%;
      margin-left: 10%;
    }
    .detail>div{
      width: 100%;
      float: none;
    }
    .detail>div.imgBg1{
      background: url(../assets/mwc/cfb1.png) no-repeat center;
      background-size: cover;
      width: 90%;
      margin: 0 auto;
    }
    .detail>div.imgBg2{
      background: url(../assets/mwc/cfp2.png) no-repeat center;
      background-size: cover;
      width: 90%;
      margin: 0 auto;
    }
    .detail>div.imgBg3{
      background: url(../assets/mwc/cfp3.png) no-repeat right;
      background-size: cover;
      width: 90%;
      margin: 0 auto;
    }
    .detail>div.imgBg4{
      background: url(../assets/mwc/cfp4.png) no-repeat center;
      background-size: cover;
      width: 90%;
      margin: 0 auto;
    }
    .middle>div{
      float: none;
    }
    .detail>div{
      height: 600px;
    }
  }
  @media screen and (max-width:653px){
    .lineContent>div{
        width: 100%;
        display: inline-block;
        text-align: left;
        margin: 15px 0;
    }
    .lineContent>div>div {
        display: inline-block;
        width: 64px;
        text-align: center;
        margin-bottom: 20px;
    }
    .lineContent>div>span{
      margin-left: 10px;
    }
  }
  @media screen and (max-width:620px){
    .submit>.check{
      margin: 15px 0 0 0px;
      font-size: 12px;
      font-weight: bold;
      width: 86%;
      /* margin: 0 auto; */
    }
    .submit>p:not(:first-child){
      margin: 15px 0 0 0px;
    }
    .swiper-container{
      width: 300px !important;
      position: relative;
      top: -151px;
    }
    .swiper-slide{
      width:300px !important;
      text-align: center;
    }
    .swiper-slide>img{
      width:280px;
    }
  }
  @media screen and (max-width:415px){
    .cfContent>div>h3{
      font-size: 24px;
    }
    .cfContent>div>p{
      font-size: 18px;
    }
    .submit button{
      background-color: #E2231A;
      height: 39px;
      padding: 10px 30px;
      margin-left: 14px;
    }
    .lineContent>div>span{
      margin-left: 10px;
    }
    .lineContent>div{
        width: 100%;
        display: inline-block;
        text-align: left;
    }
    .lineContent>div {
        margin: 15px 0;
    }
    .submit>p:first-child{
      margin: 15px 0 0 30px;
      width: 100%;
      margin: 0 auto;
    }
    .submit>p:nth-child(3){
      width: 90%;
      margin: 15px auto 0 auto;
    }
    .board{
      height: 490px;
      background: url(../assets/mwc/boardsb.png) no-repeat;
      background-size: cover;
      background-size: 100%;
      text-align: center;
    }
    .detail>div{
      height: 326px;
    }
    .join>.us{
      width: 80%;
    }
    .shadow {
      width: 280px;
    }
    .shadow>p{
      color: #666;
      font-size: 13px;
    }
    .banner{
      height: 430px;
    }
    .board .name{
      padding:30px 0 5px 0; 
      font-size: 42px;
      font-weight: bold;
    }
  }
  @media screen and (max-width:375px){
    .email{
      width: 44%;
    }
    .lineContent>div{
        width: 100%;
        display: inline-block;
        text-align: center;
        margin: 25px 0 !important;
    }
    .lineContent>div>div {
        display: inline-block;
        width:100%;
        text-align: center;
        margin-bottom: 20px;
    }
    .lineContent>div>span{
      margin-left: 10px;
    }
    .board{
      height: 450px;
      /* background: url(../assets/boardbb.png) no-repeat;
      background-size: cover;
      background-size: 100%;
      text-align: center; */
    }
    .submit span{
      width: 88%;
    }
    .board .name{
      font-size: 40px;
    }
  }
  @media screen and (max-width:320px){
    .board{
      height: 390px;
      /* background: url(../assets/boardbb.png) no-repeat;
      background-size: cover;
      background-size: 100%;
      text-align: center; */
    }
    .board .name{
        font-size: 33px;
    }
    .email{
        width: 45%;
    }
    .submit button{
        padding: 10px 20px;
    }
    .submit span{
        width: 86%;
    }
  }
</style>
