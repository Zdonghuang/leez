<template>
  <div>
    <div class="content">
      <swiper :options="swiperindex">
        <swiper-slide>
          <div class="banner01">
            <img src="../../assets/shop/banner_2.png" width="100%">
          </div>
          <div class="banner1">
            <img src="../../assets/shop/benner1_1024.png" width="100%">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="banner02">
            <img src="../../assets/shop/Benner_bg@2x.png" width="100%">
            <img src="../../assets/shop/banner02@2x.png" width="20%" class="lgbanner">
            <img src="../../assets/shop/shadow_2.png" width="36%" class="shadow">
            <span class="text">
              <span>致</span>
              <span>追求极致的您</span>
              <span>为追求极致而生</span>
              <p>To the geeks of you</p>
              <p>人工智能物联网首选!</p>
              <a href="javascript:"  @click="toinfo()">申请试用</a>
            </span>
          </div>
          <div class="banner2">
            <img src="../../assets/shop/benner2_1024.png" width="100%">
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="hot">
      <div class="shiy">热门试用</div>
      <div>
        <ul>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
          <li @click="toinfo()">
            <img src="../../assets/shop/banzi_2.png" width="100">
            <p>Leez P710</p>
            <p>30份 5000申请</p>
            <p>价格：500</p>
            <p>剩余时间1天2小时</p>
          </li>
        </ul>
        <div>
          <div class="jiang">
            <img src="../../assets/shop/jiang_2.png" width="100">
            <span>中奖名单</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>订单编号</th>
                <th>用户名</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
              <tr>
                <td>20340****69</td>
                <td>20340****69</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperindex: {//swiper3
        // virtual: true,
        initialSlide: 0,
        slidesPerView: 'auto', // 可见数 auto
        slidesPerGroup : 1,
        loop:true,
        autoplay: true,
        speed: 1000,
        pagination :{
          el: '.swiper-pagination',
          clickable :true,
        }
      },
      swipernews: {//swiper3
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
    }
  },
  mounted() {},
  methods:{
    toinfo(){
      this.$router.push('shop/showinfo');
    }
  }
}
</script>
<style  scoped>
.content{
  background-color: rgb(235, 235, 235);
}
.swiper-container{
  width: 100%;
}
.lgbanner{
  position:absolute;
  top: 18%;
  left: 24%;
}
.banner1{
  display: none;
}
.banner2{
  display: none;
}
.shadow{
  position: absolute;
  top: 66%;
  left: 9%;
}
.text{
  position: absolute;
  top: 19%;
  left: 55%;
  color: rgb(48, 47, 47);
}
.text span:nth-child(1){
  font-family: 'FZLTDHJW--GB1-0';
  font-size: 100px;
  font-weight: 900;
}
.text span:nth-child(2){
  font-family: 'FZLTDHJW--GB1-0';
  font-size: 38px;
  font-weight: 900;
}
.text span:nth-child(3){
  padding: 0 6px;
  position: absolute;
  font-size: 18px;
  top: 40px;
  left: 110px;
  width: auto;
  color: #fff;
  background-color: rgb(241, 113, 27);
}
.text p:nth-child(4) {
  color:#666666;
  font-style: Italic;
  font-size: 24px;
}
.text p:nth-child(5){
  font-size: 22px;
  font-weight: 600;
  color: rgb(73, 72, 72);
}
.text a{
  display: inline-block;
  background-color: #3E8DDD;
  color: #fff;
  text-align: center;
  padding: 6px 20px;
  font-weight: 600;
  margin-top: 20px;
  font-size: 18px;
}
.hot{
  background-color: #fff;
  padding: 20px 0;
}
.hot div.shiy{
  width: 70%;
  text-align: left;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 200;
}
.hot>div:nth-child(2){
  width: 100%;
  padding: 0 15%;
}
.hot div:nth-child(2) ul {
  max-width: 70%;
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: -10px;
}
.hot div:nth-child(2) ul li{
  float: left;
  background-color: #eeeeee;
  margin: 0;
  margin-top: 10px;
  margin-left: 10px;
  padding: 28px 44px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 31.8%;
  min-width: 225px;
}
.hot div:nth-child(2) ul li p{
  color: #333333;
  text-align: center;
  font-size: 21px;
  margin-top: 18px;
}
.hot div:nth-child(2) ul li p:nth-child(3){
  font-size: 18px;
  color: #666;
}
.hot div:nth-child(2) ul li p:nth-child(4){
  font-size: 18px;
}
.hot div:nth-child(2) ul li p:nth-child(5){
  font-size: 14px;
  color: #999;
}
.hot>div:nth-child(2)>div{
  display: inline-block;
  width: 20%;
  margin-top: 10px;
  margin-left: 10px;
  vertical-align: top;
  background-color: #FFDE01;
  padding: 12px;
}
.jiang{
  position: relative;
  padding: 0 !important;
  margin: 0 !important;
}
.jiang span{
  color: #fff;
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 14px;
}
.hot div:nth-child(2) div table {
  width: 100%;
  margin-top: 10px;
}
.hot div:nth-child(2) div table tr{
  line-height: 26px;
  font-size: 16px;
}

@media screen and (max-width: 1345px){
  .hot>div:nth-child(2) ul{
    max-width: 100%;
    margin: 0 auto;
  }
  .hot>div:nth-child(2)>div{
    width: 98%;
  }
}
@media screen and (max-width: 1024px){
  .banner01{
    display: none;
  }
  .banner02{
    display: none;
  }
  .banner1{
    display: block;
  }
  .banner2{
    display: block;
  }
}
@media screen and (max-width: 945px){
  .hot>div:nth-child(2)>div{
    width: 65%;
    min-width: 380px;
  }
}
@media screen and (max-width: 572px){
  .hot>div:nth-child(2)>div{
    width: 225px;
    min-width: 225px;
  }
}
</style>
