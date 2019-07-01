<template>
  <div class="check">
    <div>
      正在登录Facebook……
    </div>
  </div>
</template>

<script>
export default {
  name: 'facebookLogin',
  data () {
    return {
      
    }
  },
  created(){
      
  },
  mounted(){
    if(this.$utils.getUrlKey("code")){
      this.$api.get("facebook/login?code="+this.$utils.getUrlKey("code")).then(res => {
        // console.log(res);
        if(res.status==200){
          if(res.data.status=='ok'){
            this.$store.commit("changeLoginState", true);
            this.$store.commit("setToken", "Bearer "+res.data.result.accessToken);
            sessionStorage.removeItem('token');
            localStorage.setItem('token',"Bearer "+res.data.result.accessToken);
            this.$router.push("/index");
          }else{
            // this.errors=true;
            // switch(res.data.result){
            //   case 50011:
            //     this.error="Mailbox cannot be empty"
            //     break;
            //   case 50012:
            //     this.error="Illegal mailbox format"
            //     break;
            //   case 50013:
            //     this.error="Mailbox has been subscribed"
            //     break;
            //   default:
            //     this.errorTip = "Failure to submit";
            // }
            // this.errorNone();
          }
        }else{
          console.log('please try again');
        }
      }).catch(err => {
          console.log(err);
      });
    }else{

    }
  },
  methods:{
    
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
    color: #fff;
    width: 37.5%;
    margin: 0 auto;
    padding-top: 200px;
    text-align: center;
    font-size: 20px;
  } 
@media screen and (max-width:768px){
  .check>div{
    width: 80%;
    margin: 0 auto;
  }
}
</style>
