import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/pretty-checkbox/dist/pretty-checkbox.min.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import echarts from 'echarts'
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

Vue.prototype.$echarts = echarts
Vue.use(Vant);
Vue.config.productionTip = false


router.beforeEach((to,from,next) => { 
  if(to.matched.some( m => m.meta.auth)){
    if(store.state.islogin==1) {  
      next() 
    }
    else{ 
      next({path:'/login',query:{ Rurl: to.fullPath}})
    }
  }
  else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
