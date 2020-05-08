<template>
    <div class="accountcontainer">
        <Header class="accountheader"></Header>
        <accountmain class="accountmain"></accountmain>
    </div>
</template>

<script>
import header from "../components/Homeheader.vue"
import accountmain from "../components/accountmain.vue"
export default {
    components:{
        Header:header,
        accountmain
    },
    created(){
        this.$store.commit('setEmail', '')
        this.$store.commit('setPassword', '')
    }
}
</script>
<style scoped>
.accountcontainer{
    display: -webkit-flex;
    flex-direction: column;
    height: 100vh;
}
.accountheader{
    flex: 1 1 auto ;
    height: auto;
    position: relative;
}
.accountmain{
    flex: 3 2 auto;
    height: auto;
    position: relative;
}
</style>