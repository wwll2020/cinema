<template>
     <div>
         <div style="height:300px;background:yellow">轮播</div>

         <film-header></film-header>
         <router-view></router-view>
     </div>
</template>
<script>
import filmHeader from './film/FilmHeader'
export default {
  components: {
    filmHeader
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
