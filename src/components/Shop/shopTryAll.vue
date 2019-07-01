<template>
    <div class="try">
        <div>
            <div class="px clearfloat">
                <div v-for="(item,index) in type" :key="index" :class="index==showtype?'active':''" @click="showType(index)">
                    <span>{{item}}</span>
                </div>
            </div>
            <div class="tryList clearfloat">
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p515.png" alt="">
                    </div>
                    <p>P515</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p515.png" alt="">
                    </div>
                    <p>P515</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p710.png" alt="">
                    </div>
                    <p>P710</p>
                </div>
                <div>
                    <div>
                        <img src="../../assets/try/p515.png" alt="">
                    </div>
                    <p>P515</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            type:['按产品','热度','时间'],
            showtype:0
        }
    },
    methods:{
        showType(n){
            this.showtype=n;
        }
    }

}
</script>

<style scoped>
    .try{
        width: 100%;
        background: #fff;
    }
    .try>div{
        width: 60%;
        margin: 0 auto;
        padding-left: 10px;
    }
    .px{
        text-align: left;
        padding: 30px 0 0 0;
    }
    .px>div{
        float: left;
        padding: 6px 24px 6px 12px;
        background-image: url(../../assets/try/pailie2.png);
        background-size: 9px 11px;
        background-repeat: no-repeat;
        background-position: 88% 13px;
        border: 1px solid #ccc;
    }
    .px>div:hover{
        cursor: pointer;
    }
    .px>div:not(:first-child){
        border-left: none;
    }
    .px .active{
        background-color: #E2231A;
        color: #fff;
        background-image: url(../../assets/try/pailie.png);
        background-size: 9px 11px;
        background-repeat: no-repeat;
        background-position: 90% 13px;
        border: 1px solid transparent;
    }
    .tryList{
        width: 100%;
        padding-bottom: 60px;
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .tryList>div{
        /* float: left;
        width: 22%; */
        background: #eee;
        text-align: center;
        margin-top: 30px;
        height: 90%;
    }
    .tryList>div>div{
        /* height: 230px; */
        width: 100%;
        display: flex;
        align-items: center;
        height: 80%;
    }
    .tryList>div>div>img{
        width: 80%;
        margin: 10%;
    }
    .tryList>div>p{
        font-size: 20px;
        padding: 0px 0 60px 0;
    }
    /* .tryList>div:nth-child(4n-1){
        margin-left: 4%;
        margin-right: 4%;
    }
    .tryList>div:nth-child(4n-2){
        margin-left:4%;
    } */
    @media screen and (max-width: 415px){
        .try>div{
            width: 70%;
            padding-left: 0;
        }
    }
</style>

