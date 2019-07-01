<template>
    <div class="home">
        <div class="news_banner">
            <div class="banner_content">
                <h2>新闻资讯</h2>
                <p>通过新闻资讯，了解更多不一样的Leez</p>
            </div>
        </div>
        <div class="news_content">
            <div class="content_left">
                <div class="title">
                    <router-link to="">＜ 返回新闻咨询列表</router-link>
                </div>
                <h2>高性能易扩展极客神器联想Leez P710亮相MWC2019</h2>
                <p class="time">2019-01-09 11:38</p>
                <p class="content">【CNMO新闻】一年一度的世界移动通信大会（MWC）于2019年2月25日如期召开，作为参展厂商之一的联想此次
                    也带来诸多方案及硬件产品，其中也包括新物联网开发套件。</p>
                <img src="../assets/news/news1.png" alt="" width="100%">
                <div class="into_page">
                    进入<router-link to="/index">Leez</router-link>官网了解更多内容
                </div>
            </div>
            <div class="content_right">
                <h2>热门新闻</h2>
                <ul>
                    <li>
                        <img src="../assets/news/right_img1.png" width="100%">
                        <p>诚邀硬核玩家产于Leez P710 外壳手稿设 计大赛</p>
                    </li>
                    <li>
                        <img src="../assets/news/right_img2.png" width="100%">
                        <p>【猜霸狂欢夜】Leez 新品曝光，猜配置赢 大奖</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'news'
}
</script>
<style scoped>
    .home{ background: #fff;}
    .news_banner{
        width: 100%;
        height: 256px;
        background-image: url('../assets/news/banner.png');
        background-size: 100% 100%;
    }
    .banner_content{
        width: 55%;
        margin: 0 auto;
        padding-top: 80px;
        color: #fff;
    }
    .banner_content h2{
       font-size: 22px;
       font-weight: 500;
    }
    .banner_content p{
        margin-top: 20px;
    }
    .news_content{
        width: 70%;
        margin: 0 auto;
        overflow: hidden;
        color: #333;
        padding-bottom: 60px;
    }
    .home .title{
        padding: 15px 0;
        display: block;
    }
    .title {
        border-bottom: 1px solid #ccc;
    }
    .title a{
        color: #3E8DDD;
        font-size: 14px;
        font-weight: 500;
    }
    .content_left{
        width: 68%;
        float: left;
        overflow: hidden;
    }
    .content_left>h2{
        font-weight: 500;
        margin-top: 40px;
    }
    .time{
        margin: 18px 0;
        color: #999;
        font-weight: 500;
    }
    .content_left .content{
        line-height: 24px;
        font-size: 15px;
        margin-bottom: 30px;
    }
    .into_page{
        font-size: 15px;
        margin-top: 24px;
    }
    .content_right{
        float: right;
        overflow: hidden;
        width: 25%;
    }
    .into_page a{
        color: #3E8DDD;
    }
    .content_right h2{
        margin-top: 45px;
    }
    .content_right ul{
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    .content_right ul li{
        display: block;
        margin:0;
        margin-top: 20px;
        cursor: pointer;
    }
    .content_right ul li p{
        font-size: 13px;
        font-weight: 440;
        line-height: 20px;
        margin-top: 10px;
    }
    @media screen and (max-width: 1400px){
        .news_banner{
            height: 220px;
        }
        .content_left{
            width: 58.6%;
        }
    }
    @media screen and (max-width: 1200px){
        .news_banner{
            height: 185px;
            background-size: cover;
        }
        .news_content{
            width: 85%;
        }
        .banner_content{
            padding-top: 60px;
            width: 65%;
        }
        h2 {
            font-size: 20px;
        }
        .content_right h2{
            margin-top: 50px;
        }
        .banner_content p{
            font-size: 15px;
        }
        .content_left .content{
            font-size: 14px;
        }
        .content_right{
            width: 300px;
        }
        .content_right ul li{
            width: 81%;
        }
        .content_right ul li p{
            font-size: 12px;
        }
    }
</style>


