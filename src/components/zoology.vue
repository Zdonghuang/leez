<template>
    <div class="home">
        <div class="zoology_banner">
            <div class="banner_content">
                <h2>Leez生态合作伙伴</h2>
                <span>帮助合作伙伴构建AIOT场景业务实践和解决方案 </span>
                <p>加入合作伙伴计划</p>
                <button>加入</button>
            </div>
        </div>
        <div class="zoology_box1">
            <h2>Leez生态合作伙伴</h2>
            <p>Leez合作伙伴生态提供全方位的合作与支持，致力于帮助合作伙伴构建AIOT场景业务时间和解决方案</p>
            <div class="page_box">
                <div class="pic_info">
                    <img src="../assets/zoology/pic1.png" alt="" width="246">
                    <p>项目预研</p>
                    <span>更多的边缘计算设备产品化，丰富芯片商业 务场景。为客户提供更多的场景业务选择， 售前顾问，优化成本，提供最优解决方案路 径。</span>
                </div>
                <div class="pic_info">
                    <img src="../assets/zoology/pic2.png" alt="" width="246">
                    <p>产品化能力</p>
                    <span>leez汲取联想生产力制造能力，拥有出色的 产品化能力和品控，极低的成本控制，为客 户提供最优质的硬件供应。</span>
                </div>
                <div class="pic_info">
                    <img src="../assets/zoology/pic3.png" alt="" width="246">
                    <p>全方位的解决方案</p>
                    <span>大数据业务背景，多年IOT工作积淀，拥有 完善的LeapIOT和iLeapCloud资源，帮助 客服搭建一站式物联网业务场景。</span>
                </div>
                <div class="pic_info">
                    <img src="../assets/zoology/pic4.png" alt="" width="246">
                    <p>社区生态支持</p>
                    <span>Leez生态拥有芯片商、制造商、设计公司、 终端客服、社区媒体联盟等合作伙伴，提供 更多技术支持，供应商引进，市场营销支持。</span>
                </div>
            </div>
        </div>
        <h2 class="p_title">合作伙伴分类</h2>
        <div class="zoology_box2">
            <div class="partner_box">
                <div class="pbs">
                    <div>
                        <img src="../assets/zoology/icon1.png" alt="">
                        <div class="line"></div>
                        <p>分销合作伙伴</p>
                        <div class="show_pbs">
                            <img src="../assets/zoology/hovericon1.png" alt="">
                            <p>分销合作伙伴</p>
                            <p>为区域内用户提供阿里云全线产品的销售咨询服 务及解决方案</p>
                            <router-link to="">查看详情>></router-link>
                            <button>立即加入</button>
                        </div>
                    </div>
                </div>
                <div class="pbs">
                    <div>
                        <img src="../assets/zoology/icon2.png" alt="">
                        <div class="line"></div>
                        <p>SI合作伙伴</p>
                        <div class="show_pbs">
                            <img src="../assets/zoology/hovericon2.png" alt="">
                            <p>SI合作伙伴</p>
                            <p>为区域内用户提供阿里云全线产品的销售咨询服 务及解决方案</p>
                            <router-link to="">查看详情>></router-link>
                            <button>立即加入</button>
                        </div>
                    </div>
                </div>
                <div class="pbs">
                    <div>
                        <img src="../assets/zoology/icon3.png" alt="">
                        <div class="line"></div>
                        <p>ISV合作伙伴</p>
                        <div class="show_pbs">
                            <img src="../assets/zoology/hovericon3.png" alt="">
                            <p>ISV合作伙伴</p>
                            <p>为区域内用户提供阿里云全线产品的销售咨询服 务及解决方案</p>
                            <router-link to="">查看详情>></router-link>
                            <button>立即加入</button>
                        </div>
                    </div>
                </div>
                <div class="pbs">
                    <div>
                        <img src="../assets/zoology/icon4.png" alt="">
                        <div class="line"></div>
                        <p>咨询合作伙伴</p>
                        <div class="show_pbs">
                            <img src="../assets/zoology/hovericon4.png" alt="">
                            <p>咨询合作伙伴</p>
                            <p>为区域内用户提供阿里云全线产品的销售咨询服 务及解决方案</p>
                            <router-link to="">查看详情>></router-link>
                            <button>立即加入</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="zoology_box3">
            <h2>核心合作伙伴</h2>
            <div class="logo">
                <div>
                    <img src="../assets/zoology/Amazon.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/Nvidia.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/OpenGL.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/intel.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/Docker.png" alt="">
                </div>
            </div>
            <div class="logo">
                <div>
                    <img src="../assets/zoology/Cloud Foundry.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/rockchip.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/TexasInstruments.png" alt="">
                </div>
                <div>
                    <img src="../assets/zoology/Azure.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'zoology'
}
</script>
<style scoped>
h2{
    font-size: 32px;
    font-weight: 500;
}
.home{
    background: #fff;
}
    .zoology_banner{
        width: 100%;
        height: 550px;
        background-image: url('../assets/zoology/banner.png');
        background-size: 100% 100%;
        margin-bottom: 90px;
    }

    .banner_content{
        width: 70%;
        margin: 0 auto;
        color: #fff;
        padding-top: 10%;
    }
    .banner_content h2{
        font-weight: 500;
        margin-bottom: 25px;
        font-size: 32px;
    }
    .banner_content span{
        padding-bottom: 25px;
        display: inline-block;
        border-bottom: 1px solid #666;
    }
    .banner_content p{
        margin: 25px 0 20px 0;
    }
    .banner_content button{
        width: 120px;
        height: 40px;
        background: #3E8DDD;
        padding: 10px;
        font-size: 16px;
    }
    .page_box{
        display: flex;
        margin-top: 50px;
        padding-bottom: 50px;
    }
    .zoology_box1, .zoology_box3{
        width: 70%;
        margin: 0 auto;
    }
    .zoology_box1 h2, .zoology_box1 p, .zoology_box3 h2{
        text-align: center;
    }
    .zoology_box1 h2{
        margin-bottom: 30px;
    }
    .pic_info{
        margin-right: 30px;
        width: 25%;
        overflow: hidden;
    }
    .pic_info:last-child{
        margin-right: 0;
    }
    .pic_info>img{
        margin-bottom: 25px;
        width: 100%;
    }
    .pic_info p{
        font-size: 20px;
        margin-bottom: 15px;
    }
    .pic_info span{
        font-size: 14px;
    }
    .p_title{
        padding: 40px 0;
        text-align: center;
    }
    .zoology_box2{
        background: #333;
        text-align: center;
    }
    .partner_box{
        width: 70%;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
    }
    .pbs{
        position: relative;
        overflow: hidden;
        height:347px;
        width: 25%;
        float: left;
    }
    .pbs>div{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom:0;
        left: 0;
        transition: all .4s cubic-bezier(.4,0,.2,1);
    }
    .pbs:nth-child(1){
        background-image: url('../assets/zoology/p1.png');
        background-size: 100% 100%;
    }
    .pbs:nth-child(2){
        background-image: url('../assets/zoology/p2.png');
        background-size: 100% 100%;
    }
    .pbs:nth-child(3){
        background-image: url('../assets/zoology/p3.png');
        background-size: 100% 100%;
    }
    .pbs:nth-child(4){
        background-image: url('../assets/zoology/p4.png');
        background-size: 100% 100%;
    }
    .pbs img{
        display: block;
        margin: 0 auto;
        margin-top: 44%;
        margin-bottom: 20px;
    }
    .pbs .line{
        width: 30px;
        height: 2px;
        background: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .pbs p{
        font-size: 20px;
        color: #fff;
        text-align: center;
        font-weight: 500;
    }
    .show_pbs{
        display: none;
    }
    .pbs:hover{
        background: #4AC0E0;
    }
    .pbs:hover>div{
        bottom:5px;
        transition: all .4s cubic-bezier(.4,0,.2,1);
    }
    .pbs:hover>div>img, .pbs:hover .line, .pbs:hover>div>p{
        display: none;
    }
    .pbs:hover .show_pbs{
        display: block;
    }

    .pbs .show_pbs img{
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .show_pbs p{
        margin-bottom: 20px;
    }
    .show_pbs p:nth-child(3){
        padding: 0 10px;
        font-size: 13px;
        line-height: 28px;
        margin-bottom: 26px;
    }
    .show_pbs a{
        color: #fff;
        font-size: 13px;
        text-align: center;
        display: block;
        width: 100%;
    }
    .show_pbs button{
        width: 120px;
        height: 30px;
        background:transparent;
        padding: 0;
        font-size: 13px;
        border: 1px solid #fff;
        display: block;
        margin: 0 auto;
        margin-top: 22px;
    }
.zoology_box3{
    padding: 100px 0;
}
.logo{
    margin-top: 70px;
    display: table;
    width: 100%;
}
.logo>div{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.logo>div>img{
    width: 80%;
    margin:0 auto;
}

.zoology_box3 .logo:nth-child(2)>div:nth-child(1){
    text-align: left                                                                                                                                                                                                         ;
}
.zoology_box3 .logo:nth-child(2)>div:last-child{
    text-align: right;                                                                                                                                                                                                         ;
}
.zoology_box3 .logo:nth-child(3){
  width: 90%;
  margin: 0 auto;
  margin-top: 70px;
}
.zoology_box3 .logo:nth-child(4){
  width: 80%;
  margin: 0 auto;
  margin-top: 70px;
}

@media screen and (max-width: 1400px){
    .zoology_banner{
        height: 450px;
    }
    .banner_content, .zoology_box1, .partner_box, .zoology_box3{
        width: 85%;
    }
}
@media screen and (max-width: 1200px){
    .zoology_banner{
        height: 350px;
    }
    .banner_content, .zoology_box1, .partner_box, .zoology_box3{
        width: 80%;
    }
    .banner_content{
        padding-top: 6%;
    }
}
@media screen and (max-width: 1024px){
    .zoology_banner{
        margin-bottom: 60px;
    }
    .pic_info{
        width: 47%;
        float: left;
    }
    .pic_info:nth-child(1), .pic_info:nth-child(2){
        margin-bottom: 30px;
    }
    .page_box{
        display: block;
        overflow: hidden;
    }
    .pic_info:nth-child(even){
        margin-right: 0;
    }
    .page_box{
        padding-bottom: 0;
    }
    .pbs img{
        margin-top: 38%;
    }
    .zoology_box3{
        padding: 60px 0;
    }
    .home .pbs{
        width: 50%;
    }
    .home .zoology_box3 .logo{
        margin-top: 40px;
    }
}
@media screen and (max-width: 768px){
    h2{
        font-size: 25px;
    }
    .zoology_banner{
        height: 280px;
    }
    .banner_content{
        padding-top: 6%;
    }
    .banner_content h2{
        font-size: 25px;
        margin-bottom: 18px;
    }
    .banner_content span{
        padding-bottom:15px;
    }
    .banner_content p{
        margin: 20px 0 20px 0;
    }
    .pic_info{
        width: 46%;
    }
}
@media screen and (max-width: 415px){
    .zoology_banner{
        height: 156px;
        margin-bottom: 40px;
    }
    .banner_content span, .banner_content p{
        font-size: 13px;
    }
    .banner_content p{
        margin: 10px 0;
    }
    .banner_content, .zoology_box1, .partner_box, .zoology_box3{
        width: 85%;
    }
    .banner_content{
        padding-top: 1%;
    }
    .banner_content span{
        padding-bottom: 10px;
    }
    .banner_content h2{
        font-size: 18px;
        margin: 12px 0;
        margin-bottom: 6px;
    }
    .banner_content button{
        width: 92px;
        height: 30px;
        padding: 5px;
        font-size: 14px;
    }
    .pic_info{
        width: 100%;
    }
    .pic_info:nth-child(3){
        margin-bottom: 30px;
    }
    .home .pbs{
        width: 100%;
    }
    .zoology_box3{
        padding: 40px 0;
    }
}
</style>


