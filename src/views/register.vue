<template>
    <div class="registercontainer">
        <Header class="registerheader"></Header>
        <registermain class="registermain"></registermain>
    </div>
</template>

<script>
import header from "../components/Homeheader.vue"
import registermain from "../components/RegisterMain.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        Header: header,
        registermain
    },
    created(){
         this.$store.commit('setName', '')
    }
}
</script>

<style scoped>
.registercontainer{
    display: -webkit-flex;
    flex-direction: column;
    height: 100vh;
}
.registerheader{
    flex: 1 1 auto ;
    height: auto;
    position: relative;
}
.registermain{
    flex: 3 2 auto;
    height: auto;
    position: relative;
}
</style>