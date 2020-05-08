<template>
    <div>
        <van-row>
            <van-col span="4">
                <van-button :icon="leftlogo" color="white" style="float: left"></van-button>
            </van-col>
            <van-col span="16"  style="text-align: center;">
                <van-image
                 width="40px"
                 height="40px"
                 fit="cover"
                 :src="imgURL"/>
            </van-col>
            <van-col span="4">
               <van-button 
                 style="border-radius:50%;-webkit-transform: scale(0.5);float:right;margin-right:0"
                 plain
                 color="rgb(228, 101, 101)"
                 icon="plus" 
                 size="normal"
                 to="/addbill"
                 type="primary">
               </van-button>  
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

</style> 