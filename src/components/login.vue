<template>
  <div class="register clearfloat">
      <div class="register_box">
        <h1>{{$t("login.title")}}</h1>
        <div class="col">
          <input type="text" placeholder="Email or User name" v-model="email" @keyup.enter="login">
        </div>
        <div class="col">
          <input type="password" placeholder="Password" v-model="pwd" @keyup.enter="login">
        </div>
        <div class="policy">
          <div>
            <input type="checkbox" v-model="remember">
            <span>{{$t("login.remember")}}</span>
          </div>
          <div>
            <router-link to='' class="forget">{{$t("login.forget")}}</router-link>
          </div>
        </div>
        <div class="col">
          <button @click="login">{{$t("login.login")}}</button>
          <div class="error">
            {{errorTip}}
          </div>
        </div>
        <p>
          <router-link to="/register">{{$t("login.not")}}</router-link>
        </p>
        <button @click="goReg">{{$t("login.toreg")}}</button>
        <div class="acount">
          <p>{{$t("login.face")}}</p>
          <button @click="facebook">
            <img src="../assets/user/facebook.png" alt="">
            <span>Facebook</span>
          </button>
          <button>
            <img src="../assets/user/google.png" alt="">
            <span>Google</span>
          </button>
        </div>
      </div>
      <div class="info">
        <div class="clearfloat">
          <h1>{{$t("loginInfo.title")}}</h1>
          <router-link to='/register'>
            {{$t("loginInfo.sign2")}}
            <img src="../assets/user/right.png" alt="" class="ricon">
          </router-link>
          <p>{{$t("loginInfo.content")}}</p>
          <div class="three clearfloat">
            <div>
              <img src="../assets/user/login1.png" alt="">
            </div>
            <div>
              <h3>{{$t("loginInfo.one")}}</h3>
              <p>{{$t("loginInfo.onec")}}</p>
            </div>
          </div>
          <div class="three clearfloat">
            <div>
              <img src="../assets/user/login2.png" alt="">
            </div>
            <div>
              <h3>{{$t("loginInfo.two")}}</h3>
              <p>{{$t("loginInfo.twoc")}}</p>
            </div>
          </div>
          <div class="three clearfloat">
            <div>
              <img src="../assets/user/login3.png" alt="">
            </div>
            <div>
              <h3>{{$t("loginInfo.three")}}</h3>
              <p>{{$t("loginInfo.threec")}}</p>
            </div>
          </div>
        </div>
      </div> 
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email:"",
      pwd:"",
      errorTip:"",
      remember:false
    }
  },
  methods:{
    login(){
      let obj = JSON.stringify({
        password:this.pwd,
        username:this.email
      });
      if((this.regEmail(this.email)||this.regUser(this.email))&&this.regPwd(this.pwd)){
        this.$api.post("users/login", obj).then(res => {
          // console.log(res);
          if(res.status==200){
            if(res.data.status=='ok'){
              this.$store.commit("changeLoginState", true);
              // console.log("Bearer "+res.data.result.accessToken);
              this.$store.commit("setToken","Bearer "+res.data.result.accessToken);
              if(this.remember){
                sessionStorage.removeItem('token');
                localStorage.setItem('token',"Bearer "+res.data.result.accessToken);
              }else{
                localStorage.removeItem('token');
                sessionStorage.setItem('token',"Bearer "+res.data.result.accessToken);
              }
              //设置Session
              if(res.data.result.forumCookies){
                  let cookies = res.data.result.forumCookies.split(',');
                  for(let j = 0 ; j < cookies.length ;j++){
                    let cookie = cookies[j].split('=');
                    console.log(cookie[0],cookie[1]);
                    this.$utils.setCookie(cookie[0],cookie[1]); //设置Session
                    // this.writeCookie(
                    //   cookie[0],
                    //   cookie[1],
                    //   90,
                    //   this.$domainName
                    // );
                  }
                }
              // this.setCookie('session',res.data.result.forumCookies,expireDays); //设置Session
              // window.location.href ='http://leez.lenovo.com/forum/forum.php'; //  跳转链接
              // window.open('http://leez.lenovo.com/forum/forum.php', '_blank');
              this.userinfo();
            }else{
              switch(res.data.result){
                case 10006:
                  this.errorTip=this.$t('loginTip.error1');
                  break;
                case 10007:
                  this.errorTip=this.$t('loginTip.error2');
                  break;
                case 10010:
                  this.errorTip=this.$t('loginTip.error3');
                  break;
                case 10011:
                  this.errorTip=this.$t('loginTip.error4');
                  break;
                case 10012:
                  this.errorTip=this.$t('loginTip.error5');
                  break;
                case 10013:
                  this.errorTip=this.$t('loginTip.error6');
                  break;
                case 10018:
                  this.errorTip=this.$t('loginTip.error7');
                  break;
                case 10019:
                  this.errorTip=this.$t('loginTip.error8');
                  break;
                case 10020:
                  this.errorTip=this.$t('loginTip.error9');
                  break;
                case 10023:
                  this.errorTip=this.$t('loginTip.error10');
                  break;
                case 10022:
                  this.errorTip=this.$t('loginTip.error11');
                  break;
                default:
                  this.errorTip = this.$t('loginTip.error12');
              }
              this.errorNone();
            }
          }else{
            this.errorTip = this.$t('loginTip.try');
            this.errorNone();
          }
        }).catch(err => {
            console.log(err);
        });
      }else if(!(this.regEmail(this.email)||this.regUser(this.email))){
        this.errorTip=this.$t('loginTip.email');
        this.errorNone();
      }else if(!this.regPwd(this.pwd)){
        this.errorTip=this.$t('loginTip.pwd');
        this.errorNone();
      }else{
        this.errorTip=this.$t('loginTip.info');
        this.errorNone();
      }
    },
    userinfo(){
      this.$api.get("users/userinfo").then(res=>{
        if(res.status==200){
          if(res.data.status=='ok'){
            if(res.data.result.emailValid!=1){
              let emailobj = {
                email: res.data.result.email,
                id:res.data.result.id
              };
              localStorage.setItem('userid',res.data.result.id);
              localStorage.setItem('email',res.data.result.email);
              this.$api.post('users/sendValidEmail',emailobj).then((res)=>{
                if(res.status==200){
                  if(res.data.status=='ok'){
                    this.$router.push("/checkEmail");
                  }else{

                  }
                }else{
                    this.errorTip = this.$t('loginTip.try');
                    this.errorNone();
                  }
              }).catch(err => {
                  console.log(err);
              });
              }else{
                this.$router.push("/index");
              }
          }else{

          }
        }else{
            this.errorTip = this.$t('loginTip.try');
            this.errorNone();
        }
        }).catch(err => {
            console.log(err);
        });
    },
    errorNone(){
      setTimeout(()=>{
        this.errorTip='';
      },5000)
    },
    goReg(){
      this.$router.push('/register');
    },
    facebook(){
      window.location.href = "https://api.ileapcloud.com/leez/v1/facebook/code"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  width: 100%;
  /* min-width: 1186px; */
}
.register>div{
  float: right;
}
.info{
  width: 50%;
  /* min-width: 593px; */
  background: url(../assets/user/bg.png) no-repeat center;
  text-align: left;
  height: 900px;
  min-height: 100vh;
}
.info>div{
  float: right;
  width: 50%;
  margin-right: 25%;
}
.col{
  margin: 20px 0;
  width: 100%;
}
.col>input{
  width: 70%;
  background-color: #1A1A1A;
  border: none;
  padding: 12px 16px;
  color: #fff;
}
.register_box{
  width: 50%;
  /* min-width: 593px; */
  background-color: #252525;
  min-height: 100vh;
  text-align: left;
  padding-left: 5%;
  height: 900px;
}
.register_box>h1{
  font-size:28px;
  font-family:Gotham-Bold;
  font-weight:bold;
  margin: 77px 0 35px 0;
}
.register_box>.col:not(:first-child){
  margin-top: 28px;
}
.error{
  height: 30px;
  color: red;
}
.register_box>.col:last-child{
  margin: 0;
}
.info h1{
  font-size:26px;
  margin: 106px 0 72px 0;
}
.info a{
  color: #E12726;
  font-size: 26px;
}
.ricon{
  width: 12px;
}
.info p{
  margin-top: 24px;
}
.three{
  margin-top:60px;
}
.three>div{
  float: left;
}
.three>div:last-child{
  width: 180px;
  margin-left: 16px;
}
.three h3{
  margin: 0 0 12px 0;
}
.three>div:last-child>p{
  margin-top: 0px;
}
.policy{
  font-size: 13px;
  width: 74%;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:space-between;
}
.policy>div>input[type="checkbox"]{
  margin: 3px 5px 0 0;
  position: relative;
  top: 2px;
}
.forget{
  position: relative;
  top: 2px;
}
button{
  margin: 42px 0 44px;
}
button:hover{
  background-color: #E54D4D;
}
.col>button{
  margin-bottom: 12px;
  width: 28%;
}
.register_box>p{
  width: 78%;
  text-align: center;
  font-size: 13px;
}
.register_box>button{
  background-color: transparent;
  width: 75%;
  border: 1px solid #fff;
}
.register_box>button:hover{
  background-color: #fff;
  width: 75%;
  border: 1px solid #fff;
  color: #333;
}
.acount{
  text-align: center;
  width: 75%;
  font-size: 13px;
  padding: 58px 0 10px;
  border-top: 1px solid #424242;
  text-align: left;
}
.acount>p{
  width: 60%;
}
.acount>button{
  width: 35%;
  margin: 36px 0 0 0;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px 40px 10px 22px;
}
.acount>button>img{
  margin-right: 10%;
}
.acount>button:last-child{
  margin-left: 18%;
}
.policy>div{
  display: inline-block;
}
@media screen and (max-width:1090px){
  .register>div{
    float: none;
    width: 100%; 
    display: block;
  }
  .register_box>h1{
    margin-top: 0px;
    padding-top: 60px;
  }
  .register_box,.col{
    text-align: center;
  }
  .register_box>p{
    width:100%;
  }
  .info{
    background-size: cover;
  }
  .copy{
    margin: 0 auto;
  }
  .policy{
    text-align: center;
    width: 73%;
    margin: 0 auto;
  }
  .acount{
    margin: 0 auto;
  }
}
@media screen and (max-width:1400px){   
    .col>button{
      padding: 10px 0 10px;
    }
}
@media screen and (max-width:620px){
  .acount>p[data-v-10d9df09] {
    width: 80%;
  }
  .acount>button{
    width: 80%;
    display: block;
  }
  .acount>button:last-child{
    margin-left: 0;
  }
}
@media screen and (max-width:550px){
  .register_box,.info{
    height: 1100px;
  }
  .info>div{
    width: 80%;
    margin: 10%;
  }
  .info h1{
    font-size:26px;
    margin: 62px 0 72px 0;
  }
  .col>button{
    width: 50%;
  }
  .register_box>button{
    padding: 10px 10px;
  }
}
@media screen and (max-width:330px){
  .register_box,.info{
    height: 1100px;
  }
  .three>div:last-child{
    margin-left: 5px;
  }
  .policy{
    display: block;
  }
  .policy>div{
    display: block;
    width: 100%;
  }
  .policy>div:last-child{
    margin-top: 16px;
  }
  .acount>button{
    width: 80%;
  }
}
</style>
