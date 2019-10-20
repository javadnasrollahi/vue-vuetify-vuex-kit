import Vue from 'vue'

export default  {
  
  setTitle(state,data){
    Vue.set(state,"siteTitle",data)
  },
  
  setUserData(state,data){
    Vue.set(state,"user",data)
  },

  options(state,data){
    Vue.set(state,"options",data)
  },
  
}
