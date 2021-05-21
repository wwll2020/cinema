import http from '@/util/http'
const module = {
  namespaced: true, // 命名空间
  state: {
    cinemaList: []
  },
  mutations: {
    setCiemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCiemaList (state) {
      state.cinemaList = []
    }
  },
  actions: {
    getCinemaList (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=1169078`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res);
        //   this.cinemaList = res.data.data.cinemas;
        //   // 状态立即更改，但是dom异步渲染
        //  this.$nextTick(()=>{
        //   new BetterScroll('.cinema',{
        //      scrollbar:{
        //         fade:true,

        //      }
        //   })
        //  });
        store.commit('setCiemaList', res.data.data.cinemas)
      })
    }
  }
}
export default module
