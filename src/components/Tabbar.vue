<template>
    <nav>
        <ul>
            <router-link to="/film" tag="li" active-class="hlactive">
                <i class="iconfont icon-training"></i>
                <span>电影</span>
            </router-link>
            <router-link to="/cinema" tag="li" active-class="hlactive">
                <i class="iconfont icon-all"></i>
                <span>影院</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="hlactive">
                <i class="iconfont icon-account"></i>
                <span>我的</span>
            </router-link>
        </ul>
    </nav>
</template>
<style scoped lang="scss">
nav{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    line-height: 20px;
    text-align: center;
    background: #fff;
    z-index: 99;
    ul{
        padding-inline-start:0;
        list-style: none;
        display: flex;
        margin-top:10px;
        .hlactive{
                 color:red;
            }
        li{
            flex:1;
            display:flex;
            flex-direction:column;

            i{
                font-size: 18px;
            }
            span{
                font-size: 12px;
            }
        }
    }
}

</style>
