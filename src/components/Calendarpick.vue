<template>
    <div>
       <date-pick v-model="date" :hasInputElement="false" @click="searchbill"></date-pick>
    </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
    components: {
        DatePick
    },
    data: () => ({
        date: ''
    }),
    methods:{
        searchbill(){
            console.log(this.date)
        }
    },
    watch: {
        date(val){
            this.$store.commit('searchbill', val)
        }
    }
};
</script>

<style scoped>
.vdpArrowPrev:after {
    border-right-color: #cc99cd;
}

.vdpArrowNext:after {
    border-left-color: #cc99cd;
}

.vdpCell.selectable:hover .vdpCellContent,
.vdpCell.selected .vdpCellContent {
    background: #cc99cd;
}

.vdpCell.today {
    color: #cc99cd;
}

.vdpTimeUnit > input:hover,
.vdpTimeUnit > input:focus {
    border-bottom-color: #cc99cd;
}
.vdpComponent{
    font-size: 9px
}
</style>>
    
