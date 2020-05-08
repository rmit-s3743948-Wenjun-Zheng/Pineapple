<template>
    <div class="admincontainer">
       <Header></Header>
       <div class="notice">
           <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o" :scrollable="true">
              Notice: Your have bill due on tomorrow. Click here to check
           </van-notice-bar>
       </div>
       <div>
           <div class="box1">
                <van-cell title="Overdue" :value="overdue" style="background-color:rgb(228, 101, 101);border-radius: 28px;"/>
           </div>
           <div class="box2">
                <van-cell title="Need to pay"  :value="needpay" style="background-color:#00c25f;border-radius: 28px;" />
           </div>
       </div>
       <card></card>
       <div>
           <h3 style="margin-bottom:5px">Total cash in and out:</h3>
       </div>
       <chat></chat>
    </div>
</template>
<script>
import Header from "../components/adminheader"
import card from "../components/BillCard.vue"
import chat from '../components/chat.vue'
export default {
    data(){
        return{
            duemoney: 30.00,
            Needpay: 140.00
        }
    },
    computed:{
        overdue(){
            return '-$' + this.duemoney
        },
        needpay(){
            return '$' + this.Needpay
        }
    },
    components: {
       Header,
       card,
       chat
    }
}
</script>
<style scoped>
.admincontainer{
    display: flex;
    flex-direction: column;
}       
.box1{
    margin-bottom: 10px;
    margin-top: 5px;  
}
.box2{
  
}
span{
    color:white
}
.notice{
    margin-bottom: 10px;
    margin-top: 5px
}
</style>