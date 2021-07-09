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
    adjust_query:{}, //调课查询空教室的参数
    adjust_record:{
      cno:'1',
      cname:'1',
      classno:'1',
      pname:'1',
      roomno:'1',
      tno:'1',
      weekno:'1',
      weekday:'1',
      sectionno:'1',
      newweekno:'1',
      newweekday:'1',
      newsectionno:'1',
      newroomno:'1'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
