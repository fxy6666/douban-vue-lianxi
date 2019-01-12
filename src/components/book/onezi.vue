<template>
  <div class="con" >
    <div class="item" v-for="val in onezidata">
      <img :src="val" width="100" height="142">
      <p class="overflow">{{val.title}}</p>
      <div v-if="val.rating.average!=0">
        <el-rate
          v-model="val.rating.average"
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
      <div v-else>
        <p class="ping">暂无评分</p>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    name: "",
    props: ["onezidata", "bool"],
  }
</script>

<style scoped>
  .con {
    margin-left: 5%;
    width: 890px;
  }

  .con > p a {
    float: right;
  }

  .item {
    float: left;
    text-align: center;
    margin-right: 10px;
    height: 200px;
  }

  .clear {
    clear: both;
  }

  .item i {
    font-size: 10px;
  }
  .he .com:nth-of-type(4) > .wit > .con {
    width: 1770px;
  }
  .overflow {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 10px;
  }
  .ping{
    font-size: 5px;
    color: #CCCCCC;
  }
</style>
