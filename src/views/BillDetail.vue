<template>
    <div>
        <div class="detailcontainer">
            <div style="display:flex;flex-direction: row-reverse; padding-right: 20px;">
                <h5>Today</h5>
                <van-image :src="redpoint"  fit="contain"/>
            </div>
            <h1 style="text-align: center;height:10px; color:orange; font-size: 40px;">{{detail.Name.toUpperCase()}}</h1>
        </div>
        <van-cell title="Name" :value="detail.Name" />
        <van-cell title="Bill number" :value="detail.BillNumber"  />
        <van-cell title="Amount" :value="detail.Amount"  />
        <van-cell title="Acc" :value="detail.ACC"  />
        <van-cell title="Due date" :value="detail.DueDate"  />
        <van-cell title="Frequency" :value="detail.Frequency"  />
        <van-cell center title="Payment Medthod" :value="detail.PaymentMethod" />
        <van-field
          v-model="editname"
          center
          clearable
          label="Edit name">
          <template #button>
            <van-button size="small" type="info" round style="-webkit-transform: scale(0.7)" @click="change">save</van-button>
          </template>
        </van-field>
        <van-cell title="Penalty"  value="5% each week"  />
        <van-cell title="Benefit:" label="  10% discount paid 15 day in advance"  />
    </div>
</template>

<script>
export default {
    data(){
        return{
            detail: this.$route.params.currentbill,
            redpoint: require('../assets/image/椭圆70.png'),
            editname: ''
        }
    },
    methods:{
        change(){
            this.detail.Name = this.editname
            this.$store.commit('changebillname', this.editname, this.detail.BillNumber)
            this.editname = ''
        }
    }
}
</script>
<style scoped>
    .detailcontainer{
        width: 100%;
        height: 300px;
        background: rgb(95, 88, 88);
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 0px
    }
    h5{
        color: white;
    }
</style>