<template>
  <div class="con">
    <div class="item" v-for="val in onezidata">
      <img :src="val.images.large" width="100" height="142">
      <p style="font-size: 10px">{{val.title}}</p>
      <el-rate
        v-model="val.rating.average"
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    props: ["onezidata", "tiltezi"],
  }
</script>

<style scoped>
  .con {
    margin-left:5%;
    width: 890px;
  }
  .con > p a {
    float: right;
  }
  .item {
    float: left;
    text-align: center;
    margin-right: 10px;
  }
  .clear {
    clear: both;
  }
  .item i {
    font-size: 10px;
  }
</style>
