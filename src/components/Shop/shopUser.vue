<template>
    <div class="user">
        <div class="clearfloat">
            <div class="userLeft">
                <img src="../../assets/user/avater.png" alt="">
                <div v-for="(item,index) in userList" :key="index" :class="userShow==index?'active':''" @click="showUser(index)">{{item}}</div>
            </div>
            <div class="userRight">
                <div class="avater clearfloat">
                    <div><img src="../../assets/user/avater2.png" alt=""></div>
                    <div>
                        <p>Name</p>
                        <button>上传头像</button>
                    </div>
                </div>
                <div class="uitem">
                    <div>
                        <div>
                            <img src="../../assets/user/hpwd.png" alt="">
                            <span>登录密码</span>
                        </div>
                        <div><span>修改</span></div>
                    </div>
                    <p>互联网账号存在被盗风险,建议您定期更改密码以保护账户安全。</p>
                </div>
                <div class="uitem">
                    <div>
                        <div>
                            <img src="../../assets/user/nopass.png" alt="">
                            <span>邮箱验证</span>
                        </div>
                        <div><span>修改</span></div>
                    </div>
                    <p>未验证邮箱，请访问你注册时填写的邮箱，查看激活邮件，并验证。</p>
                </div>
                <div class="uitem">
                    <div>
                        <div>
                            <img src="../../assets/user/nopass.png" alt="">
                            <span>手机验证</span>
                        </div>
                        <div><span>修改</span></div>
                    </div>
                    <p>未验证手机，请输入你的手机号，并验证。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userList:['我的账户','我的试用','试用等级'],
            userShow:0
        }
    },
    methods:{
        showUser(n){
            this.userShow=n;
        }
    }
    
}
</script>

<style scoped>
    .user{
        width: 100%;
        background: #fff;
    }
    .user>div{
        width: 60%;
        margin: 0 auto;
        padding: 30px 0 200px 0;
    }
    .userLeft{
        padding: 30px 0 42px 0;
        width: 19%;
        text-align: center;
        box-shadow:0px 2px 6px 0px rgba(153,153,153,0.3);
        float: left;
    }
    .userLeft>img{
        width: 75%;
    }
    .userLeft>div{
        width: 100%;
        text-align: center;
        padding: 14px 0;
    }
    .userLeft>div.active{
        background: #3E8DDD;
        color: #fff;
    }
    .userLeft>div:nth-child(2){
        margin-top: 30px;
    }
    .userLeft>div:hover{
        background: #3E8DDD;
        color: #fff;
    }
    .userRight{
        width: 76%;
        margin-left: 5%;
        box-shadow:0px 2px 6px 0px rgba(153,153,153,0.3);
        padding: 20px 30px 36px 40px;
        float: left;
    }
    .avater>div{
        float: left;
    }
    .avater>div:last-child{
        margin-left: 10px;
    }
    .avater button{
        background: #3E8DDD;
        padding: 8px 12px;
        margin-top:8px; 
    }
    .uitem{
        margin-top: 62px;
    }
    .uitem>div{
        display: flex;
        justify-content: space-between;
    }
    .uitem>p{
        margin-top: 10px;
    }
    .uitem>div>div:last-child{
        color: #3E8DDD;
        cursor: pointer;
    }
    .uitem img{
        margin-right: 10px;
    }
    @media screen and (max-width: 1024px){
        /* .user>div{
            width: 80%;
        } */
    }
    @media screen and (max-width: 415px){
        .user>div{
            width: 80%;
        }
        .userLeft{
            display: none;
        }
        .userRight{
            width: 100%;
            margin: 0;
        }
    }
</style>

