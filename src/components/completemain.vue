<template>
<div class="nextmain">
        <div class="Next">
            <h5 style="margin-bottom: 32px!important;">Syncing Completed</h5>
            <p >We are talking to Moneytree right now and verifying account info / collecting data you consented to sharing </p>
            <p>This might be take a while, so help your self to coffee/tea and we will alert you via your email(double check)</p>
        </div>
        <div class="Nextbottom">
            <div style="text-align:center;  visibility: hidden;" >
                <div class="pretty p-icon p-smooth p-svg">
                    <input type="checkbox"/>
                    <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                           <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>I agree to the <router-link to="/">Terms of service</router-link>
                        </label>
                    </div>
                </div>
            </div>
             <p style=" visibility: hidden;" class="p2">Please accept the Terms of Service</p> 
            <van-button 
                style="height:36px;padding-left:16px;padding-right:16px;min-width:100%;line-height:14px;font-size:16px"
                 type="primary" 
                 size="large" 
                 round
                 color="#00c25f"
                 to="/"
                 >GOT IT</van-button>
        </div>
    </div>
</template>
<style scoped>
.nextmain{
   display: flex;
   flex-direction: column;
}
h5{
    font-size: 1.5rem!important;
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: normal!important;
    font-family: Muli,Roboto,sans-serif!important;
}
.p2{
    color: #ff5252;
    font-size: 10px;
    text-align: center;
    line-height: 12px;
}
.Next{
    flex: 3 1 auto;
    height: auto;
    position: relative;
}
.Nextbottom{
    flex: 1 2 auto;
    height: auto;
    position: relative;
    margin-bottom: 10px;
}
h5{
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>