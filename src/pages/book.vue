<template>
  <div>
    <Douban></Douban>
    <div class="he">
    <One :arry="onedata" tilte="最受关注图书 | 虚构类" titlea="更多"></One>
    <One :arry="twodata" tilte="最受关注图书 | 非虚构类" titlea="更多"></One>
    <Trhey :arry="booksdata" tilte="豆瓣书店" titlea="更多"></Trhey>
      <One :arry="Trheydata"></One>
    </div>
    <Trhey :titl="goodbookdata" tilte="发现好图书"></Trhey>
    <Footer></Footer>
  </div>
</template>

<script>
  import Douban from '@/components/Douban.vue'
  import One from '../components/book/one.vue'
  import Trhey from '../components/book/trhey.vue'
  import Footer from '../components/book/footer.vue'
  export default {
        name: "",
    data:function(){
      return{
        booksdata:[],
        goodbookdata:[]
      }
    },
    computed:{
      onedata() {
        return this.booksdata.slice(0, 8);
      },
      twodata(){
        return this.booksdata.slice(16, 24);
      },
      Trheydata(){
        return this.booksdata.slice(24,40);
      }
    },
      components:{
        Douban,
        One,
        Trhey,
        Footer
      },
      beforeCreate(){
        this.axios.get('/api/someApi').then((val)=> {
          this.booksdata= val.data.books
          this.goodbookdata=val.data.goodBook
          console.log(this.booksdata.books.faxianhaodianying)
        })
        }
    }
</script>

<style scoped>
  .he {
    margin-top: 100px;
  }
</style>
