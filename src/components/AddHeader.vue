<template>
    <div>
         <van-row>
            <van-col span="4">
                <van-image
                 width="40px"
                 height="40px"
                 fit="cover"
                 :src="imgURL"/>
            </van-col>
            <van-col span="16"  style="text-align: center;">
                <h5>add bill</h5>
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