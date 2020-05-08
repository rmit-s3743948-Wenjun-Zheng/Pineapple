<template>
    <div class="loginmain">
        <div class="login">
            <div>
                <h5 style="margin-bottom: 32px!important;">Please enter your details</h5>
                <input ref="content" type="text" v-model="accountemail" placeholder="Your Account Email" :class="{Isinput:isinput1, Noinput:noinput1, initial:orinign1}" 
                @blur="nofocus1" @focus="isfocus1" @keyup="isfocus1">
                <p :style="{visibility: noinput1 ? 'visible' : 'hidden'}" class="p1">Please enter your email address</p> 
                <input type="text" v-model="password" placeholder="Your Password" :class="{ Isinput:isinput2, Noinput:noinput2, initial:orinign2}" 
                @blur="nofocus2" @focus="isfocus2" @keyup="isfocus2">
                <p :style="{visibility: noinput2 ? 'visible' : 'hidden'}" class="p1">Please enter a password</p> 
            </div>
        </div>
        <div class="loginbottom">
            <div style="text-align:center;  visibility: hidden;" >
                <div class="pretty p-icon p-smooth p-svg">
                    <input type="checkbox"  v-model="checked"/>
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
                 class="next"
                 :color="buttoncolor"
                 :disabled="disbutton"
                 to="/admin"
                 @click="login"
                 >LOGIN</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            accountemail:'',
            password:'',
            isinput1: false,
            noinput1: false,
            orinign1: true,
            isinput2: false,
            noinput2: false,
            orinign2: true,
            checked: false,
            disbutton: true,
            buttoncolor: 'lightgrey',
            nodisplay: true,
        }
    },
    methods:{
        login(){
            var result = this.$store.state.Registerlist.filter(item => item.email==this.accountemail&&item.password==this.password)

            if(result.length==1){
                this.$store.commit('changelogin','1')   
            }
            else{
                this.accountemail=''
                this.password=''
                this.$refs.content.focus()
                alert('Wrong account or password, please input again')
            }
        },
        nofocus1(){
            this.isinput1=false
            this.noinput1=false
            this.orinign1=true
        },
        isfocus1(){
            if(this.accountemail==''){
                this.isinput1=false
                this.noinput1=true
                this.orinign1=false
            }
            else{
                this.isinput1=true
                this.noinput1=false
                this.orinign1=false
            }
        },
        nofocus2(){
            this.isinput2=false
            this.noinput2=false
            this.orinign2=true
        },
        isfocus2(){
            if(this.password==''){
                this.isinput2=false
                this.noinput2=true
                this.orinign2=false
            }
            else{
                this.isinput2=true
                this.noinput2=false
                this.orinign2=false
            }
        }
    },
    watch: {
        account(val){
            if(val!='' &&this.password!=''){
                this.disbutton=false
                this.buttoncolor="#00c25f"
            }
            else{
                this.disbutton=true
                this.buttoncolor="lightgrey"
            }
        },
        password(val){
            if(val!=''&&this.accountemail!=''){
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
.loginmain{
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
.next{
    min-width: 100%;
    border-color: #00c25f;
    border-radius: 15px; 
    line-height:30px;
    font-size: 15px;
}
.login{
    flex: 2.5 1 auto;
    height: auto;
    position: relative;
}
.loginbottom{
    flex: 1 2 auto;
    height: auto;
    position: relative;
    margin-bottom: 10px;
}
</style>