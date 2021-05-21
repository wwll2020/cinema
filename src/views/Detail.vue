<template>
  <v-touch v-on:swiperight="onSwipeRight">
    <div v-if="filminfo">

      <detail-header v-top :title="filminfo.name"></detail-header>
      <div :style="{backgroundImage:'url('+filminfo.poster+')'}"
      style="background-size: cover;background-position: center;height:200px;"></div>
     <p style="font-size: 18px;"> {{filminfo.name}} <button>{{filminfo.filmType.name}}</button></p>
      <div>{{filminfo.category}}</div>
      <div>{{filminfo.premiereAt | dateFilter}}上映</div>
      <div>{{filminfo.nation}}|{{filminfo.runtime}}分钟</div>
      <div :class="isShow?'':'synopsis'">{{filminfo.synopsis}}</div>
      <div style="text-align: center;"><i class="iconfont hidden" :class="isShow?'icon-less':'icon-moreunfold'" @click="isShow=!isShow"></i></div>
      <p style="font-size: 18px;">演职人员：
        <detail-swiper :perslide='4' swiperclass="swiper-actors">
          <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
           <img :src="data.avatarAddress">
           <div style="font-size:10px;text-align: center; white-space:nowrap;">{{data.name}}</div>
           <div style="font-size:10px;text-align: center;height:16px;overflow: hidden;">{{data.role}}</div>
          </div>
        </detail-swiper>
      </p>
      <p style="font-size: 18px;">剧照：
        <detail-swiper :perslide='2'  swiperclass="swiper-photos">
          <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
            <div :style="{backgroundImage:'url('+data+')'}" style="height:100px;background-size:cover;background-position:center" @click="handlePreview(index)"></div>
          </div>
        </detail-swiper>
      </p>
    </div>
  </v-touch>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper'
import detailHeader from './detail/DetailHeader'
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })

Vue.filter('dateFilter', (date) => {
// moment 日期处理函数
  return moment(date * 1000).format('YYYY-MM-DD')
})
// 定义指令
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})

export default {
  data () {
    return {

      filminfo: null,
      isShow: false
    }
  },
  components: {
    detailSwiper,
    detailHeader
  },
  methods: {
    ...mapMutations('TabbarModule', ['show', 'hide']),
    handlePreview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        loop: true,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    },
    onSwipeRight () {
      // console.log('right');
      this.$router.back()
    }
  },
  mounted () {
    this.hide()
    // this.$store.commit('hide');
    // this.$route 当前匹配的路由对象信息
    // console.log(this.$route.params.myid);

    // query 方式
    // console.log(this.$route.query.id)
    http({
      url: `/gateway?filmId=${this.$route.query.id}&k=1539081`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // this.$store.commit('show')
    this.show()
  }
}
</script>
<style lang="scss" scoped>
  .synopsis{
    height:38px;
    overflow: hidden;
  }
    .swiper-wrapper{
        img{
            width:100%;
        }
    }

</style>
