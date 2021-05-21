import Vue from 'vue'
import Vuex from 'vuex'
// import http from '@/util/http'
import CityModule from './module/CityModule'
import CinemaModule from './module/CinemaModule'
import TabbarModule from './module/TabbarModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    // cityId:'310100',
    // cityName:'上海',
    // isTabbarShow:true,
    // cinemaList:[]
  },
  // 集中式修改状态

  mutations: {
    // changeCityName(state,name){
    //   // console.log(111);
    //     state.cityName = name
    // },
    // changeCityId(state,cityId){
    //     state.cityId = cityId
    // },
    // hide(state){
    //   state.isTabbarShow = false
    // },
    // show(state){
    //   state.isTabbarShow = true

    // },
    // setCiemaList(state,cinemaList){
    //   state.cinemaList = cinemaList
    // },
    // clearCiemaList(state){
    //   state.cinemaList=[]
    // }

  },
  // 异步
  actions: {
    // getCinemaList(store,cityId){
    //     return http({
    //         url:`/gateway?cityId=${cityId}&ticketFlag=1&k=1169078`,
    //         headers:{
    //            'X-Host': 'mall.film-ticket.cinema.list'
    //         }
    //      }).then(res=>{
    //         // console.log(res);
    //       //   this.cinemaList = res.data.data.cinemas;
    //       //   // 状态立即更改，但是dom异步渲染
    //       //  this.$nextTick(()=>{
    //       //   new BetterScroll('.cinema',{
    //       //      scrollbar:{
    //       //         fade:true,

    //       //      }
    //       //   })
    //       //  });
    //       store.commit('setCiemaList',res.data.data.cinemas)
    //      })
    // }
  },
  modules: {
    CityModule,
    CinemaModule,
    TabbarModule
  }
})
