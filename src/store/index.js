import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Registerlist:[],
    RegisterName: '',
    RegisterEmail: '',
    RegisterPassword: '',
    islogin: 0,
    BillList:[
      {Name: 'Optus', BillNumber: '129312', Amount: '-45', ACC: 'Optus',DueDate: '04/05/2020', 
      Frequency: 'Monthly', PaymentMethod:'Direct Debit', Category: 'subcri', Penalty:'', Benefit: ''},
      {Name: 'Westpac', BillNumber: '129314', Amount: '-70', ACC: 'westpac',DueDate: '04/05/2020', 
      Frequency: 'Monthly', PaymentMethod:'Direct Debit', Category: 'subcri', Penalty:'', Benefit: ''},
      {Name: 'Telstra', BillNumber: '334466', Amount: '-100', ACC: 'westpac',DueDate: '13/05/2020', 
      Frequency: 'Monthly', PaymentMethod:'Direct Debit', Category: 'subcri', Penalty:'', Benefit: ''},    
    ],
    ListAfterSearch: []
  },
  mutations: {
    setName(state,name){
      state.RegisterName=name
    },
    setEmail(state,email){
      state.RegisterEmail=email
    },
    setPassword(state,password){
      state.RegisterPassword=password
    },
    addlist(state){
      state.Registerlist.push({name: state.RegisterName, email: 
                            state.RegisterEmail, password:state.RegisterPassword})
    },
    changelogin(state, data){
      state.islogin=data
    },
    searchbill(state, date){
      var search = []
      for(let i = 0; i < state.BillList.length; i++){
        let changeday = state.BillList[i].DueDate.replace(/\//g, '').replace(/^(\d{2})(\d{2})(\d{4})$/,"$3-$2-$1")
        var start = new Date(date)
        var end = new Date(changeday)
        var dateSpan = end - start
        dateSpan = Math.abs(dateSpan)
        var iDays = Math.floor(dateSpan / (24 * 3600 * 1000))
        if(iDays <= 7){
          search.push(state.BillList[i])
        }
      }
      state.ListAfterSearch = search
    },
    changebillname(state, value, number){
      for(let i; i < state.BillList.length; i++){
        if(state.BillList[i].BillNumber == number){
          state.BillList[i].Name = value
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
