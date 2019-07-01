<template>
    <div class="product">
        <!-- banner -->
        <div class="pbanner">
            <div>
                <h1>Leez SBC P515</h1>
                <p>The Lenovo Leez P515 uses TI's latest AM5708 embedded processor solution, the cost-optimized Arm Cortex-A15 and The DSP core features high performance, low power consumption, and flexible configuration, with a maximum frequency of up to 1 GHz.</p>
                <img src="../assets/product/p515.png" alt=""/>
                <button>Buy now</button>
            </div>
        </div>
        <!-- 参数 -->
        <div class="pdetail block">
            <div>
                <h2>Leez P515 Tech Spec</h2>
                <img src="../assets/product/cm.png" alt=""/>
                <table cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td>Platform</td>
                            <td>
                                <p>TI Sitara AM5708</p>
                                <p>1* Arm Cortex A15 1GHZ</p>
                                <p>1* DSP C66x 750MHZ</p>
                                <p>2* Dual Arm Cortex-M4 Co-processors</p>
                                <p>213MHZz</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>1GB DDR3L-1333</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>
                                <p>8GB eMMC onboard; MicroSD Slot*1</p>
                                <p>MicroSD*1 for external storage</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td>
                                <p>Ethernet: Native Gbps Ethernet</p>
                                <p>(Dual Ethernets Optional)</p>
                                <p>1* 100/1000Mbps;</p>
                                <p>1* 10/100Mbps(Optional)</p>
                                <p>WiFi: 802.11a/b/g/n/ac, Bluetooth 5.0(Optional module)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Video Input</td>
                            <td>MIPI-CSI</td>
                        </tr>
                        <tr>
                            <td>Video Output</td>
                            <td>HDMI*1: HDMI 1.4a, supports 1080P@60Hz</td>
                        </tr>
                        <tr>
                            <td>USB</td>
                            <td>USB 3.0 Type-A*2</td>
                        </tr>
                        <tr>
                            <td>Pin-header</td>
                            <td>
                                <p>(40*2 Pins)</p>
                                <p>UART：*8(not include uart3);</p>
                                <p>PWM*5;</p>
                                <p>I2S*3;</p>
                                <p>DCAN*2;</p>
                                <p>I2C*4;</p>
                                <p>SPI*5;</p>
                                <p>VIN：24bit input *1,8bit input *1;</p>
                                <p>VOUT：24bit output *1;</p>
                                <p>PRU-ICSS*1</p>
                                <p>GPIO*71</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Others</td>
                            <td>RTC: 2 Pin 1.27/1.25mm RTC battery input connector</td>
                        </tr>
                        <tr>
                            <td>Power</td>
                            <td>DC 5V/3A</td>
                        </tr>
                        <tr>
                            <td>Heat sink</td>
                            <td>Fanless cooling fin</td>
                        </tr>
                        <tr>
                            <td>PCB</td>
                            <td>10 layers</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td>92*65mm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div,span,p,a{
    color: #fff;
    }
    .pbanner{
        width: 100%;
        /* height: 980px; */
        background: url(../assets/product/pbanner.png) no-repeat center;
        background-size: cover;
        overflow: hidden;
    }
    .pbanner>div{
        width: 75%;
        margin: 0 auto;
        padding: 88px 0 0 0;
        text-align: center;
    }
    .pbanner>div>p{
        width: 60%;
        margin: 0 auto;
        margin-top: 42px;
        font-size: 20px;
    }
    .pbanner>div>img{
        width: 100%;
        position: relative;
        top: -100px;
    }
    .pbanner>div>button{
        width:220px;
        height:48px;
        font-size: 20px;
        border:2px solid rgba(255,255,255,1);
        border-radius:4px;
        background: transparent;
        position: relative;
        top: -120px;
    }
    .pbanner>div>button:hover{
        border:2px solid #fff;
        background: #fff;
        color: #333;
    }
    .pdetail{
        width: 100%;
        background: url(../assets/product/repeat.jpg) left repeat-y;
        background-size:contain;
        padding: 80px 0 220px 0;
    }
    .pdetail>div{
        width: 75%;
        margin: 0 auto;
        text-align: center;
        color:#333; 
    }
    .pdetail>div>img{
        width: 50%;
        margin: 54px 0 80px 0;
    }
    .pdetail>div>table{
        width: 100%;
        text-align: left;
    }
    table p{
        color: #333;
    }
    tbody>tr{
        border-top: 1px solid #5F5F5F;
    }
    tbody>tr>td{
        padding: 28px 0;
        border-top: 1px solid #5F5F5F;
        font-size: 22px;
        line-height: 30px;
        width: 65%;
    }
    tbody>tr>td:first-child{
        font-size: 28px;
        width: 35%;
        vertical-align: top;
    }
    .block>div>p{
        font-size: 18px;
    }
    .block>div>h2{
        font-size: 28px;
    }
    @media screen and (max-width:1024px){
        /* .pbanner{
            height: 820px;
        } */
        .pbanner>div>button{
            top: -110px;
        }
        .pdetail>div>img{
            width: 70%;
        }
    }
    @media screen and (max-width: 768px){
        /* .pbanner{
            height: 750px;
        } */
        .pbanner>div{
            padding-top: 70px;
        }
        .pbanner>div>img{
            top: -50px
        }
        .pbanner>div>button{
            top: -20px;
            margin-bottom: 100px;
        }
        .pdetail>div>img{
            width: 80%;
        }
    }
    @media screen and (max-width: 415px){
        .pbanner>div{
            width: 90%;
        }
        .pbanner>div>p{
            width: 90%;
        }
        .pbanner>div>img{
            top: 0px
        }
        .pbanner>div>button{
            top: 10px;
            width: 150px;
            padding: 0;
        }
        tbody>tr>td{
            font-size: 13px;
            padding-left: 20px;
            width:64%;
        }
        tbody>tr>td:first-child{
            font-size: 18px;
            padding-left: 0;
            width:36%;
        }
        .pdetail>div>img{
            width: 90%;
        }
    }
</style>

