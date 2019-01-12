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
    data: function () {
      return {
        arr: [
          {title: "经典"},
          {title: "冷门佳片"},
          {title: "豆瓣高分"},
          {title: "动作"},
          {title: "喜剧"},
          {title: "爱情"},
          {title: "悬疑"},
          {title: "恐怖"},
          {title: "科幻"},
          {title: "治愈"},
          {title: "文艺"},
          {title: "成长"},
          {title: "动画"},
          {title: "华语"},
          {title: "欧美"},
          {title: "韩国"},
          {title: "日本"},
          {title: "......"},
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
