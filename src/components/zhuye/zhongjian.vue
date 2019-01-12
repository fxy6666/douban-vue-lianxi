<template>
  <div class="foat">
    <div class="title"  v-for="val in zhong" >
      <h4>{{val.title}}</h4>
      <p class="overflow" v-html="val.content" ></p>
      <p class="zuozhe">{{val.owner.name}}</p>
    </div>
    <!--<div class="foat-zi"><img :src="val" alt=""></div>-->
  </div>
</template>

<script>
  export default {
    props: ["zhong","zuozhe"]
  }
</script>

<style scoped>
  .foat {
    position: relative;
    margin-top: 20px;
    margin-top: 20px;

  }

  .title {
    margin-left: 6%;
    margin-top:30px;
    border-bottom: 1px solid #CCCCCC;
    padding-bottom: 15px;
  }

    h4{
      display: inline-block;
      font-weight: 400;
      width: 339px;
      overflow: hidden;
      /*white-space: nowrap;*/
      text-overflow: ellipsis;
      margin-bottom: 5px;
    }
  .overflow {
    width: 227px;
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
    font-size: 10px;
    height: 50px;
    color: #CCCCCC;

  }
  .zuozhe{
    font-size: 1px;
    color: #CCCCCC;
  }
</style>
