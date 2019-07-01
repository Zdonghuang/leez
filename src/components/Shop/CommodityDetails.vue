<template>
<div class="bigbox">
  <div class="showinfo">
    <div>
      <img src="../../assets/shop/P710@2x.png" width="270">
    </div>
    <div>
      <p>Leez P710</p>
      <div>
        <img src="../../assets/shop/lol_2.png" width="18">
        <span>申请试用活动</span>
        <span>
          <span>距离结束</span>
          <i>1</i>：
          <i>20</i>：
          <i>15</i>：
          <i>08</i>
        </span>
      </div>
      <div>
        <span>价格：<span>500.00</span></span>
      </div>
      <div>
        <span>数量：<span>50份</span></span>
        <span>已有<span>500</span> 人申请<i>↑</i></span>
      </div>
      <div>活动已开始</div>
      <div>
        <a href="javascript:">申请试用</a>
      </div>
    </div>
    <div class="list" >
      <ul @click="setactive($event)" class="lists">
        <li class="active">试用流程</li>
        <li>申请试用</li>
        <li>获取名额</li>
        <li>前往个人中心递交F码</li>
        <li>试用产品</li>
        <li>上传报告</li>
        <li>回收</li>
        <li>产品信息</li>
        <li>试用规则</li>
        <li>中选名单</li>
        <li>试用报告</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    setactive(e) {
      if(e.target.nodeName === 'LI'){
        var list = document.getElementsByClassName('lists')[0].children;
        for(var i = 0; i<list.length;i++){
          list[i].className = '';
        }
        e.target.className = 'active';
      }
    }
  }
}
</script>
<style scoped>
  .bigbox{
    background-color: #fff;
  }
  .showinfo{
    margin: 0 auto;
    padding: 20px;
    margin-left: 19.5%;
    box-sizing: border-box;
  }
  .showinfo div:nth-child(1){
    width:310px;
    height:310px;
    background:rgba(238,238,238,1);
    display: inline-block;
    margin-right: 30px;
  }
  .showinfo div:nth-child(1) img{
    margin: 20px;
  }
  .showinfo div:nth-child(2){
    vertical-align: top;
    display: inline-block;
  }
  .showinfo div:nth-child(2) p{
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 500;
    color:rgba(51,51,51,1);
  }
  .showinfo div:nth-child(2) div:nth-child(2){
    width: 480px;
    height: 28px;
    color: #fff;
    font-size: 14px;
    line-height: 28px;
    padding: 0 10px;
    background: url('../../assets/shop/bg@2x.png') no-repeat;
  }
  .showinfo div:nth-child(2) div span:nth-child(2){
    margin-left: 6px;
  }
  .showinfo div:nth-child(2) div img{
    vertical-align: middle;
  }
  .showinfo div:nth-child(2) div span:nth-child(3){
    float: right;
  }
  .showinfo div:nth-child(2) div span:nth-child(3) i{
    font-style: normal;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: rgb(49, 48, 48);
    line-height: 20px;
    border-radius: 2px;
    text-align: center;
  }
  .showinfo div:nth-child(2) div span:nth-child(3) i+i{
    margin-left: -10px;
  }
  .showinfo div:nth-child(2) div:nth-child(3),.showinfo div:nth-child(2) div:nth-child(4)
  ,.showinfo div:nth-child(2) div:nth-child(5){
    margin-top: 16px;
  }
  .showinfo div:nth-child(2) div:nth-child(3) span{
    color: #666;
  }
  .showinfo div:nth-child(2) div:nth-child(3) span span{
    color: #E2231A;
    font-weight: 100;
    font-size: 18px;
  }
  .showinfo div:nth-child(2) div:nth-child(4) span:nth-child(1){
    color: #666;
  }
  .showinfo div:nth-child(2) div:nth-child(4) span:nth-child(1) span{
    font-size: 18px;
  }
  .showinfo div:nth-child(2) div:nth-child(4) span:nth-child(2){
    margin-left: 50px;
    position: relative;
  }
  .showinfo div:nth-child(2) div:nth-child(4) span:nth-child(2) span{
    color: #E2231A;
    font-size: 18px;
  }
  .showinfo div:nth-child(2) div:nth-child(4) span:nth-child(2) i {
    color: #E2231A;
    position: absolute;
    left: 63px;
    font-size: 14px;
  }
  .showinfo div:nth-child(2) div:nth-child(5){
    color: #6ABF4A;
    font-size: 14px;
  }
  .showinfo div:nth-child(2) div:nth-child(6){
    margin-top: 38px;
  }
  .showinfo div:nth-child(2) div:nth-child(6) a{
    display: inline-block;
    background-color: #3E8DDD;
    width: 130px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
  .showinfo .list{
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 200px;
  }
  .showinfo .list ul li{
    float: left;
    background:rgb(228, 226, 226);
    margin: 0;
    padding: 0 6px;
    cursor: pointer;
    border-bottom:1px solid #3E8DDD;
  }
  .showinfo .list ul li.active{
    background-color: #3E8DDD;
  }
  @media screen and (max-width: 640px){
    .showinfo{
      margin-left: 5%;
    }
    .showinfo div:nth-child(2) div:nth-child(2){
      width: 310px;
    }
    .showinfo div:nth-child(1){
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 1024px){
    .showinfo{
      margin-left: 10%;
    }
  }
  @media screen and (max-width: 950px){
    .showinfo{
      margin-left: 5%;
    }
  }
  @media screen and (max-width: 900px){
    .showinfo .list ul li{
      display: block;
      float: none;
      width: 134px;
    }
    .showinfo .list{
      margin: 50px 0 280px 0;
    }
  }
  @media screen and (max-width: 360px){
    .showinfo div:nth-child(1){
      margin-right: 0;
    }
    .showinfo{
      margin-left: 2%;
      padding: 8px;
    }
    .showinfo div:nth-child(2) div:nth-child(2){
      width: 310px;
    }
  }
  @media screen and (max-width: 320px){
    .showinfo{
      margin-left: 0;
      padding: 2px;
    }
    .showinfo div:nth-child(1){
      margin-right: 0;
    }
    .showinfo div:nth-child(2) div:nth-child(2){
      width: 310px;
    }
  }
</style>