import { createStore } from 'vuex'

export default createStore({
  state: {
    empty_query:{},  //空教室查询的参数
    person_info:{    //身份信息
      identity:'',  //身份
      id:'',      //证件号
      name:'',    //姓名
      dept:'',     //单位
      tel:''        //电话
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
