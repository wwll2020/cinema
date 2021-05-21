 <template>
    <div>
      <van-nav-bar
      title="影院"
      left-arrow
      @click-left="handleLeft()"
      @click-right="handleRight()"

    >
    <template #left>
      {{cityName}}<van-icon name="arrow-down" color="black"/>
    </template>
    <template #right>
      <van-icon name="search" size="22" color="black"/>
    </template>
   </van-nav-bar>
      <div class="cinema" :style="{height:height}">
         <van-list>
         <van-cell v-for="data in cinemaList" :key="data.cinemaId">
           <div>{{data.name}}</div>
           <div class="address">{{data.address}}</div>
         </van-cell>
      </van-list></div>
    </div>
 </template>
<script>
import Vue from 'vue'
// import http from '@/util/http'
import BetterScroll from 'better-scroll'
import { NavBar, Icon, List, Cell } from 'vant'
import { mapState, mapMutations, mapActions } from 'vuex'

Vue.use(NavBar).use(Icon).use(List).use(Cell)
export default {
  data () {
    return {
      // cinemaList:[],
      height: 0
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    ...mapMutations('CinemaModule', ['clearCiemaList']),
    handleLeft () {
      // 清空cinemalist
      // this.$store.commit('clearCiemaList')
      this.clearCiemaList()
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/cinema/search')
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId', 'cityName'])
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      // this.$store.dispatch('getCinemaList', this.cityId).then(res=>{
      this.getCinemaList(this.cityId).then(res => {
        this.$nextTick(() => {
          new BetterScroll('.cinema', {
            scrollbar: {
              fade: true

            }
          })
        })
      })
    } else {
      console.log('缓存')
    }
    // http({
    //    url:`/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=1169078`,
    //    headers:{
    //       'X-Host': 'mall.film-ticket.cinema.list'
    //    }
    // }).then(res=>{
    //    // console.log(res);
    //    this.cinemaList = res.data.data.cinemas;
    //    // 状态立即更改，但是dom异步渲染
    //   this.$nextTick(()=>{
    //    new BetterScroll('.cinema',{
    //       scrollbar:{
    //          fade:true,

    //       }
    //    })
    //   });
    // })
  }
}
</script>
<style lang="scss" scoped>
   .cinema{
      overflow: hidden;
      /* 修正滚动条位置 */
      position: relative;
   }
         .address{
            font-size: 12px;
            color:gray;
         }

</style>
