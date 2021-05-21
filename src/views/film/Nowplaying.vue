<template>
    <div>
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check ="false"
    >
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
              <img :src="data.poster">
                <h3>{{data.name}}</h3>
                <p>主演：{{data.actors | actorFilter}}</p>
                <p>{{data.nation}} | {{data.runtime}}分钟</p>
                <button style="float:right;color:rgb(255, 135, 80);">购票</button>
               </van-cell>
              </van-list>
    </div>

</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import { List, Cell } from 'vant'
import { mapState } from 'vuex'

Vue.use(List).use(Cell)
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
export default ({
  data () {
    return {
      datalist: [],
      loading: false, // 是否正在加载，防止多次触发
      finished: false,
      current: 1, // 第几页数据
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=3131632`,
      headers: {

        'X-Host': 'mall.film-ticket.film.list'
      }
      // method:'get'
    }).then(res => {
      // console.log(res.data.data.films);
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  computed: {
    ...mapState('CityModule', ['cityId'])
  },
  methods: {
    onLoad () {
      // 1.ajax请求新页面的数据
      // 2.合并新数据到老数据
      // 3.this.loading = false

      this.current++
      http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3131632`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      // method:'get'
      }).then(res => {
      // console.log(res.data.data.films);
        this.datalist = [...this.datalist, ...res.data.data.films]
        // this.total = res.data.data.total
        this.loading = false
      })
      if (this.datalist.length === this.total && this.datalist.length !== 0) {
        this.finished = true
      }
    },
    handleClick (id) {
      // console.log(id);
      // 1-路径
      // this.$router.push(`/detail/${id}`)// 编程式导航

      // 2-路由名字
      // this.$router.push({
      //     name:'detailName',
      //     params:{
      //         myid:id
      //     }
      // })

      // 3-query方式
      this.$router.push(`/detail?id=${id}`)
    }
  }

})
</script>
<style lang="scss" scoped>
    .van-cell{
      white-space: nowrap;
      overflow:hidden;
      padding:10px;
      img{
        float: left;
      width:100px;
      }
    }

</style>
