<template>
    <div class="completecontainer">
        <Header class="completeheader"></Header>
        <completemain class="completemain"></completemain>
    </div>
</template>
<script>
import header from "../components/Homeheader.vue"
import completemain from "../components/completemain.vue"
export default {
    components:{
        Header: header,
        completemain
    }
}
</script>

<style scoped>
.completecontainer{
    display: -webkit-flex;
    flex-direction: column;
    height: 100vh;
}
.completeheader{
    flex: 1 1 auto ;
    height: auto;
    position: relative;
}
.completemain{
    flex: 3 2 auto;
    height: auto;
    position: relative;
}
</style>