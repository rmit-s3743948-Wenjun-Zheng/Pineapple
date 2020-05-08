<template>
    <div class="main-container">
        <div class="content">
            <h4>Welcome to</h4>
            <h4>Pineapple</h4>
            <p class="pword">Your financial wellbeing wallet</p>
            <van-button 
              style="height:36px;padding-left:16px;padding-right:16px;line-height:14px;font-size:16px"
              round
              type="normal" 
              to="/register"
              color="#00c25f">GET STARTED</van-button>
        </div>
    </div>
</template>
<style scoped>
.main-container{
    margin-right: 0;
    margin-left: 0;
    text-align: center;
}
h4{
    font-size: 2.125rem!important;
    font-weight: 400!important;
    line-height: 2.5rem;
    letter-spacing: .0073529412em!important;
    font-family: Muli,Roboto,sans-serif!important;
    margin-block-start: 0;
    margin-block-end: 0;
}
.pword{
    margin-top: 24px!important;
    margin-bottom: 24px!important;
}
</style>