<template>
  <div>
    <!-- 路由容器 -->
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from './components/Tabbar'
import axios from 'axios'

export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  },
  mounted () {
    // 1.魅力惠
    // axios.get('http://www.mei.com/appapi/silo/navigationAll/v3?timestamp=1621329534400&summary=9a7857bfe04a70c01f0fd08f9c778d5d')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    // 2.猫眼
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=F9AB2DC0B6F511EB8DD891D55CB9190739CEA00D483A41CA8048DEF2E0C68EF9&optimus_risk_level=71&optimus_code=10')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    // 3.卖座
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3131632',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621245359558122410180609","bc":"310100"}',
    //     'X-Host': ' mall.film-ticket.film.list'
    //   }
    //   // method:'get'
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
}

</script>

<style lang="scss" scoped>

</style>
