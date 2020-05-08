<template>
    <div>
         <van-row align="center">
            <van-col span="4">
                <van-image
                 width="40px"
                 height="40px"
                 fit="cover"
                 :src="imgURL"/>
            </van-col>
            <van-col span="16"  style="text-align: center;">
                <h5 style="line-height= 10px; margin-top: 10px">Calendar Pick</h5>    
            </van-col>
            <van-col span="4"> 
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgURL: require('../assets/image/pineapplelogo.png'),
            leftlogo: require('../assets/image/IconLeft.png')
        }
    }
}
</script>
<style scoped>
    h5{
      font-size: 1.2rem!important;
      font-weight: 300;
      line-height: 2rem;
      letter-spacing: normal!important;
      font-family: Muli,Roboto,sans-serif!important;
    }
</style>