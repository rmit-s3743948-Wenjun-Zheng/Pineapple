<template>
      <div class="Nextstepcontainer">
        <Header class="Nextstepheader"></Header>
        <nextmain class="Nextstepmain"></nextmain>
    </div>
</template>

<script>
import header from "../components/Homeheader.vue"
import nextmain from "../components/Nextmain.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        Header: header,
        nextmain
    }
}
</script>

<style scoped>
.Nextstepcontainer{
    display: -webkit-flex;
    flex-direction: column;
    height: 100vh;
}
.Nextstepheader{
    flex: 1 1 auto ;
    height: auto;
    position: relative;
}
.Nextstepmain{
    flex: 3 2 auto;
    height: auto;
    position: relative;
}
</style>