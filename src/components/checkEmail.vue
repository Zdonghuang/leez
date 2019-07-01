<template>
  <div class="check">
    <div>
      <!-- <h3>验证邮箱</h3>
      <p class="content" v-if="show">请前往您的电子邮箱“{{email}}”进行验证。如未收到邮件,请点击<a style="color:blue" href="javascript:" @click="sendemail">发送电子邮件</a>再次发送。</p>
      <p class="conten" v-else>
        <i class="el-icon-success"></i>
        邮箱验证已完成，谢谢您的配合！
        <span class="time">{{num}}秒后跳转到论坛</span>
      </p> -->
      <h1>{{$t("checkEmail.title")}}</h1>
      <p>{{$t("checkEmail.p1")}}</p>
      <h4>{{$t("checkEmail.p2")}}</h4>
      <h5>{{$t("checkEmail.p3")}} <span>{{$t("checkEmail.p4")}} <img src="../assets/user/ticon.png" alt="" @click="showbox" v-if="tip"><img src="../assets/user/bicon.png" alt="" @click="showbox" v-if="!tip"></span></h5>
      <div class="box" v-if="tip">
        <h6>{{$t("checkEmail.sub1")}}</h6>
        <p>{{$t("checkEmail.sub2")}}</p>
        <h6>{{$t("checkEmail.sub3")}}</h6>
        <p>{{$t("checkEmail.sub4")}}</p>
        <h6>{{$t("checkEmail.sub5")}}</h6>
        <p>{{$t("checkEmail.sub6")}}</p>
        <h5>
          <button  @click="sendemail">{{$t("checkEmail.button")}}</button>
          <span style="color:red">{{errorText}}</span>
        </h5>
      </div>
      <h5 class="checkIt">{{$t("checkEmail.p5")}}</h5>
      <button v-if='!checked' style="background-color:#999">{{$t("checkEmail.not")}}</button>
      <button v-if='checked' @click="go">{{$t("checkEmail.done")}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkEmail',
  data () {
    return {
      email:localStorage.getItem('email'),
      show:true,
      num:5,
      tip:false,
      next:true,
      checked:false,
      errorText:'',
      next:false
    }
  },
  created(){
      if(this.$utils.getUrlKey("key")){
        sessionStorage.setItem('emailKey',this.$utils.getUrlKey("key"));
      }
      if(sessionStorage.getItem('token')||localStorage.getItem('token')){
        this.checkemail();
      }else{
        this.$router.push('/login');
      }
    },
  mounted(){
    this.getEmail();
    this.nextClick();
  },
  methods:{
    nextClick(){
      setTimeout(()=>{
        this.next=true;
      },10000)
    },
    error(res){
      switch (res) {
        case 10018:
          this.errorText=this.$t('emailTip.error1');
          break;
        case 50004:
          this.errorText=this.$t('emailTip.error2');
          break;
        case 50005:
          this.errorText=this.$t('emailTip.error3');
          break;
        case 50006:
          this.errorText=this.$t('emailTip.error4');
          break;
        case 50007:
          this.errorText=this.$t('emailTip.error5');
          break;
        default:
          this.errorText=this.$t('emailTip.error6');
      }
    },
    getEmail(){
      if(sessionStorage.getItem('token')||localStorage.getItem('token')){
        this.$api.get("users/userinfo").then((res)=>{
          if(res.data.result.emailValid==1){
             this.checked=true;
          }
        });
      }
    },
    sendemail(){
      if(this.next){
        let obj = {
          id : localStorage.getItem('userid'),
          email : localStorage.getItem('email')
        };
        if(obj.email){
          this.$api.post('users/sendValidEmail',obj).then((res)=>{
            if(res.data.status=='ok'){
              this.errorText=this.$t('emailTip.error8');
              this.next=false;
              this.nextClick();
            }else{
              this.error(res.data.result);
            }
          });
        }
      }else{
          this.errorText=this.$t('emailTip.error7');
      } 
    },
    checkemail(){
      if(sessionStorage.getItem('emailKey')){
        this.$api.put('users/checkEmail/'+sessionStorage.getItem('emailKey')).then((res)=>{
          sessionStorage.removeItem('emailKey');
          if(res.data.status === 'ok'){
            this.checked=true;
          }else{
            this.error(res.data.result);
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    showbox(){
      this.tip?this.tip=false:this.tip=true;
    },
    go(){
      this.$router.push('/index');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .check{
    width: 100%;
    background-color: #252525;
    min-height: 100vh;
  }
  .check>div{
    /* width: 660px; */
    width: 37.5%;
    margin: 0 auto;
  }
  .check h1{
    font-size:26px;
    font-family:Gotham-Book;
    font-weight:normal;
    margin:0;
    padding: 98px 0 42px;
  }
  .check h4{
    padding: 42px 0 28px;
  }
  .check h5{
    font-size: 18px;
    font-weight: normal;
  }
  .check h5.checkIt{
    padding: 70px 0 40px 0;
  }
  .check h5>span{
    display: block;
    color: #0099E0;
  }
  .box{
    padding: 30px 30px 70px 35px;
    background-color: #29292E;
  }
  .box h6{
    font-size:17px;
    font-weight:normal;
    margin:0;
  }
  .box p{
    font-size:13px;
    margin:16px 0 20px;
  }
  .check button{
    width: 100%;
    background-color: #0099E0;
    margin-bottom: 80px;
  }
@media screen and (max-width:768px){
  .check>div{
    width: 80%;
    margin: 0 auto;
  }
  .check button{
    padding: 10px 0px;
  }
}
</style>
