<template>
  <div class="register clearfloat">
    <div class="register_box">
        <h1>{{$t("login.title")}}</h1>
        <div class="col">
          <input type="text" placeholder="Email" v-model="email" @keyup.enter="register">
        </div>
        <div class="col">
          <input type="text" placeholder="User name" v-model="nickName" @keyup.enter="register">
        </div>
        <div class="col">
          <input type="password" placeholder="Password" v-model="pwd" @keyup.enter="register">
        </div>
        <div class="col">
          <input type="password" placeholder="Confirm password" v-model="confirm" @keyup.enter="register">
        </div>
        <div class="policy">
          <div>
            <input type="checkbox" v-model="check">
            <span>{{$t("login.accept")}}</span>
          </div>
        </div>
        <div class="col">
          <button @click="register">{{$t("login.loginnow")}}</button>
          <div class="error">
            {{errorTip}}
          </div>
        </div>
        <p>
          <router-link to="/login">{{$t("login.already")}}</router-link>
        </p>
        <button @click="goLogin">{{$t("login.login")}}</button>
        <div class="copy">
          @2017-2018 Lenovo Capital & Incubator Group All Rights reserved.
        </div>
      </div>
      <div class="info">
        <div class="clearfloat">
          <h1>{{$t("loginInfo.title")}}</h1>
          <router-link to='/login'>
            {{$t("loginInfo.sign")}}
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
  name: 'register',
  data () {
    return {
      email:"",
      nickName:"",
      pwd:"",
      confirm:"",
      errorTip:"",
      check:false
    }
  },
  mounted(){
  },
  methods:{
    register(){
      let obj = JSON.stringify({
        username: this.nickName,
        password:this.pwd,
        email:this.email
      });
      if(this.regEmail(this.email)&&this.regUser(this.nickName)&&this.regPwd(this.pwd)&&this.pwd==this.confirm&&this.check){
        this.$api.post("users/register", obj).then(res => {
          if(res.status==200){
            if(res.data.status=='ok'){
              this.$router.push('/login');
            }else{
              switch(res.data.result){
                case 10001:
                  this.errorTip=this.$t('registerTip.error1')
                  break;
                case 10003:
                  this.errorTip=this.$t('registerTip.error2')
                  break;
                case 10004:
                  this.errorTip=this.$t('registerTip.error3')
                  break;
                case 10018:
                  this.errorTip=this.$t('registerTip.error4')
                  break;
                default:
                  this.errorTip = this.$t('registerTip.error5');
              }
              this.errorNone();
            }
          }else{
            this.errorTip = this.$t('loginTip.try');
            this.errorNone();
          }
        }).catch(err => {
            // this.errorTip = err;
            console.log(err);
            // this.errorNone();
        });
      }else if(!this.regEmail(this.email)){
        this.errorTip=this.$t('loginTip.email');
        this.errorNone();
      }else if(!this.regUser(this.nickName)){
        this.errorTip=this.$t('registerTip.username');
        this.errorNone();
      }else if(!this.regPwd(this.pwd)){
        this.errorTip=this.$t('loginTip.pwd');
        this.errorNone();
      }else if(this.pwd!=this.confirm){
        this.errorTip=this.$t('registerTip.two');
        this.errorNone();
      }else if(!this.check){
        this.errorTip=this.$t('registerTip.three');
        this.errorNone();
      }else{
        this.errorTip=this.$t('loginTip.info');
        this.errorNone();
      }
    },
    errorNone(){
      setTimeout(()=>{
        this.errorTip='';
      },5000)
    },
    goLogin(){
      this.$router.push('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  width: 100%;
  /* min-width: 1186px; */
  /* padding-top: 44px; */
}
.register>div{
  display: inline-block;
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
  /* width: 410px; */
  width: 50%; 
  margin-right: 25%;
}
.col{
  margin: 20px 0;
  width: 100%;
}
.col>input{
  /* width: 498px; */
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
  /* padding-left: 62px; */
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
  display: inline-block;
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
  margin: 20px 0;
  width: 100%;
  text-align: left;
}
.policy>div{
  width: 70%;
  text-align: left;
  font-size: 13px;
}
.policy>div>input[type="checkbox"]{
  margin: 3px 5px 0 0;
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
  width: 30%;
  padding: 10px 35px;
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
.copy{
  text-align: center;
  width:75%;
  font-size: 13px;
  padding: 35px 0;
  border-top: 1px solid #424242;
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
  .policy>div{
    width: 73%;
    margin: 0 auto;
  }
}
@media screen and (max-width:550px){
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
}
@media screen and (max-width:330px){
  .register_box,.info{
    height: 1100px;
  }
  .three>div:last-child{
    margin-left: 5px;
  }
}
</style>
