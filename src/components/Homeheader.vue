<template>
  <van-row style="display: flex;  flex-direction: row; ">
    <van-col span="6" style="float：left">
        <van-image
           width="40px"
           height="40px"
           fit="cover"
           :src="imgURL"
        />
    </van-col>
     <van-col span="12" style="flex: 1 0 auto"></van-col>
     <van-col span="6">
        <van-button 
              style="float:right;height:36px;padding-left:16px;padding-right:16px"
              round
              type="primary" 
              size="small"
              to="/login"
              color="#00c25f"
              plain>LOGIN
        </van-button>
    </van-col>
  </van-row>
</template>

<script>
export default {
    data(){
        return{
            imgURL: require('../assets/image/pineapplelogo.png'),
        }
    }
}
</script>

<style scoped>

</style> 