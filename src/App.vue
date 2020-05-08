<template>
  <div class="application_container application">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.application{
  font-family: Muli,Roboto,sans-serif;
  line-height: 1.5;
  background: #fff;
  color: rgba(0,0,0,.87);
}
.application_container{
  padding-bottom: 0!important;
  padding-top: 30px!important;
  padding-right: 10%!important;
  padding-left: 10%!important;
}
html,body{
  margin:0;
}
input.button{
  outline: none;
}
* {font-display: block;}
</style>
