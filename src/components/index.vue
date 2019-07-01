<template>
  <div class="index">   
    <div class="section1">
      <swiper :options="swiperindex">
        <swiper-slide>
          <div class="banner" @click="goto('/product')">
            <div>
              <div class="banner_img">
                <img src="../assets/index/banner-1.png" alt="">
              </div>
              <div class="title">
                <h3>Leez</h3>
                <p>Single Board Computer</p>
              </div>
              <div class="p5">
                <img src="../assets/index/p515w.png" alt="">
              </div>
              <div class="p7">
                <img src="../assets/index/p710w.png" alt="">
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner2" @click="goto('/product')">
            <div>
              <h4>Leez P710</h4>
              <p>无所不能</p>
              <p>时尚的外观，强劲的性能，多系统多接口的设计让Leez P710无所不能</p>
              <img src="../assets/index/banner-2.png" alt="">
              <div class="banner_detail clearfloat">
                <div>
                  <img src="../assets/index/b1.png" alt="">
                  <span>Hexa-core 64位处理器</span>
                </div>
                <div>
                  <img src="../assets/index/b2.png" alt="">
                  <span>支持三屏显示</span>
                </div>
                <div>
                  <img src="../assets/index/b3.png" alt="">
                  <span>各种I / O接口</span>
                </div>
              <!-- </div>
              <div class="banner_detail"> -->
                <div>
                  <img src="../assets/index/b4.png" alt="">
                  <span>多个硬件编解码器</span>
                </div>
                <div>
                  <img src="../assets/index/b5.png" alt="">
                  <span>多操作系统支持</span>
                </div>
                <div>
                  <img src="../assets/index/b6.png" alt="">
                  <span>创意工具包</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next swiper-button-white bnext"></div> 
      <div class="swiper-button-prev swiper-button-white bprev"></div> 
      <div class="swiper-pagination"></div> 
    </div>
    <div class="section2">
      <div class="img">
        <img src="../assets/index/bz.png" alt="">
      </div>
      <div class="font">
        <div>
          <h5>联想发布</h5>
          <p>口袋极客神器Leez P710 易扩展、高效能</p>
          <div>口袋极客神器Leez P710 易扩展、高效能</div>
        </div>
        <img src="../assets/index/jian.png" alt="" class="pin">
      </div>
    </div>
    <div class="section3">
      <div class="font font2">
        <div>
          <h5>Leez P515</h5>
          <p>适用于各类工业、商用IOT及AI应用场景</p>
          <div>适用于各类工业、商用IOT及AI应用场景</div>
        </div>
      </div>
      <div class="img img2">
        <img src="../assets/index/jian.png" alt="" class="pins">
        <img src="../assets/index/bz2.png" alt="">
      </div>
    </div>
    <div class="section4">
      <div>
        <h6>Leez生态合作伙伴</h6>
        <p>帮助合作伙伴构建AIOT场景业务实践和解决方案</p>
        <div class="table">
          <div>
            <div>
              <img src="../assets/index/st1.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st2.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st3.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st4.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st5.png" alt="">
            </div>
          </div>
          <div class="table2">
            <div>
              <img src="../assets/index/st6.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st7.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st8.png" alt="">
            </div>
            <div>
              <img src="../assets/index/st9.png" alt="">
            </div>
          </div>
        </div>
        <p class="join">加入合作伙伴计划</p>
        <button @click="show(1)">加入</button>
        <!-- 加入列表 -->
        <div class="joinTable" v-if="showIt">
          <div>
            <div>
              <input type="text" placeholder="姓名（必填）"/>
            </div>
            <div>
              <input type="text" placeholder="联系手机（必填）"/>
            </div>
            <div>
              <input type="text" placeholder="邮箱地址（必填）"/>
            </div>
          </div>
          <div>
            <div class="jcol2">
              <input type="text" placeholder="公司（必填）"/>
            </div>
            <div>
              <input type="text" placeholder="信息来源（必填）"/>
            </div>
          </div>
          <div>
            <div class="jcol3">
              <textarea name="" id="" rows="20" placeholder="详细内容（必填）"></textarea>
              <!-- <input type="text" placeholder="详细内容（必填）"/> -->
            </div>
          </div>
           <div>
             <div class="picCode">
              <input type="text" placeholder="验证码" class="yzm"/>
              <img :src="vpic" alt="图片验证">
              <p>
                <span class="change" @click="changePic">看不清，换一张</span>
              </p>
             </div>
             <div>
              <button @click="show(0)">提交</button>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section4 section5">
      <div>
        <h6>近期新闻</h6>
        <div class="newbar">
          <swiper :options="swipernews">
            <swiper-slide class="col3">
              <div class="news">
                <div>
                  <img src="../assets/index/news1.png" alt="">
                </div>
                <div>
                  <p>诚邀硬核玩家产于</p>
                  <p>Leez P710 外壳手稿设计大赛</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="col3">
              <div class="news new2">
                <div>
                  <img src="../assets/index/news2.png" alt="">
                </div>
                <div>
                  <p>猜霸狂欢夜</p>
                  <p>Leez 新品曝光，猜配置赢大奖</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="col3">
              <div class="news">
                <div>
                  <img src="../assets/index/news3.png" alt="">
                </div>
                <div>
                  <p>直接2019MWC</p>
                  <p>聊聊Leez SBC展台那些事</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next swiper-button-white next"></div> 
          <div class="swiper-button-prev swiper-button-white prev"></div> 
        </div>
      </div>
    </div>
    <div class="section4 section6">
      <div>
        <h6>社区联盟</h6>
      </div>
      <div class="table table3">
        <div>
          <div>
            <img src="../assets/index/sq1.png" alt="">
          </div>
          <div>
            <img src="../assets/index/sq2.png" alt="">
          </div>
          <div>
            <img src="../assets/index/sq3.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      showIt:0,
      swiperindex: {//swiper3
        // virtual: true,
        initialSlide: 0,
        slidesPerView: 'auto', // 可见数 auto
        slidesPerGroup : 1,
        loop:true,
         autoplay : {
          delay:8000
        },
        speed: 1000,
        pagination :{
          el: '.swiper-pagination',
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swipernews: {//swiper3
        // virtual: true,
        initialSlide: 0,
        slidesPerView: 'auto', // 可见数 auto
        slidesPerGroup : 1,
        loop:true,
        autoplay: false,
        speed: 1000,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      next:true,
      vpicClientId:0,
      vpic:"",
    }
  },
  mounted(){
    this.changePic();
  },
  methods:{
    show(n){
      this.showIt=n;
    },
    createGUID() {
      const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };
      return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
    },
    changePic() {
      if(this.next){
        this.next = false;
        this.vpicClientId = this.createGUID();
        var seconds = Date.now();
        this.vpic =
          "https://api.ileapcloud.com/auth-center/v2/imagesecurity/securityimagebytes?clientid=" +
          this.vpicClientId +
          "&time=" +
          seconds;
        setTimeout(()=>{
          this.next = true;
        },500);
      }
    },
    goto(url){
      this.$router.push(url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  background: #fff;
}
.banner,.banner2{
  width:100%;
  height:840px;
  background:linear-gradient(90deg,rgba(23,62,113,1) 0%,rgba(0,148,175,1) 100%);
}
.banner2{
  background:url(../assets/index/banner2.png) no-repeat center;
  background-size: cover;
}
.banner>div{
  width: 85%;
  margin-left: 15%;
  position:relative;
}
.banner2>div{
  width: 65%;
  margin: 0 auto;
  color: #fff;
  text-align: center;
}
.banner2>div>h4{
  font-size: 46px;
  padding: 60px 0 28px 0;
}
.banner2>div>p{
  font-size: 20px;
  margin-bottom: 28px;
}
.banner2>div>img{
  margin: 22px 0 24px 0;
}
.title{
  color: #fff;
  font-size: 38px;
  padding: 340px 0 0 20px;
  display: inline-block;
}
.title>h3{
  font-size: 74px;
  margin-bottom: 60px;
  font-weight: bold;
}
.banner_img{
  float: right;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -50px;
  z-index: 1;
}
.banner_img>img{
  width: 85%;
}
.p7,.p5{
  position: absolute;
  z-index: 0;
}
.p5{
  top: 95px;
  left:120px;
}
.p7{
  top: 610px;
  right:40px;
}
.banner_detail{
  width: 80%;
  margin: 0 auto;
  margin-left: 18%;
  /* display: flex;
  justify-content: space-between; */
}
.banner_detail>div{
  display: inline-block;
  width: 32%;
  text-align: left;
  padding-top: 30px;
}
.banner_detail>div>span{
  margin-left: 5px;
}
.section2,.section3{
  display: table;
  width: 100%;
}
.section2>div{
  display: table-cell;
}
.section3>div{
  display: table-cell;
  
}
.img{
  width: 60%;
}
.img>img{
  width: 100%;
}
.font{
  width: 40%;
  position: relative;
  left: -6%;
  vertical-align: middle;
}
.font2{
  width: 40%;
  position: relative;
  left: 5%;
}
.img2{
  width: 34%;
  margin-left: 19%;
}
.font>div{
  background: url(../assets/index/p7bg.png) no-repeat bottom;
  background-size:  contain;
  padding-left: 20%;
}
.font2>div{
  background: url(../assets/index/p5bg.png) no-repeat bottom;
  background-size:  contain;
  padding-left: 25%;
}
.font>div>h5{
  color: #333;
  font-size: 44px;
  padding: 37px 0 27px 0;
}
.font>div>p{
  font-size: 22px;
  position: relative;
  top: 10px;
  /* padding-bottom: 26px; */
}
.font>img{
  width: 115%;
  position: absolute;
  bottom: -1px;
}
.font>div>div{
  display: inline-block;
  background: #3E8DDD;
  font-size: 22px;
  height: 20px;
  color: transparent;
}
.pins{
  display: none;
}
.section4>div{
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
.section4 h6{
  font-size: 28px;
  font-weight: 400;
  padding: 100px 0 30px 0;
}
.section4 p{
  padding-bottom: 60px;
  font-size: 20px;
}
.section4 .join{
  padding: 60px 0 20px 0;
  font-size: 18px;
}
.section4 button{
  background: #3E8DDD;
}
.table>div{
  display: table;
  width: 100%;
}
.table3>div{
  display: table;
  width: 75%;
  margin: 0 auto;
}
.table>.table2{
  width: 85%;
  margin: 0 auto;
  margin-top: 80px;
}
.table>div>div{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.table>div>div>img{
  width: 80%;
  margin: 0 auto;
}
.section5 h6{
  padding-bottom: 50px;
}
.table>div>div:first-child{
  text-align: left;
}
.table>div>div:last-child{
  text-align: right;
}
.section6{
  padding-bottom: 100px;
}
.news{
  display: inline-block;
  width: 80%;
  margin-left: 10%;
}
.news>div>img{
  width: 100%;
}
.news>div:last-child{
  background: #EEEEEE;
  height: 120px;
}
.news>div>p:first-child{
  padding: 20px 0 10px 20px;
}
.news>div>p:last-child{
  padding: 0 0 30px 20px;
}
.news>div>p{
  font-size: 18px;
}
.col3{
  width: 33.4% !important;
}
.newbar{
  position: relative;
}
.next,.prev{
  position: absolute !important;
  top: 146px !important;
  background-color: rgba(96,97,101,0.8) !important;
  background-size: 12px 16px !important;
}
.bnext,.bprev{
  position: absolute !important;
  top: 450px !important;
  background-size: 21px 37px !important;
}
.prev{
  left: 3.3% !important;
}
.next{
  right: 3.2% !important;
}
.bprev{
  left: 30px !important;
}
.bnext{
  right: 30px !important;
}
.next:focus{
  outline: none;
  border: none;
}
.bnext:focus{
  outline: none;
  border: none;
}
.prev:focus{
  outline: none;
  border: none;
}
.bprev:focus{
  outline: none;
  border: none;
}
.joinTable{
  width:100%;
  background:#fff;
  box-shadow:0px 3px 8px 0px rgba(153,153,153,0.5);
  margin-top: 42px;
  padding: 30px 0;
}
.joinTable>div{
  width:100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
.joinTable>div>div:first-child{
  text-align: left;
}
.joinTable>div>div:last-child{
  text-align: right;
}
.joinTable>div>div{
  width: 33%;
  text-align: center;
}
.joinTable>div>.jcol2{
  width: 66%;
  text-align: left;
}
.joinTable>div>.jcol3{
  width: 99%;
  text-align: left !important;
}
.joinTable>div>.jcol3>input{
  width: 101%;
}
.joinTable>div>.jcol3>textarea{
  width: 101%;
  padding: 12px;
  box-sizing: border-box;
}
.joinTable>div>div>input{
  width: 56%;
  box-sizing: border-box;
  padding: 12px;
}
.joinTable>div>.jcol2>input{
  width: 98.3%;
  box-sizing: border-box;
  padding: 12px;
}
.joinTable button{
  padding: 13px 65px;
}
textarea:focus{
  outline: none;
}
.joinTable>div>.picCode{
  position: relative;
  width: 45%;
}
.picCode>img{
  height: 42px;
  position: absolute;
  right: 10.5%;
  top: 1px;
}
.picCode>p{
  padding: 5px 40px;
  text-align: right;
  font-size: 13px;
  margin-right: 10.5%;
}
@media screen and (max-width: 1400px){
  .banner_img{
    text-align: right;
  }
}
@media screen and (max-width: 1200px){
  .p7,.p5{
    display: none;
  }
  .banner_img>img{
    width: 70%;
  }
  .banner_detail{
    width: 90%;
    margin-left: 10%;
  }
  .joinTable>div>.picCode {
    width: 50%;
  }
  .picCode>p{
    margin-right: 0;
  }
  .picCode>img{
    right: 0;
  }
}
@media screen and (max-width: 1100px){
  .font>div>div{
    display: none;
  }
}
@media screen and (max-width: 1024px){
  .banner>div{
    width: 80%;
    margin: 0 auto;
  }
  .banner_img{
    display: block;
    text-align: center;
    float: none;
    position: static;
    margin-top: 0;
    padding-top:150px; 
  }
  .title{
    padding-top: 100px;
    text-align: center;
    width: 100%;
  }
  .banner2>div>img{
    margin-bottom: 0px;
  }
  .banner_detail{
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
    display: block;
  }
  .banner_detail>div{
    text-align: center;
    height: 60px;
  }
  .banner_detail>div>span{
    display: block;
  }
  .banner_detail>div>img{
    vertical-align: middle;
  }
  .title{
    padding-left: 0;
  }
  .joinTable>div>div>input {
    width: 80%;
  }
  .joinTable>div>div>.yzm{
    width: 56%;
  }
}
@media screen and (max-width: 768px){
  .banner2>div{
    width: 80%;
  }
  .col3{
    width: 50% !important;
  }
  .prev{
    left: 5% !important;
  }
  .next{
    right: 5% !important;
  }
  .joinTable>div>div>.yzm{
    width: 40%;
  }
  .banner,.banner2{
    width:100%;
    height:900px;
  }
  .banner_detail>div {
      width: 50%;
      float: left;
      text-align: center;
      height: 80px;
      vertical-align: text-top;
      padding-top: 10px;
  }
  .banner_detail>div>img{
    height: 26px;
    margin-bottom: 2px;
  }
}
@media screen and (max-width: 415px){
  .banner_img>img{
    width: 100%;
  }
  .banner2>div>img{
    width: 90%;
  }
  .section2>div{
    display: block;
    width: 100%;
  }
  .section3>div{
    display: block;
    width: 100%;
  }
  .pin{
    display: none;
  }
  .pins{
    display: inline-block;
    position: relative;
    bottom: -1px;
    width: 100%;
  }
  .section2>.font{
    left: 0;
    width: 90%;
    margin: 0 auto;
  }
  .section3>.font{
    left: 0;
    width: 90%;
    margin: 0 auto;
  }
  .font>div{
    padding: 0 5%;
  }
  .img2{
    margin-left: 0;
  }
  .col3{
    width: 100% !important;
  }
  .joinTable button{
    padding: 12px 20px;
  }
  .joinTable>div>.picCode{
    width: 100%;
  }
  .section4>div{
    width: 90%;
  }
  .prev{
    left: 10% !important;
  }
  .next{
    right: 10% !important;
  }
  .joinTable>div>div>input {
    width: 86%;
  }
  .bprev{
    left: 10px !important;
  }
  .bnext{
    right: 10px !important;
  }
}
</style>
