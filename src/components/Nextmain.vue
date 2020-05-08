<template>
    <div class="nextmain">
        <div class="Next">
            <h5 style="margin-bottom: 32px!important;">Thanks</h5>
            <p>Before we can help with your financial well being, we need to import and analyse your transactional data using Moneytree.</p>
            <p>Moneytree helps you to save, share and control all of your financial information from Australia’s top services.</p>
            <p>Your data is yours and Moneytree is commited to ensuiring you always have full control of it. Click here if you want to learn more.</p>
        </div>
        <div class="Nextbottom">
            <div style="text-align:center">
                <div class="pretty p-icon p-smooth p-svg">
                    <input type="checkbox"  v-model="checked"/>
                    <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                           <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>I consent to <router-link to="/">Data Sharing</router-link>
                        </label>
                    </div>
                </div>
            </div>
             <p :style="{visibility: !nodisplay ? 'visible' : 'hidden'}" class="p2">Please accept the data sharing agreement</p> 
            <van-button 
                 style="height:36px;padding-left:16px;padding-right:16px;min-width:100%;line-height:14px;font-size:16px"
                 type="primary" 
                 size="large" 
                 round
                 :color="buttoncolor"
                 :disabled="disbutton"
                 to="/complete"
                 >TAKE ME TO MONETREE</van-button>
        </div>
    </div>
</template>

<script scoped>
export default {
    data(){
        return{
            checked: false,
            buttoncolor: 'lightgrey',
            nodisplay: true,
            disbutton: true
        }
    },
    methods:{
    },
    watch:{
       checked(val){
           if(val==false){
                this.nodisplay=false
                this.disbutton=true
                this.buttoncolor="lightgrey"
            }
            else{
                this.nodisplay=true
                this.disbutton=false
                this.buttoncolor="#00c25f"
            }
       } 
    }
}
</script>

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
    flex: 2.5 1 auto;
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