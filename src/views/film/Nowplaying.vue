<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
              <img :src="data.poster">
                <h3>{{data.name}}</h3>
                <button style="float:right;color:rgb(255, 135, 80);">购票</button>
               </li>
        </ul>
    </div>

</template>
<script>
import axios from 'axios'
export default ({
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3131632',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621245359558122410180609","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
      // method:'get'
    }).then(res => {
      // console.log(res.data.data.films);
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleClick (id) {
      // console.log(id);
      // 1-路径
      this.$router.push(`/detail/${id}`)// 编程式导航

      // 2-路由名字
      // this.$router.push({
      //     name:'detailName',
      //     params:{
      //         myid:id
      //     }
      // })

      // 3-query方式
      // this.$router.push(`/detail?id=${id}`)
    }
  }

})
</script>
<style lang="scss" scoped>
  ul{
    padding-inline-start:0px;
    list-style: none;
    li{
      overflow:hidden;
      img{
        float: left;
      width:100px;
      }
    }
  }

</style>
