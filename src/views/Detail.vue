<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
  mounted () {
    // this.$route 当前匹配的路由对象信息
    // console.log(this.$route.params.myid);

    // query 方式
    console.log(this.$route.query.id)
  }
}
</script>
