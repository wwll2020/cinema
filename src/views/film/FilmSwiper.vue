<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
           <slot></slot>

        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{
        img{
            width:100%;

        }
    }
</style>
