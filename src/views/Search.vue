<template>
    <div>
        <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="handleCancel()"
      />
      <van-list>
        <van-cell v-for="data in computedCinemaList" :key="data.cinemaId">
          <div>{{data.name}}</div>
          <div class="address">{{data.address}}</div>
        </van-cell>
     </van-list>
    </div>
</template>
<script>
import Vue from 'vue'
import { Search, List, Cell } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'

Vue.use(Search).use(List).use(Cell)
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState('CinemaModule', ['cinemaList']),
    ...mapState('CityModule', ['cityId']),
    computedCinemaList () {
      if (this.value === '') return []
      return this.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  methods: {
    ...mapActions('CinemaModule', ['getCinemaList']),
    ...mapMutations('TabbarModule', ['show', 'hide']),
    handleCancel () {
      this.$router.replace('/cinema')
    }
  },
  mounted () {
    // this.$store.commit('hide');
    this.hide()
    // console.log(this.$store.state.cinemaList);
    if (this.cinemaList.length === 0) {
      // vuex 异步流程
      // this.$store.dispatch('getCinemaList', this.$store.state.cityId)
      this.getCinemaList(this.cityId)
    } else {
      // console.log('缓存');
    }
  },
  beforeDestroy () {
    // this.$store.commit('show')
    this.show()
  }
}
</script>
<style scoped lang="scss">
     .address{
            font-size: 12px;
            color:gray;
         }
</style>
