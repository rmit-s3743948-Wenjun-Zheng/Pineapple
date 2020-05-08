<template>
    <div>
        <calendarheader></calendarheader>
         <div style="height: 280px">
              <pick></pick>
         </div>
         <h4 style="margin-bottom:5px;">Upcoming:</h4>
         <billList></billList>
    </div>
</template>
<script>
import pick from '../components/Calendarpick.vue'
import billList from '../components/ListBill.vue'
import calendarheader from '../components/CalendarHeader'
export default {
    components:{
        pick,
        billList,
        calendarheader
    },
    created(){
     this.$store.commit('searchbill', new Date())
    }
}
</script>