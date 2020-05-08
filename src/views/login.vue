<template>
    <div class="logincontainer">
        <Header class="loginheader"></Header>
        <loginmain class="loginmain"></loginmain>
    </div>
</template>

<script>
import header from "../components/loginheader.vue"
import loginmain from "../components/loginmain.vue"
export default {
     data(){
        return{
            imgURL: require('../assets/image/pineapplelogo.png'),
        }
    },
    components:{
        Header:header,
        loginmain
    }
}
</script>
<style scoped>
.logincontainer{
    display: -webkit-flex;
    flex-direction: column;
    height: 100vh;
}
.loginheader{
    flex: 1 1 auto ;
    height: auto;
    position: relative;
}
.loginmain{
    flex: 3 2 auto;
    height: auto;
    position: relative;
}
</style>