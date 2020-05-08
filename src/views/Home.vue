<template>
    <div class="MainContainer">
       <div class="header">
           <Header></Header>
       </div>
        <div style=" flex: 0.5 2 auto; height:35px"></div>
       <div class="Main">
           <Main></Main>
       </div>
       <div class="Bottom">
          <Bottom style=" flex: 2 1 auto;"></Bottom>
          <div style=" flex: 1 2 auto; height:35px"></div>
       </div>
    </div>
</template>

<script>
import header from "../components/Homeheader.vue"
import main from "../components/HomeMain"
import bottom from "../components/HomeBottom.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        Header: header,
        Main: main,
        Bottom: bottom
    }
}
</script>
<style scoped>
.MainContainer{
    overflow: auto;
    min-height: calc(100vh - 30px);
    display: -webkit-flex;
    flex-direction: column;
}
.header{
    flex: 0.5 1 auto;
    height: auto;
    position: relative;

}
.Main{
    flex: 1 3 auto;
    height: auto;
    position: relative;

}
.Bottom{
    flex: 3 3 auto;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    height: auto;
    position: relative;

}

</style>