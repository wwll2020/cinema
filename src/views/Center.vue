 <template>
     <div>center</div>
 </template>
<script>
export default {
  // 局部路由守卫
//     beforRouterEnter(){
//        if(!localStorage.getItem('token')){
//         next('/login')
//      }else{
//        next()
//      }
//    },
  mounted () {
    // 检查是否有 token,如果没有，重定向到 login
    //  if(!localStorage.getItem('token')){
    //    this.$router.push('/login')
    // }
  }
}
</script>
