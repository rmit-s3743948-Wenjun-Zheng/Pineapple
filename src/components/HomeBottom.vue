<template>
    <div class="back">
        <div style="flex: 2 1 auto; height:50px; width: 700px;text-align: center;"></div>
         <div class="screen">
            <img :src="img" >
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            img: require('../assets/image/Screen.png')
        }
    }
}
</script>

<style scoped>
.screen{
    text-align: center;
    flex: 1 4 auto;
    height: 210px;
}
.back{
    background: url(../assets/image/123.svg);
    overflow: hidden;
    height: 300px;
    background-size: auto 100%;
    background-repeat: repeat-x;
    display: flex;
    flex-direction: column
}
</style>