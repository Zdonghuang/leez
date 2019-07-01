<template>
    <div class="home">
        <div class="lab_banner">
            <div class="banner_content">
                <h2>海岸能源IOTchang场景沙盘</h2>
                <p>Leez推出基于P710主板驱动的沙盘，版主大家更直观的了解性能及及应用场景 </p>
                <p>沙盘以海岸能源为场景，分为海岸风天和智慧灯塔两个</p>
                <button>应用咨询</button>
            </div>
        </div>
        <div class="content">
            <div class="details">
                <h2>方案搭建</h2>
                <p>方案：Leez P515开发板+显示屏/触摸屏+外部设备</p>
                <img src="../assets/lab/facility.png" alt="" width="60%">
            </div>
            <div class="details">
                <h2>技术架构解读</h2>
                <img src="../assets/lab/project.png" alt="" width="60%">
                <div class="c_box">
                    <p>问题：通过灯泡的外部参数，温度、亮度、预测灯泡会不会在15分钟内发生故障</p>
                    <p>解决方案</p>
                    <div class="bread">
                        <p>1、监督学习VS非监督学习</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预测数值VS识别相关性</p>
                    </div>
                    <div class="bread">
                        <p>2、分类人物（标签）</p>
                        <p>0-15minutes</p>
                        <p>15minutes-3hours</p>
                        <p>>3hours</p>
                    </div>
                    <div class="bread">
                        <p>3、Features</p>
                        <p>亮度</p>
                        <p>灯泡表面温度</p>
                    </div>
                    <div class="bread">
                        <p>4、清理数据</p>
                        <p>ML项目50%-80%的时间花在获取，清理。</p>
                        <p>组织数据上</p>
                    </div>
                </div>
            </div>
            <div class="details">
                <h2 class="center">场景功能描述</h2>
                <div class="scene">
                    <ul>
                        <li v-for="(item,index) in sceneLists" :key="index" :class="index==showl?'show_list':''" 
                            @click="showLists(index)">{{item}}</li>
                    </ul>
                    <div class="show_content">
                        <p>{{sceneListsContent[showl]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'lab',
    data(){
        return{
            sceneLists:['全渠道智能回答','开放客服工作台','智能化辅助工具','客服定制化&方法论输出'],
            sceneListsContent:['在线客服热线电话平台除了包括所有内置智能组件以外，还可以与企业现有系统进行无缝集成','','',''],
            showl:0
        }
    },
   methods:{
    showLists(i){
        this.showl = i;
    }
   }
}
</script>
<style scoped>
    .home{
        background: #fff;
    }
    h2{
        font-size: 32px;
    }
    .lab_banner{
        width: 100%;
        height: 550px;
        background-image: url('../assets/lab/banner.png');
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
        margin-bottom: 40px;
        font-size: 32px;
    }
    .banner_content p{
        line-height: 30px;
    }
    .banner_content button{
        margin-top: 30px;
        width: 120px;
        height: 40px;
        background: #3E8DDD;
        padding: 10px;
        font-size: 16px;
    }
    .home .content{
        width: 70%;
        margin:0 auto;
    }
    .details{
        margin-bottom: 60px;
        overflow: hidden;
    }
    .details:last-child{
        margin-bottom: 0;
        padding-bottom: 60px;
    }
    .details h2{
        font-weight: 500;
        margin-bottom: 20px;
    }
    .details p{
        font-weight: 500;
        margin-bottom: 10px;
    }
    .home .content:nth-child(2) img{
        float: left;
    }
    .c_box{
        float: right;
        width: 380px;
    }
    .c_box>p{
        margin-bottom: 20px;
    }
    .c_box .bread{
        font-size: 14px;
        margin-bottom: 15px;
    }
     .c_box .bread:last-child{
        margin-bottom:0;
     }
    .c_box .bread p{
        margin: 0;
        line-height: 21px;
    }
    .c_box .title{

    }
    .scene ul{
        padding: 0;
        margin: 0;
        overflow: hidden;
        float: left;
    }
    .scene ul li{
       border: 1px solid #CCC;
       display: block;
       margin: 0;
       border-top: none;
       padding: 10px;
       font-size: 14px;
       font-weight: 500;
       width: 170px;
       cursor: pointer;
    }
    .scene ul li:hover, .show_list{
        background: url('../assets/lab/square.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
    .scene ul li:first-child{
        border-top: 1px solid #CCC;
    }
    .center{
        text-align: center;
    }
    .show_content{
        float: left;
        padding-left: 60px;
    }
    .show_content p{
        margin:0;
        line-height: 40px; 
        font-size: 14px;
    }

    @media screen and (max-width: 1400px){
        .lab_banner{
            height: 450px;
        }
        .home .content, .banner_content{ width: 85%;}

        .c_box{width: 38%;}
    }

    @media screen and (max-width: 1200px){
        .lab_banner{
            height: 350px;
        }
        .banner_content{
            padding-top: 7%;
        }
        .home .content, .banner_content{ width: 80%;}

        .c_box{width: 35%;}
        .c_box p{margin-bottom: 8px;}
        .c_box>p:first-child{
            font-size: 14px;
            margin-bottom:12px;
        }
        .c_box .bread{
            margin-bottom: 10px;
        }
       .c_box .bread p{
           font-size: 12px;
           line-height: 16px; 
       }
    }
    @media screen and (max-width: 1024px){
        .lab_banner{
            margin-bottom: 60px;
        }
        .details img, .c_box{
            width: 100%;
        }
        .c_box p{
            margin: 15px 0;
        }
        .c_box>p:first-child{
            font-size: 16px;
            margin-bottom:20px;
        }
        .c_box .bread{
            margin-bottom: 15px;
        }
       .c_box .bread p{
           font-size: 14px;
           line-height: 21px; 
       }
    }
    @media screen and (max-width: 768px){
        .lab_banner{
            height: 280px;
        }
        h2{font-size: 25px;}
        .banner_content{padding-top: 3%;}
        .banner_content button{margin-top: 20px;}
        .banner_content h2{margin-top: 20px;margin-bottom:18px;font-size: 25px;}
        .details{margin-bottom: 30px;}
    }
    @media screen and (max-width: 415px){
        .content{width: 85%;}
        .lab_banner{height: 200px;margin-bottom:40px;}
        .banner_content{padding-top: 1%;}
        .banner_content h2{ font-size: 20px; margin: 10px 0;}
        .banner_content p{font-size: 14px; line-height: 24px;}
        .banner_content button{
            height: 34px;
            padding: 5px;
            font-size: 14px;
            margin-top: 5px;
            width: 100px;
        }
        .details{margin-bottom: 20px;}
    }
</style>

