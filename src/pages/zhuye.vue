<template>
  <div>
    <Douban></Douban>
    <div class="bianju">
      <Header></Header>
      <Zhongjian :zhong="shouyedata"></Zhongjian>
    </div>


  </div>
</template>
<script>
  import Douban from '@/components/Douban.vue'
  import Header from '../components/zhuye/header.vue'
  import Zhongjian from '../components/zhuye/zhongjian.vue'
  export default {
    name: "",
    data:function(){
      return{
        shouyedata:[]
      }
    },
    components: {
      Douban,
      Header,
      Zhongjian,
    },
    beforeCreate() {
      this.axios.get('/api/someApi').then((val)=>{
          this.shouyedata=val.data.shouye;
      })
    }
  }
</script>

<style scoped>
.bianju{
  margin-top: 100px;
}

</style>
