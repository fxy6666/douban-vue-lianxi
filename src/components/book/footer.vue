<template>
  <div class="tou">
    <p>{{text}}</p>
    <div class="pi">
      <p v-for="val in arr"><a href="">{{val.title}}</a><i class="el-icon-arrow-right"></i></p>
    </div>
    <div class="jiewei">
      <div class="jiezi">
      <img src="../../assets/img/ic_douban_pay.png" width="48" height="48" alt=""><p>豆瓣</p>
      </div>
      <p>免费下载Android客户端</p></div>
  </div>

</template>
<script>
  export default {
    name: "",
    props: ["text"],
    computed:{
      conp(){

      }
    },
    data: function () {
      return {
        arr: [
          {title: "小说"},
          {title: "爱情"},
          {title: "历史"},
          {title: "外国文学"},
          {title: "青春"},
          {title: "励志"},
          {title: "随笔"},
          {title: "传记"},
          {title: "推理"},
          {title: "旅行"},
          {title: "奇幻"},
          {title: "经营"},
        ]
      }
    }
  }
</script>

<style scoped>
  .tou > p {
    margin-left: 5%;
    margin-top: 45px
  }
  .aa{
    text-align: center;
  }
  .pi {
    margin-top: 15px;
    margin-left: 5%;
  }

  .pi p {
    display: inline-block;
    width: 45.5%;
    border-bottom: 1px solid #CCCCCC;
    height: 42px;
    line-height: 42px;
    position: relative;
  }

  .pi p:nth-of-type(1) {
    border-top: 1px solid #CCCCCC;
  }

  .pi p:nth-of-type(1), .pi p:nth-of-type(3), .pi p:nth-of-type(5),
  .pi p:nth-of-type(7), .pi p:nth-of-type(9), .pi p:nth-of-type(11),
  .pi p:nth-of-type(13), .pi p:nth-of-type(15), .pi p:nth-of-type(17) {
    border-right: 1px solid #CCCCCC;
  }

  .pi p:nth-of-type(4), .pi p:nth-of-type(6),
  .pi p:nth-of-type(8), .pi p:nth-of-type(10), .pi p:nth-of-type(12),
  .pi p:nth-of-type(14), .pi p:nth-of-type(16), .pi p:nth-of-type(18) {
    padding-left: 3%;
  }

  .pi p:nth-of-type(2) {
    border-top: 1px solid #CCCCCC;
    padding-left: 3%;
  }

  .pi p > i {
    position: absolute;
    top: 34%;
    left: 85%;
  }

  .pi p > a {
    text-decoration: none;
    color: #5FB96E
  }
  .jiewei{
    text-align: center;
    margin-top: 80px;
    margin-bottom: 50px;
  }
  .jiewei>p{
    color: #05B512;
    margin-top: 30px;
  }
  .jiezi{
    position: relative;
  }
  .jiezi>img{
    margin-right: 12px;
  }
  .jiezi p{
    display:inline-block;
    font-size: 24px;
    position: absolute;
    top:17%;
    font-weight: bolder;
  }
</style>
