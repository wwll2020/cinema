<template>
    <div>
        <van-index-bar :index-list="computedCityList" @select="handleSelect">
           <div v-for="data in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleChangePage(item.name,item.cityId)"/>
           </div>
          </van-index-bar>
    </div>
</template>
<script>
import Vue from 'vue'
import http from '@/util/http'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'
import { mapMutations } from 'vuex'

Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(Toast)

export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=440681',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      //   console.log(res.data.data.cities);
      this.cityList = this.handleCityDate(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule', ['changeCityName', 'changeCityId']),
    handleCityDate (cities) {
      // console.log(cities);
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        // console.log(String.fromCharCode(code));
        letterArr.push(String.fromCharCode(code))
      }
      // console.log(letterArr);
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        // console.log(list);
        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      //    console.log(newCities);
      return newCities
    },
    handleSelect (index) {
      // console.log(index);
      Toast(index)
    },
    handleChangePage (name, cityId) {
      // this.$store.state.cityName=name
      // this.$store.commit("changeCityName",name)
      // this.$store.commit("changeCityId",cityId)

      this.changeCityName(name)
      this.changeCityId(cityId)

      this.$router.back()
    }
  }
}
</script>
