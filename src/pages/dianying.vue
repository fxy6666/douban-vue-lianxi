<template>
  <div>
    <Douban></Douban>
    <div class="he">
      <One :onedata="onedata" tilte="影院热映" titlea="更多"></One>
      <One :onedata="twodata" tilte="免费在线观看" titlea="更多"></One>
      <One :onedata="Thirddata" tilte="新片速递" titlea="更多"></One>
    </div>
    <Two text="发现好电影" :titl="faxianhaodianying"></Two>
    <!--<Two ></Two>-->
    <Footer text="分类浏览"></Footer>
  </div>
</template>
<script>
  import Douban from '../components/Douban.vue'
  import One from '../components/dianying/one.vue'
  import Two from '../components/dianying/two.vue'
  import Footer from '../components/dianying/footer.vue'

  export default {
    name: "",
    data: function () {
      return {
        dianyingdata: [],
        faxianhaodianying:[]
      }
    },
    computed: {
      onedata() {
        return this.dianyingdata.slice(0, 8);
      },

      twodata() {
        return this.dianyingdata.slice(8, 16);
      },

      Thirddata() {
        return this.dianyingdata.slice(16, 24);
      },

    },
    components: {
      Douban,
      One,
      Two,
      Footer
    },
    beforeCreate() {
      this.axios.get('/api/someApi').then((val) => {
        // console.log(val.data.movie)
        this.dianyingdata = val.data.movie;
        // console.log(val.data.faxianhaodianying)
        this.faxianhaodianying=val.data.faxianhaodianying
      })
    },

  }
</script>

<style scoped>
  p {
    margin-top: 50px;
  }

  .he {
    margin-top: 100px;
  }
</style>
