<template>
     <div>
         <film-swiper>
            <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
                <div :style="{backgroundImage:'url('+data+')'}" style="height:200px;background-size:cover;"></div>
            </div>

         </film-swiper>

         <film-header style="position: sticky;top:0;background-color: #fff;z-index:100;"></film-header>
         <router-view></router-view>
     </div>
</template>
<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {
  data () {
    return {
      imgList: [
        'https://static.maizuo.com/v5/upload/189bcf606b4bf49ad5de201a2ea5024d.jpg?x-oss-process=image/quality,Q_70',
        'https://pic.maizuo.com/usr/movie/4c4153c2a4c00a055f839adc9b85c551.jpg?x-oss-process=image/quality,Q_70',
        'https://pic.maizuo.com/usr/movie/5be64dca3fac27effc5a8bb663764f28.jpg?x-oss-process=image/quality,Q_70'
      ]
    }
  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>
<style scoped>
*{
    margin:0px;
    padding:0px;
}
ul{
    list-style: none;
}

</style>
