<template>
    <div class="Registermain">
        <div class="Register">
            <div>
                <h5 style="margin-bottom: 32px!important;">What should we call you?</h5>
                <input type="text" v-model="username" placeholder="Your Name" :class="{ Isinput:isinput, Noinput:noinput, initial:orinign}" 
                @blur="nofocus" @focus="isfocus" @keyup="isfocus">
                <p :style="{visibility: noinput ? 'visible' : 'hidden'}" class="p1">Please enter your preferred name</p> 
            </div>
        </div>
        <div class="Registerbottom">
            <div style="text-align:center">
                <div class="pretty p-icon p-smooth p-svg">
                    <input type="checkbox"  v-model="checked"/>
                    <div class="state p-success">
                        <svg class="svg svg-icon" viewBox="0 0 20 20">
                           <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path>
                        </svg>
                        <label>I agree to the <router-link to="/">Privacy Policy</router-link>
                        </label>
                    </div>
                </div>
            </div>
             <p :style="{visibility: !nodisplay ? 'visible' : 'hidden'}" class="p2">Please enter your preferred name</p> 
            <van-button 
                 style="height:36px;padding-left:16px;padding-right:16px;min-width:100%;line-height:14px;font-size:16px"
                 round
                 type="primary" 
                 size="normal" 
                 :color="buttoncolor"
                 :disabled="disbutton"
                 to="/accountregister"
                 >Next</van-button>
        </div>
    </div>
</template>

<script scoped>
export default {
    data(){
        return{
            isinput: false,
            noinput: false,
            orinign: true,
            checked: false,
            disbutton: true,
            buttoncolor: 'lightgrey',
            nodisplay: true
        }
    },
    computed:{
        username:{
           get(){
              return this.$store.state.RegisterName
           },
           set (value) {
            this.$store.commit('setName', value)
           }
        }
    },
    methods:{
        nofocus(){
            this.isinput=false
            this.noinput=false
            this.orinign=true
        },
        isfocus(){
            if(this.$store.state.RegisterName==''){
                this.isinput=false
                this.noinput=true
                this.orinign=false
            }
            else{
                this.isinput=true
                this.noinput=false
                this.orinign=false
            }
        }
    },
    watch: {
        username(val){
            if(val!=''&&this.checked==true){
                this.disbutton=false
                this.buttoncolor="#00c25f"
            }
            else{
                this.disbutton=true
                this.buttoncolor="lightgrey"
            }
        },
        checked(val){
            if(val==false){
                this.nodisplay=false
            }
            else{
                this.nodisplay=true
            }

            if(val==true&&this.$store.state.RegisterName!=''){
                 this.disbutton=false
                 this.buttoncolor="#00c25f"
            }
            else{
                this.disbutton=true
                this.buttoncolor="lightgrey"
            }
        }
    },
}
</script>

<style scoped>
.Registermain{
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
.Isinput{
    border: 1.5px solid #00c25f; 
    font-family: Muli,Roboto,sans-serif!important;
    font-weight: 100;
    outline-style: none ;
    border-radius: 4px;
    padding: 14px 14px;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
    width:100%;
    font-size: 13px;
}
.Noinput{
    border: 1.5px solid #ff5252; 
    font-family: Muli,Roboto,sans-serif!important;
    font-weight: 100;
    outline-style: none ;
    border-radius: 4px;
    padding: 14px 14px;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
    width:100%;
    font-size: 13px;
}
.initial{
    border: 1px solid black; 
    font-family: Muli,Roboto,sans-serif!important;
    font-weight: 100;
    outline-style: none ;
    border-radius: 4px;
    padding: 14px 14px;
    box-sizing: border-box;
    -webkit-box-sizing:border-box;
    -moz-box-sizing: border-box;
    width:100%;
    font-size: 13px;
}
.p1{
    color: #ff5252;
    font-size: 13px;
    padding-left: 14px;
}
.p2{
    color: #ff5252;
    font-size: 10px;
    text-align: center;
    line-height: 12px;
}
.Register{
    flex: 3.4 1 auto;
    height: auto;
    position: relative;
}
.Registerbottom{
    flex: 1 2 auto;
    height: auto;
    position: relative;
    margin-bottom: 10px;
}
</style>