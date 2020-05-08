<template>
    <div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="No more upcoming bill"
          @load="onLoad">
          <van-cell center is-link v-for="(item, index) in list" :key="index" :title="item.Name" :value="item.Amount" 
          label="Today" :to="{name: 'billdetail', params: {currentbill: list[index]}}" :icon="icon" 
          style="border: 1px solid #00c25f; margin-bottom: 10px; line-height: 15px"/>
       </van-list>
    </div>
</template>

<script>
export default {
  data() {
     return {
       icon: require('../assets/image/椭圆70.png'),
       list: [],
       loading: false,
       finished: false,
     };
  },
  computed:{
      Blist(){
          return this.$store.state.ListAfterSearch
      }
  },
  methods: {   
    onLoad() {
        this.list = []
        setTimeout(() => {

        for (let i = 0; i < this.Blist.length; i++) {
            this.list.push(this.Blist[i])
        }

        this.loading = false;

        if (this.list.length == this.Blist.length) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  watch: {
      Blist(){
          this.onLoad()
      }
  },
}
</script>